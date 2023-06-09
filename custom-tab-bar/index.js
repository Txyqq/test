// custom-tab-bar/index.js
Component({
  data: {
    curIndex: 0,
    color: "#777",
    selectedColor: "#000",
    backgroundColor: "#fff",
    borderStyle: "black",
    position: "bottom",
    list: [
      {
        pagePath: "/pages/index/index",
        text: "首页",
        iconPath: "/images/icon/index.png",
        selectedIconPath: "/images/icon/onindex.png"
      },
      {
        pagePath: "/pages/all-goods/index",
        iconPath: "/images/icon/class.png",
        selectedIconPath: "/images/icon/onclass.png",
        text: "分类"
      },
      {
        pagePath: "/pages/rank/rank",
        iconPath: "/images/icon/rank.png",
        selectedIconPath: "/images/icon/ranked.png",
        text: "排行榜"
      },
      {
        pagePath: "/pages/my/index",
        iconPath: "/images/icon/my.png",
        selectedIconPath: "/images/icon/onmy.png",
        text: "我的"
      }
    ]
  },
  methods: {
    switchTab(e) {
      // console.log(e)
      let url = e.currentTarget.dataset.url;
      let index = e.currentTarget.dataset.index;
      wx.switchTab({
        url:url
      })
      // this.setData({
      //   curIndex:index
      // })
      // wx.setStorageSync('curIndex', index)
      // console.log(index)
    },
  }

})
