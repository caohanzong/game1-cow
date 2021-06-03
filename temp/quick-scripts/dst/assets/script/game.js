
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
    }, 1);
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
//# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbImFzc2V0c1xcc2NyaXB0XFxnYW1lLmpzIl0sIm5hbWVzIjpbImNjIiwiQ2xhc3MiLCJDb21wb25lbnQiLCJwcm9wZXJ0aWVzIiwicm9wZV9ub2RlIiwidHlwZSIsIk5vZGUiLCJjb3dfaW5zIiwicm9wZV9pbWdzIiwiU3ByaXRlRnJhbWUiLCJjb3dfcHJlZmFiIiwiUHJlZmFiIiwib25Mb2FkIiwic3VjY2VzcyIsInNjb3JlTnVtIiwic3RhcnQiLCJjb3VudERvd25MYWJlbCIsImZpbmQiLCJnZXRDb21wb25lbnQiLCJMYWJlbCIsInRpbWUiLCJzY2hlZHVsZSIsInN0cmluZyIsImxvZyIsInJlc3VsdE5vZGUiLCJ0aXRsZU5vZGUiLCJnZXRDaGlsZEJ5TmFtZSIsImNvbnRlbnROb2RlIiwiY29udGVudExhYmVsIiwiYWN0aXZlIiwiZGlyZWN0b3IiLCJwYXVzZSIsImNsaWNrQ2FwdHVyZSIsImV2ZW50IiwiY3VzdG9tRXZlbnREYXRlIiwic2V0U2libGluZ0luZGV4IiwieSIsInVwIiwibW92ZVRvIiwieCIsInJlc3VsdCIsImNhbGxGdW5jIiwiY3VycmVudFgiLCJiZ05vZGUiLCJub2RlIiwicmVtb3ZlQ2hpbGQiLCJyb3BlVHlwZSIsInJhbmRvbVR5cGUiLCJTcHJpdGUiLCJzcHJpdGVGcmFtZSIsImluc3RhbnRpYXRlIiwiYWRkQ2hpbGQiLCJkb3duIiwiZmluaXNoIiwic2NvcmVMYWJlbCIsInNlcXVlbmNlIiwicnVuQWN0aW9uIiwiY2xvc2VCdG4iLCJyZXN1bWUiLCJsb2FkU2NlbmUiXSwibWFwcGluZ3MiOiI7Ozs7Ozs7Ozs7Ozs7Ozs7O0FBRUFBLEVBQUUsQ0FBQ0MsS0FBSCxDQUFTO0FBQ0wsYUFBU0QsRUFBRSxDQUFDRSxTQURQO0FBR0xDLEVBQUFBLFVBQVUsRUFBRTtBQUNSQyxJQUFBQSxTQUFTLEVBQUM7QUFDTixpQkFBVSxJQURKO0FBRU5DLE1BQUFBLElBQUksRUFBR0wsRUFBRSxDQUFDTTtBQUZKLEtBREY7QUFLUkMsSUFBQUEsT0FBTyxFQUFDO0FBQ0osaUJBQVMsSUFETDtBQUVKRixNQUFBQSxJQUFJLEVBQUNMLEVBQUUsQ0FBQ007QUFGSixLQUxBO0FBU1JFLElBQUFBLFNBQVMsRUFBQztBQUNOLGlCQUFRLEVBREY7QUFFTkgsTUFBQUEsSUFBSSxFQUFDTCxFQUFFLENBQUNTO0FBRkYsS0FURjtBQWNSO0FBQ0FDLElBQUFBLFVBQVUsRUFBQztBQUNQLGlCQUFRLElBREQ7QUFFUEwsTUFBQUEsSUFBSSxFQUFDTCxFQUFFLENBQUNXO0FBRkQ7QUFmSCxHQUhQO0FBeUJMO0FBRUFDLEVBQUFBLE1BM0JLLG9CQTJCSztBQUNOLFNBQUtDLE9BQUwsR0FBYSxLQUFiLENBRE0sQ0FHTjs7QUFDQSxTQUFLQyxRQUFMLEdBQWMsQ0FBZDtBQUNILEdBaENJO0FBa0NMQyxFQUFBQSxLQWxDSyxtQkFrQ0k7QUFDTCxRQUFJQyxjQUFjLEdBQUNoQixFQUFFLENBQUNpQixJQUFILENBQVEsNkJBQVIsRUFBdUNDLFlBQXZDLENBQW9EbEIsRUFBRSxDQUFDbUIsS0FBdkQsQ0FBbkI7QUFDQSxRQUFJQyxJQUFJLEdBQUMsRUFBVDtBQUNBLFNBQUtDLFFBQUwsQ0FBYyxZQUFVO0FBQ3BCRCxNQUFBQSxJQUFJO0FBQ0pKLE1BQUFBLGNBQWMsQ0FBQ00sTUFBZixHQUFzQkYsSUFBSSxHQUFDLEdBQTNCOztBQUVBLFVBQUdBLElBQUksSUFBRSxDQUFULEVBQVc7QUFDUHBCLFFBQUFBLEVBQUUsQ0FBQ3VCLEdBQUgsQ0FBTyxPQUFQLEVBRE8sQ0FFUDs7QUFDQSxZQUFJQyxVQUFVLEdBQUN4QixFQUFFLENBQUNpQixJQUFILENBQVEsZUFBUixDQUFmLENBSE8sQ0FJUDs7QUFDQSxZQUFJUSxTQUFTLEdBQUNELFVBQVUsQ0FBQ0UsY0FBWCxDQUEwQixPQUExQixDQUFkO0FBQ0EsWUFBSUMsV0FBVyxHQUFDSCxVQUFVLENBQUNFLGNBQVgsQ0FBMEIsU0FBMUIsQ0FBaEIsQ0FOTyxDQU9QOztBQUNBRCxRQUFBQSxTQUFTLENBQUNQLFlBQVYsQ0FBdUJsQixFQUFFLENBQUNtQixLQUExQixFQUFpQ0csTUFBakMsR0FBd0MsVUFBUSxLQUFLUixRQUFyRCxDQVJPLENBVVA7O0FBQ0EsWUFBSWMsWUFBWSxHQUFDRCxXQUFXLENBQUNULFlBQVosQ0FBeUJsQixFQUFFLENBQUNtQixLQUE1QixDQUFqQjs7QUFDQSxnQkFBTyxJQUFQO0FBQ0ksZUFBSyxLQUFLTCxRQUFMLElBQWUsQ0FBcEI7QUFDSWMsWUFBQUEsWUFBWSxDQUFDTixNQUFiLEdBQW9CLE1BQXBCO0FBQ0E7O0FBQ0osZUFBSyxLQUFLUixRQUFMLElBQWUsQ0FBcEI7QUFDSWMsWUFBQUEsWUFBWSxDQUFDTixNQUFiLEdBQW9CLE1BQXBCO0FBQ0E7O0FBQ0osZUFBSyxLQUFLUixRQUFMLEdBQWMsQ0FBbkI7QUFDSWMsWUFBQUEsWUFBWSxDQUFDTixNQUFiLEdBQW9CLE1BQXBCO0FBQ0E7QUFUUjs7QUFZQUUsUUFBQUEsVUFBVSxDQUFDSyxNQUFYLEdBQWtCLElBQWxCO0FBQ0E3QixRQUFBQSxFQUFFLENBQUM4QixRQUFILENBQVlDLEtBQVo7QUFDSDtBQUNKLEtBL0JELEVBK0JFLENBL0JGO0FBaUNDLEdBdEVBO0FBd0VMO0FBRUE7QUFDQUMsRUFBQUEsWUFBWSxFQUFDLHNCQUFVQyxLQUFWLEVBQWdCQyxlQUFoQixFQUFnQztBQUN6QyxTQUFLOUIsU0FBTCxDQUFleUIsTUFBZixHQUFzQixJQUF0QixDQUR5QyxDQUV6Qzs7QUFDQSxTQUFLekIsU0FBTCxDQUFlK0IsZUFBZixDQUErQixHQUEvQixFQUh5QyxDQUt6Qzs7QUFDQSxTQUFLL0IsU0FBTCxDQUFlZ0MsQ0FBZixHQUFpQixDQUFDLEdBQWxCLENBTnlDLENBT3pDOztBQUNBLFFBQU1DLEVBQUUsR0FBQ3JDLEVBQUUsQ0FBQ3NDLE1BQUgsQ0FBVSxHQUFWLEVBQWMsS0FBS2xDLFNBQUwsQ0FBZW1DLENBQTdCLEVBQStCLENBQS9CLENBQVQsQ0FSeUMsQ0FXekM7O0FBQ0EsUUFBSUMsTUFBTSxHQUFDeEMsRUFBRSxDQUFDeUMsUUFBSCxDQUFZLFlBQVU7QUFDN0I7QUFDQSxVQUFJQyxRQUFRLEdBQUMsS0FBS25DLE9BQUwsQ0FBYWdDLENBQTFCOztBQUNBLFVBQUdHLFFBQVEsR0FBQyxDQUFDLEVBQVYsSUFBY0EsUUFBUSxHQUFDLEVBQTFCLEVBQTZCO0FBQ3pCMUMsUUFBQUEsRUFBRSxDQUFDdUIsR0FBSCxDQUFPLE9BQVAsRUFEeUIsQ0FHekI7O0FBQ0EsWUFBSW9CLE1BQU0sR0FBRyxLQUFLQyxJQUFMLENBQVVsQixjQUFWLENBQXlCLFdBQXpCLENBQWI7QUFDQWlCLFFBQUFBLE1BQU0sQ0FBQ0UsV0FBUCxDQUFtQixLQUFLdEMsT0FBeEIsRUFMeUIsQ0FPekI7O0FBQ0EsWUFBSXVDLFFBQVEsR0FBQyxLQUFLdkMsT0FBTCxDQUFhVyxZQUFiLENBQTBCLEtBQTFCLEVBQWlDNkIsVUFBakMsR0FBNEMsQ0FBekQ7QUFDQSxhQUFLM0MsU0FBTCxDQUFlYyxZQUFmLENBQTRCbEIsRUFBRSxDQUFDZ0QsTUFBL0IsRUFBdUNDLFdBQXZDLEdBQW1ELEtBQUt6QyxTQUFMLENBQWVzQyxRQUFmLENBQW5ELENBVHlCLENBWXpCOztBQUNBLGFBQUt2QyxPQUFMLEdBQWFQLEVBQUUsQ0FBQ2tELFdBQUgsQ0FBZSxLQUFLeEMsVUFBcEIsQ0FBYjtBQUNBLGFBQUtILE9BQUwsQ0FBYTZCLENBQWIsR0FBZSxDQUFmO0FBQ0FPLFFBQUFBLE1BQU0sQ0FBQ1EsUUFBUCxDQUFnQixLQUFLNUMsT0FBckI7QUFFQSxhQUFLTSxPQUFMLEdBQWEsSUFBYixDQWpCeUIsQ0FrQnpCOztBQUNBLGFBQUtDLFFBQUw7QUFDSCxPQXBCRCxNQXFCSTtBQUNBZCxRQUFBQSxFQUFFLENBQUN1QixHQUFILENBQU8sT0FBUDtBQUNIO0FBQ0osS0EzQlUsRUEyQlQsSUEzQlMsQ0FBWCxDQVp5QyxDQXlDekM7O0FBQ0EsUUFBSTZCLElBQUksR0FBQ3BELEVBQUUsQ0FBQ3NDLE1BQUgsQ0FBVSxHQUFWLEVBQWMsS0FBS2xDLFNBQUwsQ0FBZW1DLENBQTdCLEVBQStCLENBQUMsR0FBaEMsQ0FBVDtBQUVBLFFBQUljLE1BQU0sR0FBQ3JELEVBQUUsQ0FBQ3lDLFFBQUgsQ0FBWSxZQUFXO0FBQzlCLFdBQUtyQyxTQUFMLENBQWVjLFlBQWYsQ0FBNEJsQixFQUFFLENBQUNnRCxNQUEvQixFQUF1Q0MsV0FBdkMsR0FBbUQsS0FBS3pDLFNBQUwsQ0FBZSxDQUFmLENBQW5ELENBRDhCLENBRTlCOztBQUNBLFVBQUcsS0FBS0ssT0FBTCxJQUFjLElBQWpCLEVBQXNCO0FBQ2xCLFlBQUl5QyxVQUFVLEdBQUN0RCxFQUFFLENBQUNpQixJQUFILENBQVEsd0JBQVIsRUFBa0NDLFlBQWxDLENBQStDbEIsRUFBRSxDQUFDbUIsS0FBbEQsQ0FBZjtBQUNBbUMsUUFBQUEsVUFBVSxDQUFDaEMsTUFBWCxHQUFrQixXQUFTLEtBQUtSLFFBQWhDO0FBQ0EsYUFBS0QsT0FBTCxHQUFhLEtBQWI7QUFDSDtBQUNKLEtBUlUsRUFRVCxJQVJTLENBQVgsQ0E1Q3lDLENBd0R6Qzs7QUFDQSxRQUFJMEMsUUFBUSxHQUFDdkQsRUFBRSxDQUFDdUQsUUFBSCxDQUFZbEIsRUFBWixFQUFlRyxNQUFmLEVBQXNCWSxJQUF0QixFQUEyQkMsTUFBM0IsQ0FBYjtBQUVBLFNBQUtqRCxTQUFMLENBQWVvRCxTQUFmLENBQXlCRCxRQUF6QjtBQUNILEdBdklJO0FBeUlMO0FBQ0FFLEVBQUFBLFFBMUlLLHNCQTBJSztBQUNOekQsSUFBQUEsRUFBRSxDQUFDdUIsR0FBSCxDQUFPLE1BQVA7QUFDQXZCLElBQUFBLEVBQUUsQ0FBQzhCLFFBQUgsQ0FBWTRCLE1BQVosR0FGTSxDQUVlOztBQUNyQjFELElBQUFBLEVBQUUsQ0FBQzhCLFFBQUgsQ0FBWTZCLFNBQVosQ0FBc0IsTUFBdEIsRUFITSxDQUd3QjtBQUNqQztBQTlJSSxDQUFUIiwic291cmNlUm9vdCI6Ii8iLCJzb3VyY2VzQ29udGVudCI6WyJcclxuXHJcbmNjLkNsYXNzKHtcclxuICAgIGV4dGVuZHM6IGNjLkNvbXBvbmVudCxcclxuXHJcbiAgICBwcm9wZXJ0aWVzOiB7XHJcbiAgICAgICAgcm9wZV9ub2RlOntcclxuICAgICAgICAgICAgZGVmYXVsdCA6IG51bGwsXHJcbiAgICAgICAgICAgIHR5cGUgOiBjYy5Ob2RlXHJcbiAgICAgICAgfSxcclxuICAgICAgICBjb3dfaW5zOntcclxuICAgICAgICAgICAgZGVmYXVsdDogbnVsbCxcclxuICAgICAgICAgICAgdHlwZTpjYy5Ob2RlXHJcbiAgICAgICAgfSxcclxuICAgICAgICByb3BlX2ltZ3M6e1xyXG4gICAgICAgICAgICBkZWZhdWx0OltdLFxyXG4gICAgICAgICAgICB0eXBlOmNjLlNwcml0ZUZyYW1lXHJcbiAgICAgICAgfSxcclxuXHJcbiAgICAgICAgLy/lho3nu5HlrprkuIDkuKrpooTliLbkvZNcclxuICAgICAgICBjb3dfcHJlZmFiOntcclxuICAgICAgICAgICAgZGVmYXVsdDpudWxsLFxyXG4gICAgICAgICAgICB0eXBlOmNjLlByZWZhYlxyXG4gICAgICAgIH1cclxuXHJcbiAgICB9LFxyXG5cclxuICAgIC8vIExJRkUtQ1lDTEUgQ0FMTEJBQ0tTOlxyXG5cclxuICAgIG9uTG9hZCAoKSB7XHJcbiAgICAgICAgdGhpcy5zdWNjZXNzPWZhbHNlO1xyXG5cclxuICAgICAgICAvL+WIneWni+WMluWIhuaVsFxyXG4gICAgICAgIHRoaXMuc2NvcmVOdW09MDtcclxuICAgIH0sXHJcblxyXG4gICAgc3RhcnQgKCkge1xyXG4gICAgICAgIGxldCBjb3VudERvd25MYWJlbD1jYy5maW5kKFwiQ2FudmFzL2JnLVNwcml0ZS9jb3VudF9kb3duXCIpLmdldENvbXBvbmVudChjYy5MYWJlbCk7XHJcbiAgICAgICAgbGV0IHRpbWU9MzA7XHJcbiAgICAgICAgdGhpcy5zY2hlZHVsZShmdW5jdGlvbigpe1xyXG4gICAgICAgICAgICB0aW1lLS07XHJcbiAgICAgICAgICAgIGNvdW50RG93bkxhYmVsLnN0cmluZz10aW1lK1wic1wiO1xyXG5cclxuICAgICAgICAgICAgaWYodGltZT09MCl7XHJcbiAgICAgICAgICAgICAgICBjYy5sb2coXCLmuLjmiI/nu5PmnZ/vvIFcIik7XHJcbiAgICAgICAgICAgICAgICAvL+iOt+WPluW8ueeql+iKgueCuVxyXG4gICAgICAgICAgICAgICAgbGV0IHJlc3VsdE5vZGU9Y2MuZmluZChcIkNhbnZhcy9yZXN1bHRcIik7XHJcbiAgICAgICAgICAgICAgICAvL+iOt+WPlnRpdGxl5ZKMY29udGVudOS4pOS4quiKgueCuVxyXG4gICAgICAgICAgICAgICAgbGV0IHRpdGxlTm9kZT1yZXN1bHROb2RlLmdldENoaWxkQnlOYW1lKFwidGl0bGVcIik7XHJcbiAgICAgICAgICAgICAgICBsZXQgY29udGVudE5vZGU9cmVzdWx0Tm9kZS5nZXRDaGlsZEJ5TmFtZShcImNvbnRlbnRcIik7XHJcbiAgICAgICAgICAgICAgICAvL+WxleekuuWIhuaVsFxyXG4gICAgICAgICAgICAgICAgdGl0bGVOb2RlLmdldENvbXBvbmVudChjYy5MYWJlbCkuc3RyaW5nPVwi5pyA57uI5b6X5YiG77yaXCIrdGhpcy5zY29yZU51bTtcclxuXHJcbiAgICAgICAgICAgICAgICAvL+iOt+WPlue7hOS7tlxyXG4gICAgICAgICAgICAgICAgbGV0IGNvbnRlbnRMYWJlbD1jb250ZW50Tm9kZS5nZXRDb21wb25lbnQoY2MuTGFiZWwpO1xyXG4gICAgICAgICAgICAgICAgc3dpdGNoKHRydWUpe1xyXG4gICAgICAgICAgICAgICAgICAgIGNhc2UgdGhpcy5zY29yZU51bTw9MzpcclxuICAgICAgICAgICAgICAgICAgICAgICAgY29udGVudExhYmVsLnN0cmluZz1cIuWll+eJm+mdkumTnFwiO1xyXG4gICAgICAgICAgICAgICAgICAgICAgICBicmVhaztcclxuICAgICAgICAgICAgICAgICAgICBjYXNlIHRoaXMuc2NvcmVOdW08PTY6XHJcbiAgICAgICAgICAgICAgICAgICAgICAgIGNvbnRlbnRMYWJlbC5zdHJpbmc9XCLlpZfniZvpq5jmiYtcIjtcclxuICAgICAgICAgICAgICAgICAgICAgICAgYnJlYWs7XHJcbiAgICAgICAgICAgICAgICAgICAgY2FzZSB0aGlzLnNjb3JlTnVtPjY6XHJcbiAgICAgICAgICAgICAgICAgICAgICAgIGNvbnRlbnRMYWJlbC5zdHJpbmc9XCLlpZfniZvnjovogIVcIjtcclxuICAgICAgICAgICAgICAgICAgICAgICAgYnJlYWs7XHJcbiAgICAgICAgICAgICAgICB9XHJcblxyXG4gICAgICAgICAgICAgICAgcmVzdWx0Tm9kZS5hY3RpdmU9dHJ1ZTtcclxuICAgICAgICAgICAgICAgIGNjLmRpcmVjdG9yLnBhdXNlKCk7XHJcbiAgICAgICAgICAgIH1cclxuICAgICAgICB9LDEpO1xyXG5cclxuICAgICAgICB9LFxyXG5cclxuICAgIC8vIHVwZGF0ZSAoZHQpIHt9LFxyXG5cclxuICAgIC8v54K55Ye75LqL5Lu25o2V5o2J5Ye95pWwXHJcbiAgICBjbGlja0NhcHR1cmU6ZnVuY3Rpb24gKGV2ZW50LGN1c3RvbUV2ZW50RGF0ZSl7XHJcbiAgICAgICAgdGhpcy5yb3BlX25vZGUuYWN0aXZlPXRydWU7XHJcbiAgICAgICAgLy/orr7nva7nu7PlrZDlnKjlvZPliY3niLboioLngrnnmoTpobrluo9cclxuICAgICAgICB0aGlzLnJvcGVfbm9kZS5zZXRTaWJsaW5nSW5kZXgoMTAwKTtcclxuXHJcbiAgICAgICAgLy/orr7nva7nu7PlrZDnmoTotbflp4vkvY3nva5cclxuICAgICAgICB0aGlzLnJvcGVfbm9kZS55PS01MDA7XHJcbiAgICAgICAgLy/lkJHkuIrnp7vliqhcclxuICAgICAgICBjb25zdCB1cD1jYy5tb3ZlVG8oMC40LHRoaXMucm9wZV9ub2RlLngsMCk7XHJcblxyXG5cclxuICAgICAgICAvL+WIpOWumue7k+aenFxyXG4gICAgICAgIGxldCByZXN1bHQ9Y2MuY2FsbEZ1bmMoZnVuY3Rpb24oKXtcclxuICAgICAgICAgICAgLy/ojrflj5blvZPliY3niZvlhL/nmoR454K5XHJcbiAgICAgICAgICAgIGxldCBjdXJyZW50WD10aGlzLmNvd19pbnMueDtcclxuICAgICAgICAgICAgaWYoY3VycmVudFg+LTgwJiZjdXJyZW50WDw4MCl7XHJcbiAgICAgICAgICAgICAgICBjYy5sb2coXCLmjZXmjYnmiJDlip/vvIFcIik7XHJcblxyXG4gICAgICAgICAgICAgICAgLy/np7vpmaRcclxuICAgICAgICAgICAgICAgIGxldCBiZ05vZGUgPSB0aGlzLm5vZGUuZ2V0Q2hpbGRCeU5hbWUoXCJiZy1TcHJpdGVcIik7XHJcbiAgICAgICAgICAgICAgICBiZ05vZGUucmVtb3ZlQ2hpbGQodGhpcy5jb3dfaW5zKTtcclxuXHJcbiAgICAgICAgICAgICAgICAvL+abtOaNoue7s+WtkCzojrflj5bniZvlhL/nmoTnsbvlnotcclxuICAgICAgICAgICAgICAgIGxldCByb3BlVHlwZT10aGlzLmNvd19pbnMuZ2V0Q29tcG9uZW50KFwiY293XCIpLnJhbmRvbVR5cGUrMTtcclxuICAgICAgICAgICAgICAgIHRoaXMucm9wZV9ub2RlLmdldENvbXBvbmVudChjYy5TcHJpdGUpLnNwcml0ZUZyYW1lPXRoaXMucm9wZV9pbWdzW3JvcGVUeXBlXTtcclxuXHJcblxyXG4gICAgICAgICAgICAgICAgLy/nlJ/miJDmlrDnmoTniZvoioLngrlcclxuICAgICAgICAgICAgICAgIHRoaXMuY293X2lucz1jYy5pbnN0YW50aWF0ZSh0aGlzLmNvd19wcmVmYWIpO1xyXG4gICAgICAgICAgICAgICAgdGhpcy5jb3dfaW5zLnk9MDtcclxuICAgICAgICAgICAgICAgIGJnTm9kZS5hZGRDaGlsZCh0aGlzLmNvd19pbnMpO1xyXG5cclxuICAgICAgICAgICAgICAgIHRoaXMuc3VjY2Vzcz10cnVlO1xyXG4gICAgICAgICAgICAgICAgLy/liIbmlbDliqDkuIBcclxuICAgICAgICAgICAgICAgIHRoaXMuc2NvcmVOdW0rKztcclxuICAgICAgICAgICAgfVxyXG4gICAgICAgICAgICBlbHNle1xyXG4gICAgICAgICAgICAgICAgY2MubG9nKFwi5o2V5o2J5aSx6LSl77yBXCIpO1xyXG4gICAgICAgICAgICB9XHJcbiAgICAgICAgfSx0aGlzKTtcclxuXHJcbiAgICAgICAgLy/lvoDlm57mi4lcclxuICAgICAgICBsZXQgZG93bj1jYy5tb3ZlVG8oMC41LHRoaXMucm9wZV9ub2RlLngsLTUwMCk7XHJcblxyXG4gICAgICAgIGxldCBmaW5pc2g9Y2MuY2FsbEZ1bmMoZnVuY3Rpb24gKCl7XHJcbiAgICAgICAgICAgIHRoaXMucm9wZV9ub2RlLmdldENvbXBvbmVudChjYy5TcHJpdGUpLnNwcml0ZUZyYW1lPXRoaXMucm9wZV9pbWdzWzBdO1xyXG4gICAgICAgICAgICAvL+WIpOaWreaYr+WQpuaNleaNieaIkOWKn1xyXG4gICAgICAgICAgICBpZih0aGlzLnN1Y2Nlc3M9PXRydWUpe1xyXG4gICAgICAgICAgICAgICAgbGV0IHNjb3JlTGFiZWw9Y2MuZmluZChcIkNhbnZhcy9iZy1TcHJpdGUvc2NvcmVcIikuZ2V0Q29tcG9uZW50KGNjLkxhYmVsKTtcclxuICAgICAgICAgICAgICAgIHNjb3JlTGFiZWwuc3RyaW5nPVwiU2NvcmU6XCIrdGhpcy5zY29yZU51bTtcclxuICAgICAgICAgICAgICAgIHRoaXMuc3VjY2Vzcz1mYWxzZTtcclxuICAgICAgICAgICAgfVxyXG4gICAgICAgIH0sdGhpcyk7XHJcblxyXG5cclxuXHJcbiAgICAgICAgLy/lrprkuYnkuIDkuKrluo/liJfliqjnlLtcclxuICAgICAgICBsZXQgc2VxdWVuY2U9Y2Muc2VxdWVuY2UodXAscmVzdWx0LGRvd24sZmluaXNoKTtcclxuXHJcbiAgICAgICAgdGhpcy5yb3BlX25vZGUucnVuQWN0aW9uKHNlcXVlbmNlKTtcclxuICAgIH0sXHJcblxyXG4gICAgLy/lhbPpl63mjInpkq7vvIznu6fnu63muLjmiI9cclxuICAgIGNsb3NlQnRuKCl7XHJcbiAgICAgICAgY2MubG9nKFwi57un57ut5ri45oiPXCIpO1xyXG4gICAgICAgIGNjLmRpcmVjdG9yLnJlc3VtZSgpOy8v5Yig6Zmk6YC76L6RXHJcbiAgICAgICAgY2MuZGlyZWN0b3IubG9hZFNjZW5lKFwiZ2FtZVwiKTsvL+mHjeaWsOWKoOi9vVxyXG4gICAgfVxyXG5cclxufSk7XHJcbiJdfQ==