import Vue from 'vue'
const methods = {
  showToastType(txt, type = "txt", time=3000) {
    const toast = this.$createToast({
      txt,
      type,
      time
    }, true);
    toast.show();
  }
}

export { methods }