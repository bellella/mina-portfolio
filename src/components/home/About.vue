<template>
  <section id="about_section" ref="aboutSection">
    <div class="section_container">
      <div class="section_top">
        <h3 class="title">about me</h3>
        <h4 class="sub_title">저는 풀스택 개발자</h4>
      </div>
      <div class="about_grid">
        <div class="image">
          <!-- <img
            src="https://static.toss.im/3d-emojis/u1FAD3-u1F60D.png"
            alt=""
          /> -->
          <div id="threeScene" class="threeScene" ref="threeScene"></div>
        </div>
        <div class="text">
          <p>안녕하세요 저는 창의적인 개발자 Mina Choi 입니다.</p>
          <p>
            현재 fullstack 으로써 일하고있고 직업에 너무나 만족하고 있는
            중입니다.
          </p>
          <p>
            backend는 주로 node를 다루고 있고 frontend는 Vue, Angular, React
            모두 경험이 있으나 Vue와 Angular를 사용한 프로젝트 경험이 압도적으로
            많은편입니다.
          </p>
          <p>
            웹사이트를 만드는 것을 좋아하고 여러가지 시도를 해보는 것도
            좋아합니다. 그리고 만들고 싶은 웹사이트는 유저경험을 극대화 할수있는
            그리고 심미적인 웹사이트입니다. 개발 시에 가장 중요하게 생각하는
            것은 재사용성입니다.(지금 떠오르는 것은..?)
          </p>
          <p>
            취미는 Netflix, Youtube 등으로 영어공부하기 운동하기 빼고는 없네요
            ..
          </p>
          <p>좋아하는건 파티 ..??</p>
          <p></p>
          <!-- <p>
            Hi I'm creative developer Mina Choi.<br />I've been working as a
            full stack developer for about 3 years. I've been building websites
            from markup to server overall.
          </p>
          <p>
            In current job, I'm responsible for back office and event pages and
            operation. Like I said I'm creative I like creativity and also clean
            code and reusibility.
          </p>
          <p>
            Building website is not my job it's my passion and love. I keep
            making and making and studying for my website career.
          </p> -->
        </div>
      </div>
    </div>
  </section>
</template>

<script>
import * as THREE from "three";
import { GLTFLoader } from "three/examples/jsm/loaders/GLTFLoader.js";
import { OrbitControls } from "three/examples/jsm/controls/OrbitControls";

import { ScrollTrigger } from "gsap/ScrollTrigger";
import { gsap } from "gsap";

export default {
  data() {
    return {
      threes: [],
      threeObjs: {
        heart: null,
      },
      control: null,
      isIn: false,
    };
  },
  mounted() {
    this.threeD();
    this.setScroll();
  },
  methods: {
    setScroll() {
      ScrollTrigger.create({
        trigger: this.$refs.ScrollTrigger,
        start: "top -50%",
        onEnter: () => {
          this.isIn = true;
        },
        onEnterBack: () => {
          this.isIn = true;
        },
        onLeave: () => {
          this.isIn = false;
        },
        onLeaveBack: () => {
          this.isIn = false;
        },
      });
    },
    makeHeart() {
      const loader = new GLTFLoader();
      return new Promise((resolve) => {
        loader.load(
          "/emoji/scene.gltf",
          function (gltf) {
            console.log(gltf, "gfg??");
            resolve(gltf.scene);
          },
          undefined,
          function (error) {
            console.error(error);
          }
        );
      });
    },
    async threeD() {
      //1. renderer, camera, scene
      this.threes = [this.makeCamera(this.$refs.threeScene)];
      window.addEventListener(
        "resize",
        () => this.threes.forEach((t) => t.resize()),
        false
      );
      this.threeObjs.heart = this.makeObj(
        await this.makeHeart(),
        this.threes[0].scene
      );
      this.render();
    },
    makeObj(mesh, scene) {
      scene.add(mesh);
      return mesh;
    },
    makeCamera(element) {
      const sceneWidth = this.$refs.threeScene.clientWidth;
      const renderer = new THREE.WebGLRenderer({
        antialias: true,
        alpha: true,
      });
      renderer.setPixelRatio(window.devicePixelRatio);
      const camera = new THREE.PerspectiveCamera(50, 1, 1, 1000);
      renderer.setSize(sceneWidth, sceneWidth);
      camera.position.set(0, 100, 700);
      const scene = new THREE.Scene();
      scene.add(new THREE.AmbientLight("0xffffff", 2.5));
      scene.add(new THREE.DirectionalLight(0xffffff, 1));

      //this.control = new OrbitControls(camera, renderer.domElement);

      element.appendChild(renderer.domElement);
      return {
        scene,
        camera,
        render: () => {
          renderer.render(scene, camera);
        },
        resize: () => {
          const sceneWidth = this.$refs.threeScene.clientWidth;
          //camera.aspect = window.innerWidth / window.innerHeight;
          camera.updateProjectionMatrix();
          renderer.setSize(sceneWidth, sceneWidth);
        },
      };
    },
    render(time) {
      this.threes.forEach((t) => t.render());
      if(this.isIn) {
        this.animateObj(time);
      }
      requestAnimationFrame(this.render);
      //this.control.update();
    },
    animateObj(time) {
      time *= 0.0015;
      this.threeObjs.heart.rotation.y = Math.sin(time);
      //this.threeObjs.heart.position.z += Math.sin(time +3* 0.3);
      //this.threeObjs.heart.rotation.y = time;
      //this.threeObjs.heart.rotation.z = time;
      //this.threeObjs.heart.rotation.x = time;
    },
  },
};
</script>

<style lang="scss" scoped>
#about_section {
  padding: 30px 0 150px;
  .about_grid {
    margin-top: 10px;
    grid-gap: 60px;
    .image {
      max-width: 500px;
      max-height: 500px;
      overflow: hidden;
    }
    .text {
      font-size: 17px;
      line-height: 2.2;
    }
  }
}
</style>