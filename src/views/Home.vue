<template>
  <div class="container">
    <router-link to="/routes">
      <routes-component></routes-component>
    </router-link>
    <br>
    <picture-component></picture-component>
    <br>
    <router-link to="/hotels">
      <hotels-component></hotels-component>
    </router-link>
    <br>
    <router-link to="/food">
      <food-component></food-component>
    </router-link>
    <br>
    <router-link to="/couriosities">
      <curiosities-component></curiosities-component>
    </router-link>
  </div>
</template>

<script>
import RoutesComponent from '@/components/RoutesComponent.vue'
import PictureComponent from '@/components/PictureComponent.vue'
import HotelsComponent from '@/components/HotelsComponent.vue'
import FoodComponent from '@/components/FoodComponent.vue'
import CuriositiesComponent from '@/components/CouriositiesComponent.vue'

export default {
  name: 'home',
  components: {
    RoutesComponent,
    PictureComponent,
    HotelsComponent,
    FoodComponent,
    CuriositiesComponent
  }
}
</script>
