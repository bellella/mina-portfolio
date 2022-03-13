<template>
  <section id="project_section">
    <div class="section_top">
      <h3 class="title">about</h3>
      <h4 class="sub_title">heheheheh</h4>
    </div>
    <div class="pro_wrapper" ref="viewport">
      <div class="pro_list" ref="content">
        <div class="pro_item" v-for="pro in proList" :key="pro.title">
          <img :src="pro.imgUrl" alt="" />
        </div>
      </div>
    </div>
  </section>
</template>

<script>
import ScrollBooster from "scrollbooster";

export default {
  data() {
    return {
      proList: [
        {
          imgUrl: "/images/projects/project1.png",
          link: "",
          title: "1",
        },
        {
          imgUrl: "/images/projects/project2.png",
          link: "",
          title: "2",
        },
        {
          imgUrl: "/images/projects/project3.png",
          link: "",
          title: "3",
        },
        {
          imgUrl: "/images/projects/project4.png",
          link: "",
          title: "4",
        },
        {
          imgUrl: "/images/cute.pnga",
          link: "",
          title: "4",
        },
        {
          imgUrl: "/images/cute.pnga",
          link: "",
          title: "4",
        },
      ],
    };
  },
  mounted() {
    new ScrollBooster({
      viewport: this.$refs.viewport,
      scrollMode: "transform",
      content: this.$refs.content,
      direction: "horizontal",
    });
  },
};
</script>

<style lang="scss" scoped>
#project_section {
  padding: 30px 0 150px;
  .pro_wrapper {
    width: 100%;
    overflow: hidden;
    cursor: move;
  }
  .pro_list {
    display: flex;
    width: fit-content;
    padding-left: 10vw;
    .pro_item {
      height: 600px;
      width: 350px;
      margin-right: 30px;
      filter: grayscale(1);
      &:hover {
        filter: none;
      }
    }
  }
}
</style>