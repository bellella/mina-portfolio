<template>
  <div id="home">
    <main id="main">
      <Header></Header>
      <Hero></Hero>
      <About></About>
      <Skills></Skills>
      <Projects></Projects>
      <Major></Major>
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
};
</script>

<style lang="scss">
@import "../assets/scss/style.scss";
#home {
  background: var(--bg-color);
  overflow: hidden;
}
#about_section {
  padding: 30px 0 150px;
  .about_grid {
    margin-top: 10px;
    grid-gap: 60px;
    .text {
      padding-top: 90px;
      font-size: 24px;
      line-height: 44px;
    }
  }
}

</style>