<template>
  <section id="major_section">
    <div class="section_container">
      <div class="section_top">
        <h3 class="title">about</h3>
        <h4 class="sub_title">heheheheh</h4>
      </div>
      <div class="major_list">
        <div class="major_item" v-for="major in majorList" :key="major.title">
          <div class="inner">
            <div class="text">
              <h3 class="title">{{ major.title }}</h3>
              <p class="content" v-html="major.content"></p>
            </div>
            <div class="image">
              <img :src="major.imgUrl" :alt="major.title" />
            </div>
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
      majorList: [
        {
          imgUrl:
            "https://w.namu.la/s/6f8695350c52d8a6f07a30787fdd07ed65e77e010c16732832924d0effa75207dccdd972b8c7f5b9e7077c006e48cadde42f66172c11432a3c92e4407b4fcfdc875405acd3f0e8b0a1fb0bc80022929ebf2f68f29f74050fc28d813d090d429f",
          title: "HTML5",
          content:
            "Made a couple of website out of Vue. Know how to interacte using components",
        },
        {
          imgUrl:
            "https://w.namu.la/s/6f8695350c52d8a6f07a30787fdd07ed65e77e010c16732832924d0effa75207dccdd972b8c7f5b9e7077c006e48cadde42f66172c11432a3c92e4407b4fcfdc875405acd3f0e8b0a1fb0bc80022929ebf2f68f29f74050fc28d813d090d429f",
          title: "HTML5",
          content:
            "Made a couple of website out of Vue. Know how to interacte using components",
        },
        {
          imgUrl:
            "https://w.namu.la/s/6f8695350c52d8a6f07a30787fdd07ed65e77e010c16732832924d0effa75207dccdd972b8c7f5b9e7077c006e48cadde42f66172c11432a3c92e4407b4fcfdc875405acd3f0e8b0a1fb0bc80022929ebf2f68f29f74050fc28d813d090d429f",
          title: "HTML5",
          content:
            "Made a couple of website out of Vue. Know how to interacte using components",
        },
        {
          imgUrl:
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
#major_section {
  .major_list {
    display: flex;
    flex-flow: row;
    flex-wrap: wrap;
    justify-content: center;

    margin: 0 auto;
    @media (min-width: 970px) {
      flex-flow: row;
      flex-flow: column;
      flex-wrap: nowrap;
      max-width: 1000px;
    }
    .major_item {
      border-radius: 8px;
      margin-bottom: 65px;
      overflow: hidden;
      &::after {
        content: "";
        display: block;
        padding-bottom: 35%;
      }
      @media (max-width: 970px) {
        width: clamp(200px, 300px, 100%);
        &::after {
          padding-bottom: 190%;
        }
      }
      .inner {
        display: flex;
        justify-content: space-between;
        position: absolute;
        width: 100%;
        height: 100%;
        padding: 50px 30px 40px;
        @media (max-width: 970px) {
          flex-flow: column;
          padding: 30px;
        }
      }
      &:nth-of-type(odd) {
box-shadow: inset 5px 5px 10px #eacedb,
            inset -5px -5px 10px #ffecfd;
      }
      &:nth-of-type(even) {
        border: none;
        .text {
          order: 1;
        }
      }
      .text {
        padding: 3% 0 0 5%;
        flex-basis: 40%;
        .title {
          font-weight: 600;
          font-size: 28px;
        }
        .content {
          margin-top: 10px;
          font-weight: 400;
          font-size: 20px;
        }
      }
      .image {
        @media (max-width: 970px) {
          //display: none;
        }
      }
    }
  }
}
</style>