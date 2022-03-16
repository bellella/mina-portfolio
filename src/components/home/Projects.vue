<template>
  <section id="project_section">
    <div class="section_container">
    <div class="section_top">
      <h3 class="title">projects</h3>
      <h4 class="sub_title">Scroll it !(if you want)</h4>
    </div>
    <div class="pro_wrapper">
      <div class="pro_list">
        <div class="pro_item" ref="viewport">
          <img src="/images/projects/project1.png" ref="content"/>
        </div>
        <div class="pro_item" v-for="pro in proList" :key="pro.title">
          <img :src="pro.imgUrl" alt="" />
        </div>
                <div class="pro_item" v-for="pro in proList" :key="pro.title+1">
          <img :src="pro.imgUrl" alt="" />
        </div>
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
      ],
    };
  },
  mounted() {
    new ScrollBooster({
      viewport: this.$refs.viewport,
      scrollMode: "transform",
      content: this.$refs.content,
      direction: "vertical",
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
    flex-wrap: wrap;
    //justify-content: center;
    //grid-template-columns: repeat(auto-fill, minmax(350px, 1fr));
    .pro_item {
      //max-width: 350px;
      width: 25%;
      aspect-ratio: 1/1;
      overflow: hidden;      
           @media (max-width: 640px) {
        width: 50%;
        height: auto;
      }
      filter: grayscale(1);
      &:hover {
        filter: none;
      }
    }
  }
}
</style>