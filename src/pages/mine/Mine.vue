<template>
  <div>
    <div class="header">
      <div class="avatar">
        <img src alt />
      </div>
      <div class="nickname">
        <span>Tastel</span>
      </div>
    </div>
    <div class="container">
      <div class="myOrders">
        <div class="orderTitle">
          <span>我的订单</span>
        </div>
        <div class="orderImg" @click="toOrders">
          <div class="iconfont">&#xe60b;</div>
          <span>未付款</span>
        </div>
        <div class="orderImg">
          <div class="iconfont">&#xe6b3;</div>
          <span>待发货</span>
        </div>
        <div class="orderImg">
          <div class="iconfont">&#xe600;</div>
          <span>待收货</span>
        </div>
        <div class="orderImg">
          <div class="iconfont">&#xe606;</div>
          <span>已完成</span>
        </div>
      </div>
      <div class="mine-cell">
        <van-cell-group>
          <van-cell title="我的收藏" icon="goods-collect-o" is-link />
          <van-cell title="收货地址" icon="aim" is-link to="address"/>
          <van-cell title="我的优惠券" icon="discount" is-link />
          <van-cell title="客服中心" icon="service-o" is-link />
        </van-cell-group>
      </div>
    </div>
    <Tabbar></Tabbar>
  </div>
</template>

<script>
import Tabbar from "@/components/tabbar";
export default {
  data() {
    return {};
  },
  components: {
    Tabbar
  },
  methods: {
    toOrders(){
      this.$router.push("./noOrder")
    }
  },
};
</script>

<style scoped>
.header {
  width: 100%;
  height: 200px;
  background-color: #98beea;
}
.header .avatar {
  width: 70px;
  height: 70px;
  position: relative;
  top: 30%;
  margin-left: 20px;
  border-radius: 50%;
  border: 1px solid #000;
}
.header .nickname {
  margin-left: -100px;
  margin-top: 15px;
}
.container {
  text-align: left;
  border-radius: 30px 30px 0 0;
  margin-top: -25px;
  background-color: #fff;
}
.container .myOrders {
  height: 100px;
  width: 100%;
  margin-bottom: 36px;
  padding-top: 20px;
  box-sizing: border-box;
}

.container .myOrders .orderTitle {
  font-size: 20px;
  padding-left: 20px;
}
.container .myOrders .orderImg {
  height: 80px;
  float: left;
  width: 25%;
  text-align: center;
  padding-top: 15px;
  box-sizing: border-box;
}

</style>