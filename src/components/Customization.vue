<template>
<v-container class="fill-height" max-width="900">
  <div class="d-flex flex-column align-center">
    <div>
      <!-- <div class="d-flex justify-center w-100">
      <img 
          :src="titleImageSrc" 
          alt="2D-Character-Customization-Game" 
          style="max-width: 40vw; height: auto; margin-bottom: 10px;"
        >
    </div> -->
        <div class="text-h4 text-center text-blue-darken-4 font-weight-bold" > 
        2D-Character-Customization-Game
        </div>
        
    <!--分隔線-->
      <br></br>
    <v-row>
    
    <!--分隔線分隔線分隔線分隔線分隔線分隔線分隔線分隔線分隔線-->
    <!-- <v-col cols="12" md="3">
    </v-col> -->
      <v-col  sm="12" md="12">
        <!-- <br></br> -->
      <v-row justify="center">
        <!-- <v-col cols="3"> -->
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
            @click="currentChart = item.title; CurrentGender = item.title;" 
          ><!-- 點擊時更新 CurrentGender -->
          <v-list-item-title>{{ item.title }}</v-list-item-title>
          </v-list-item>
          </v-list>
      </v-menu>
      
    </v-btn>
        <!-- </v-col> -->
    <!-- <v-col cols="3"> -->
      <span> &nbsp; &nbsp; </span>
      <span>
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
             @click="currentChart = item.title; CurrentStyle = item.title;" 
          >
            <v-list-item-title>{{item.title }}</v-list-item-title>
          </v-list-item>
        </v-list>
      </v-menu>
    </v-btn>
    </span>
    <!-- </v-col> -->
    
      <br></br>
      <br></br>
      <!-- <v-col cols="3"> -->
        <span> &nbsp; &nbsp; </span>
    <v-btn
      color="primary"
    >
      accessory

      <v-menu activator="parent">
        <v-list>
          <v-list-item
            v-for="(item, index) in itemschoose1"
            :key="index"
            :value="index"
            @click="currentChart = item.title; " 
          >
            <v-list-item-title>{{ item.title }}</v-list-item-title>
          </v-list-item>
        </v-list>
      </v-menu>
    </v-btn>
    <!-- </v-col> -->
    </v-row justify="center">

      </v-col>
      <v-col  sm="12" md="12">
      <!-- <div class="text-h6" justify="start">
          Motion Control Area🎮​ 
        </div> -->
     <v-card class="h-100">
      <v-row class="mt-4">
      <v-col v-for="(imagePath, index) in array"  cols="auto">
      </v-col>
    </v-row>
      <CartoonRig :selectedImageSrc="currentChart"/>
        </v-card>
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
  import titleImageSrc from '@/assets/outfits/title.png';
  const currentChart = ref('default');
  const CurrentGender = ref('default'); 
  const CurrentStyle = ref('default'); 
  const items = [
    { title: 'boy' },
    { title: 'girl' },
  ];
  
  const items1 = [
    { title: 'casualboy' },
    { title: 'suit' },
  ];
  const items12 = [
    { title: 'casualgirl' },
    { title: 'SailorSuit' },
  ];
  const items2 = [
    { title: 'WhiteGloves' },
    // { title: 'accessory2' },
  ];
  const items21 = [
    { title: 'briefcase' },
    // { title: 'accessory4' },
  ];
  const items22 = [
    { title: 'PinkGloves' },
    // { title: 'accessory6' },
  ];
  const items23 = [
    { title: 'lollipop' },
    // { title: 'accessory8' },
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
  const itemschoose1 = computed(() => {
    
    if (CurrentStyle.value === 'casualboy') {

      return items2;

    } else if (CurrentStyle.value === 'suit'){
      
      return items21;
    } else if (CurrentStyle.value === 'casualgirl'){
      
      return items22;
    } else if (CurrentStyle.value === 'SailorSuit'){
      
      return items23;
    }
    else {
      
      return itemschoose1.value;
    }
  });
  
</script>