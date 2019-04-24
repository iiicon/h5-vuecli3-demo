<template>
  <div class="wrapper">
    <img width="99" height="109" src="@/assets/images/no-data.png" alt>
    <span class="text">这里好冷清，什么也没有</span>
  </div>
</template>

<style lang="scss" scoped>
@import "~@/assets/css/variable.scss";
.wrapper {
  display: flex;
  flex-direction: column;
  height: 100vh;
  align-items: center;
  background: #ffffff;

  img {
    margin: 130px 0 25px;
  }

  .text {
    color: $color-tips;
    font-size: $font-sublarge;
  }
}
</style>
