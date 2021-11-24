<template>
  <section class="hero is-fullheight">
    <div class="hero-head top-left-title">ATREIDES</div>

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
        <div class="column bottom-right-title">PICTURE</div>
      </div>
    </div>

    <div class="hero-foot">ATREIDES</div>
  </section>
</template>

<script>
export default {};
</script>

<style lang="sass">
.button
  font-weight: 800 
  letter-spacing: 3px
  border-color: white
  margin-top: 1rem
  background-color: #1b5633
  color: white
  font-size: 1rem
  border-width: 2px
  border-radius: 25px    
.button:hover
  background-color: white
  color: #1b5633
  border-width: 0px
.hero-head
  display: flex
  font-weight: 800
  font-size: min(15vw,20vh)
  justify-content: flex-start
  font-style: italic
.hero
  color: white
  background-color: #1b5633
  padding: 2rem
p
  font-size: 1rem
  font-weight: 200
.bottom-right-title
  font-weight: 800
  font-size: 4rem
  color: #1b5633
  -webkit-text-stroke: 2px white
.hero-foot
  display: flex
  font-weight: 800
  font-size: min(15vw,20vh)
  color: #1b5633
  -webkit-text-stroke: 2px white
  justify-content: flex-end
  font-style: italic
</style>
