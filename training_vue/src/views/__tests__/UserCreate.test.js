import { mount } from '@vue/test-utils'
import UserCreate from '../UserCreate.vue'
import Api from 'training_vue/mock/Api.js'

let wrapper
let itemSendingMsg

beforeEach(() => {
  wrapper = mount(UserCreate)
  itemSendingMsg = wrapper.findAll('div').at(1)
})

afterEach(() => {
  wrapper.destroy()
})

describe('UserCreate.vue: 送信中に表示するメッセージ', () => {

  test('isSending === true のときにメッセージが表示される ', () => {
    wrapper.setData({ isSending: true })
    wrapper.vm.$nextTick(() => {
      expect(itemSendingMsg.isVisible()).toBe(true)
    })
  })

  test('isSending === false のときにメッセージが非表示になる ', () => {
    wrapper.setData({ isSending: false })
    wrapper.vm.$nextTick(() => {
      expect(itemSendingMsg.isVisible()).toBe(false)
    })
  })
})

describe('UserCreate.vue: エラーメッセージ', () => {
  const errors = [
    'エラーメッセージ１',
    'エラーメッセージ２',
    'エラーメッセージ３',
  ]

  test('受け取ったメッセージを全て表示する', () => {
    wrapper.setData({ errors: errors })

    wrapper.vm.$nextTick(() => {
      const item = wrapper.findAll('.error_message')
      expect(item.length).toBe(3)
    })
  })

  test('エラーメッセージを正しく表示する', () => {
    wrapper.setData({ errors: errors })

    wrapper.vm.$nextTick(() => {
      const item = wrapper.findAll('.error_message').at(1)
      expect(item.text()).toBe('エラーメッセージ２')
    })
  })
})

describe('UserCreate.vue: 送信ボタン', () => {
  test('ボタンがクリックされたらpostUser関数を呼び出す', () => {
    const button = wrapper.find('button')
    const spy = jest.spyOn(wrapper.vm, 'postUser')

    button.trigger('click')

    expect(spy).toBeCalled()
  })
})

describe('UserCreate.vue: postUser関数', () => {
  test('実行時にApi.jsのpostUser関数を呼び出す', () => {
    const spy = jest.spyOn(Api, 'postUser')

    wrapper.vm.postUser()

    expect(spy).toHaveBeenCalledTimes(1)
  })
})
