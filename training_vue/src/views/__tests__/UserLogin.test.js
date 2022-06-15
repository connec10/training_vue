import { mount } from '@vue/test-utils'
import UserLogin from '../UserLogin.vue'
import Auth from 'training_vue/mock/Auth.js'

let wrapper

beforeEach(() => {
  wrapper = mount(UserLogin)
})

afterEach(() => {
  wrapper.destroy()
})

describe('UserLogin.vue: ログインボタン', () => {
  test('ボタンがクリックされたときlogin関数を呼び出す', () => {
    const button = wrapper.find('button')
    const spy = jest.spyOn(wrapper.vm, 'login')

    button.trigger('click')

    expect(spy).toBeCalled()
  })
})

describe('UserLogin.vue: login()実行時', () => {
  test('mock/Auth.jsのlogin関数が呼び出される', () => {
    const spy = jest.spyOn(Auth, 'login')

    wrapper.vm.$nextTick(() => {
      wrapper.vm.login()
      expect(spy).toHaveBeenCalledTimes(1)
    })
  })
})

describe('UserLogin.vue: cb()実行時', () => {
  test('update-loginイベントがemitされる', () => {
    wrapper.vm.cb(false)
    expect(wrapper.emitted('update-login')).toBeTruthy()
  })
})

describe('UserLogin.vue: エラーメッセージ', () => {
  test('エラーメッセージが追加されたときに正しく表示される ', () => {
    const testMessage = 'test error message'

    wrapper.setData({ errors: [testMessage] })

    wrapper.vm.$nextTick(() => {
      const item = wrapper.findAll('div').at(3)
      expect(item.text()).toBe(testMessage)
    })
  })
})
