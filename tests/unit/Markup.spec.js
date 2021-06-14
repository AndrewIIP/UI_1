import { shallowMount } from '@vue/test-utils'
import Markup from './../../src/views/Markup.vue'

const wrapper = shallowMount(Markup, {
    stubs: ['router-link', 'router-view']
})

test("Exist instruments buttons", () => {
    expect(wrapper.find('input[value="ner-per"]').exists()).toBe(true)
    expect(wrapper.find('input[value="ner-loc"]').exists()).toBe(true)
    expect(wrapper.find('input[value="ner-org"]').exists()).toBe(true)
    expect(wrapper.find('input[value="ner-date"]').exists()).toBe(true)
    expect(wrapper.find('input[value="ner-nat"]').exists()).toBe(true)
    expect(wrapper.find('input[value="ner-title"]').exists()).toBe(true)
})