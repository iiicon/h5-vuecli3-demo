<template>
  <div class="tab">
    <cube-tab-bar
      class="j-tabbar"
      v-model="selectedLabelSlots"
      inline
      @click="clickHandler"
      @change="changeTabBar"
    >
      <cube-tab v-for="(item) in tabs" :label="item.label" :key="item.label">
        <!-- name为icon的插槽 -->
        <svg slot="icon" class="icon" aria-hidden="true">
          <use :xlink:href="item.icon"></use>
        </svg>
        <!-- 默认插槽 -->
        {{item.label}}
      </cube-tab>
    </cube-tab-bar>
  </div>
</template>

<script type="text/ecmascript-6">
export default {
  data() {
    return {
      selectedLabelSlots: "首页",
      tabs: [
        {
          label: "首页",
          icon: "#iconhuaban"
        },
        {
          label: "我的",
          icon: "#iconhuabanfuben1"
        }
      ]
    };
  },
  created() {
    this.initTabBar();
  },
  methods: {
    initTabBar() {
      var currentName = this.$router.currentRoute.name;
      if (currentName === "mine") {
        this.selectedLabelSlots = "我的";
      } else {
        this.selectedLabelSlots = "首页";
      }
      this.changeTabBar(this.selectedLabelSlots);
    },
    clickHandler(label) {
      if (label === "首页") {
        this.$router.replace("/home");
      } else {
        this.$router.replace("/mine");
      }
    },
    changeTabBar(label) {
      if (label === "首页") {
        this.tabs[0].icon = "#iconhuaban";
        this.tabs[1].icon = "#iconhuabanfuben1";
      } else {
        this.tabs[0].icon = "#iconhuabanfuben";
        this.tabs[1].icon = "#iconhuabanfuben2";
      }
    }
  }
};
</script>

<style lang="scss" scoped>
@import "~@/assets/css/variable.scss";

.j-tabbar {
  position: fixed;
  bottom: 0;
  left: 0;
  right: 0;
  width: 100%;
  height: 50px;
  z-index: 100;
  background: #ffffff;
  border-top: 1px solid #e6e6e6;

  .cube-tab {
    flex-direction: column;
    align-items: center;
    font-size: 11px;

    svg {
      margin-bottom: 5px;
    }
  }
}
</style>
