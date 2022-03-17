<template>
  <div id="home">
    <main id="main">
      <Header></Header>
      <Hero></Hero>
      <About></About>
      <Skills></Skills>
      <Projects></Projects>
      <!-- <Major></Major> -->
      <Contact></Contact>
            <Footer></Footer>
    </main>
  </div>
</template>

<script>
import Header from "@/components/home/Header.vue"
import Hero from "@/components/home/Hero.vue"
import About from "@/components/home/About.vue"
import Skills from "@/components/home/Skills.vue"
import Projects from "@/components/home/Projects.vue"
import Major from "@/components/home/Major.vue"
import Footer from "@/components/home/Footer.vue"
import Contact from "@/components/home/Contact.vue"

import { ScrollTrigger } from "gsap/ScrollTrigger"
import { gsap } from "gsap"

export default {
  components: {
    Header,
    Hero,
    About,
    Skills,
    Projects,
    Major,
    Footer,
    Contact
  },
  created() {
    this.$i18n.locale = 'en';
        gsap.registerPlugin(ScrollTrigger);
  },
  mounted() {
  }
};
</script>

<style lang="scss">
@import "../assets/scss/style.scss";
#home {
  background: var(--bg-color);
  overflow: hidden;
}

</style>