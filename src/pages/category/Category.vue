<template>
  <div>
    <div class="search">
      <!-- 搜索导航 -->
      <!-- <SearchNav></SearchNav> -->
      <div class="shop">
        <!-- 左边 -->
        <div class="menu-wrapper">
          <ul>
            <!-- current -->
            <li
              class="menu-item"
              v-for="(goods,index) in searchgoods"
              :key="index"
              :class="{current: index === currentIndex}"
              @click="clickList(index)"
              ref="menuList"
            >
              <span>{{goods.name}}</span>
            </li>
          </ul>
        </div>
        <!-- 右边 -->
        <div class="shop-wrapper">
          <ul ref="itemList">
            <li class="shops-li" v-for="(goods, index1) in searchgoods" :key="index1">
              <div class="shops-title">
                <h4>{{goods.name}}</h4>
                <a href>查看更多 ></a>
              </div>
              <ul class="phone-type" v-if="goods.tag === 'phone'">
                <li v-for="(phone,index) in goods.category" :key="index">
                  <img :src="phone.icon" alt />
                </li>
              </ul>
              <ul class="shops-items">
                <li v-for="(item, index2) in goods.items" :key="index2">
                  <img :src="item.icon" alt />
                  <span>{{item.title}}</span>
                </li>
              </ul>
            </li>
          </ul>
        </div>
      </div>
    </div>
    <Tabbar></Tabbar>
  </div>
</template>

<script>
import Tabbar from "@/components/tabbar";
import BScroll from "better-scroll";
export default {
  data() {
    return {
      // scrollY：0, //右侧列表滑动的y轴坐标
      rightLiTops: [], //所有分类头部位置
      searchgoods: [{
          name: "碗碟",
          category: [
            {icon: '../../assets/img/201.jpg'},
            {icon: '../../assets/img/201.jpg'},
            {icon: '../../assets/img/201.jpg'}
          ],
          items: [
            {icon: '../../assets/img/201.jpg', title: '碗碟'},
            {icon: '../../assets/img/201.jpg', title: '碗碟'},
            {icon: '../../assets/img/201.jpg', title: '碗碟'},
            {icon: '../../assets/img/201.jpg', title: '碗碟'}
          ],
          tag: "phone",
        },
        {
          name: "花瓶",
          category: [
            {icon: '../../assets/img/201.jpg'},
            {icon: '../../assets/img/201.jpg'},
            {icon: '../../assets/img/201.jpg'}
          ],
          items: [
            {icon: '../../assets/img/201.jpg', title: '碗碟'},
            {icon: '../../assets/img/201.jpg', title: '碗碟'},
            {icon: '../../assets/img/201.jpg', title: '碗碟'},
            {icon: '../../assets/img/201.jpg', title: '碗碟'}
          ],
          tag: "phone",
        },
        {
          name: "杯子",
          category: [
            {icon: '../../assets/img/201.jpg'},
            {icon: '../../assets/img/201.jpg'},
            {icon: '../../assets/img/201.jpg'}
          ],
          items: [
            {icon: '../../assets/img/201.jpg', title: '碗碟'},
            {icon: '../../assets/img/201.jpg', title: '碗碟'},
            {icon: '../../assets/img/201.jpg', title: '碗碟'},
            {icon: '../../assets/img/201.jpg', title: '碗碟'}
          ],
          tag: "igh"
        }
      ]
    };
  },
  components: {
    Tabbar
  },
  computed: {
    // ...mapState(["searchgoods"]), //列表数据
    //动态绑定class类名
    currentIndex(index) {
      const { scrollY, rightLiTops } = this;
      return rightLiTops.findIndex((tops, index) => {
        this._initLeftScroll(index);
        return scrollY >= tops && scrollY < rightLiTops[index + 1];
      });
    }
  },
  // mounted() {
  //   this.$store.dispatch("reqSearchGoods");
  // },
  watch: {
    searchgoods() {
      //监听数据
      this.$nextTick(() => {
        //左右两边滚动
        this._initBScroll(); //右边列表高度
        this._initRightHeight();
      });
    }
  },
  methods: {
    _initBScroll() {
      //左边滚动
      this.leftBscroll = new BScroll(".menu-wrapper", {});
      //右边滚动
      this.rightBscroll = new BScroll(".shop-wrapper", {
        probeType: 3 //在滚动中触发scroll 事件
      });
      this.rightBscroll.on("scroll", pos => {
        this.scrollY = Math.abs(pos.y);
        console.log(this.scrollY);
      });
    },
    //求出右边列表的高度
    _initRightHeight() {
      let itemArray = []; //定义一个伪数组
      let top = 0;
      itemArray.push(top);
      //获取右边所有li的礼
      let allList = this.$refs.itemList.getElementsByClassName("shops-li");
      //allList伪数组转化成真数组
      Array.prototype.slice.call(allList).forEach(li => {
        top += li.clientHeight; //获取所有li的每一个高度
        itemArray.push(top);
      });
      this.rightLiTops = itemArray;
      // console.log(this.rightLiTops)
    },
    //点击左边实现滚动
    clickList(index){
        this.scrollY = this.rightLiTops[index];
        console.log(this.scrollY)
        this.rightBscroll.scrollTo(0,-this.scrollY,200,)
    },
    //左右联调
    _initLeftScroll(index) {
      let menu = this.$refs.menuList;
      let el = menu[index];
      this.leftBscroll.scrollToElement(el, 300, 0, -300);
    }
  }
};
</script>

<style scoped>
.search{
  width: 100%;
  height: 100%;
  background-color: #f5f5f5;
  overflow: hidden;
}
.search .shop {
  display: flex;
  position: absolute;
  top: 60px;
  bottom: 50px;
  width: 100%;
  overflow: hidden;
}
.menu-wrapper {
  background-color: #e0e0e0;
  width: 80px;
  flex: 0 0 80px;
}
.menu-wrapper .menu-item {
  width: 100%;
  height: 60px;
  background-color: #fafafa;
  display: flex;
  justify-content: center;
  align-items: center;
  /* font-family:; */
  color: #666;
  position: relative;
}
.menu-wrapper .current {
  color: #e02e24;
  background: #fff;
}
.menu-wrapper .current::before {
  content: "";
  background-color: #e02e24;
  width: 4px;
  height: 30px;
  position: absolute;
  left: 0;
}
.shop-wrapper {
  flex: 1;
  background: #fff;
}
.shop-wrapper .shops-title {
  display: flex;
  flex-direction: row;
  padding: 0 10px;
  height: 40px;
  align-items: center;
  justify-content: space-between;
  color: #999;
}
.shop-wrapper a {
  text-decoration: none;
  color: #9c9c9c;
  font-size: 14px;
}  
.shop-wrapper .shops-items {
  display: flex;
  flex-wrap: wrap;
}  
.shop-wrapper .shops-items li {
  display: flex;
  flex-direction: column;
  width: 33.3%;
  height: 90px;
  justify-content: center;
  align-items: center;
}
.shop-wrapper .shops-items li img {
  width: 60%;
  height: 60%;
  margin-bottom: 5px;
}
.shop-wrapper .shops-items li span {
  color: #151516;
  font-size: 13px;
}    
.phone-type {
  width: 100%;
  display: flex;
  flex-direction: row;
  flex-wrap: wrap;
  border-bottom: 1px solid #cccccc;
} 
.phone-type li {
  width: 33.3%;
  display: flex;
  justify-content: center;
  align-items: center;
  margin: 5px 0;
} 
.phone-type li img {
  width: 70%;
}
</style>