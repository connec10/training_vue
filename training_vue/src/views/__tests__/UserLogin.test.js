import { shallowMount } from '@vue/test-utils';
import UserLogin from '../UserLogin.vue';
import Auth from 'training_vue/mock/Auth.js'

let wrapper

beforeEach(() => {
  wrapper = shallowMount(UserLogin)
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

describe('UserLogin.vue: Login関数実行時', () => {
  test('mock/Auth.jsのlogin関数が呼び出される', () => {
    const spy = jest.spyOn(Auth, 'login')

    wrapper.vm.$nextTick(() => {
      wrapper.vm.login()
      expect(spy).toHaveBeenCalledTimes(1)
    })
  })

  test('update-loginイベントがemitされる', () => {
    const event = wrapper.emitted('update-login')

    // wrapper.vm.login()
    wrapper.vm.$emit('update-login')

    wrapper.vm.$nextTick(() => {
      expect(wrapper.emitted('update-login')).toBeTruthy()
    })
  })
})

describe('UserLogin.vue: エラーメッセージ', () => {
  test('エラーメッセージが追加されたときに正しく表示される ', () => {
    const testMessage = 'test error message'

    wrapper.setData({ errors: [testMessage] })

    wrapper.vm.$nextTick(() => {
      const item = wrapper.findAll('div').at(3) //エラーメッセージ表示部
      expect(item.text()).toBe(testMessage)
    })
  })
})
