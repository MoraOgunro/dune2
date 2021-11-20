<template>
  <div class="grid">
   <div class="grid-item" style="background-color: rgb(0, 0, 0)" onclick="">
      <div class="item-text">
         <div class="item-header">Atreites</div>
         <div class="sub-container">
            <div class="sub-header">Atreites</div>
            <div class="item-subtite">Lorem ipsum dolor sit amet consectetur, adipisicing elit. Repellat doloribus eum, aperiam, dolore iusto distinctio deleniti perspiciatis molestiae nemo quisquam saepe nostrum ducimus quos ratione odit quis maxime accusantium, exercitationem labore amet natus! Voluptatibus mollitia pariatur aliquam, vitae ullam sequi!</div>
         </div>
      </div>
   </div>
      <div id='grid-i' class="grid-item" style="background-color: rgb(30, 30, 40)">
         <div class="item-text">
            <div class="item-header">Fremen</div>
            <div class="sub-container">
               <div class="sub-header">Fremen</div>
               <div class="item-subtite">Lorem ipsum dolor sit amet consectetur, adipisicing elit. Repellat doloribus eum, aperiam, dolore iusto distinctio deleniti perspiciatis molestiae nemo quisquam saepe nostrum ducimus quos ratione odit quis maxime accusantium, exercitationem labore amet natus! Voluptatibus mollitia pariatur aliquam, vitae ullam sequi!</div>
            </div>
         </div>
      </div>
   <div class="grid-item" style="background-color: rgb(50, 45, 50)">
      <div class="item-text">
         <div class="item-header">Bene Gesserit</div>
         <div class="sub-container">
            <div class="sub-header">Bene Gesserit</div>
            <div class="item-subtite">Lorem ipsum dolor sit amet consectetur, adipisicing elit. Repellat doloribus eum, aperiam, dolore iusto distinctio deleniti perspiciatis molestiae nemo quisquam saepe nostrum ducimus quos ratione odit quis maxime accusantium, exercitationem labore amet natus! Voluptatibus mollitia pariatur aliquam, vitae ullam sequi!</div>
         </div>
      </div>
   </div>
   <div class="grid-item" style="background-color: rgb(30, 30, 60)">
      <div class="item-text">
         <div class="item-header">Harkonen</div>
         <div class="sub-container">
            <div class="sub-header">Harkonen</div>
            <div class="item-subtite">Lorem ipsum dolor sit amet consectetur, adipisicing elit. Repellat doloribus eum, aperiam, dolore iusto distinctio deleniti perspiciatis molestiae nemo quisquam saepe nostrum ducimus quos ratione odit quis maxime accusantium, exercitationem labore amet natus! Voluptatibus mollitia pariatur aliquam, vitae ullam sequi!</div>
         </div>
      </div>
   </div>
</div>
</template>

<script>
export default {};
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
