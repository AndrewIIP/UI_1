import { shallowMount } from '@vue/test-utils'
import ArticleItem from './../../src/components/ArticleItem'

describe("ArticleItem", () => {
    const wrapper = shallowMount(ArticleItem, {
        propsData: {
            article: {id: 2, title: "test 2", text: "Oracle buy smth", language: "en", tonality: "neutral" },
            instrument: "ner-per"

        },
        stubs: ['router-link', 'router-view', 'b-form-select']
    })

    it("test title exist", () => {
        expect(wrapper.find("h3").exists()).toBe(true)
    })

    it("test text exist", () => {
        expect(wrapper.find("p").exists()).toBe(true)
    })

    it("test title value",  ()=> {
        expect(wrapper.vm.article.title).toBe("test 2")
    })

    it("test text value",  ()=> {
        expect(wrapper.vm.text).toBe("Oracle buy smth")
    })

    it("test language value",  ()=> {
        expect(wrapper.vm.language).toBe("en")
    })

    it("test tonality value",  ()=> {
        expect(wrapper.vm.tonality).toBe("neutral")
    })

})