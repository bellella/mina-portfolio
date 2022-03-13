<template>
  <footer id="footer">
    <div class="text">
      <p>Designed and Developed by MINA CHOI</p>
    </div>
    <ul class="social_icon_list">
      <li class="social_icon_item">
        <a href=""><img src="/public/images/instagram.png" /></a>
      </li>
      <li class="social_icon_item">
        <a href=""><img src="/public/images/github.png" /></a>
      </li>
      <li class="social_icon_item">
        <a href=""><img src="/public/images/linkedin.png" /></a>
      </li>
    </ul>

    <a
      href="https://www.flaticon.com/free-stickers/wedding"
      title="wedding stickers"
      >Wedding stickers created by Stickers - Flaticon</a
    >
  </footer>
</template>

<script>
export default {};
</script>

<style lang="scss">
#footer {
  padding: 100px 0;
  .text {
    text-align: center;
    p {
      font-weight: 600;
      color: var(--text-sub-color);
    }
  }
  .social_icon_list {
    display: flex;
    justify-content: center;
    margin-top: 20px;
    .social_icon_item {
      margin: 0 5px;
      width: 40px;
      a {
        display: block;
      }
      img {
        drop-shadow: var(--nm-out);
        &::after {
          content: "";
          filter: drop-shadow(0px 0px 30px #ffffff);
        }
      }
    }
  }
}
</style>