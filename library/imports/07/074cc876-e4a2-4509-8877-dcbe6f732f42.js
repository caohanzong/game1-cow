"use strict";
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