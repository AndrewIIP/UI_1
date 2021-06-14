import { shallowMount } from '@vue/test-utils'
import Navbar from './../../src/components/Navbar'

const wrapper = shallowMount(Navbar, {
    propsData: {
        "show": true
    },
    stubs: ['router-link', 'router-view']
})

test("Exist button", () => {
    expect(wrapper.find("button").exists()).toBe(true)
})

test("Exist show", () => {
    expect(wrapper.find("ul").exists()).toBe(true)
})

test("test not exist show", async () => {
    await wrapper.setProps({show: false})
    expect(wrapper.find("ul").exists()).toBe(false)
})
