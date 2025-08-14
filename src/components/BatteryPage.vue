<template>
    <v-container class="fill-height" max-width="900">
    
    <div  class="d-flex align-center justify-start">
      <v-card @click="emit('imageSelected', '/src/assets/Battery/Battery1.jpg')">
        <v-img 
        height="100"
        src="@/assets/Battery/Battery1.jpg"
        style="width: 150px; height: 100px;"
        class="mr-4"
      />
      </v-card>
      <v-card @click="emit('imageSelected', '/src/assets/Battery/Battery2.jpg')">
      <v-img
        height="100"
        src="@/assets/Battery/Battery2.jpg"
        style="width: 150px; height: 100px;"
        class="mr-4"
      />
      </v-card>
      <v-card @click="emit('imageSelected', '/src/assets/Battery/Battery3.jpg')">
      <v-img 
        height="100"
        src="@/assets/Battery/Battery3.jpg"
        style="width: 150px; height: 100px;"
        class="mr-4"
      />
      </v-card>
    </div>
    
    </v-container>
 
 </template>

<script setup lang="ts">
  const emit = defineEmits(['imageSelected']);
</script>