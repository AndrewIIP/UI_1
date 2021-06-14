import { shallowMount } from '@vue/test-utils'
import User from './../../src/views/User.vue'

const wrapper = shallowMount(User, {
    stubs: ['router-link', 'router-view']
})

test("Test set username", async () => {
    await wrapper.setData({username: "user"})
    expect(wrapper.find("#info-username").text()).toBe("user")
})

test("Test set email", async () => {
    await wrapper.setData({email: "email"})
    expect(wrapper.find("#info-email").text()).toBe("email")
})

test("Test set birthday", async () => {
    await wrapper.setData({birthday: "16.05.2021"})
    expect(wrapper.find("#info-birthday").text()).toBe("16.05.2021")
})

test("Test set gender", async () => {
    await wrapper.setData({gender: "Male"})
    expect(wrapper.find("#info-gender").text()).toBe("Male")
})