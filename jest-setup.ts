import '@testing-library/jest-dom';
import { config } from '@vue/test-utils';

config.mocks.$config = {
  path: {
    base: '',
    images: '/images',
  },
};
