<template>
  <div class="grid-item" :style="inlineStyle">
    <router-link :to="link" class="router-link">
      <div class="item-text">
        <div class="item-header">{{ header }}</div>
        <div class="sub-container">
          <div class="sub-header">{{ header }}</div>
          <div class="item-subtite">{{ subtitle }}</div>
        </div>
      </div>
    </router-link>
  </div>
</template>

<script>
import { computed } from 'vue'
export default {
  props: {
    header: String,
    subtitle: String,
    color: String,
    link: String,
    background: String
  },
  setup(props) {
    
    const inlineStyle = computed(()=>{
         return {
             backgroundImage: `url(${require('@/assets/images/'+ props.background)})`
             }
    })
    return {
        inlineStyle
    }
  },
};
</script>

<style lang='sass'>
$tablet: 830px
$medium-desktop: 768px
$desktop: 992px
$widescreen: 1200px
.grid-item
    position: relative
    display: flex
    //background-image: url('/src/assets/ATREITES.jpg')
    background-size: cover
    background-position-x: -300px
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
    line-height: 4rem
.sub-container
    display: flex
    flex-direction: column
    justify-content: center

@media screen and (min-width: $tablet)
    .grid-item
        width: 25%
        min-width: 3%
        box-shadow: inset 0 0 0 100vw rgba(0,0,0,.60)
        transition: all 0.3s ease-in-out
        &:hover
            box-shadow: inset 0 0 0 100vw rgba(0,0,0,.90)
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
        writing-mode: vertical-lr
        width: auto
        opacity: 100%
    .sub-container
        opacity: 0%
@media screen and (max-width: $tablet)
    .grid-item
        box-shadow: inset 0 0 0 100vh rgba(0,0,0,.80)
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