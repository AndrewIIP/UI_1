import { shallowMount } from '@vue/test-utils'
import Home from './../../src/views/Home.vue'

const wrapper = shallowMount(Home, {
    stubs: ['router-link', 'router-view']
})

test("Exist elements", () => {
    expect(wrapper.find("h2").text()).toBe("Home page")
    expect(wrapper.find("ul").exists()).toBe(true)
    expect(wrapper.find("p").exists()).toBe(true)
})