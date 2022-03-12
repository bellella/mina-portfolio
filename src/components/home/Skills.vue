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
            <div class="icon">
              <img :src="skill.iconImgUrl" :alt="skill.title" />
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
export default {
  data() {
    return {
      skillList: [
        {
          iconImgUrl:
            "https://w.namu.la/s/6f8695350c52d8a6f07a30787fdd07ed65e77e010c16732832924d0effa75207dccdd972b8c7f5b9e7077c006e48cadde42f66172c11432a3c92e4407b4fcfdc875405acd3f0e8b0a1fb0bc80022929ebf2f68f29f74050fc28d813d090d429f",
          title: "HTML5",
          content:
            "Made a couple of website out of Vue. Know how to interacte using components",
        },
        {
          iconImgUrl:
            "https://w.namu.la/s/6f8695350c52d8a6f07a30787fdd07ed65e77e010c16732832924d0effa75207dccdd972b8c7f5b9e7077c006e48cadde42f66172c11432a3c92e4407b4fcfdc875405acd3f0e8b0a1fb0bc80022929ebf2f68f29f74050fc28d813d090d429f",
          title: "HTML5",
          content:
            "Made a couple of website out of Vue. Know how to interacte using components",
        },
        {
          iconImgUrl:
            "https://w.namu.la/s/6f8695350c52d8a6f07a30787fdd07ed65e77e010c16732832924d0effa75207dccdd972b8c7f5b9e7077c006e48cadde42f66172c11432a3c92e4407b4fcfdc875405acd3f0e8b0a1fb0bc80022929ebf2f68f29f74050fc28d813d090d429f",
          title: "HTML5",
          content:
            "Made a couple of website out of Vue. Know how to interacte using components",
        },
        {
          iconImgUrl:
            "https://w.namu.la/s/6f8695350c52d8a6f07a30787fdd07ed65e77e010c16732832924d0effa75207dccdd972b8c7f5b9e7077c006e48cadde42f66172c11432a3c92e4407b4fcfdc875405acd3f0e8b0a1fb0bc80022929ebf2f68f29f74050fc28d813d090d429f",
          title: "HTML5",
          content:
            "Made a couple of website out of Vue. Know how to interacte using components",
        },
      ],
    };
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
        box-shadow:  7px 7px 4px #efd2e0,
             -7px -7px 24px #ffe8f8;
        border-radius: 10px;
      }
      &:nth-child(even) {
        background: #fff;
        box-shadow: 10px 10px 30px rgb(0 0 0 / 10%);
        border-radius: 10px;
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
      .icon {
        width: 80px;
        height: 80px;
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