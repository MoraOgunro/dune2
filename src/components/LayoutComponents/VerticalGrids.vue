<template>
  <div class="grid">
   <div class="grid-item" style="background-color: rgb(150, 150, 150)">
      <div class="item-text">
         <div class="item-header">Atreites</div>
         <div class="item-subtite">Lorem ipsum dolor sit amet consectetur, adipisicing elit. Repellat doloribus eum, aperiam, dolore iusto distinctio deleniti perspiciatis molestiae nemo quisquam saepe nostrum ducimus quos ratione odit quis maxime accusantium, exercitationem labore amet natus! Voluptatibus mollitia pariatur aliquam, vitae ullam sequi!</div>
      </div>
   </div>
   <div class="grid-item" style="background-color: rgb(150, 120, 150)">
      <div class="item-text">
         <div class="item-header">Fremen</div>
         <div class="item-subtite">Lorem ipsum dolor sit amet consectetur, adipisicing elit. Repellat doloribus eum, aperiam, dolore iusto distinctio deleniti perspiciatis molestiae nemo quisquam saepe nostrum ducimus quos ratione odit quis maxime accusantium, exercitationem labore amet natus! Voluptatibus mollitia pariatur aliquam, vitae ullam sequi!</div>
      </div>
   </div>
   <div class="grid-item" style="background-color: rgb(110, 150, 150)">
      <div class="item-text">
         <div class="item-header">Bene Gesserit</div>
         <div class="item-subtite">Lorem ipsum dolor sit amet consectetur, adipisicing elit. Repellat doloribus eum, aperiam, dolore iusto distinctio deleniti perspiciatis molestiae nemo quisquam saepe nostrum ducimus quos ratione odit quis maxime accusantium, exercitationem labore amet natus! Voluptatibus mollitia pariatur aliquam, vitae ullam sequi!</div>
      </div>
   </div>
   <div class="grid-item" style="background-color: rgb(150, 150, 110)">
      <div class="item-text">
         <div class="item-header">Harkonen</div>
         <div class="item-subtite">Lorem ipsum dolor sit amet consectetur, adipisicing elit. Repellat doloribus eum, aperiam, dolore iusto distinctio deleniti perspiciatis molestiae nemo quisquam saepe nostrum ducimus quos ratione odit quis maxime accusantium, exercitationem labore amet natus! Voluptatibus mollitia pariatur aliquam, vitae ullam sequi!</div>
      </div>
   </div>
</div>
</template>

<script>
export default {};
</script>

<style lang="sass">
.grid
    height: 100%
    display: flex
    flex-direction: row
.grid-item
    display: flex
    transition: all 0.3s ease-in-out
    width: 25%
    &:hover
        width: 80%
        .item-text
            transition: all 0.5s ease-in-out
            transition-delay: 0.3s
.item-text
    writing-mode: sideways-lr
    align-self: center
.item-header
    font-size: 4rem
</style>
