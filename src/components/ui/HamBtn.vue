<template>
  <div id="hamBtn">
    <input class="checkbox" type="checkbox" :value="active" @input="btnClick"/>
    <div class="hamburger-lines">
      <span class="line line1"></span>
      <span class="line line2"></span>
      <span class="line line3"></span>
    </div>
  </div>
</template>

<script>
export default {
  props: {
    active: {
      type: Boolean,
    },
  },
  methods: {
    btnClick(event) {
      this.$emit("btnClick", event.target.value);
    },
  },
};
</script>

<style lang="scss">
#hamBtn {
  z-index: 10;
  .checkbox {
    position: absolute;
    display: block;
    height: 32px;
    width: 32px;
    z-index: 5;
    opacity: 0;
    cursor: pointer;
  }
  .hamburger-lines {
    display: block;
    height: 26px;
    width: 32px;
    z-index: 2;
    display: flex;
    flex-direction: column;
    justify-content: space-between;
    transition: transform .3s ease-in-out;
    transform-origin: center;
  }
  .hamburger-lines .line {
    display: block;
    height: 4px;
    width: 100%;
    border-radius: 10px;
    background: var(--text-color);
    //transition: transform 0.4s ease-in-out;
  }

  .line1 {
    transform-origin: 0% 0%;
  }

  .hamburger-lines .line2 {
    transition: transform 0.2s ease-in-out;
  }

  .hamburger-lines .line3 {
    transform-origin: 0% 100%;
  }

  input[type="checkbox"]:checked ~ .hamburger-lines {
    transform: rotate(calc(-360deg)) translateX(7px);
  }

  input[type="checkbox"]:checked ~ .menu-items {
    transform: translateX(0);
  }

  input[type="checkbox"]:checked ~ .hamburger-lines .line1 {
    transform: rotate(45deg);
  }

  input[type="checkbox"]:checked ~ .hamburger-lines .line2 {
    transform: scaleY(0);
  }

  input[type="checkbox"]:checked ~ .hamburger-lines .line3 {
    transform: rotate(-45deg);
  }
}
</style>