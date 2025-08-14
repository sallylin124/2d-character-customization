<template>
  <v-container class="fill-height" max-width="900">
  <div class="d-flex flex-column align-center">
    <div>
        <div class="text-h4" justify="start">
        Auto Placement Web
        </div>
        <v-img 
        height="100"
        src="@/assets/筆電icon.png"
        style="width: 150px; height: 100px;"
      />
        <br></br>
      <v-row >
        <!--最上方表格-->
          <v-row>
    <!-- 左邊一個按鈕 -->
    <v-col cols="6">
      <div class="text-h6" justify="start">
          Placement Area​ 
        </div>
     <v-card class="h-100">
      <v-row class="mt-4">
      <v-col v-for="(imagePath, index) in array"  cols="auto">
        <v-img 
        :src="imagePath" 
        width="130" 
        class="clickable-image"
        @contextmenu.prevent="removeImage(index)"/>
      </v-col>
    </v-row>
     
 
      </v-card>
          
    </v-col>

    <!-- 右邊四個按鈕 -->
    <v-col cols="6">
      <div class="text-h6" justify="start">
          Component Type List
        </div>
      <v-row>
        <v-col
          cols="6"
        >
        <v-btn block outlined color="black" class="mb-1"  @click="tab='one'" >
           Fan
          </v-btn>
        <v-btn block outlined color="black" class="mb-1" @click="tab='two'">
           Battery
          </v-btn>
        <v-btn block outlined color="black" class="mb-1" @click="tab='three'">
            PCB
          </v-btn>
        <v-btn block outlined color="black" class="mb-1" @click="tab='four'">
            Connector
          </v-btn>
        </v-col>
        <v-col cols="6">
          <v-btn block outlined color="black" class="mb-1" @click="tab='five'">
           CPU
          </v-btn>
              <v-btn block outlined color="black" class="mb-1" @click="tab='six'">
           GPU
          </v-btn>
              <v-btn block outlined color="black" class="mb-1">
           
          </v-btn>
              <v-btn block outlined color="black" class="mb-1">
           
          </v-btn>
        </v-col>
        
      </v-row>
    </v-col>
    
    <v-col cols="12">
      <br></br>
      <div class="text-h8" justify="start">
          Component List
        </div>  
    
       <v-card>
 

    <v-card-text>
      <v-tabs-window v-model="tab">
        <v-tabs-window-item value="one">
          <FanPage v-on:imageSelected="a"/>
        </v-tabs-window-item>

        <v-tabs-window-item value="two">
          <BatteryPage v-on:imageSelected="a"/>
        </v-tabs-window-item>

        <v-tabs-window-item value="three">
          <PCBPage v-on:imageSelected="a"/>
        </v-tabs-window-item>
        <v-tabs-window-item value="four">
          <ConnectorPage v-on:imageSelected="a"/>
        </v-tabs-window-item>
        <v-tabs-window-item value="five">
          <CPUPage v-on:imageSelected="a"/>
        </v-tabs-window-item>
        <v-tabs-window-item value="six">
          <GPUPage v-on:imageSelected="a"/>
        </v-tabs-window-item>
      </v-tabs-window>
    </v-card-text>
  </v-card>
    
    </v-col>
  </v-row>
  </v-row>
    </div>
    </div>
  </v-container>
</template>

<script setup >
import { ref } from 'vue';
import BatteryPage from './BatteryPage.vue';
import ConnectorPage from './ConnectorPage.vue';
import CPUPage from './CPUPage.vue';
const tab = ref('one');
const selectedImageSrc = ref('');
const array = ref([]);

const a = (imageName) => {
  // imageName 的值就是 '/src/assets/FAN/FAN1.jpg'
  //console.log(`你選擇了圖片: ${imageName}`);
  //console.log(`你選擇了圖片: ${selectedImageSrc.value}`);
  selectedImageSrc.value = imageName;
  array.value.push(imageName);
  //console.log(array.value); // 輸出: /src/assets/FAN/FAN1.jpg
};

const removeImage = (index) => {
  // 使用 splice() 方法來移除陣列中指定索引的項目
  // splice(起始索引, 要移除的數量)
  array.value.splice(index, 1);
};

</script>

<style scoped>
/* 為了視覺效果，增加一個滑鼠指標樣式，讓使用者知道圖片可以點擊 */
.clickable-image {
  cursor: pointer;
}
</style>