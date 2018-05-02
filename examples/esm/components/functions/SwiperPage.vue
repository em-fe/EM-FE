<template>
  <div>
    <emfe-swiper>
      <div v-for="item in swiper">
        <a href="javascript:;">
          <img :src="item">
        </a>
      </div>
    </emfe-swiper>
  </div>
</template>
<script>
export default {
  name: 'swiperPage',
  data() {
    return {
      swiper: [
        'http://y.gtimg.cn/music/photo_new/T003R720x288M000003CP0NB1sj9Xm.jpg',
        'http://y.gtimg.cn/music/photo_new/T003R720x288M000000gMlHD1HYefQ.jpg',
        'http://y.gtimg.cn/music/photo_new/T003R720x288M000001PhcVe2c6ghA.jpg',
        'http://y.gtimg.cn/music/photo_new/T003R720x288M0000035cVas0wh3uZ.jpg',
        'http://y.gtimg.cn/music/photo_new/T003R720x288M000004DQgZ002xHaw.jpg',
      ],
    };
  },
}
</script>
<style>
a {
  display: block;
  width: 100%;
  overflow: hidden;
  text-decoration: none;
}
img {
  display: block;
  width: 100%;
}
</style>
