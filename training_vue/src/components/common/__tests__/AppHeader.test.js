import { mount, RouterLinkStub } from '@vue/test-utils'
import Auth from 'training_vue/mock/Auth.js'
import AppHeader from '../AppHeader.vue'

const router = { push: jest.fn() }
let wrapper
let linkLogin
let linkLogout

beforeEach(() => {
  wrapper = mount(AppHeader, {
    stubs: { RouterLink: RouterLinkStub },
    mocks: { $router: router },
    propsData: { login: true },
  })
  linkLogin = wrapper.findAll('a').at(3)
  linkLogout = wrapper.findAll('a').at(4)
})

afterEach(() => {
  wrapper.destroy()
})

describe('AppHeader.vue: ログアウト クリックしたとき', () => {

  test('logout()を呼び出す', () => {
    const spy = jest.spyOn(wrapper.vm, 'logout').mockImplementation()

    linkLogout.trigger('click')

    expect(spy).toBeCalled()
  })
})

describe('AppHeader.vue: logout()実行時', () => {
  test('Auth.logout()を呼び出す', () => {
    const spy = jest.spyOn(Auth, 'logout').mockImplementation()
    window.alert = jest.fn()

    wrapper.vm.logout()

    expect(spy).toBeCalled()
  })

  test('update-loginイベントを呼び出す', () => {
    window.alert = jest.fn()

    wrapper.vm.logout()

    expect(wrapper.emitted('update-login')[0][0]).toBe(false)
  })

  test('アラートを表示する', () => {
    const spy = jest.spyOn(Auth, 'logout').mockImplementation()
    window.alert = jest.fn()

    wrapper.vm.logout()

    expect(window.alert).toHaveBeenCalledWith('ログアウトしました。トップページへ遷移します。')
  })
})

describe('AppHeader.vue: login props', () => {
  test('trueのときログアウトを表示する ', () => {
    expect(linkLogout.isVisible()).toBe(true)
  })

  test('trueのときログインを表示しない ', () => {
    expect(linkLogin.isVisible()).toBe(false)
  })

  test('falseのときログインを表示する ', () => {
    wrapper.setProps({ login: false })
    wrapper.vm.$nextTick(() => {
      expect(linkLogin.isVisible()).toBe(true)
    })
  })

  test('falseのときログアウトを表示しない ', () => {
    wrapper.setProps({ login: false })
    wrapper.vm.$nextTick(() => {
      expect(linkLogout.isVisible()).toBe(false)
    })
  })
})
