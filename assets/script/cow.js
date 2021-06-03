
const cow_skin=cc.Class({
    name:"cow_skin",
    properties:{
        cows:{
            default:[],
            type:[cc.SpriteFrame]
        }
    }
});

cc.Class({
    extends: cc.Component,

    properties: {
        cow_sets:{
            default:[],
            type:[cow_skin]
        }
    },

    onLoad(){
        this.intervalTime=0;

        //随机生成一种类型
        this.randomType=Math.floor(Math.random()*3);
    },


    start () {

    },

    update(dt){
        //总的间隔时间
        this.intervalTime+=dt;
        let index=Math.floor(this.intervalTime/0.2);//向下取整
        index=index%3;
        //cc.log(index);
        //获取一种牛的类型
        let cowSet=this.cow_sets[this.randomType];
        //获取精灵组件
        let sprite=this.node.getComponent(cc.Sprite);
        sprite.spriteFrame=cowSet.cows[index];
    },

    runCallback(){
        cc.log("一个轮回结束！");
        this.randomType=Math.floor(Math.random()*3);
    }

});
