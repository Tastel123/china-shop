<template>
  <div>
    <header>
      <div class="title">瓷间</div>
      <span class="searchIcon" @click="search">
        <van-icon name="search" />
      </span>
    </header>
    <div class="content">
      <div class="swiper">
        <van-swipe class="my-swipe" :autoplay="3000" indicator-color="white">
          <van-swipe-item>1</van-swipe-item>
          <van-swipe-item>2</van-swipe-item>
          <van-swipe-item>3</van-swipe-item>
          <van-swipe-item>4</van-swipe-item>
        </van-swipe>
      </div>
      <div class="content-1">
        <ul class="examList">
          <li>
            <div class="goodsList">
              <div class="icon iconfont">&#xe71f;</div>
              <div class="goods-title">花瓶</div>
            </div>
          </li>
          <li>
            <div class="goodsList">
              <div class="icon iconfont">&#xe61a;</div>
              <div class="goods-title">杯子</div>
            </div>
          </li>
          <li>
            <div class="goodsList">
              <div class="icon iconfont">&#xe625;</div>
              <div class="goods-title">碗碟</div>
            </div>
          </li>
          <li>
            <div class="goodsList">
              <div class="icon iconfont">&#xe674;</div>
              <div class="goods-title">摆件</div>
            </div>
          </li>
          <li>
            <div class="goodsList">
              <div class="icon iconfont">&#xe604;</div>
              <div class="goods-title">饰品</div>
            </div>
          </li>
          <li>
            <div class="goodsList">
              <div class="icon iconfont">&#xe76a;</div>
              <div class="goods-title">工艺品</div>
            </div>
          </li>
        </ul>
        <!-- <van-grid class="grid" :column-num="3">
        <van-grid-item v-for="value in 6" :key="value" icon="photo-o" text="文字" />
        </van-grid>-->
      </div>
      <div class="content-2">
        
      </div>
    </div>

    <Tabbar></Tabbar>
  </div>
</template>

<script>
import Tabbar from "@/components/tabbar";
export default {
  data() {
    return {
      value: "",
      
    };
  },
  components: {
    Tabbar
  },
  mounted() {},
  methods: {
    search() {
      this.$router.push("./search");
    }
  }
};
</script>

<style scoped>
header {
  height: 40px;
}
header .title {
  text-align: center;
  font-family: serif;
  font-size: 36px;
  display: inline-block;
  margin-left: 30px;
}
header .searchIcon {
  float: right;
  margin-top: 10px;
  margin-right: 10px;
  /* margin-right: 20px; */
}
header .searchIcon .van-icon {
  font-size: 20px;
}
.my-swipe {
  font-size: 0;
}
.my-swipe .van-swipe-item {
  color: #fff;
  font-size: 1.25rem;
  line-height: 11.25rem;
  text-align: center;
  background-color: #5383c3;
}
.content-1 .examList {
  width: 100%;
  margin-top: 10px;
  display: flex;
  flex-direction: row;
  flex-wrap: wrap;
}
.content-1 .goodsList {
  width: 6.5625rem;
  height: 5rem;
  margin: 0.625rem;
  /* background-color: #5383c3; */
}
.goodsList .iconfont {
  padding-top: 0.625rem;
}

.swiper-container {
  width: 100%;
  height: 100%;
}

</style>