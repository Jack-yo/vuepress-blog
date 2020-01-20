<template>
  <main class="home" aria-labelledby="main-title">
    <header class="hero">
      <img
        v-if="data.heroImage"
        :src="$withBase(data.heroImage)"
        :alt="data.heroAlt || 'hero'"
      >

      <h1 v-if="data.heroText !== null" id="main-title">{{ data.heroText || $title || 'Hello' }}</h1>

      <p class="description">
        {{ data.tagline || $description || 'Welcome to your VuePress site' }}
      </p>

      <p
        class="action"
        v-if="data.actionText && data.actionLink"
      >
        <NavLink
          class="action-button"
          :item="actionLink"
        />
      </p>
    </header>

    <div
      class="features"
      v-if="data.features && data.features.length"
    >
      <div
        class="feature"
        v-for="(feature, index) in data.features"
        :key="index"
      >
        <h2>{{ feature.title }}</h2>
        <p>{{ feature.details }}</p>
      </div>
    </div>

    <Content class="theme-default-content custom"/>

    <div
      class="footer"
      v-if="data.footer"
    >
      <a href="https://segmentfault.com/" target="_blank" class="sns-link" >
        <span title="SegementFault: Jack-yoyo" class="sns-icon" >
          <img src="../../public/sf.png" class="icon" alt="思否">
        </span>
      </a>

      <a href="https://github.com/Jack-yoyo" target="_blank" class="sns-link" >
        <span title="GitHub: Jack-yoyo" class="sns-icon" >
          <svg t="1579353151105" class="icon" viewBox="0 0 1024 1024" version="1.1" xmlns="http://www.w3.org/2000/svg" p-id="1111" width="200" height="200"><path d="M512 12.64c-282.752 0-512 229.216-512 512 0 226.208 146.72 418.144 350.144 485.824 25.6 4.736 35.008-11.104 35.008-24.64 0-12.192-0.48-52.544-0.704-95.328-142.464 30.976-172.512-60.416-172.512-60.416-23.296-59.168-56.832-74.912-56.832-74.912-46.464-31.776 3.52-31.136 3.52-31.136 51.392 3.616 78.464 52.768 78.464 52.768 45.664 78.272 119.776 55.648 148.992 42.56 4.576-33.088 17.856-55.68 32.512-68.48-113.728-12.928-233.28-56.864-233.28-253.024 0-55.904 20-101.568 52.768-137.44-5.312-12.896-22.848-64.96 4.96-135.488 0 0 43.008-13.76 140.832 52.48 40.832-11.36 84.64-17.024 128.16-17.248 43.488 0.192 87.328 5.888 128.256 17.248 97.728-66.24 140.64-52.48 140.64-52.48 27.872 70.528 10.336 122.592 5.024 135.488 32.832 35.84 52.704 81.536 52.704 137.44 0 196.64-119.776 239.936-233.792 252.64 18.368 15.904 34.72 47.04 34.72 94.816 0 68.512-0.608 123.648-0.608 140.512 0 13.632 9.216 29.6 35.168 24.576 203.328-67.776 349.856-259.616 349.856-485.76 0-282.784-229.248-512-512-512z" p-id="1112"></path></svg>
        </span>
      </a>

      <a href="https://juejin.im/user/5cd04e936fb9a031fb2ce6db" target="_blank" class="sns-link" >
        <span title="Juejin: Jack-yoyo" class="sns-icon" >
          <img src="../../public/juejin.png" class="icon" alt="掘金">
        </span>
      </a>

      <a href="https://blog.csdn.net/oneofprogrammer" target="_blank" class="sns-link" >
        <span title="CSDN: Jack-yoyo" class="sns-icon" >
          <img src="../../public/CSDN.png" class="icon" alt="CSDN">
        </span>
      </a>

      <p class="footer-text">{{ data.footer }}</p>
    </div>
  </main>
</template>

<script>
import NavLink from '@theme/components/NavLink.vue'

export default {
  components: { NavLink },

  computed: {
    data () {
      return this.$page.frontmatter
    },

    actionLink () {
      return {
        link: this.data.actionLink,
        text: this.data.actionText
      }
    }

  }
}
</script>

<style lang="stylus">
.home
  padding $navbarHeight 2rem 0
  max-width 960px
  margin 0px auto
  display block

  .hero
    text-align center
    img
      max-width: 100%
      max-height 280px
      display block
      margin 3rem auto 1.5rem
    h1
      font-size 3.5rem
    h1, .description, .action
      margin 2.8rem auto
    .description
      max-width 35rem
      font-size 1.6rem
      line-height 1.3
      color lighten($textColor, 40%)
    .action-button
      text-align:center;
      border:2px solid #a1a1a1;
      padding 0.8rem 1.6rem;
      width:50px;
      font-size 1.2rem;
      border-radius:25px;

  .features
    border-top 1px solid $borderColor
    padding 1.2rem 0
    margin-top 6.5rem
    display flex
    flex-wrap wrap
    align-items flex-start
    align-content stretch
    justify-content space-between
  .feature
    flex-grow 1
    flex-basis 30%
    max-width 30%
    h2
      font-size 1.4rem
      font-weight 500
      border-bottom none
      padding-bottom 0
      color lighten($textColor, 10%)
    p
      color lighten($textColor, 25%)
  .footer
    bottom: 0;
    height: 20px;
    left: 0;
    /*width: 100%;*/
    padding 2.5rem 0
    border-top 1px solid $borderColor
    text-align center
    margin-top :2em

    .icon {
     width: 1em; height: 1em;
     vertical-align: -0.15em;
     fill: black;
     overflow: hidden;
    }

@media (max-width: $MQMobile)
  .home
    .features
      flex-direction column
    .feature
      max-width 100%
      padding 0 2.5rem
    .footer-text{
        font-size 0.5rem
      }


@media (max-width: $MQMobileNarrow)
  .home
    padding-left 1.5rem
    padding-right 1.5rem
    .hero
      img
        max-height 210px
        margin 2rem auto 1.2rem
      h1
        font-size 2rem
      h1, .description, .action
        margin 1.2rem auto
      .description
        font-size 1.2rem
      .action-button
        font-size 1rem
        padding 0.6rem 1.2rem
    .feature
      h2
        font-size 1.25rem


</style>
