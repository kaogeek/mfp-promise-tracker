<template>
  <BoxContainer class="bg-status-proposed text-white wv-font-anuphan mt-3">
    <p class="wv-u4 wv-font-bold">หมายเหตุ : โครงการต่อยอดจากรัฐบาลคสช.</p>
    <p class="wv-u5 pt-2">
      เป็นนโยบายหรือโครงการที่มีการดำเนินการมาอยู่แล้วตั้งแต่สมัย
      รัฐบาลคณะรักษาความสงบแห่งชาติ(คสช.) แล้วพรรค
      การเมือง/รัฐบาลนำมาสานต่อทำต่อเนื่องมา ไม่ได้เริ่มทำ
      เมื่อได้รับการแต่งตั้งเป็นรัฐบาล เมื่อวันที่ 10 กรกฎาคม พ.ศ. 2562
    </p>
  </BoxContainer>
</template>

<script lang="ts">
import Vue from 'vue';
import BoxContainer from './box-container.vue';

export default Vue.extend({
  name: 'NCPO',
  components: { BoxContainer },
});
</script>
