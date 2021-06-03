
                (function() {
                    var nodeEnv = typeof require !== 'undefined' && typeof process !== 'undefined';
                    var __module = nodeEnv ? module : {exports:{}};
                    var __filename = 'preview-scripts/__qc_index__.js';
                    var __require = nodeEnv ? function (request) {
                        return cc.require(request);
                    } : function (request) {
                        return __quick_compile_project__.require(request, __filename);
                    };
                    function __define (exports, require, module) {
                        if (!nodeEnv) {__quick_compile_project__.registerModule(__filename, module);}
require('./assets/script/cow');
require('./assets/script/game');

                    }
                    if (nodeEnv) {
                        __define(__module.exports, __require, __module);
                    }
                    else {
                        __quick_compile_project__.registerModuleFunc(__filename, function () {
                            __define(__module.exports, __require, __module);
                        });
                    }
                })();
//------QC-SOURCE-SPLIT------

                (function() {
                    var nodeEnv = typeof require !== 'undefined' && typeof process !== 'undefined';
                    var __module = nodeEnv ? module : {exports:{}};
                    var __filename = 'preview-scripts/assets/script/cow.js';
                    var __require = nodeEnv ? function (request) {
                        return cc.require(request);
                    } : function (request) {
                        return __quick_compile_project__.require(request, __filename);
                    };
                    function __define (exports, require, module) {
                        if (!nodeEnv) {__quick_compile_project__.registerModule(__filename, module);}"use strict";
cc._RF.push(module, '074cch25KJFCYh33L5vcy9C', 'cow');
// script/cow.js

"use strict";

var cow_skin = cc.Class({
  name: "cow_skin",
  properties: {
    cows: {
      "default": [],
      type: [cc.SpriteFrame]
    }
  }
});
cc.Class({
  "extends": cc.Component,
  properties: {
    cow_sets: {
      "default": [],
      type: [cow_skin]
    }
  },
  onLoad: function onLoad() {
    this.intervalTime = 0; //随机生成一种类型

    this.randomType = Math.floor(Math.random() * 3);
  },
  start: function start() {},
  update: function update(dt) {
    //总的间隔时间
    this.intervalTime += dt;
    var index = Math.floor(this.intervalTime / 0.2); //向下取整

    index = index % 3; //cc.log(index);
    //获取一种牛的类型

    var cowSet = this.cow_sets[this.randomType]; //获取精灵组件

    var sprite = this.node.getComponent(cc.Sprite);
    sprite.spriteFrame = cowSet.cows[index];
  },
  runCallback: function runCallback() {
    cc.log("一个轮回结束！");
    this.randomType = Math.floor(Math.random() * 3);
  }
});

cc._RF.pop();
                    }
                    if (nodeEnv) {
                        __define(__module.exports, __require, __module);
                    }
                    else {
                        __quick_compile_project__.registerModuleFunc(__filename, function () {
                            __define(__module.exports, __require, __module);
                        });
                    }
                })();
//# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbImFzc2V0c1xcc2NyaXB0XFxjb3cuanMiXSwibmFtZXMiOlsiY293X3NraW4iLCJjYyIsIkNsYXNzIiwibmFtZSIsInByb3BlcnRpZXMiLCJjb3dzIiwidHlwZSIsIlNwcml0ZUZyYW1lIiwiQ29tcG9uZW50IiwiY293X3NldHMiLCJvbkxvYWQiLCJpbnRlcnZhbFRpbWUiLCJyYW5kb21UeXBlIiwiTWF0aCIsImZsb29yIiwicmFuZG9tIiwic3RhcnQiLCJ1cGRhdGUiLCJkdCIsImluZGV4IiwiY293U2V0Iiwic3ByaXRlIiwibm9kZSIsImdldENvbXBvbmVudCIsIlNwcml0ZSIsInNwcml0ZUZyYW1lIiwicnVuQ2FsbGJhY2siLCJsb2ciXSwibWFwcGluZ3MiOiI7Ozs7Ozs7Ozs7Ozs7Ozs7O0FBQ0EsSUFBTUEsUUFBUSxHQUFDQyxFQUFFLENBQUNDLEtBQUgsQ0FBUztBQUNwQkMsRUFBQUEsSUFBSSxFQUFDLFVBRGU7QUFFcEJDLEVBQUFBLFVBQVUsRUFBQztBQUNQQyxJQUFBQSxJQUFJLEVBQUM7QUFDRCxpQkFBUSxFQURQO0FBRURDLE1BQUFBLElBQUksRUFBQyxDQUFDTCxFQUFFLENBQUNNLFdBQUo7QUFGSjtBQURFO0FBRlMsQ0FBVCxDQUFmO0FBVUFOLEVBQUUsQ0FBQ0MsS0FBSCxDQUFTO0FBQ0wsYUFBU0QsRUFBRSxDQUFDTyxTQURQO0FBR0xKLEVBQUFBLFVBQVUsRUFBRTtBQUNSSyxJQUFBQSxRQUFRLEVBQUM7QUFDTCxpQkFBUSxFQURIO0FBRUxILE1BQUFBLElBQUksRUFBQyxDQUFDTixRQUFEO0FBRkE7QUFERCxHQUhQO0FBVUxVLEVBQUFBLE1BVkssb0JBVUc7QUFDSixTQUFLQyxZQUFMLEdBQWtCLENBQWxCLENBREksQ0FHSjs7QUFDQSxTQUFLQyxVQUFMLEdBQWdCQyxJQUFJLENBQUNDLEtBQUwsQ0FBV0QsSUFBSSxDQUFDRSxNQUFMLEtBQWMsQ0FBekIsQ0FBaEI7QUFDSCxHQWZJO0FBa0JMQyxFQUFBQSxLQWxCSyxtQkFrQkksQ0FFUixDQXBCSTtBQXNCTEMsRUFBQUEsTUF0Qkssa0JBc0JFQyxFQXRCRixFQXNCSztBQUNOO0FBQ0EsU0FBS1AsWUFBTCxJQUFtQk8sRUFBbkI7QUFDQSxRQUFJQyxLQUFLLEdBQUNOLElBQUksQ0FBQ0MsS0FBTCxDQUFXLEtBQUtILFlBQUwsR0FBa0IsR0FBN0IsQ0FBVixDQUhNLENBR3NDOztBQUM1Q1EsSUFBQUEsS0FBSyxHQUFDQSxLQUFLLEdBQUMsQ0FBWixDQUpNLENBS047QUFDQTs7QUFDQSxRQUFJQyxNQUFNLEdBQUMsS0FBS1gsUUFBTCxDQUFjLEtBQUtHLFVBQW5CLENBQVgsQ0FQTSxDQVFOOztBQUNBLFFBQUlTLE1BQU0sR0FBQyxLQUFLQyxJQUFMLENBQVVDLFlBQVYsQ0FBdUJ0QixFQUFFLENBQUN1QixNQUExQixDQUFYO0FBQ0FILElBQUFBLE1BQU0sQ0FBQ0ksV0FBUCxHQUFtQkwsTUFBTSxDQUFDZixJQUFQLENBQVljLEtBQVosQ0FBbkI7QUFDSCxHQWpDSTtBQW1DTE8sRUFBQUEsV0FuQ0sseUJBbUNRO0FBQ1R6QixJQUFBQSxFQUFFLENBQUMwQixHQUFILENBQU8sU0FBUDtBQUNBLFNBQUtmLFVBQUwsR0FBZ0JDLElBQUksQ0FBQ0MsS0FBTCxDQUFXRCxJQUFJLENBQUNFLE1BQUwsS0FBYyxDQUF6QixDQUFoQjtBQUNIO0FBdENJLENBQVQiLCJzb3VyY2VSb290IjoiLyIsInNvdXJjZXNDb250ZW50IjpbIlxyXG5jb25zdCBjb3dfc2tpbj1jYy5DbGFzcyh7XHJcbiAgICBuYW1lOlwiY293X3NraW5cIixcclxuICAgIHByb3BlcnRpZXM6e1xyXG4gICAgICAgIGNvd3M6e1xyXG4gICAgICAgICAgICBkZWZhdWx0OltdLFxyXG4gICAgICAgICAgICB0eXBlOltjYy5TcHJpdGVGcmFtZV1cclxuICAgICAgICB9XHJcbiAgICB9XHJcbn0pO1xyXG5cclxuY2MuQ2xhc3Moe1xyXG4gICAgZXh0ZW5kczogY2MuQ29tcG9uZW50LFxyXG5cclxuICAgIHByb3BlcnRpZXM6IHtcclxuICAgICAgICBjb3dfc2V0czp7XHJcbiAgICAgICAgICAgIGRlZmF1bHQ6W10sXHJcbiAgICAgICAgICAgIHR5cGU6W2Nvd19za2luXVxyXG4gICAgICAgIH1cclxuICAgIH0sXHJcblxyXG4gICAgb25Mb2FkKCl7XHJcbiAgICAgICAgdGhpcy5pbnRlcnZhbFRpbWU9MDtcclxuXHJcbiAgICAgICAgLy/pmo/mnLrnlJ/miJDkuIDnp43nsbvlnotcclxuICAgICAgICB0aGlzLnJhbmRvbVR5cGU9TWF0aC5mbG9vcihNYXRoLnJhbmRvbSgpKjMpO1xyXG4gICAgfSxcclxuXHJcblxyXG4gICAgc3RhcnQgKCkge1xyXG5cclxuICAgIH0sXHJcblxyXG4gICAgdXBkYXRlKGR0KXtcclxuICAgICAgICAvL+aAu+eahOmXtOmalOaXtumXtFxyXG4gICAgICAgIHRoaXMuaW50ZXJ2YWxUaW1lKz1kdDtcclxuICAgICAgICBsZXQgaW5kZXg9TWF0aC5mbG9vcih0aGlzLmludGVydmFsVGltZS8wLjIpOy8v5ZCR5LiL5Y+W5pW0XHJcbiAgICAgICAgaW5kZXg9aW5kZXglMztcclxuICAgICAgICAvL2NjLmxvZyhpbmRleCk7XHJcbiAgICAgICAgLy/ojrflj5bkuIDnp43niZvnmoTnsbvlnotcclxuICAgICAgICBsZXQgY293U2V0PXRoaXMuY293X3NldHNbdGhpcy5yYW5kb21UeXBlXTtcclxuICAgICAgICAvL+iOt+WPlueyvueBtee7hOS7tlxyXG4gICAgICAgIGxldCBzcHJpdGU9dGhpcy5ub2RlLmdldENvbXBvbmVudChjYy5TcHJpdGUpO1xyXG4gICAgICAgIHNwcml0ZS5zcHJpdGVGcmFtZT1jb3dTZXQuY293c1tpbmRleF07XHJcbiAgICB9LFxyXG5cclxuICAgIHJ1bkNhbGxiYWNrKCl7XHJcbiAgICAgICAgY2MubG9nKFwi5LiA5Liq6L2u5Zue57uT5p2f77yBXCIpO1xyXG4gICAgICAgIHRoaXMucmFuZG9tVHlwZT1NYXRoLmZsb29yKE1hdGgucmFuZG9tKCkqMyk7XHJcbiAgICB9XHJcblxyXG59KTtcclxuIl19
//------QC-SOURCE-SPLIT------

                (function() {
                    var nodeEnv = typeof require !== 'undefined' && typeof process !== 'undefined';
                    var __module = nodeEnv ? module : {exports:{}};
                    var __filename = 'preview-scripts/assets/script/game.js';
                    var __require = nodeEnv ? function (request) {
                        return cc.require(request);
                    } : function (request) {
                        return __quick_compile_project__.require(request, __filename);
                    };
                    function __define (exports, require, module) {
                        if (!nodeEnv) {__quick_compile_project__.registerModule(__filename, module);}"use strict";
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
                    }
                    if (nodeEnv) {
                        __define(__module.exports, __require, __module);
                    }
                    else {
                        __quick_compile_project__.registerModuleFunc(__filename, function () {
                            __define(__module.exports, __require, __module);
                        });
                    }
                })();
//# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbImFzc2V0c1xcc2NyaXB0XFxnYW1lLmpzIl0sIm5hbWVzIjpbImNjIiwiQ2xhc3MiLCJDb21wb25lbnQiLCJwcm9wZXJ0aWVzIiwicm9wZV9ub2RlIiwidHlwZSIsIk5vZGUiLCJjb3dfaW5zIiwicm9wZV9pbWdzIiwiU3ByaXRlRnJhbWUiLCJjb3dfcHJlZmFiIiwiUHJlZmFiIiwib25Mb2FkIiwic3VjY2VzcyIsInNjb3JlTnVtIiwic3RhcnQiLCJjb3VudERvd25MYWJlbCIsImZpbmQiLCJnZXRDb21wb25lbnQiLCJMYWJlbCIsInRpbWUiLCJzY2hlZHVsZSIsInN0cmluZyIsImxvZyIsInJlc3VsdE5vZGUiLCJ0aXRsZU5vZGUiLCJnZXRDaGlsZEJ5TmFtZSIsImNvbnRlbnROb2RlIiwiY29udGVudExhYmVsIiwiYWN0aXZlIiwiZGlyZWN0b3IiLCJwYXVzZSIsInN5c0luZm8iLCJ3eCIsImdldFN5c3RlbUluZm9TeW5jIiwic2NyZWVuV2lkdGgiLCJzY3JlZW5IZWlnaHQiLCJ3eExvZ2luQnRuIiwiY3JlYXRlVXNlckluZm9CdXR0b24iLCJ0ZXh0Iiwic3R5bGUiLCJsZWZ0IiwidG9wIiwid2lkdGgiLCJoZWlnaHQiLCJsaW5lSGVpZ2h0IiwiYmFja2dyb3VuZENvbG9yIiwiY29sb3IiLCJzZWxmIiwib25UYXAiLCJyZXMiLCJjb25zb2xlIiwidXNlckluZm8iLCJ3eExvZ2luIiwiZGVzdHJveSIsImdldFVzZXJJbmZvIiwiZmFpbCIsImljb24iLCJTcHJpdGUiLCJsb2FkZXIiLCJsb2FkIiwidXJsIiwiYXZhdGFyVXJsIiwiZXJyIiwidGV4dHVyZSIsInNwcml0ZUZyYW1lIiwibG9naW4iLCJjb2RlIiwiaHR0cFV0aWxzIiwicmVxdWVzdCIsIm1ldGhvZCIsImRhdGEiLCJuaWNrTmFtZSIsIm1zZyIsImVyck1zZyIsImNsaWNrQ2FwdHVyZSIsImV2ZW50IiwiY3VzdG9tRXZlbnREYXRlIiwic2V0U2libGluZ0luZGV4IiwieSIsInVwIiwibW92ZVRvIiwieCIsInJlc3VsdCIsImNhbGxGdW5jIiwiY3VycmVudFgiLCJiZ05vZGUiLCJub2RlIiwicmVtb3ZlQ2hpbGQiLCJyb3BlVHlwZSIsInJhbmRvbVR5cGUiLCJpbnN0YW50aWF0ZSIsImFkZENoaWxkIiwiZG93biIsImZpbmlzaCIsInNjb3JlTGFiZWwiLCJzZXF1ZW5jZSIsInJ1bkFjdGlvbiIsImNsb3NlQnRuIiwicmVzdW1lIiwibG9hZFNjZW5lIiwicmVjb21lQnRuIiwic2hhcmVCdG4iLCJzaGFyZUFwcE1lc3NhZ2UiLCJ0aXRsZSIsImltYWdlVXJsIl0sIm1hcHBpbmdzIjoiOzs7Ozs7Ozs7Ozs7Ozs7OztBQUVBQSxFQUFFLENBQUNDLEtBQUgsQ0FBUztBQUNMLGFBQVNELEVBQUUsQ0FBQ0UsU0FEUDtBQUdMQyxFQUFBQSxVQUFVLEVBQUU7QUFDUkMsSUFBQUEsU0FBUyxFQUFDO0FBQ04saUJBQVUsSUFESjtBQUVOQyxNQUFBQSxJQUFJLEVBQUdMLEVBQUUsQ0FBQ007QUFGSixLQURGO0FBS1JDLElBQUFBLE9BQU8sRUFBQztBQUNKLGlCQUFTLElBREw7QUFFSkYsTUFBQUEsSUFBSSxFQUFDTCxFQUFFLENBQUNNO0FBRkosS0FMQTtBQVNSRSxJQUFBQSxTQUFTLEVBQUM7QUFDTixpQkFBUSxFQURGO0FBRU5ILE1BQUFBLElBQUksRUFBQ0wsRUFBRSxDQUFDUztBQUZGLEtBVEY7QUFjUjtBQUNBQyxJQUFBQSxVQUFVLEVBQUM7QUFDUCxpQkFBUSxJQUREO0FBRVBMLE1BQUFBLElBQUksRUFBQ0wsRUFBRSxDQUFDVztBQUZEO0FBZkgsR0FIUDtBQXlCTDtBQUVBQyxFQUFBQSxNQTNCSyxvQkEyQks7QUFDTixTQUFLQyxPQUFMLEdBQWEsS0FBYixDQURNLENBR047O0FBQ0EsU0FBS0MsUUFBTCxHQUFjLENBQWQ7QUFDSCxHQWhDSTtBQWtDTEMsRUFBQUEsS0FsQ0ssbUJBa0NJO0FBQ0wsUUFBSUMsY0FBYyxHQUFDaEIsRUFBRSxDQUFDaUIsSUFBSCxDQUFRLDZCQUFSLEVBQXVDQyxZQUF2QyxD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LEdBSE8sRUFHSDtBQUNSQyxRQUFBQSxPQUFPLENBQUM1QixHQUFSLENBQVkyQixHQUFaO0FBQ0gsT0FMYztBQU1mTSxNQUFBQSxJQU5lLGdCQU1WTixHQU5VLEVBTU47QUFDTEMsUUFBQUEsT0FBTyxDQUFDNUIsR0FBUixDQUFZMkIsR0FBWjtBQUNIO0FBUmMsS0FBbkI7QUFXSDtBQXBRSSxDQUFUIiwic291cmNlUm9vdCI6Ii8iLCJzb3VyY2VzQ29udGVudCI6WyJcclxuXHJcbmNjLkNsYXNzKHtcclxuICAgIGV4dGVuZHM6IGNjLkNvbXBvbmVudCxcclxuXHJcbiAgICBwcm9wZXJ0aWVzOiB7XHJcbiAgICAgICAgcm9wZV9ub2RlOntcclxuICAgICAgICAgICAgZGVmYXVsdCA6IG51bGwsXHJcbiAgICAgICAgICAgIHR5cGUgOiBjYy5Ob2RlXHJcbiAgICAgICAgfSxcclxuICAgICAgICBjb3dfaW5zOntcclxuICAgICAgICAgICAgZGVmYXVsdDogbnVsbCxcclxuICAgICAgICAgICAgdHlwZTpjYy5Ob2RlXHJcbiAgICAgICAgfSxcclxuICAgICAgICByb3BlX2ltZ3M6e1xyXG4gICAgICAgICAgICBkZWZhdWx0OltdLFxyXG4gICAgICAgICAgICB0eXBlOmNjLlNwcml0ZUZyYW1lXHJcbiAgICAgICAgfSxcclxuXHJcbiAgICAgICAgLy/lho3nu5HlrprkuIDkuKrpooTliLbkvZNcclxuICAgICAgICBjb3dfcHJlZmFiOntcclxuICAgICAgICAgICAgZGVmYXVsdDpudWxsLFxyXG4gICAgICAgICAgICB0eXBlOmNjLlByZWZhYlxyXG4gICAgICAgIH1cclxuXHJcbiAgICB9LFxyXG5cclxuICAgIC8vIExJRkUtQ1lDTEUgQ0FMTEJBQ0tTOlxyXG5cclxuICAgIG9uTG9hZCAoKSB7XHJcbiAgICAgICAgdGhpcy5zdWNjZXNzPWZhbHNlO1xyXG5cclxuICAgICAgICAvL+WIneWni+WMluWIhuaVsFxyXG4gICAgICAgIHRoaXMuc2NvcmVOdW09MDtcclxuICAgIH0sXHJcblxyXG4gICAgc3RhcnQgKCkge1xyXG4gICAgICAgIGxldCBjb3VudERvd25MYWJlbD1jYy5maW5kKFwiQ2FudmFzL2JnLVNwcml0ZS9jb3VudF9kb3duXCIpLmdldENvbXBvbmVudChjYy5MYWJlbCk7XHJcbiAgICAgICAgbGV0IHRpbWU9MzA7XHJcbiAgICAgICAgdGhpcy5zY2hlZHVsZShmdW5jdGlvbigpe1xyXG4gICAgICAgICAgICB0aW1lLS07XHJcbiAgICAgICAgICAgIGNvdW50RG93bkxhYmVsLnN0cmluZz10aW1lK1wic1wiO1xyXG5cclxuICAgICAgICAgICAgaWYodGltZT09MCl7XHJcbiAgICAgICAgICAgICAgICBjYy5sb2coXCLmuLjmiI/nu5PmnZ/vvIFcIik7XHJcbiAgICAgICAgICAgICAgICAvL+iOt+WPluW8ueeql+iKgueCuVxyXG4gICAgICAgICAgICAgICAgbGV0IHJlc3VsdE5vZGU9Y2MuZmluZChcIkNhbnZhcy9yZXN1bHRcIik7XHJcbiAgICAgICAgICAgICAgICAvL+iOt+WPlnRpdGxl5ZKMY29udGVudOS4pOS4quiKgueCuVxyXG4gICAgICAgICAgICAgICAgbGV0IHRpdGxlTm9kZT1yZXN1bHROb2RlLmdldENoaWxkQnlOYW1lKFwidGl0bGVcIik7XHJcbiAgICAgICAgICAgICAgICBsZXQgY29udGVudE5vZGU9cmVzdWx0Tm9kZS5nZXRDaGlsZEJ5TmFtZShcImNvbnRlbnRcIik7XHJcbiAgICAgICAgICAgICAgICAvL+WxleekuuWIhuaVsFxyXG4gICAgICAgICAgICAgICAgdGl0bGVOb2RlLmdldENvbXBvbmVudChjYy5MYWJlbCkuc3RyaW5nPVwi5pyA57uI5b6X5YiG77yaXCIrdGhpcy5zY29yZU51bTtcclxuXHJcbiAgICAgICAgICAgICAgICAvL+iOt+WPlue7hOS7tlxyXG4gICAgICAgICAgICAgICAgbGV0IGNvbnRlbnRMYWJlbD1jb250ZW50Tm9kZS5nZXRDb21wb25lbnQoY2MuTGFiZWwpO1xyXG4gICAgICAgICAgICAgICAgc3dpdGNoKHRydWUpe1xyXG4gICAgICAgICAgICAgICAgICAgIGNhc2UgdGhpcy5zY29yZU51bTw9MzpcclxuICAgICAgICAgICAgICAgICAgICAgICAgY29udGVudExhYmVsLnN0cmluZz1cIuWll+eJm+mdkumTnFwiO1xyXG4gICAgICAgICAgICAgICAgICAgICAgICBicmVhaztcclxuICAgICAgICAgICAgICAgICAgICBjYXNlIHRoaXMuc2NvcmVOdW08PTY6XHJcbiAgICAgICAgICAgICAgICAgICAgICAgIGNvbnRlbnRMYWJlbC5zdHJpbmc9XCLlpZfniZvpq5jmiYtcIjtcclxuICAgICAgICAgICAgICAgICAgICAgICAgYnJlYWs7XHJcbiAgICAgICAgICAgICAgICAgICAgY2FzZSB0aGlzLnNjb3JlTnVtPjY6XHJcbiAgICAgICAgICAgICAgICAgICAgICAgIGNvbnRlbnRMYWJlbC5zdHJpbmc9XCLlpZfniZvnjovogIVcIjtcclxuICAgICAgICAgICAgICAgICAgICAgICAgYnJlYWs7XHJcbiAgICAgICAgICAgICAgICB9XHJcblxyXG4gICAgICAgICAgICAgICAgcmVzdWx0Tm9kZS5hY3RpdmU9dHJ1ZTtcclxuICAgICAgICAgICAgICAgIGNjLmRpcmVjdG9yLnBhdXNlKCk7XHJcbiAgICAgICAgICAgIH1cclxuICAgICAgICB9LDEpO1xyXG5cclxuXHJcblxyXG4gICAgICAgIC8v5Yib5bu65LiA5Liq55So5oi35o6I5p2D5oyJ6ZKuXHJcbiAgICAgICAgbGV0IHN5c0luZm8gPSB3eC5nZXRTeXN0ZW1JbmZvU3luYygpO1xyXG4gICAgICAgIC8v6I635Y+W5b6u5L+h55WM6Z2i5aSn5bCPXHJcbiAgICAgICAgbGV0IHNjcmVlbldpZHRoID0gc3lzSW5mby5zY3JlZW5XaWR0aDtcclxuICAgICAgICBsZXQgc2NyZWVuSGVpZ2h0ID0gc3lzSW5mby5zY3JlZW5IZWlnaHQ7XHJcblxyXG4gICAgICAgIC8vIOWIm+W7uuS4gOS4queUqOaIt+aOiOadg+aMiemSrlxyXG4gICAgICAgIGNvbnN0IHd4TG9naW5CdG4gPSB3eC5jcmVhdGVVc2VySW5mb0J1dHRvbih7XHJcbiAgICAgICAgICAgIHR5cGU6XCJ0ZXh0XCIsXHJcbiAgICAgICAgICAgIHRleHQ6XCJcIixcclxuICAgICAgICAgICAgc3R5bGU6e1xyXG4gICAgICAgICAgICAgICAgbGVmdDowLFxyXG4gICAgICAgICAgICAgICAgdG9wOjAsXHJcbiAgICAgICAgICAgICAgICB3aWR0aDpzY3JlZW5XaWR0aCxcclxuICAgICAgICAgICAgICAgIGhlaWdodDpzY3JlZW5IZWlnaHQsXHJcbiAgICAgICAgICAgICAgICBsaW5lSGVpZ2h0OjQwLFxyXG4gICAgICAgICAgICAgICAgYmFja2dyb3VuZENvbG9yOiAnIzAwMDAwMDAwJyxcclxuICAgICAgICAgICAgICAgIGNvbG9yOiAnI2ZmZmZmZicsXHJcbiAgICAgICAgICAgICAgICAvKnRleHRBbGlnbjonY2VudGVyJyxcclxuICAgICAgICAgICAgICAgIGZvbnRTaXplOjE2LFxyXG4gICAgICAgICAgICAgICAgYm9yZGVyUmFkaXVzOjQqL1xyXG4gICAgICAgICAgICB9XHJcbiAgICAgICAgfSk7XHJcblxyXG4gICAgICAgIGxldCBzZWxmPXRoaXM7XHJcblxyXG4gICAgICAgIHd4TG9naW5CdG4ub25UYXAoKHJlcyk9PntcclxuICAgICAgICAgICAgY29uc29sZS5sb2cocmVzLnVzZXJJbmZvKTtcclxuICAgICAgICAgICAgLy/mi7/liLDlvq7kv6HnlKjmiLfkv6Hmga9cclxuICAgICAgICAgICAgbGV0IHVzZXJJbmZvPXJlcy51c2VySW5mbztcclxuICAgICAgICAgICAgc2VsZi53eExvZ2luKHVzZXJJbmZvKTtcclxuICAgICAgICAgICAgd3hMb2dpbkJ0bi5kZXN0cm95KCk7XHJcbiAgICAgICAgICAgIC8qXHJcbiAgICAgICAgICAgIGxldCBpY29uPWNjLmZpbmQoXCJDYW52YXMvYmctU3ByaXRlL2ljb25cIikuZ2V0Q29tcG9uZW50KGNjLlNwcml0ZSk7XHJcbiAgICAgICAgICAgIC8v5Yqg6L296L+c56iL572R57uc5Zu+54mHXHJcbiAgICAgICAgICAgIGNjLmxvYWRlci5sb2FkKHt1cmw6dXNlckluZm8uYXhhdGFyVXJsLHR5cGU6XCJwbmdcIn0sZnVuY3Rpb24gKGVycix0ZXh0dXJlKXtcclxuICAgICAgICAgICAgICAgIGljb24uc3ByaXRlRnJhbWU9bmV3IGNjLlNwcml0ZUZyYW1lKHRleHR1cmUpO1xyXG4gICAgICAgICAgICB9KSovXHJcbiAgICAgICAgfSk7XHJcblxyXG4gICAgICAgIHd4LmdldFVzZXJJbmZvKHtcclxuICAgICAgICAgICAgc3VjY2VzcyhyZXMpe1xyXG4gICAgICAgICAgICAgICAgbGV0IHVzZXJJbmZvID0gcmVzLnVzZXJJbmZvO1xyXG4gICAgICAgICAgICAgICAgc2VsZi53eExvZ2luKHVzZXJJbmZvKTtcclxuICAgICAgICAgICAgfSxcclxuICAgICAgICAgICAgZmFpbCgpe1xyXG4gICAgICAgICAgICAgICAgY29uc29sZS5sb2coXCLojrflj5blpLHotKVcIik7XHJcbiAgICAgICAgICAgIH1cclxuICAgICAgICB9KVxyXG5cclxuICAgIH0sXHJcblxyXG4gICAgd3hMb2dpbih1c2VySW5mbykge1xyXG5cclxuICAgICAgICBsZXQgaWNvbiA9IGNjLmZpbmQoXCJDYW52YXMvYmctU3ByaXRlL2ljb25cIikuZ2V0Q29tcG9uZW50KGNjLlNwcml0ZSk7XHJcbiAgICAgICAgLy8g5Yqg6L296L+c56iL572R57uc5Zu+54mHXHJcbiAgICAgICAgY2MubG9hZGVyLmxvYWQoe3VybDp1c2VySW5mby5hdmF0YXJVcmwsdHlwZTpcInBuZ1wifSxmdW5jdGlvbiAoZXJyLHRleHR1cmUpIHtcclxuICAgICAgICAgICAgaWNvbi5zcHJpdGVGcmFtZSA9IG5ldyBjYy5TcHJpdGVGcmFtZSh0ZXh0dXJlKTtcclxuICAgICAgICB9KTtcclxuXHJcbiAgICAgICAgd3gubG9naW4oe1xyXG4gICAgICAgICAgICBzdWNjZXNzKHJlcykge1xyXG4gICAgICAgICAgICAgICAgaWYgKHJlcy5jb2RlKSB7XHJcbiAgICAgICAgICAgICAgICAgICAgLy8g5Y+R6LW3572R57uc6K+35rGC57uZ5ri45oiP5ZCO5Y+wXHJcbiAgICAgICAgICAgICAgICAgICAgaHR0cFV0aWxzLnJlcXVlc3Qoe1xyXG4gICAgICAgICAgICAgICAgICAgICAgICB1cmw6XCJodHRwOi8vbG9jYWxob3N0OjgwODAvbG9naW5cIixcclxuICAgICAgICAgICAgICAgICAgICAgICAgbWV0aG9kOiBcIlBPU1RcIixcclxuICAgICAgICAgICAgICAgICAgICAgICAgZGF0YTp7XHJcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICBjb2RlOnJlcy5jb2RlLFxyXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgbmlja05hbWU6dXNlckluZm8ubmlja05hbWUsXHJcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICBhdmF0YXJVcmw6dXNlckluZm8uYXZhdGFyVXJsXHJcbiAgICAgICAgICAgICAgICAgICAgICAgIH0sXHJcbiAgICAgICAgICAgICAgICAgICAgICAgIHN1Y2Nlc3MobXNnKSB7XHJcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICBjb25zb2xlLmxvZyhtc2cpO1xyXG4gICAgICAgICAgICAgICAgICAgICAgICB9XHJcbiAgICAgICAgICAgICAgICAgICAgfSlcclxuICAgICAgICAgICAgICAgICAgICAvKiAgICB3eC5yZXF1ZXN0KHtcclxuICAgICAgICAgICAgICAgICAgICAgICAgICAgIHVybDpcImh0dHA6Ly9sb2NhbGhvc3Q6ODA4MC9sb2dpblwiLFxyXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgbWV0aG9kOiBcIlBPU1RcIixcclxuICAgICAgICAgICAgICAgICAgICAgICAgICAgIGhlYWRlcjp7XHJcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgJ2NvbnRlbnQtdHlwZSc6J2FwcGxpY2F0aW9uL3gtd3d3LWZvcm0tdXJsZW5jb2RlZCdcclxuICAgICAgICAgICAgICAgICAgICAgICAgICAgIH0sXHJcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICBkYXRhOntcclxuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICBjb2RlOnJlcy5jb2RlLFxyXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIG5pY2tOYW1lOnVzZXJJbmZvLm5pY2tOYW1lLFxyXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIGF2YXRhclVybDp1c2VySW5mby5hdmF0YXJVcmxcclxuICAgICAgICAgICAgICAgICAgICAgICAgICAgIH1cclxuICAgICAgICAgICAgICAgICAgICAgICAgfSkqL1xyXG4gICAgICAgICAgICAgICAgfSBlbHNlIHtcclxuICAgICAgICAgICAgICAgICAgICBjb25zb2xlLmxvZyhcIueZu+W9leWksei0pVwiKyByZXMuZXJyTXNnKTtcclxuICAgICAgICAgICAgICAgIH1cclxuICAgICAgICAgICAgfVxyXG4gICAgICAgIH0pXHJcblxyXG4gICAgfSxcclxuXHJcbiAgICAvLyB1cGRhdGUgKGR0KSB7fSxcclxuXHJcbiAgICAvL+eCueWHu+S6i+S7tuaNleaNieWHveaVsFxyXG4gICAgY2xpY2tDYXB0dXJlOmZ1bmN0aW9uIChldmVudCxjdXN0b21FdmVudERhdGUpe1xyXG4gICAgICAgIHRoaXMucm9wZV9ub2RlLmFjdGl2ZT10cnVlO1xyXG4gICAgICAgIC8v6K6+572u57uz5a2Q5Zyo5b2T5YmN54i26IqC54K555qE6aG65bqPXHJcbiAgICAgICAgdGhpcy5yb3BlX25vZGUuc2V0U2libGluZ0luZGV4KDEwMCk7XHJcblxyXG4gICAgICAgIC8v6K6+572u57uz5a2Q55qE6LW35aeL5L2N572uXHJcbiAgICAgICAgdGhpcy5yb3BlX25vZGUueT0tNTAwO1xyXG4gICAgICAgIC8v5ZCR5LiK56e75YqoXHJcbiAgICAgICAgY29uc3QgdXA9Y2MubW92ZVRvKDAuNCx0aGlzLnJvcGVfbm9kZS54LDApO1xyXG5cclxuXHJcbiAgICAgICAgLy/liKTlrprnu5PmnpxcclxuICAgICAgICBsZXQgcmVzdWx0PWNjLmNhbGxGdW5jKGZ1bmN0aW9uKCl7XHJcbiAgICAgICAgICAgIC8v6I635Y+W5b2T5YmN54mb5YS/55qEeOeCuVxyXG4gICAgICAgICAgICBsZXQgY3VycmVudFg9dGhpcy5jb3dfaW5zLng7XHJcbiAgICAgICAgICAgIGlmKGN1cnJlbnRYPi04MCYmY3VycmVudFg8ODApe1xyXG4gICAgICAgICAgICAgICAgY2MubG9nKFwi5o2V5o2J5oiQ5Yqf77yBXCIpO1xyXG5cclxuICAgICAgICAgICAgICAgIC8v56e76ZmkXHJcbiAgICAgICAgICAgICAgICBsZXQgYmdOb2RlID0gdGhpcy5ub2RlLmdldENoaWxkQnlOYW1lKFwiYmctU3ByaXRlXCIpO1xyXG4gICAgICAgICAgICAgICAgYmdOb2RlLnJlbW92ZUNoaWxkKHRoaXMuY293X2lucyk7XHJcblxyXG4gICAgICAgICAgICAgICAgLy/mm7TmjaLnu7PlrZAs6I635Y+W54mb5YS/55qE57G75Z6LXHJcbiAgICAgICAgICAgICAgICBsZXQgcm9wZVR5cGU9dGhpcy5jb3dfaW5zLmdldENvbXBvbmVudChcImNvd1wiKS5yYW5kb21UeXBlKzE7XHJcbiAgICAgICAgICAgICAgICB0aGlzLnJvcGVfbm9kZS5nZXRDb21wb25lbnQoY2MuU3ByaXRlKS5zcHJpdGVGcmFtZT10aGlzLnJvcGVfaW1nc1tyb3BlVHlwZV07XHJcblxyXG5cclxuICAgICAgICAgICAgICAgIC8v55Sf5oiQ5paw55qE54mb6IqC54K5XHJcbiAgICAgICAgICAgICAgICB0aGlzLmNvd19pbnM9Y2MuaW5zdGFudGlhdGUodGhpcy5jb3dfcHJlZmFiKTtcclxuICAgICAgICAgICAgICAgIHRoaXMuY293X2lucy55PTA7XHJcbiAgICAgICAgICAgICAgICBiZ05vZGUuYWRkQ2hpbGQodGhpcy5jb3dfaW5zKTtcclxuXHJcbiAgICAgICAgICAgICAgICB0aGlzLnN1Y2Nlc3M9dHJ1ZTtcclxuICAgICAgICAgICAgICAgIC8v5YiG5pWw5Yqg5LiAXHJcbiAgICAgICAgICAgICAgICB0aGlzLnNjb3JlTnVtKys7XHJcbiAgICAgICAgICAgIH1cclxuICAgICAgICAgICAgZWxzZXtcclxuICAgICAgICAgICAgICAgIGNjLmxvZyhcIuaNleaNieWksei0pe+8gVwiKTtcclxuICAgICAgICAgICAgfVxyXG4gICAgICAgIH0sdGhpcyk7XHJcblxyXG4gICAgICAgIC8v5b6A5Zue5ouJXHJcbiAgICAgICAgbGV0IGRvd249Y2MubW92ZVRvKDAuNSx0aGlzLnJvcGVfbm9kZS54LC01MDApO1xyXG5cclxuICAgICAgICBsZXQgZmluaXNoPWNjLmNhbGxGdW5jKGZ1bmN0aW9uICgpe1xyXG4gICAgICAgICAgICB0aGlzLnJvcGVfbm9kZS5nZXRDb21wb25lbnQoY2MuU3ByaXRlKS5zcHJpdGVGcmFtZT10aGlzLnJvcGVfaW1nc1swXTtcclxuICAgICAgICAgICAgLy/liKTmlq3mmK/lkKbmjZXmjYnmiJDlip9cclxuICAgICAgICAgICAgaWYodGhpcy5zdWNjZXNzPT10cnVlKXtcclxuICAgICAgICAgICAgICAgIGxldCBzY29yZUxhYmVsPWNjLmZpbmQoXCJDYW52YXMvYmctU3ByaXRlL3Njb3JlXCIpLmdldENvbXBvbmVudChjYy5MYWJlbCk7XHJcbiAgICAgICAgICAgICAgICBzY29yZUxhYmVsLnN0cmluZz1cIlNjb3JlOlwiK3RoaXMuc2NvcmVOdW07XHJcbiAgICAgICAgICAgICAgICB0aGlzLnN1Y2Nlc3M9ZmFsc2U7XHJcbiAgICAgICAgICAgIH1cclxuICAgICAgICB9LHRoaXMpO1xyXG5cclxuXHJcblxyXG4gICAgICAgIC8v5a6a5LmJ5LiA5Liq5bqP5YiX5Yqo55S7XHJcbiAgICAgICAgbGV0IHNlcXVlbmNlPWNjLnNlcXVlbmNlKHVwLHJlc3VsdCxkb3duLGZpbmlzaCk7XHJcblxyXG4gICAgICAgIHRoaXMucm9wZV9ub2RlLnJ1bkFjdGlvbihzZXF1ZW5jZSk7XHJcbiAgICB9LFxyXG5cclxuICAgIC8v5YWz6Zet5oyJ6ZKu77yM57un57ut5ri45oiPXHJcbiAgICBjbG9zZUJ0bigpe1xyXG4gICAgICAgIGNjLmxvZyhcIue7p+e7rea4uOaIj1wiKTtcclxuICAgICAgICBjYy5kaXJlY3Rvci5yZXN1bWUoKTsvL+WIoOmZpOmAu+i+kVxyXG4gICAgICAgIGNjLmRpcmVjdG9yLmxvYWRTY2VuZShcImdhbWVcIik7Ly/ph43mlrDliqDovb1cclxuICAgIH0sXHJcblxyXG4gICAgcmVjb21lQnRuKCl7XHJcbiAgICAgIGNjLmxvZyhcIue7p+e7rea4uOaIj1wiKTtcclxuICAgICAgY2MuZGlyZWN0b3IucmVzdW1lKCk7XHJcbiAgICAgIGNjLmRpcmVjdG9yLmxvYWRTY2VuZShcImdhbWVcIik7XHJcbiAgICB9LFxyXG5cclxuXHJcbiAgICAvL+W+ruS/oeWIhuS6q1xyXG4gICAgc2hhcmVCdG4oKXtcclxuICAgICAgICB3eC5zaGFyZUFwcE1lc3NhZ2Uoe1xyXG4gICAgICAgICAgICB0aXRsZTpcIuWkp+WutumDveadpeeOqeWll+eJm+Wwj+a4uOaIj1wiLFxyXG4gICAgICAgICAgICBpbWFnZVVybDpcImh0dHBzOi8vZ2ltZzIuYmFpZHUuY29tL2ltYWdlX3NlYXJjaC9zcmM9aHR0cCUzQSUyRiUyRmltZzMucmVkb2NuLmNvbSUyRjIwMDkxMjAxJTJGMjAwOTEyMDFfMzZhNTVjY2M2NjI1YzZlZTI5NmJ1aWt0RUJ0QUNtVlcuanBnJnJlZmVyPWh0dHAlM0ElMkYlMkZpbWczLnJlZG9jbi5jb20mYXBwPTIwMDImc2l6ZT1mOTk5OSwxMDAwMCZxPWE4MCZuPTAmZz0wbiZmbXQ9anBlZz9zZWM9MTYyNTIyMjk2OCZ0PWI2ODNlNTFlOTRlODg4NzNmMTM4MjEyMDI4MjdhYzgwXCIsXHJcbiAgICAgICAgICAgIHN1Y2Nlc3MocmVzKXtcclxuICAgICAgICAgICAgICAgIGNvbnNvbGUubG9nKHJlcyk7XHJcbiAgICAgICAgICAgIH0sXHJcbiAgICAgICAgICAgIGZhaWwocmVzKXtcclxuICAgICAgICAgICAgICAgIGNvbnNvbGUubG9nKHJlcyk7XHJcbiAgICAgICAgICAgIH1cclxuXHJcbiAgICAgICAgfSlcclxuICAgIH1cclxuXHJcbn0pO1xyXG4iXX0=
//------QC-SOURCE-SPLIT------
