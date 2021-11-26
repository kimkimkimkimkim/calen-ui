import React, { Component } from "react";
import { connect } from "react-redux";
import { Text, TouchableOpacity, View, ScrollView } from "react-native";
import { Props, State } from "../Interface/TimelineCommentDetailScreenInterface";
import { mapDispatchToProps, mapStateToProps } from "../../../redux/interface";
import ScreenUtil, { RerenderArgument } from "../../util/ScreenUtil";
import { RerenderKeyType } from "../../union";
import AvatarIconComponent from "../../components/component/AvatarIconComponent";
import IconComponent from "../../components/component/IconComponent";
import { Divider } from "react-native-elements";
import TextUtil from "../../util/TextUtil";
import ApiConnectionRequest from "../../api/base/ApiConnectionRequest";
import TimelineComponent from "../../components/component/TimelineComponent";
import NavigationManager from "../../navigation/NavigationManager";
import { IconType } from "../../union";
import Config from "../../config/Config";
import LikeManager from "../../manager/LikeManager";

class TimelineCommentDetailScreen extends Component<Props, State>{
  constructor(props: Props){
    super(props)
    this.state = {
      parentTimelineDataList: props.navigation.state.params.parentTimelineDataList,
      timelineData: props.navigation.state.params.timelineData,
      commentData: props.navigation.state.params.commentData,
      creatorUserData: props.navigation.state.params.creatorUserData,
      replyList: [],
    }
  }

  async componentDidMount(){
    this.props.navigation.setParams({rerender:(key,arg) => this.Rerender(key, arg)})

    let res = await ApiConnectionRequest.GetReplyListWithPost("Comment",this.state.commentData.id);
    this.setState({replyList: res.timelineList})
  }

  render(){
    var isLike = this.state.timelineData.likeUserIdArray.includes(this.props.currentUserData.id);
    var likeIconType : IconType = isLike ? "like_on" : "like";
    var likeTextColor : string = isLike ? Config.color.orange : "black";

    return(
      <ScrollView style={{flex:1,backgroundColor:"#EEEEF0"}}>
        {/* 親タイムライン */}
        {this.state.parentTimelineDataList.map((timeline,index) => {
          return (
            <TimelineComponent
              key = {index}
              timeline = {timeline}
              parentTimelineList = {this.state.parentTimelineDataList.slice(0,index)}
              currentUserId = {this.props.currentUserData.id}
              navigation = {this.props.navigation}
              stackOnMainTabNavigation = {this.props.navigation.state.params.stackOnMainTabNavigation}
            />
          )
        })}
        <View style={{backgroundColor:"white",padding:12}}>
          <View style={{flexDirection:"row",alignItems:"center"}}>
            {/* アバターアイコン */}
            <AvatarIconComponent
              source = {{uri: this.state.creatorUserData.iconUrl}}
            />
            {/* ユーザー名 */}
            <Text>{this.state.creatorUserData.name}</Text>
            <View style={{flex:1}}/>
            <View style={{alignItems:"flex-end"}}>
              {/* メニューアイコン */}
              <IconComponent iconType="triangle_arrow_down"/>
              {/* 何分前かなどのテキスト */}
              <Text>{TextUtil.GetTimelineAgoText(this.state.commentData.createdAt)}</Text>
            </View>
          </View>
          <View style={{height:4}}/>
          <Divider />
          <View style={{height:4}}/>
          {/* コメント */}
          <Text>{this.state.commentData.text}</Text>
        </View>
        <View style={{height:4}}/>
        <View style={{flexDirection:"row",backgroundColor:"white",height:40,alignItems:"center"}}>
          {/* いいね */}
          <TouchableOpacity
            style={{flexDirection:"row"}}
            onPress={() => this.onLikeButtonPress()}
          >
            <IconComponent iconType={likeIconType}/>
            <Text style={{color: likeTextColor}}>{this.state.timelineData.likeUserIdArray.length}</Text>
          </TouchableOpacity>
          <View style={{width:50}}/>
          {/* コメント */}
          <TouchableOpacity
            style={{flexDirection:"row"}}
            onPress={() => NavigationManager.NavigatePostCommentScreen(this.props.navigation.state.params.stackOnMainTabNavigation, {
              parentTimeline: this.props.navigation.state.params.timelineData
            })}
          >
            <IconComponent iconType="comment"/>
            <Text>{this.state.timelineData.commentUserIdArray.length}</Text>
          </TouchableOpacity>
        </View>
        <View style={{height:4}}/>
        {/* コメントコンポーネント */}
        {this.state.replyList.map((timeline,index) => {
          let parentTimelineList = this.state.parentTimelineDataList.slice()
          parentTimelineList.push(this.state.timelineData)
          return (
            <TimelineComponent
              key = {index}
              timeline = {timeline}
              parentTimelineList = {parentTimelineList}
              currentUserId = {this.props.currentUserData.id}
              navigation = {this.props.navigation}
              stackOnMainTabNavigation = {this.props.navigation.state.params.stackOnMainTabNavigation}
            />
          )
        })}
      </ScrollView>
    )
  }

  onLikeButtonPress(){
    let timeline = this.state.timelineData
    let comment = this.state.commentData
    let likeUserIdList = this.state.timelineData.likeUserIdArray;
    let index = likeUserIdList.findIndex(userId => userId == this.props.currentUserData.id)
    if(index < 0){
      // いいねしていなかったのでいいねする
      likeUserIdList.push(this.props.currentUserData.id)
      LikeManager.OnPressLikeButtonAsync(timeline.type, comment.id, this.props.currentUserData.id, true)
    }else{
      // すでにいいねしていたのでいいねを解除
      likeUserIdList.splice(index,1);
      LikeManager.OnPressLikeButtonAsync(timeline.type, comment.id, this.props.currentUserData.id, false)
    }

    let timelineData = this.state.timelineData
    timelineData.likeUserIdArray = likeUserIdList
    this.setState({timelineData})
    
    // 現在積まれている画面に対して画面更新処理を実行
    ScreenUtil.allScreenRerender(this.props.navigation, "LikeEvent",{id: this.state.commentData.id,likeUserIdList: likeUserIdList});
  }

  Rerender(key: RerenderKeyType, arg: RerenderArgument){
    switch(key){
      case "LikeEvent":
        if(this.state.commentData.id == arg.id && arg.likeUserIdList != null){
          let timeline = this.state.timelineData
          timeline.likeUserIdArray = arg.likeUserIdList;
          this.setState({timelineData: timeline});
        }
        break;
      default:
        break;
    }
  }
}

export default connect(
  mapStateToProps,
  mapDispatchToProps
)(TimelineCommentDetailScreen);
