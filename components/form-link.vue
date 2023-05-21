<template>
  <a
    ref="form"
    class="w-full mb-6"
    href="https://bit.ly/promisetracker-feedback"
    target="_blank"
    rel="noopener noreferrer"
    @click="$emit('tagClicked', true)"
  >
    <Button class="w-full justify-center"
      ><span>แจ้งคำสัญญาที่อยากให้ติดตามเพิ่มเติม</span>
      <svg
        width="12"
        height="12"
        viewBox="0 0 12 12"
        fill="currentColor"
        xmlns="http://www.w3.org/2000/svg"
      >
        <path
          d="M-2.26862e-07 6.74994L-2.92429e-07 5.24994L9 5.24994L4.875 1.12494L5.94 0.0599401L11.88 5.99994L5.94 11.9399L4.875 10.8749L9 6.74994L-2.26862e-07 6.74994Z"
        />
      </svg>
    </Button>
  </a>
</template>

<script lang="ts">
import Vue from 'vue';
import Button from '@/components/button.vue';
export default Vue.extend({
  name: 'FormLink',
  components: { Button },
});
</script>
