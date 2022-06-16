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

describe('UserCreate.vue: 送信中メッセージ', () => {

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
    const spy = jest.spyOn(wrapper.vm, 'postUser').mockImplementation()

    button.trigger('click')

    expect(spy).toBeCalled()
  })
})

describe('UserCreate.vue: postUserメソッド', () => {
  test('実行時にApi.jsのpostUserメソッドを呼び出す', () => {
    const spy = jest.spyOn(Api, 'postUser').mockImplementation()

    wrapper.vm.postUser()

    expect(spy).toBeCalled()
  })
})

describe('UserCreate.vue: afterPostUser()実行時', () => {
  const alertMsg = 'test alert'
  const user = {
    id: 999,
    name: 'test-user',
    description: 'test-description'
  }

  test('前の処理が成功したときはアラートが表示され、内容も正しく表示される', () => {
    const spy = jest.spyOn(wrapper.vm, 'moveToUserDetail').mockImplementation()
    window.alert = jest.fn()
    wrapper.setData({ messageCreateSuccess: alertMsg })

    wrapper.vm.afterPostUser(null,user)

    expect(window.alert).toHaveBeenCalledWith(alertMsg)
  })
})
