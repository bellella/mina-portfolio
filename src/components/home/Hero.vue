<template>
  <section id="hero_section">
    <div class="section_container">
      <div class="hero_grid">
        <div class="text">
          <!-- <p class="top_sub_title">Hi🤩 I'm</p> -->
          <p class="top_sub_title">{{ $t("message.hello") }} 저는</p>
          <h1 class="title">Full stack Developer</h1>
          <h5 class="sub_title">Mina Choi 입니다</h5>
          <p class="description">아름다운 웹사이트를 만들고싶습니다</p>
          <button class="main_btn">contact me</button>
        </div>
        <div class="image">
          <img
            ref="heroImg"
            @click="startAnimation"
            src="https://static.toss.im/3d-emojis/u1FAD3-u1F60D.png"
            alt=""
          />
        </div>
      </div>
    </div>
    <div class="stickers" ref="stickers" :class="{ show: stickerShow }">
      <div
        v-for="(st, i) in stickers"
        :key="st.imgUrl"
        class="sticker"
        @click="clickSticker(i)"
        :class="{ hide: st.hide }"
      >
        <img :src="st.imgUrl" />
      </div>
      <div
        v-for="(st, i) in stickers"
        :key="st.imgUrl"
        class="sticker"
        @click="clickSticker(i)"
        :class="{ hide: st.hide }"
      >
        <img :src="st.imgUrl" />
      </div>
      <div
        v-for="(st, i) in stickers"
        :key="st.imgUrl"
        class="sticker"
        @click="clickSticker(i)"
        :class="{ hide: st.hide }"
      >
        <img :src="st.imgUrl" />
      </div>
    </div>
  </section>
</template>
<script>
import { gsap } from "gsap";

export default {
  data() {
    return {
      heroAnim: null,
      stickers: [
        {
          imgUrl: "/images/stickers/sticker1.png",
        },
        {
          imgUrl: "/images/stickers/sticker2.png",
        },
        {
          imgUrl: "/images/stickers/sticker3.png",
        },
        {
          imgUrl: "/images/stickers/sticker4.png",
        },
        {
          imgUrl: "/images/stickers/sticker5.png",
        },
        {
          imgUrl: "/images/stickers/sticker1.png",
        },
        {
          imgUrl: "/images/stickers/sticker2.png",
        },
        {
          imgUrl: "/images/stickers/sticker3.png",
        },
        {
          imgUrl: "/images/stickers/sticker4.png",
        },
      ],
      stickerShow: false,
    };
  },
  mounted() {
    this.setAnimation();
  },
  methods: {
    stickerSprinkle() {
      if (this.stickerShow) {
        return;
      }
      this.stickerShow = true;
      document.querySelectorAll(".sticker").forEach(st => {
                const halfX = screen.width / 2;
        const halfY = screen.height / 2;
        const maxX = document.body.offsetWidth - halfX;
        const maxY = document.body.offsetHeight - halfY;
        const scale = Math.random() * 1 + 1;
        const x = Math.random() * (maxX + halfX) - halfX;
        const y = Math.random() * (maxY + halfY) - halfY;
        st.style.transform = `translate(${x}px, ${y}px) scale(${scale})`;
      })
      // this.stickers.forEach((s, i) => {
      //   let st = document.getElementsByClassName("sticker")[i];
      //   const halfX = screen.width / 2;
      //   const halfY = screen.height / 2;
      //   const maxX = document.body.offsetWidth - halfX;
      //   const maxY = document.body.offsetHeight - halfY;
      //   const scale = Math.random() * 1 + 1;
      //   const x = Math.random() * (maxX + halfX) - halfX;
      //   const y = Math.random() * (maxY + halfY) - halfY;
      //   st.style.transform = `translate(${x}px, ${y}px) scale(${scale})`;
      // });
    },
    setAnimation() {
      this.heroAnim = gsap.to(this.$refs.heroImg, {
        keyframes: {
          "0%": { scaleX: 1, scaleY: 1 },
          "30%": { scaleX: 1.25, scaleY: 0.75 },
          "40%": { scaleX: 0.75, scaleY: 1.25 },
          "50%": { scaleX: 1.15, scaleY: 0.85 },
          "65%": { scaleX: 1.05, scaleY: 0.95 },
          "75%": { scaleX: 1, scaleY: 1 },
          "100%": { scaleX: 1.05, scaleY: 0.95 },
        },
        duration: 1,
      });
    },
    startAnimation() {
      this.heroAnim.restart();
      this.stickerSprinkle();
    },
    clickSticker(i) {
      this.stickers[i].hide = true;
    },
  },
};
</script>

<style lang="scss" scoped>
#hero_section {
  //height: 100vh;
  padding-top: calc(var(--header-height));
      min-height: 100vh;
  @media (min-width: 970px) {
      display: flex;
    align-items: center;
  }
  .section_container {
    padding: 10vw 4vw;
  }
  .hero_grid {
    //grid-gap: 30px;
    height: 100%;
    align-items: center;
    display: flex;
    justify-content: space-between;
    @media (max-width: 640px) {
      justify-content: center;
      flex-flow: column;
    }
  }
  .text {
    .title {
      font-weight: 800;
      font-size: clamp(50px, 8vw, 80px);
    }
    .top_sub_title {
      font-weight: 500;
      font-size: clamp(20px, 2.5vw, 25px);
      line-height: 42px;
      //color: var(--text-sub-color);
    }
    .sub_title {
      font-weight: 500;
      font-size: clamp(25px, 3vw, 30px);
      margin-top: 10px;
    }
    .description {
      color: var(--text-sub-color);
      font-size: clamp(18px, 2vw, 20px);
      margin-top: 10px;
    }
    .main_btn {
      margin-top: 30px;
    }
  }
  .image {
    max-width: 500px;
    @media (max-width: 640px) {
      max-width: 30vh;
    }
    img {
      cursor: pointer;
      height: 100%;
    }
    &:hover {
      filter: drop-shadow(0 0 25px #fff);
    }
  }
  .stickers {
    position: absolute;
    top: 50%;
    left: 50%;
    transform: translate(-50%, -50%);
    width: 100px;
    height: 100px;
    opacity: 0;
    z-index: 10;
    &.show {
      opacity: 1;
    }
    .sticker {
      width: 100px;
      position: absolute;
      top: 0;
      left: 0;
      transition: all 1s ease-in-out;
      cursor: pointer;
      &.hide {
        opacity: 0;
      }
    }
  }
}
</style>