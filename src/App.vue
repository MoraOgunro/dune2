<template>
  <div class="full-screen">
    <div class="full-screen-content">
      <div class="top"></div>
      <div class="middle">
        <router-view></router-view>
      </div>
      <!-- Start of Foot Component !-->
      <div class="bottom">
      </div>
      <!-- End of Foot Component !-->
    </div>
  </div>
</template>

<script>

export default {

}
</script>

<style lang="sass">
@import url('https://fonts.googleapis.com/css2?family=Poppins:ital,wght@0,300;0,400;0,500;0,800;1,800;1,900&display=swap')

$tablet: 600px
$medium-desktop: 768px
$desktop: 992px
$widescreen: 1200px
html
  margin: 0
  padding: 0
  background-color: black
  overflow-x: hidden
  -ms-overflow-style: none /* for Internet Explorer, Edge */
  scrollbar-width: none /* for Firefox */
  overflow-y: scroll
  &::-webkit-scrollbar
    display: none
body
  margin: 0
  padding: 0
#app
  font-family: 'Poppins', sans-serif
  -webkit-font-smoothing: antialiased
  -moz-osx-font-smoothing: grayscale
  text-align: center
  height: 100vh
/* Wrap page in this for full screen, must be used with full-screen-content class */
.full-screen
  display: flex
  width: 100vw
  height: 100%
/* Wrap all full screen content in this class */
.full-screen-content
  flex: 1
  display: flex
  flex-direction: column
  width: 100%
/* Wrap full screem header content */
.top
  flex-grow: 0
  flex-shrink: 1
  height: 0rem
  width: 100%
  min-height: 0px
/* Wrap full screen middle content */
.middle
  flex: 1
  min-height: 150px
  width: 100%
/* Wrap footer content in this to get bottom allignment */
.bottom
  align-self: flex-end
  width: 100%
  flex-shrink: 1
  flex-grow: 0
@media screen and (max-width: $tablet)
  html
  .full-screen
    overflow-y: auto
    scrollbar-color: black white
   
</style>
