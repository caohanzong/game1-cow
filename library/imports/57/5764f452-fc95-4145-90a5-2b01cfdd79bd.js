"use strict";
cc._RF.push(module, '5764fRS/JVBRZClKwHP3Xm9', 'game');
// script/game.js

"use strict";

cc.Class({
  "extends": cc.Component,
  properties: {
    rope_node: {
      "default": null,
      type: cc.Node
    },
    cow_ins: {
      "default": null,
      type: cc.Node
    },
    rope_imgs: {
      "default": [],
      type: cc.SpriteFrame
    },
    //再绑定一个预制体
    cow_prefab: {
      "default": null,
      type: cc.Prefab
    }
  },
  // LIFE-CYCLE CALLBACKS:
  onLoad: function onLoad() {
    this.success = false; //初始化分数

    this.scoreNum = 0;
  },
  start: function start() {
    var countDownLabel = cc.find("Canvas/bg-Sprite/count_down").getComponent(cc.Label);
    var time = 30;
    this.schedule(function () {
      time--;
      countDownLabel.string = time + "s";

      if (time == 0) {
        cc.log("游戏结束！"); //获取弹窗节点

        var resultNode = cc.find("Canvas/result"); //获取title和content两个节点

        var titleNode = resultNode.getChildByName("title");
        var contentNode = resultNode.getChildByName("content"); //展示分数

        titleNode.getComponent(cc.Label).string = "最终得分：" + this.scoreNum; //获取组件

        var contentLabel = contentNode.getComponent(cc.Label);

        switch (true) {
          case this.scoreNum <= 3:
            contentLabel.string = "套牛青铜";
            break;

          case this.scoreNum <= 6:
            contentLabel.string = "套牛高手";
            break;

          case this.scoreNum > 6:
            contentLabel.string = "套牛王者";
            break;
        }

        resultNode.active = true;
        cc.director.pause();
      }
    }, 1); //创建一个用户授权按钮

    var sysInfo = wx.getSystemInfoSync(); //获取微信界面大小

    var screenWidth = sysInfo.screenWidth;
    var screenHeight = sysInfo.screenHeight; // 创建一个用户授权按钮

    var wxLoginBtn = wx.createUserInfoButton({
      type: "text",
      text: "",
      style: {
        left: 0,
        top: 0,
        width: screenWidth,
        height: screenHeight,
        lineHeight: 40,
        backgroundColor: '#00000000',
        color: '#ffffff'
        /*textAlign:'center',
        fontSize:16,
        borderRadius:4*/

      }
    });
    var self = this;
    wxLoginBtn.onTap(function (res) {
      console.log(res.userInfo); //拿到微信用户信息

      var userInfo = res.userInfo;
      self.wxLogin(userInfo);
      wxLoginBtn.destroy();
      /*
      let icon=cc.find("Canvas/bg-Sprite/icon").getComponent(cc.Sprite);
      //加载远程网络图片
      cc.loader.load({url:userInfo.axatarUrl,type:"png"},function (err,texture){
          icon.spriteFrame=new cc.SpriteFrame(texture);
      })*/
    });
    wx.getUserInfo({
      success: function success(res) {
        var userInfo = res.userInfo;
        self.wxLogin(userInfo);
      },
      fail: function fail() {
        console.log("获取失败");
      }
    });
  },
  wxLogin: function wxLogin(userInfo) {
    var icon = cc.find("Canvas/bg-Sprite/icon").getComponent(cc.Sprite); // 加载远程网络图片

    cc.loader.load({
      url: userInfo.avatarUrl,
      type: "png"
    }, function (err, texture) {
      icon.spriteFrame = new cc.SpriteFrame(texture);
    });
    wx.login({
      success: function success(res) {
        if (res.code) {
          // 发起网络请求给游戏后台
          httpUtils.request({
            url: "http://localhost:8080/login",
            method: "POST",
            data: {
              code: res.code,
              nickName: userInfo.nickName,
              avatarUrl: userInfo.avatarUrl
            },
            success: function success(msg) {
              console.log(msg);
            }
          });
          /*    wx.request({
                  url:"http://localhost:8080/login",
                  method: "POST",
                  header:{
                      'content-type':'application/x-www-form-urlencoded'
                  },
                  data:{
                      code:res.code,
                      nickName:userInfo.nickName,
                      avatarUrl:userInfo.avatarUrl
                  }
              })*/
        } else {
          console.log("登录失败" + res.errMsg);
        }
      }
    });
  },
  // update (dt) {},
  //点击事件捕捉函数
  clickCapture: function clickCapture(event, customEventDate) {
    this.rope_node.active = true; //设置绳子在当前父节点的顺序

    this.rope_node.setSiblingIndex(100); //设置绳子的起始位置

    this.rope_node.y = -500; //向上移动

    var up = cc.moveTo(0.4, this.rope_node.x, 0); //判定结果

    var result = cc.callFunc(function () {
      //获取当前牛儿的x点
      var currentX = this.cow_ins.x;

      if (currentX > -80 && currentX < 80) {
        cc.log("捕捉成功！"); //移除

        var bgNode = this.node.getChildByName("bg-Sprite");
        bgNode.removeChild(this.cow_ins); //更换绳子,获取牛儿的类型

        var ropeType = this.cow_ins.getComponent("cow").randomType + 1;
        this.rope_node.getComponent(cc.Sprite).spriteFrame = this.rope_imgs[ropeType]; //生成新的牛节点

        this.cow_ins = cc.instantiate(this.cow_prefab);
        this.cow_ins.y = 0;
        bgNode.addChild(this.cow_ins);
        this.success = true; //分数加一

        this.scoreNum++;
      } else {
        cc.log("捕捉失败！");
      }
    }, this); //往回拉

    var down = cc.moveTo(0.5, this.rope_node.x, -500);
    var finish = cc.callFunc(function () {
      this.rope_node.getComponent(cc.Sprite).spriteFrame = this.rope_imgs[0]; //判断是否捕捉成功

      if (this.success == true) {
        var scoreLabel = cc.find("Canvas/bg-Sprite/score").getComponent(cc.Label);
        scoreLabel.string = "Score:" + this.scoreNum;
        this.success = false;
      }
    }, this); //定义一个序列动画

    var sequence = cc.sequence(up, result, down, finish);
    this.rope_node.runAction(sequence);
  },
  //关闭按钮，继续游戏
  closeBtn: function closeBtn() {
    cc.log("继续游戏");
    cc.director.resume(); //删除逻辑

    cc.director.loadScene("game"); //重新加载
  },
  recomeBtn: function recomeBtn() {
    cc.log("继续游戏");
    cc.director.resume();
    cc.director.loadScene("game");
  },
  //微信分享
  shareBtn: function shareBtn() {
    wx.shareAppMessage({
      title: "大家都来玩套牛小游戏",
      imageUrl: "https://gimg2.baidu.com/image_search/src=http%3A%2F%2Fimg3.redocn.com%2F20091201%2F20091201_36a55ccc6625c6ee296buiktEBtACmVW.jpg&refer=http%3A%2F%2Fimg3.redocn.com&app=2002&size=f9999,10000&q=a80&n=0&g=0n&fmt=jpeg?sec=1625222968&t=b683e51e94e88873f13821202827ac80",
      success: function success(res) {
        console.log(res);
      },
      fail: function fail(res) {
        console.log(res);
      }
    });
  }
});

cc._RF.pop();