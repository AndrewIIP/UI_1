import { shallowMount } from '@vue/test-utils'
import Register from './../../src/views/Register.vue'

const wrapper = shallowMount(Register, {
    stubs: ['router-link', 'router-view']
})

test("Tests existing fields", () => {
    expect(wrapper.find('#name').exists()).toBe(true)
    expect(wrapper.find('#gender').exists()).toBe(true)
    expect(wrapper.find('#birthday').exists()).toBe(true)
    expect(wrapper.find('#email').exists()).toBe(true)
    expect(wrapper.find('#pwd').exists()).toBe(true)
    expect(wrapper.find('#pwd_confirm').exists()).toBe(true)
})

test("Tests password confirm", async () => {
    const pwd = wrapper.find('#pwd')
    await pwd.setValue("123456")
    expect(wrapper.find('#pwd').element.value).toBe('123456')

    const pwd_confirm = wrapper.find('#pwd_confirm')
    await pwd_confirm.setValue("123456")
    expect(wrapper.find('#pwd_confirm').element.value).toBe('123456')
})

test("Tests submit", async () => {
    wrapper.setData({
        password: "123456", confirm_password: "123456" 
    })
    expect(wrapper.vm.password).toBe("123456")
    expect(wrapper.vm.confirm_password).toBe("123456")
    expect(wrapper.vm.submit()).toBe(true)

})

test("Tests false submit", async () => {
    wrapper.setData({
        password: "123456", confirm_password: "12345678" 
    })
    expect(wrapper.vm.password).toBe("123456")
    expect(wrapper.vm.confirm_password).toBe("12345678")
    expect(wrapper.vm.submit()).toBe(false)

})