<template>
  <div class="grid">
    <GridItem
      v-for="(item, index) in grid_list"
      :key="index"
      :header=item.header
      :color=item.color
      :subtitle=item.subtitle
      :link="item.link">
    </GridItem>
  </div>
</template>

<script>
import { ref } from "vue";
import GridItem from "./GridItem.vue";
export default {
  components: {GridItem},
  setup() {
    const default_subtitle =
      "Lorem ipsum dolor sit amet consectetur, adipisicing elit. Repellat doloribus eum, aperiam, dolore iusto distinctio deleniti perspiciatis molestiae nemo quisquam saepe nostrum ducimus quos ratione odit quis maxime accusantium, exercitationem labore amet natus! Voluptatibus mollitia pariatur aliquam, vitae ullam sequi!"

    const grid_list = ref([
      {
        header: "Atreides",
        subtitle: default_subtitle,
        color: "#000000",
        image: null,
        link: '/Atreides'
      },
      {
        header: "Fremen",
        subtitle: default_subtitle,
        color: "#1e1e28",
        image: null,
        link: '/Fremen'
      },
      {
        header: "Bene Gesserit",
        subtitle: default_subtitle,
        color: "#322d32",
        image: null,
        link: '/BeneGesserit'
      },
      {
        header: "Harkonen",
        subtitle: default_subtitle,
        color: "#1e1e3c",
        image: null,
        link: '/Harkonen'
      },
    ]);

    return {
      default_subtitle,
      grid_list
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

@media screen and (min-width: $tablet)
   .grid
      flex-direction: row
   
// MOBILE        MOBILE        MOBILE
@media screen and (max-width: $tablet)
   .grid
      flex-direction: column
   
</style>
