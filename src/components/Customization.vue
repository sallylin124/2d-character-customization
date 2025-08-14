<template>
<v-container class="fill-height" max-width="900">
  <div class="d-flex flex-column align-center">
    <div>
        <div class="text-h4" justify="start">
        2D-Character-Customization
        </div>
    <!--分隔線-->
    <v-row>
    <v-col cols="6">
      <div class="text-h6" justify="start">
          Placement Area​ 
        </div>
     <v-card class="h-100">
      <v-row class="mt-4">
      <v-col v-for="(imagePath, index) in array"  cols="auto">
      </v-col>
    </v-row>
      <CartoonRig :selectedImageSrc="CurrentGender"/>
        </v-card>
      </v-col>
    <!--分隔線分隔線分隔線分隔線分隔線分隔線分隔線分隔線分隔線-->
      <v-col cols="6">
    
     <v-btn
      color="primary"
    >
      Gender

      <v-menu activator="parent">
        <v-list>
          <v-list-item
            v-for="(item, index) in items"
            :key="index"
            :value="index"
            @click="CurrentGender = item.title" 
          ><!-- 點擊時更新 CurrentGender -->
          <v-list-item-title>{{ item.title }}</v-list-item-title>
          </v-list-item>
          </v-list>
      </v-menu>
      
    </v-btn>
    <br></br>
    <br></br>
       <v-btn
      color="primary"
      >
          wearstyle

      <v-menu activator="parent">
        <v-list>
          <v-list-item
            v-for="(item, index) in itemschoose"
            :key="index"
            :value="index"
             @click="CurrentGender = item.title" 
          >
            <v-list-item-title>{{item.title }}</v-list-item-title>
          </v-list-item>
        </v-list>
      </v-menu>
    </v-btn>
      <br></br>
      <br></br>
    <v-btn
      color="primary"
    >
      accessory

      <v-menu activator="parent">
        <v-list>
          <v-list-item
            v-for="(item, index) in items2"
            :key="index"
            :value="index"
            
          >
            <v-list-item-title>{{ item.title }}</v-list-item-title>
          </v-list-item>
        </v-list>
      </v-menu>
    </v-btn>

      </v-col>
      </v-row>
    </div>
  </div>
</v-container>
</template>
<script setup >
function myalert(v){
  alert(v)
}
</script>
<script>
  import CartoonRig from './CartoonRig.vue';
  import { ref, computed } from 'vue';
  const CurrentGender = ref('default'); // 這裡可以切換成 'girl' 來測試
  const items1 = [
    { title: 'wearstyle1' },
    { title: 'wearstyle2' },
  ];
  const items12 = [
    { title: 'wearstyle3' },
    { title: 'wearstyle4' },
  ];

  // 使用 computed 屬性，根據 CurrentGender 決定要使用哪個陣列
  const itemschoose = computed(() => {
    // 如果 CurrentGender 是 'boy'，返回 items1
    if (CurrentGender.value === 'boy') {
      return items1;
    } else if (CurrentGender.value === 'girl'){
      
      return items12;
    }
    else {
      
      return itemschoose.value;
    }
  });

  export default {
    data: () => ({
      items: [
        { title: 'boy' },
        { title: 'girl' },
        
      ],

      items2: [
        { title: 'accessory1' },
        { title: 'accessory2' },
        
      ],
      CurrentGender:'default'
    }),
  }
  
  
  
</script>