Page({
  data: {
    list: [
      {
        id: 'view',
        name: '视图容器',
        open: false,
        pages: ['view', 'scroll-view', 'swiper']
      }
    ],
  },
  kindToggle: function (e) {
    var id = e.currentTarget.id, list = this.data.list;
    for (var i = 0, len = list.length; i < len; ++i) {
      if (list[i].id == id) {
        list[i].open = !list[i].open
      } else {
        list[i].open = false
      }
    }
    this.setData({
      list: list
    });
  }
}),
//播放背景音乐
  wx.playBackgroundAudio({
    dataUrl: 'http://dl.stream.qqmusic.qq.com/C400000pDHmH1GLRac.m4a?vkey=08600992D106408BFB87ECD3A1FB9D806FFFA0F4A58568138EC77A28C04ADA52CB3B85943532CD2E491C4A92E40096BB9F8BAB6820D4FDC2&guid=6978240874&uin=0&fromtag=66',
    title: '梦中的婚礼',
    coverImgUrl: 'https://y.gtimg.cn/music/photo_new/T002R300x300M000001k4Q4m2RYxCy.jpg?max_age=2592000',
    
  }),
  //wx.getBackgroundAudioManager().play()
  wx.onBackgroundAudioStop(
  callback, replay()
  )
  function replay(){
    wx.getBackgroundAudioManager().play();
  }

