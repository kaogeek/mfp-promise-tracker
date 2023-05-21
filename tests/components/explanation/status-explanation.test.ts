import { mount } from '@vue/test-utils';
import ExplanationContainer from '@/components/explanation/explanation-container.vue';
import ProcessFlowchart from '@/components/explanation/process-flowchart.vue';
import StatusLegend from '@/components/explanation/status-legend.vue';
import StatusExplanation from '@/components/explanation/status-explanation.vue';

test('renders container component', () => {
  const wrapper = mount(StatusExplanation);
  const container = wrapper.getComponent(ExplanationContainer);
  expect(container).toBeTruthy();
});

test('renders flowchart component', () => {
  const wrapper = mount(StatusExplanation);
  const flowchart = wrapper.getComponent(ProcessFlowchart);
  expect(flowchart).toBeTruthy();
});

test('renders status legend component', () => {
  const wrapper = mount(StatusExplanation);
  const statusLegend = wrapper.getComponent(StatusLegend);
  expect(statusLegend).toBeTruthy();
});
