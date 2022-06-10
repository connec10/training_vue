import { mount } from '@vue/test-utils'
import Users from '../Users.vue'

describe('Users.vue: 読み込み中表示テスト', () => {
  const wrapper = mount(Users)
  const item = wrapper.findAll('div').at(1)
  const msg = '「読み込み中…」.isVisible(): '

  test('', done => {
    console.log('TEST:読み込み中のときは「読み込み中…」を表示する')
    wrapper.setData({ isUserDataLoading: true })
    expect(wrapper.vm.isUserDataLoading).toBe(true)

    wrapper.vm.$nextTick(() => {
      console.log(msg + JSON.stringify(item.isVisible()))
      expect(item.isVisible()).toBe(true)
      done()
    })
  });
  
  test('', done => {
    console.log('TEST:読み込みをしていないときは「読み込み中…」を表示しない')
    wrapper.setData({ isUserDataLoading: false })
    expect(wrapper.vm.isUserDataLoading).toBe(false)

    wrapper.vm.$nextTick(() => {
      console.log(msg + JSON.stringify(item.isVisible()))
      expect(item.isVisible()).toBe(false)
      done()
    })
  });

})
