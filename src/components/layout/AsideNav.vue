<template>
  <aside id="asideNav">
    <HamBtn :active="active" @btnClick="navToggle"></HamBtn>
    <nav :class="{ active }">
      <ul class="mobile_nav_list">
        <li class="nav_item">
          <a href="">about</a>
        </li>
        <li class="nav_item"><a href="">skills</a></li>
        <li class="nav_item"><a href="">projects</a></li>
        <li class="nav_item"><a href="">major</a></li>
        <li class="nav_item"><a href="">contact</a></li>
      </ul>
      <ul class="mobile_lang_list">
        <li class="lang_item" @click.prevent="changeLocale">
          <a href="">EN</a>
        </li>
        <li class="lang_item">
          <a href="">KO</a>
        </li>
      </ul>
    </nav>
  </aside>
</template>

<script>
import HamBtn from "../ui/HamBtn.vue";

export default {
  components: {
    HamBtn,
  },
  data() {
    return {
      active: false,
    };
  },
  methods: {
    navToggle() {
      console.log("nav~");
      this.active = !this.active;
    },
  },
};
</script>

<style lang="scss" scoped>
#asideNav {
    @media (min-width: 970px) {
    display: none;
  }
  nav {
    position: fixed;
    top: 0;
    left: 0;
    height: 100vh;
    width: 100%;
    padding-top: var(--header-height);
    background: var(--bg-color);
    transform: translateX(100%);
    transition: transform 0.5s cubic-bezier(0.68, -0.04, 0.54, 1.04);
    z-index: 2;
    &.active {
      transform: translateX(0);
    }
    .mobile_nav_list {
      .nav_item {
        text-align: center;
        a {
          display: block;
          font-size: 17px;
          font-weight: 500;
          padding: 15px 0;
          &:hover {
            font-weight: 700;
          }
        }
      }
    }
    .mobile_lang_list {
      display: flex;
      justify-content: center;
      margin-top: 20px;
      .lang_item {
        padding: 0 10px;
        a {
          width: 30px;
          font-size: 18px;
          font-weight: 700;
        }
      }
    }
  }
}
</style>