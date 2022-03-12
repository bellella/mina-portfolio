<template>
  <header id="header" :class="{ hidden: headerHidden }">
    <nav class="nav">
      <a class="logo" href="">Mina Choi</a>
      <ul class="nav_list">
        <li class="nav_item"><a href="">about</a></li>
        <li class="nav_item"><a href="">skills</a></li>
        <li class="nav_item"><a href="">projects</a></li>
        <li class="nav_item"><a href="">major</a></li>
        <li class="nav_item"><a href="">contact</a></li>
      </ul>
      <ul class="lang_list">
        <li class="lang_item" @click.prevent="changeLocale">
          <a href="">EN</a>
        </li>
        <li class="lang_item">
          <a href="">KO</a>
        </li>
      </ul>
      <AsideNav></AsideNav>
    </nav>
  </header>
</template>

<script>
import AsideNav from '../layout/AsideNav.vue'

export default {
  components: {
    AsideNav
  },
  data() {
    return {
      headerHidden: false,
      lastScrollTop: 0,
      mobileNavShow: false,
    };
  },
  mounted() {
    window.addEventListener("scroll", this.onScroll);
  },
  methods: {
    onScroll() {
      const top = window.scrollY;
      if (this.lastScrollTop < top) {
        //scroll down
        this.headerHidden = true;
      } else {
        //scroll up
        this.headerHidden = false;
      }
      this.lastScrollTop = top;
    },
    toggleMobileNav() {
      this.mobileNavShow = !this.mobileNavShow;
    },
    changeLocale() {},
  },
};
</script>

<style lang="scss" scoped>
#header {
  transition: all 0.5s ease;
  position: sticky;
  top: 0;
  z-index: 2;
  color: var(--text-color);
  backdrop-filter: blur(4px);
  &.hidden {
    top: -100%;
  }
  .nav {
    display: grid;
    grid-template-columns: 1fr 1fr 1fr;
    @media (max-width: 970px) {
      display: flex;
      justify-content: space-between;
    }
    align-items: center;
    max-width: var(--container-max-width);
    padding: 0 10px;
    margin: 0 auto;
    height: 80px;
    font-size: 25px;
    .logo {
      font-weight: 600;
      font-size: 24px;
    }
    .nav_list {
      display: flex;
      font-size: 18px;
      @media (max-width: 970px) {
        display: none;
      }
      .nav_item {
        a {
          display: block;
          padding: 0 10px;
          margin: 0 5px;
        }
      }
    }
    .lang_list {
      display: flex;
      align-items: center;
      justify-content: end;
      @media (max-width: 970px) {
        display: none;
      }
      .lang_item {
        padding: 0 10px;
        a {
          width: 30px;
        }
      }
    }
  }
}

</style>