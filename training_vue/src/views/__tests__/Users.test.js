import { mount } from '@vue/test-utils'
import Users from '../Users.vue'

describe('Users.vue: 読み込み中のときは「読み込み中…」を表示する', () => {

  test('', done => {
    const wrapper = mount(Users)
    const item = wrapper.findAll('div').at(1)
    console.log('item.isVisible():' + JSON.stringify(item.isVisible()));      

    wrapper.setData({ isUserDataLoading: true })
    expect(wrapper.vm.isUserDataLoading).toBe(true)

    wrapper.vm.$nextTick(() => {
      console.log('item.isVisible():' + JSON.stringify(item.isVisible()));
      
      expect(item.isVisible()).toBe(true)
      done()
    })
  });
})

describe('Users.vue: 読み込みをしていないときは「読み込み中…」を表示しない', () => {

  test('', done => {
    const wrapper = mount(Users)
    const item = wrapper.findAll('div').at(1)
    console.log('item.isVisible():' + JSON.stringify(item.isVisible()));      

    wrapper.setData({ isUserDataLoading: false })
    expect(wrapper.vm.isUserDataLoading).toBe(false)

    wrapper.vm.$nextTick(() => {
      console.log('item.isVisible():' + JSON.stringify(item.isVisible()));
      expect(item.isVisible()).toBe(false)
      done()
    })
  });
})
