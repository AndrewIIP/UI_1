import { mount } from '@vue/test-utils'
import ArticleList from './../../src/components/ArticleList'

const wrapper = mount(ArticleList, {
    propsData: {
        articles: [
            {id: 2, title: "test 2", text: "Oracle buy smth", language: "en", tonality: "neutral" },
            {id: 3, title: "test 3", text: "Samsung buy smth", language: "en", tonality: "neutral" }
        ],
        current_article: 0,
        instrument: "ner-per"

    },
    stubs: ['router-link', 'router-view', 'b-button-group', 'b-button', 'b-form-select']
})

test("Next Article", () => {
    wrapper.vm.next_article()
    expect(wrapper.vm.current_counter).toBe(1)
})

test("Save lang", () => {
    wrapper.vm.save_lang("ru")
    expect(wrapper.vm.temp_article.language).toBe("ru")
})

test("Save text", () => {
    wrapper.vm.save_text("New test text")
    expect(wrapper.vm.temp_article.text).toBe("New test text")
})

test("Save tonality", () => {
    wrapper.vm.save_tonality("negative")
    expect(wrapper.vm.temp_article.tonality).toBe("negative")
})