<template>
  <div class="grid">
    <GridItem
        :header=grid_list[0].header
        :color=grid_list[0].color
        :subtitle=grid_list[0].subtitle >
    </GridItem>
    <GridItem
        :header=grid_list[1].header
        :color=grid_list[1].color
        :subtitle=grid_list[1].subtitle >
    </GridItem>
    <GridItem
        :header=grid_list[2].header
        :color=grid_list[2].color
        :subtitle=grid_list[2].subtitle >
    </GridItem>
    <GridItem
        :header=grid_list[3].header
        :color=grid_list[3].color
        :subtitle=grid_list[3].subtitle >
    </GridItem>
  </div>
</template>

<script>
import { ref } from "vue";
import GridItem from "./GridItem.vue";
export default {
  components: {GridItem},
  setup() {
    var a = 'atreites'
    var b = '#000000'
    const default_subtitle =
      "Lorem ipsum dolor sit amet consectetur, adipisicing elit. Repellat doloribus eum, aperiam, dolore iusto distinctio deleniti perspiciatis molestiae nemo quisquam saepe nostrum ducimus quos ratione odit quis maxime accusantium, exercitationem labore amet natus! Voluptatibus mollitia pariatur aliquam, vitae ullam sequi!"

    const grid_list = ref([
      {
        header: "Atreites",
        subtitle: default_subtitle,
        color: "#000000",
      },
      {
        header: "Fremen",
        subtitle: default_subtitle,
        color: "#1e1e28",
      },
      {
        header: "Bene Gesserit",
        subtitle: default_subtitle,
        color: "#322d32",
      },
      {
        header: "Harkonen",
        subtitle: default_subtitle,
        color: "#1e1e3c",
      },
    ]);

    return {
      default_subtitle,
      grid_list,
      a,
      b
    };
  },
};
</script>

<style lang="sass">
$tablet: 830px
$medium-desktop: 768px
$desktop: 992px
$widescreen: 1200px
.grid
   height: 100%
   width: 100vw
   display: flex
.grid-item
   display: flex
.item-text
   display: flex
   color: white
.item-subtite
   font-weight: 300
   align-self: center
   padding: 2rem
   line-height: 2rem
.sub-header
   font-weight: 500
   align-self: center
   padding: 1rem
   font-size: 4rem
.sub-container
   display: flex
   flex-direction: column
   justify-content: center
// DESKTOP        DESKTOP        DESKTOP
@media screen and (min-width: $tablet)
   .grid
      flex-direction: row
   .grid-item
      width: 25%
      min-width: 3%
      transition: all 0.3s ease-in-out
      &:hover
         width: 80%
         .sub-container
            transition: all 0.3s ease-in-out
            transition-delay: 0.3s
            opacity: 100%
         .item-header
            width: 0%
            opacity: 0%
   .item-text
      margin-top: max(1rem,5vh)
   .item-header
      transition: all 0.3s ease-in-out
      font-weight: 500
      font-size: 4rem
      writing-mode: sideways-lr
      width: auto
      opacity: 100%
   .sub-container
      opacity: 0%
// MOBILE        MOBILE        MOBILE
@media screen and (max-width: $tablet)
   .grid
      flex-direction: column
   .grid-item
      height: 100vh
      flex-shrink: 0
      width: 100%
   .item-header
      width: 0px
      height: 0px
      visibility: hidden
   .sub-container
      margin: auto
      .item-subtite
         opacity: 100%
</style>
