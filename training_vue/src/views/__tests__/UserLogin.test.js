import { shallowMount } from '@vue/test-utils';
import UserLogin from '../UserLogin.vue';

let wrapper

beforeEach(() => {
  wrapper = shallowMount(UserLogin)
})

afterEach(() => {
  wrapper.destroy();
})

describe('UserLogin.vue: ログインボタン', () => {
  test('ボタンがクリックされたときlogin関数を呼び出す', () => {
    const button = wrapper.find('button')
    const spy = jest.spyOn(wrapper.vm, 'login')
    expect(spy).not.toBeCalled()

    button.trigger('click')

    expect(spy).toBeCalled()
  })
})
