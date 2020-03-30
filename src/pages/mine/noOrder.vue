<template>
  <div>
    <header>
      <van-nav-bar title="我的订单" left-arrow @click-left="onClickLeft" />
    </header>
    <div class="image">
      <img src="../../assets/img/noorder.png" alt="">
      <div class="text">
        <p>您还没有相关的订单</p>
        <p>可以去看看有哪些想买的</p>
      </div>
    </div>
  </div>
</template>

<script>
  export default {
    data() {
      return {
        
      }
    },
    methods: {
      onClickLeft(){
        this.$router.push("./mine");
      }
    },
  }
</script>

<style scoped>
.image {
  width: 180px;
  height: 180px;
  margin: 0 auto;
  margin-top: 60px;
}
.image img {
  width: 100%;
  height: 100%;
}
</style>