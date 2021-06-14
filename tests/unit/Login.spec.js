import { shallowMount } from '@vue/test-utils'
import Register from './../../src/views/Register.vue'

const wrapper = shallowMount(Register, {
    stubs: ['router-link', 'router-view']
})

test("Test existing fields", () => {
    expect(wrapper.find('#email').exists()).toBe(true)
    expect(wrapper.find('#pwd').exists()).toBe(true)
    expect(wrapper.find('button').exists()).toBe(true)
})