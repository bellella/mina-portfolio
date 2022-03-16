<template>
  <section id="skill_section">
    <div class="section_container">
      <div class="section_top">
        <h3 class="title">skills</h3>
        <h4 class="sub_title">What I've done</h4>
      </div>
      <div class="box_list">
        <div class="box_item" v-for="skill in skillList" :key="skill.title">
          <div class="inner">
            <div class="icons">
              <div class="icon" v-for="img in skill.iconImages" :key="img">
                <img :src="img" :alt="skill.title" />
              </div>
            </div>
            <h4 class="title">{{ skill.title }}</h4>
            <p class="content" v-html="skill.content"></p>
          </div>
        </div>
      </div>
    </div>
  </section>
</template>

<script>
import { ScrollTrigger } from "gsap/ScrollTrigger";
import { gsap } from "gsap";

export default {
  data() {
    return {
      skillList: [
        {
          iconImages: ["/images/skills/vue.png", "/images/skills/angular.png"],
          title: "Vue, Angular",
          content:
            "I make websites using vue and angular yes sometimes react^^ but thes two are my main framework",
        },
        {
          iconImages: ["/images/skills/node.png"],
          title: "HTML5",
          content:
            "Using node js I make Restful server for websites usually back-office",
        },
        {
          iconImages: ["images/skills/html5.png", "/images/skills/sass.png"],
          title: "HTML, CSS",
          content:
            "give best user experience considering all devices. Always stick to what desiners say",
        },
        {
          iconImages: [
            "/images/skills/java.png",
            "/images/skills/springboot.png",
          ],
          title: "Java",
          content: "I also use kotlin for functional code",
        },
      ],
      tl: null,
      mobileAni: null,
    };
  },
  mounted() {
    gsap.registerPlugin(ScrollTrigger);
    this.setScrollAnimation();
    window.addEventListener("resize", () => {
      console.log(screen)
      this.setScrollAnimation();
    });
  },
  methods: {
    setScrollAnimation() {
      if(this.tl) {
        this.tl.kill();
      }
      if(this.mobileAni) {
        this.mobileAni.kill();
      }
      if (screen.width > 500) {
        this.setAni();
      } else {
        this.setMobileAni();
      }
    },
    setAni() {
      let tl = gsap.timeline({
        scrollTrigger: {
          trigger: "#skill_section",
          start: "top 35%",
          end: "top 100%",
          scrub: 3,
          duration: 6,
        },
      });
      gsap.utils.toArray(".box_item").forEach((elem, i) => {
        const isOdd = i % 2 === 0;
        const number = 100;
        const percent = isOdd ? number * -1 : number;
        tl = tl.from(
          elem,
          { xPercent: percent, yPercent: percent, autoAlpha: 0, ease: "power4.out" },
          "<+=25%"
        );
        this.tl = tl;
      });
    },
    setMobileAni() {
      this.mobileAni = gsap.utils.toArray(".box_item").forEach((elem, i) => {
                const isOdd = i % 2 === 0;
        const number = 100;
        const percent = isOdd ? number * -1 : number;
        ScrollTrigger.create({
          trigger: elem,
          scrub: 3,
          onEnter: () => {
            gsap.from(elem, { autoAlpha: 0, xPercent: percent, ease: "power4.out" });
          }
        });
      });
    }
  },
};
</script>

<style lang="scss" scoped>
#skill_section {
  padding: 0 0 200px 0;
  .box_list {
    max-width: 1000px;
    margin: 0 auto;
    display: grid;
    grid-template-columns: repeat(9, 1fr);
    grid-gap: 20px;
    @media (max-width: 970px) {
      display: flex;
      flex-wrap: wrap;
      justify-content: center;
    }
    .box_item {
      position: relative;
      border-radius: 8px;
      @media (max-width: 970px) {
        width: clamp(200px, 300px, 100%);
      }
      &::after {
        content: "";
        display: block;
        padding-bottom: 100%;
      }
      &:nth-child(odd) {
        box-shadow: 7px 7px 4px #efd2e0, -7px -7px 24px #ffe8f8;
        border-radius: 10px;
      }
      &:nth-child(even) {
        background: #fff;
        box-shadow: 10px 10px 30px rgb(0 0 0 / 10%);
        border-radius: 10px;
      }
      &:nth-child(1) {
        .icons .icon:nth-child(1) {
          padding: 8px;
        }
      }
      &:nth-child(3) {
        .icons .icon {
          padding: 5px;
        }
      }
      &:nth-child(4) {
        .icons .icon:nth-child(2) {
          padding: 15px 5px 5px 10px;
        }
      }
      .inner {
        position: absolute;
        width: 100%;
        height: 100%;
        padding: 50px 30px 40px;
        @media (max-width: 970px) {
          padding: 30px;
        }
      }
      .icons {
        display: flex;
        .icon {
          display: flex;
          align-items: center;
          width: 80px;
          height: 80px;
        }
      }
      .title {
        font-weight: 600;
        font-size: 20px;
        margin-top: 20px;
      }
      .content {
        line-height: 27px;
        margin-top: 10px;
      }
      @media (min-width: 970px) {
        &:nth-child(1) {
          grid-column: 1 / span 3;
          grid-row: 1 / span 3;
        }
        &:nth-child(2) {
          grid-column: 4 / span 3;
          grid-row: 1 / span 3;
        }
        &:nth-child(3) {
          grid-column: 3 / span 3;
          grid-row: 4 / span 3;
        }
        &:nth-child(4) {
          grid-column: 6 / span 3;
          grid-row: 4 / span 3;
        }
      }
    }
  }
}
</style>