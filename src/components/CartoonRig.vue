<template>
<div class="rig-wrap">
<div class="text-h6" justify="start">
          Motion Control Area🎮​ 
        </div>
<div class="toolbar">
<button @click="applyPose('idle')">Default</button>
<!-- <button @click="applyPose('wave')">Wave</button> -->
<button @click="animateWave()">Wave▶️</button>
<button @click="stopAnim()">Stop⏸️</button>
<!-- <select v-model="currentOutfitName" @change="applyOutfitPreset(currentOutfitName)"> -->
<!-- <option v-for="(v,k) in outfits" :key="k" :value="k">{{ k }}</option> -->
<!-- </select> -->
</div>
 💡Please click stop first to return to the default.

    <!-- 以 SVG 做部件/關節樹；各 <g> 是一個關節 -->
<svg ref="svgRef" viewBox="0 0 200 300" class="rig-svg">
<g id="torso" transform="translate(100,160)">
<!-- 胴體（可換衣服：用貼圖覆蓋或顏色） -->
<g id="torsoSkin">
<rect x="-20" y="-40" width="40" height="80" rx="10" :fill="skinColors.body"/>
</g>
<!-- 上衣插槽（衣服貼圖，會覆蓋在 torso 上） -->
<g id="slot_top" v-if="slots.top">
<image :href="slots.top" x="-27" y="-120" width="56" height="100" preserveAspectRatio="xMidYMid meet"/>
</g>
 
        <!-- 左臂 -->
<g id="lUpperArm" transform="translate(-20,-30)">
<rect x="-8" y="0" width="16" height="40" rx="8" :fill="skinColors.arm"/>
<g id="lForearm" transform="translate(0,40)">
<rect x="-7" y="0" width="14" height="36" rx="7" :fill="skinColors.arm"/>
<g id="lHand" transform="translate(0,36)">
<circle r="6" :fill="skinColors.hand"/>
<!-- 手持配件插槽 -->
<g id="slot_leftHand" v-if="slots.leftHand">
<image :href="slots.leftHand" x="-9" y="-16" width="19" height="25" preserveAspectRatio="xMidYMid meet"/>
</g>
<g id="slot_leftHand1" v-if="slots.leftHand1">
<image :href="slots.leftHand1" x="-10.5" y="-14" width="25" height="35" preserveAspectRatio="xMidYMid meet"/>
</g>
</g>
</g>
</g>
 
        <!-- 右臂 -->
<g id="rUpperArm" transform="translate(20,-30)">
<rect x="-8" y="0" width="16" height="40" rx="8" :fill="skinColors.arm"/>
<g id="rForearm" transform="translate(0,40)">
<rect x="-7" y="0" width="14" height="36" rx="7" :fill="skinColors.arm"/>
<g id="rHand" transform="translate(0,36)">
<circle r="6" :fill="skinColors.hand"/>
<g id="slot_rightHand" v-if="slots.rightHand">
<image :href="slots.rightHand" x="-13" y="-28" width="55" height="45" preserveAspectRatio="xMidYMid meet"/>
</g>
<g id="slot_boyrightHand" v-if="slots.boyrightHand">
<image :href="slots.boyrightHand" x="-18" y="-28" width="55" height="45" preserveAspectRatio="xMidYMid meet"/>
</g>
<g id="slot_rightHand1" v-if="slots.rightHand1">
<image :href="slots.rightHand1" x="-14" y="-12" width="26" height="34" preserveAspectRatio="xMidYMid meet"/>
</g>
<g id="slot_girlheadrightgloves" v-if="slots.girlheadrightgloves">
<image :href="slots.girlheadrightgloves" x="-10" y="-17" width="20" height="34" preserveAspectRatio="xMidYMid meet"/>
</g>
</g>
</g>
</g>
 
        <!-- 頭 -->
<g id="head" transform="translate(0,-60)">
<!-- 髮型插槽（會在頭的底層或頂層，依你需求） -->
<g id="slot_hair_back" v-if="slots.hairBack">
<image :href="slots.hairBack" x="-25" y="-28" width="50" height="50" preserveAspectRatio="xMidYMid meet"/>
</g>
 
          <circle r="22" :fill="skinColors.face" />
<circle cx="-7" cy="-3" r="3" fill="#333" />
<circle cx="7" cy="-3" r="3" fill="#333" />
<rect x="-8" y="6" width="16" height="4" rx="2" fill="#333" />
 
          <g id="slot_hair_front" v-if="slots.hairFront">
<image :href="slots.hairFront" x="-41" y="-43" width="80" height="50" preserveAspectRatio="xMidYMid meet"/>
</g>
<g id="slot_hat" v-if="slots.hat">
<image :href="slots.hat" x="-44.5" y="-37" width="-120" height="45" preserveAspectRatio="xMidYMid meet"/>
</g>
</g>
 
        <!-- 腿 -->
<g id="lThigh" transform="translate(-10,40)">
<rect x="-7" y="0" width="14" height="38" rx="7" :fill="skinColors.leg"/>
<g id="lShin" transform="translate(0,38)">
<rect x="-6" y="0" width="12" height="34" rx="6" :fill="skinColors.leg"/>
<ellipse id="lFoot" cx="0" cy="36" rx="10" ry="6" :fill="shoeColor"/>
</g>
</g>
<g id="rThigh" transform="translate(10,40)">
<rect x="-7" y="0" width="14" height="38" rx="7" :fill="skinColors.leg"/>
<g id="rShin" transform="translate(0,38)">
<rect x="-6" y="0" width="12" height="34" rx="6" :fill="skinColors.leg"/>
<ellipse id="rFoot" cx="0" cy="36" rx="10" ry="6" :fill="shoeColor"/>
</g>
</g>
 
        <!-- 下裝插槽（褲/裙） -->
<!-- <g id="slot_bottom" v-if="slots.bottom"> -->
<!-- <image :href="slots.bottom" x="-36" y="-49" width="75" height="100" preserveAspectRatio="xMidYMid meet"/> -->
<!-- </g> -->
<g id="slot_girlunderwear" v-if="slots.girlunderwear">
<image :href="slots.girlunderwear" x="-27" y="-50" width="53" height="103" preserveAspectRatio="xMidYMid meet"/>
</g>
<g id="slot_bottom" v-if="slots.bottom">
<image :href="slots.bottom" x="-38" y="-49" width="77" height="103" preserveAspectRatio="xMidYMid meet"/>
</g>
<g id="slot_bottom1" v-if="slots.bottom1">
<image :href="slots.bottom1" x="-32.5" y="-224" width="62.5" height="500" preserveAspectRatio="xMidYMid meet"/>
</g>
<g id="slot_bottom2" v-if="slots.bottom2">
<image :href="slots.bottom2" x="-77" y="-235" width="150" height="500" preserveAspectRatio="xMidYMid meet"/>
</g>
<g id="slot_bottom3" v-if="slots.bottom3">
<image :href="slots.bottom3" x="-40" y="-264" width="84" height="500" preserveAspectRatio="xMidYMid meet"/>
</g>
<g id="slot_bottom4" v-if="slots.bottom4">
<image :href="slots.bottom4" x="-35" y="-219" width="74" height="500" preserveAspectRatio="xMidYMid meet"/>
</g>
</g>
</svg>
</div>
</template>
 
<script setup>
import { ref, reactive, onMounted, watch, toRef } from 'vue'
import { gsap } from 'gsap'
 
/** —— 可配置：錨點與姿勢 —— */
const JOINTS = {
  head:      { el: '#head',      origin: '0px 22px' },
  lUpperArm: { el: '#lUpperArm', origin: '0px 0px'  },
  lForearm:  { el: '#lForearm',  origin: '0px 0px'  },
  rUpperArm: { el: '#rUpperArm', origin: '0px 0px'  },
  rForearm:  { el: '#rForearm',  origin: '0px 0px'  },
  lThigh:    { el: '#lThigh',    origin: '0px 0px'  },
  lShin:     { el: '#lShin',     origin: '0px 0px'  },
  rThigh:    { el: '#rThigh',    origin: '0px 0px'  },
  rShin:     { el: '#rShin',     origin: '0px 0px'  },
}
 
const POSES = {
  idle: {
    head: 0, lUpperArm: 10, lForearm: 0, rUpperArm: -10, rForearm: 0,
    lThigh: 4, lShin: -6, rThigh: -4, rShin: 6
  },
  wave: {
    head: 0, lUpperArm: -20, lForearm: -60, rUpperArm: -10, rForearm: 0,
    lThigh: 2, lShin: -4, rThigh: -2, rShin: 4
  }
}
 
/** —— 換裝：插槽資源（可從後端/檔案載入） —— */
const outfits = reactive({
  default: { 
    colors: { skin:'#ffe2b8', arm:'#ffb86b', face:'#ffe2b8', leg:'#ffb86b', hand:'#ffd28e', shoe:'#8ab6ff' },
    slots:  { top:'', girlunderwear:'', bottom:'', bottom1:'',bottom2:'',bottom3:'', bottom4:'',hairFront:'', hairBack:'', hat:'', leftHand:'', leftHand1:'',rightHand:'' , boyrightHand:'' ,rightHand1:'' ,girlheadrightgloves:''}
  },
  boy: {
    colors: { skin:'#ffdcb0', arm:'#f8b47d', face:'#ffdcb0', leg:'#f8b47d', hand:'#ffdcb0', shoe:'#7fb3ff' },
    slots:  {
      //top:'outfits/boyhead.png',
      // bottom:'outfits/girlshirt.png', //need
      // bottom1:'outfits/boybottom1.png',//need
      bottom1:'outfits/boyunderwear.png',
      // bottom2:'outfits/boyshirt.png',
      hairFront:'outfits/boyhead.png',
      // hairBack:'outfits/boyshirt.png',
      // hat:'outfits/boyhead.png',
      // leftHand1:'outfits/boyheadleft.png', //need
      // rightHand1:'outfits/boyheadright.png' //need
    }
  },
  girl: {
    colors: { skin:'#ffe8c6', arm:'#ffc48a', face:'#ffe8c6', leg:'#ffc48a', hand:'#ffe8c6', shoe:'#ff9fd1' },
    slots:  {
      //top:'outfits/girlhead.png',
      // bottom:'outfits/girlshirt.png', //need
      girlunderwear:'outfits/girlunderwear.png',
      // hairFront:'/outfits/hair_bangs_front.png',
      // hairBack:'/outfits/hair_long_back.png',
      hat:'outfits/girlhead.png',
      // leftHand:'outfits/girlheadleft.png',
      // rightHand:'outfits/girlheadright.png' //need
    }
  },
  casualboy: {
    colors: { skin:'#ffdcb0', arm:'#f8b47d', face:'#ffdcb0', leg:'#f8b47d', hand:'#ffdcb0', shoe:'#7fb3ff' },
    slots:  {
      //top:'outfits/girlhead.png',
      bottom:'outfits/girlshirt.png', //need
      bottom1:'outfits/boybottom1.png',//need
      //girlunderwear:'outfits/girlunderwear.png',
      // hairFront:'/outfits/hair_bangs_front.png',
      // hairBack:'/outfits/hair_long_back.png',
       hairFront:'outfits/boyhead.png',
      // leftHand:'outfits/girlheadleft.png',
      // rightHand:'outfits/girlheadright.png' //need
    }
  },
  suit: {
    colors: { skin:'#ffdcb0', arm:'#f8b47d', face:'#ffdcb0', leg:'#f8b47d', hand:'#ffdcb0', shoe:'#7fb3ff' },
    slots:  {
      //top:'outfits/girlhead.png',
      // bottom:'outfits/girlshirt.png', //need
      // bottom1:'outfits/boybottom1.png',//need
      bottom2:'outfits/boyshirt.png',
      //girlunderwear:'outfits/girlunderwear.png',
      // hairFront:'/outfits/hair_bangs_front.png',
      // hairBack:'/outfits/hair_long_back.png',
       hairFront:'outfits/boyhead.png',
      // leftHand:'outfits/girlheadleft.png',
      // rightHand:'outfits/girlheadright.png' //need
    }
  },
  casualgirl: {
    colors: { skin:'#ffe8c6', arm:'#ffc48a', face:'#ffe8c6', leg:'#ffc48a', hand:'#ffe8c6', shoe:'#ff9fd1' },
    slots:  {
      //top:'outfits/girlhead.png',
      bottom:'outfits/girlshirt.png', //need
      //girlunderwear:'outfits/girlunderwear.png',
      // hairFront:'/outfits/hair_bangs_front.png',
      // hairBack:'/outfits/hair_long_back.png',
      hat:'outfits/girlhead.png',
      // leftHand:'outfits/girlheadleft.png',
      // rightHand:'outfits/girlheadright.png' //need
    }
  },
  SailorSuit: {
    colors: { skin:'#ffe8c6', arm:'#ffc48a', face:'#ffe8c6', leg:'#ffc48a', hand:'#ffe8c6', shoe:'#ff9fd1' },
    slots:  {
      // top:'outfits/girlhead.png',
      // bottom:'outfits/girlshirt.png', //need
      bottom3:'outfits/girlshirt1.png', //need
      bottom4:'outfits/girlbottom.png', //need
      //girlunderwear:'outfits/girlunderwear.png',
      // hairFront:'/outfits/hair_bangs_front.png',
      // hairBack:'/outfits/hair_long_back.png',
      hat:'outfits/girlhead.png',
      // leftHand:'outfits/girlheadleft.png',
      // rightHand:'outfits/girlheadright.png' //need
    }
  },
  WhiteGloves: {
    colors: { skin:'#ffdcb0', arm:'#f8b47d', face:'#ffdcb0', leg:'#f8b47d', hand:'#ffdcb0', shoe:'#7fb3ff' },
    slots:  {
      //top:'outfits/girlhead.png',
      bottom:'outfits/girlshirt.png', //need
      bottom1:'outfits/boybottom1.png',//need
      //girlunderwear:'outfits/girlunderwear.png',
      // hairFront:'/outfits/hair_bangs_front.png',
      // hairBack:'/outfits/hair_long_back.png',
       hairFront:'outfits/boyhead.png',
      leftHand1:'outfits/boyheadleft.png', //need
      rightHand1:'outfits/boyheadright.png' //need
    }
  },
  accessory2: {
    colors: { skin:'#ffdcb0', arm:'#f8b47d', face:'#ffdcb0', leg:'#f8b47d', hand:'#ffdcb0', shoe:'#7fb3ff' },
    slots:  {
      //top:'outfits/girlhead.png',
      bottom:'outfits/girlshirt.png', //need
      bottom1:'outfits/boybottom1.png',//need
      //girlunderwear:'outfits/girlunderwear.png',
      // hairFront:'/outfits/hair_bangs_front.png',
      // hairBack:'/outfits/hair_long_back.png',
       hairFront:'outfits/boyhead.png',
      // leftHand:'outfits/girlheadleft.png',
      // rightHand:'outfits/girlheadright.png' //need
    }
  },
  briefcase: {
    colors: { skin:'#ffdcb0', arm:'#f8b47d', face:'#ffdcb0', leg:'#f8b47d', hand:'#ffdcb0', shoe:'#7fb3ff' },
    slots:  {
      // top:'outfits/girlhead.png',
      // bottom:'outfits/girlshirt.png', //need
      // bottom1:'outfits/boybottom1.png',//need
      bottom2:'outfits/boyshirt.png',
      //girlunderwear:'outfits/girlunderwear.png',
      // hairFront:'/outfits/hair_bangs_front.png',
      // hairBack:'/outfits/hair_long_back.png',
       hairFront:'outfits/boyhead.png',
      // leftHand:'outfits/girlheadleft.png',
      boyrightHand:'outfits/boyheadright1.png' //need
    }
  },
  accessory4: {
    colors: { skin:'#ffe8c6', arm:'#ffc48a', face:'#ffe8c6', leg:'#ffc48a', hand:'#ffe8c6', shoe:'#ff9fd1' },
    slots:  {
      //top:'outfits/girlhead.png',
      bottom:'outfits/girlshirt.png', //need
      //girlunderwear:'outfits/girlunderwear.png',
      // hairFront:'/outfits/hair_bangs_front.png',
      // hairBack:'/outfits/hair_long_back.png',
      // hat:'outfits/girlhead.png',
      // leftHand:'outfits/girlheadleft.png',
      rightHand:'outfits/girlheadright.png' //need
    }
  },
  PinkGloves: {
    colors: { skin:'#ffe8c6', arm:'#ffc48a', face:'#ffe8c6', leg:'#ffc48a', hand:'#ffe8c6', shoe:'#ff9fd1' },
    slots:  {
      //top:'outfits/girlhead.png',
      bottom:'outfits/girlshirt.png', //need
      //girlunderwear:'outfits/girlunderwear.png',
      // hairFront:'/outfits/hair_bangs_front.png',
      // hairBack:'/outfits/hair_long_back.png',
      hat:'outfits/girlhead.png',
      leftHand:'outfits/girlheadleft.png',
      girlheadrightgloves:'outfits/girlheadrightgloves.png' //need
    }
  },
  accessory6: {
    colors: { skin:'#ffe8c6', arm:'#ffc48a', face:'#ffe8c6', leg:'#ffc48a', hand:'#ffe8c6', shoe:'#ff9fd1' },
    slots:  {
      //top:'outfits/girlhead.png',
      bottom:'outfits/girlshirt.png', //need
      //girlunderwear:'outfits/girlunderwear.png',
      // hairFront:'/outfits/hair_bangs_front.png',
      // hairBack:'/outfits/hair_long_back.png',
      // hat:'outfits/girlhead.png',
      // leftHand:'outfits/girlheadleft.png',
      rightHand:'outfits/girlheadright.png' //need
    }
  },
  lollipop: {
    colors: { skin:'#ffe8c6', arm:'#ffc48a', face:'#ffe8c6', leg:'#ffc48a', hand:'#ffe8c6', shoe:'#ff9fd1' },
    slots:  {
      // top:'outfits/girlhead.png',
      // bottom:'outfits/girlshirt.png', //need
      bottom3:'outfits/girlshirt1.png', //need
      bottom4:'outfits/girlbottom.png', //need
      //girlunderwear:'outfits/girlunderwear.png',
      // hairFront:'/outfits/hair_bangs_front.png',
      // hairBack:'/outfits/hair_long_back.png',
      hat:'outfits/girlhead.png',
      // leftHand:'outfits/girlheadleft.png',
      rightHand:'outfits/girlheadright.png' //need
    }
  },
  accessory8: {
    colors: { skin:'#ffe8c6', arm:'#ffc48a', face:'#ffe8c6', leg:'#ffc48a', hand:'#ffe8c6', shoe:'#ff9fd1' },
    slots:  {
      //top:'outfits/girlhead.png',
      bottom:'outfits/girlshirt.png', //need
      //girlunderwear:'outfits/girlunderwear.png',
      // hairFront:'/outfits/hair_bangs_front.png',
      // hairBack:'/outfits/hair_long_back.png',
      // hat:'outfits/girlhead.png',
      // leftHand:'outfits/girlheadleft.png',
      rightHand:'outfits/girlheadright.png' //need
    }
  }
})
 
/** —— 狀態 —— */
const slots = reactive({ top:'', girlunderwear:'', bottom:'', bottom1:'',bottom2:'', bottom3:'', bottom4:'',hairFront:'', hairBack:'', hat:'', leftHand:'', leftHand1:'',rightHand:'' , boyrightHand:'' ,rightHand1:'' , girlheadrightgloves:''})
const skinColors = reactive({ body:'#ffd28e', arm:'#ffb86b', face:'#ffe2b8', leg:'#ffb86b', hand:'#ffd28e' })
const shoeColor = ref('#8ab6ff')
const svgRef = ref(null)

/** —— 通道 —— */
const props = defineProps({
  // props 屬性名稱是 selectedImageSrc，型別是 String
  selectedImageSrc: { //selectedImageSrc通道名
    type: String,
    default: 'default' // 如果父元件沒有傳，預設值是空字串
  },
});
const currentOutfitName = toRef(props, 'selectedImageSrc')
/** —— 初始化 transform-origin —— */
onMounted(() => {
  Object.values(JOINTS).forEach(j => {
    const el = svgRef.value?.querySelector(j.el)
    if (el) el.style.transformOrigin = j.origin
  })
  applyOutfitPreset(currentOutfitName.value)
  applyPose('idle', 0)
})
 
function applyPose(name, duration = 0.4) {
  const pose = POSES[name]
  if (!pose) return
  const tl = gsap.timeline({ defaults: { duration, ease: 'power3.out' }})
  for (const [joint, angle] of Object.entries(pose)) {
    const j = JOINTS[joint]
    if (!j) continue
    const el = svgRef.value?.querySelector(j.el)
    if (el) tl.to(el, { rotate: angle }, 0)
  }
  return tl
}
 
let waveTweens = []
function animateWave() {
  stopAnim()
  const lu = svgRef.value?.querySelector('#lUpperArm')
  const lf = svgRef.value?.querySelector('#lForearm')
  if (!lu || !lf) return

  waveTweens.push(
    // 調整 lUpperArm 旋轉角度，讓手臂向上舉
    // -80 是逆時針舉起
    gsap.to(lu, { rotate: 120, repeat: -1, yoyo: true, duration: 0.6, ease: 'sine.inOut' }), 
    
    // 調整 lForearm 旋轉角度，讓前臂彎曲
    // -120 讓前臂在舉起後向後彎曲
    gsap.to(lf, { rotate: 120, repeat: -1, yoyo: true, duration: 0.3, ease: 'sine.inOut' }) 
  )
}
function stopAnim() {
  waveTweens.forEach(t => t.kill())
  waveTweens = []
}
 
function applyOutfitPreset(name) {
  const o = outfits[name] || outfits.default
  // 顏色
  skinColors.body = o.colors.skin
  skinColors.arm  = o.colors.arm
  skinColors.face = o.colors.face
  skinColors.leg  = o.colors.leg
  skinColors.hand = o.colors.hand
  shoeColor.value = o.colors.shoe
  // 插槽資源
  Object.keys(slots).forEach(k => slots[k] = o.slots[k] || '')
}
watch(currentOutfitName, v => applyOutfitPreset(v))
</script>
 
<style scoped>
.rig-wrap { display:flex; flex-direction:column; align-items:center; gap:12px; }
.toolbar { display:flex; gap:8px; flex-wrap:wrap; background:#fff; padding:10px 12px; border-radius:12px; box-shadow:0 8px 24px rgba(0,0,0,.08); }
.rig-svg { width: 360px; height: 540px; background:#f6f7fb; border-radius:16px; }
button { padding:6px 10px; border:1px solid #ddd; border-radius:8px; background:#fff; cursor:pointer; }
button:hover { background:#f2f2f2; }
select { padding:6px 10px; border:1px solid #ddd; border-radius:8px; }
</style>