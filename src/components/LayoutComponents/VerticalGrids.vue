<template>
  <div class="grid">
   <div class="grid-item" style="background-color: rgb(0, 0, 0)">
      <div class="item-text">
         <div class="item-header">Atreites</div>
         <div class="item-subtite">Lorem ipsum dolor sit amet consectetur, adipisicing elit. Repellat doloribus eum, aperiam, dolore iusto distinctio deleniti perspiciatis molestiae nemo quisquam saepe nostrum ducimus quos ratione odit quis maxime accusantium, exercitationem labore amet natus! Voluptatibus mollitia pariatur aliquam, vitae ullam sequi!</div>
      </div>
   </div>
   <div class="grid-item" style="background-color: rgb(30, 30, 40)">
      <div class="item-text">
         <div class="item-header">Fremen</div>
         <div class="item-subtite">Lorem ipsum dolor sit amet consectetur, adipisicing elit. Repellat doloribus eum, aperiam, dolore iusto distinctio deleniti perspiciatis molestiae nemo quisquam saepe nostrum ducimus quos ratione odit quis maxime accusantium, exercitationem labore amet natus! Voluptatibus mollitia pariatur aliquam, vitae ullam sequi!</div>
      </div>
   </div>
   <div class="grid-item" style="background-color: rgb(50, 45, 50)">
      <div class="item-text">
         <div class="item-header">Bene Gesserit</div>
         <div class="item-subtite">Lorem ipsum dolor sit amet consectetur, adipisicing elit. Repellat doloribus eum, aperiam, dolore iusto distinctio deleniti perspiciatis molestiae nemo quisquam saepe nostrum ducimus quos ratione odit quis maxime accusantium, exercitationem labore amet natus! Voluptatibus mollitia pariatur aliquam, vitae ullam sequi!</div>
      </div>
   </div>
   <div class="grid-item" style="background-color: rgb(30, 30, 60)">
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
      .item-subtite
         transition: all 0.3s ease-in-out
         transition-delay: 0.3s
         opacity: 100%

.item-text
   display: flex
   color: white
   margin-top: max(1rem,5vh)
   
.item-header
    font-size: 4rem
    writing-mode: sideways-lr
.item-subtite
   align-self: center
   padding: 1rem
   line-height: 2rem
   opacity: 0%
</style>
