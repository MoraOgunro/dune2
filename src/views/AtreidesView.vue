<template>
  <div class="bg-image"></div>
  <section class="hero is-fullheight">
    
    <div class="hero-head top-left-title">{{name}}</div>

    <div class="hero-body">
      <div class="columns">
        <div class="column">
          <p class="">
            Lorem ipsum dolor sit amet consectetur adipisicing elit. Excepturi
            rem voluptate officiis expedita, odit nesciunt fugit reiciendis eius
            doloribus maxime dolor laudantium repellat error molestias dicta
            animi culpa repellendus inventore maiores eum temporibus sequi
            delectus odio similique? Aliquid velit quae impedit sed mollitia
            facere minima assumenda ipsa omnis, iure, cum temporibus fuga
            similique. Repudiandae blanditiis temporibus esse recusandae eveniet
            voluptatibus? Ea, inventore iusto quo nesciunt saepe ipsa ratione
            assumenda libero! Accusamus quia vel eius ipsum. Dignissimos fuga
            temporibus itaque consequuntur similique molestias veniam
            praesentium natus esse, corrupti perspiciatis harum reiciendis
            suscipit eius ipsa rerum, impedit aperiam. Eum harum doloribus
            impedit?
          </p>
          <router-link to="/">
            <button class="button">RETURN</button>
          </router-link>
        </div>
        <div class="column piccol">
          <div class="picture"></div>
        </div>
      </div>
    </div>

    <div class="hero-foot">{{name}}</div>
  </section>
</template>

<script>
export default {
  setup (){
    var name = 'ATREIDES'
    return{
      name
    }
  }
};
</script>

<style lang="sass">
$font-color: white
$bg-color: black
$transparent: rgba(0, 0, 0, 0)
html
  background-color: black
  overflow: hidden
.bg-image
  position: absolute
  height: 100%
  width: 100%
  background-image: url('/src/assets/caladan.jpg')
  background-size: cover
  background-position: center
  filter: blur(4px)
.hero-head
  display: flex
  font-weight: 800
  font-size: min(15vw,20vh)
  justify-content: flex-start
  font-style: italic
.hero
  background-color: rgba(0, 0, 0,0.7)
  color: $font-color
  position: relative
  padding-left: 2rem
  padding-right: 2rem
  p
    font-size: 1rem
    font-weight: 200
.hero-foot
  display: flex
  font-weight: 800
  font-size: min(15vw,20vh)
  color: $transparent
  -webkit-text-stroke: 2px $font-color
  justify-content: flex-end
  font-style: italic
.column
  align-self: center
.button
  font-weight: 800
  letter-spacing: 3px
  border-color: $font-color
  margin-top: 1rem
  background-color: $transparent
  color: $font-color
  font-size: 1rem
  border-width: 2px
  border-radius: 25px
.button:hover
  background-color: $font-color
  color: $bg-color
  border-width: 0px
.piccol
  display: flex
  justify-content: center
  
.picture
  flex-shrink: 1
  align-self: center
  background-image: url('/src/assets/DUKE.png')
  height: 100%
  width: 100%
  min-height: 350px
  background-size: cover
  background-position: center
  border: 2px solid $font-color
  max-width: 650px

@media screen and (max-width: 769px)
  .hero-head, .hero-foot
    justify-content: center
</style>
