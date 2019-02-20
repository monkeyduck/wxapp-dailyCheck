//group.js
//获取应用实例
const app = getApp()

Page({
  data: {
    userInfo: {},
    hasUserInfo: false,
    canIUse: wx.canIUse('button.open-type.getUserInfo'),
    groupName: "test#1",
    totalNumber: 10,
    leftNumber: 7,
    ranklist: [
      {name: "llc",
      insistDays: 5,
      profit: 50},
      {name: "cly",
      insistDays: 4,
      profit: 40}
    ]
  }
})