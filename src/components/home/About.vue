<template>
  <section id="about_section">
    <div class="section_container">
      <div class="section_top">
        <h3 class="title">about me</h3>
        <h4 class="sub_title">I'm mina</h4>
      </div>
      <div class="about_grid">
        <div class="image">
          <!-- <img
            src="https://static.toss.im/3d-emojis/u1FAD3-u1F60D.png"
            alt=""
          /> -->
          <div id="threeScene" class="threeScene" ref="threeScene1"></div>
        </div>
        <div class="text">
          <p>
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
          </p>
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
    };
  },
  mounted() {
    //this.threeD();
  },
  methods: {
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
      this.threes = [this.makeCamera(this.$refs.threeScene1)];
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
      const renderer = new THREE.WebGLRenderer({
        antialias: true,
        alpha: true,
      });
      renderer.setPixelRatio(window.devicePixelRatio);
      const camera = new THREE.PerspectiveCamera(50, 500 / 500, 1, 1000);
      renderer.setSize(500, 500);
      camera.position.set(0, 200, 700);
      const scene = new THREE.Scene();
      scene.add(new THREE.AmbientLight("0xffffff", 2.5));
      scene.add(new THREE.DirectionalLight(0xffffff, 1));

      this.control = new OrbitControls(camera, renderer.domElement);

      element.appendChild(renderer.domElement);
      return {
        scene,
        camera,
        render: () => {
          renderer.render(scene, camera);
        },
        resize: () => {
          camera.aspect = window.innerWidth / window.innerHeight;
          camera.updateProjectionMatrix();
          renderer.setSize(window.innerWidth, window.innerHeight);
        },
      };
    },
    render(time) {
      this.threes.forEach((t) => t.render());
      this.animateObj(time);
      requestAnimationFrame(this.render);
      this.control.update();
    },
    animateObj(time) {
      time *= 0.0005;
      this.threeObjs.heart.rotation.y = time;
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
      padding-top: 90px;
      font-size: 17px;
      line-height: 2.2;
    }
  }
}
</style>