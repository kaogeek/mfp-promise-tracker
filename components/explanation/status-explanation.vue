<template>
  <ExplanationContainer title="ติดตามการดำเนินนโยบาย">
    <ProcessFlowchart class="flex-shrink-0 mb-2 sm:mt-2 sm:mb-0 sm:mr-8" />
    <StatusLegend class="mt-4 text-white" />
  </ExplanationContainer>
</template>

<script lang="ts">
import Vue from 'vue';
import ExplanationContainer from './explanation-container.vue';
import ProcessFlowchart from './process-flowchart.vue';
import StatusLegend from './status-legend.vue';
export default Vue.extend({
  name: 'StatusExplanation',
  components: { ExplanationContainer, ProcessFlowchart, StatusLegend },
});
</script>
