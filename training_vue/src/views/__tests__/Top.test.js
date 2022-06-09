import { mount } from '@vue/test-utils'
import Top from '../Top.vue'

describe('Top.vue', () => {

  test('', () => {
    const wrapper = mount(Top)
    expect(wrapper.findAll('h1').at(0).text()).toMatch('About the site')
    expect(wrapper.findAll('h1').at(1).text()).toMatch('About the feature')
  });
})
