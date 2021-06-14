import { mount } from '@vue/test-utils'
import App from './../../src/App.vue'

describe('App', () => {
    // Inspect the raw component options
    it('doesn`t have data', () => {
      expect(typeof App.data).toBe('undefined')
    })
  });
