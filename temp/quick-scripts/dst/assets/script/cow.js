
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