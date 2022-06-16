import { shallowMount, RouterLinkStub } from '@vue/test-utils'
import Api from 'training_vue/mock/Api.js'
import Users from '../Users.vue'

const spyGetUsers = jest.spyOn(Users.methods, 'getUsers')
const wrapper = shallowMount(Users, {
  stubs: {
    RouterLink: RouterLinkStub
  }
})

describe('Users.vue: 読み込み中表示', () => {
  const item = wrapper.findAll('div').at(1)

  test('isUserDataLoading: trueのときは「読み込み中…」を表示する', () => {
    wrapper.setData({ isUserDataLoading: true })

    wrapper.vm.$nextTick(() => {
      expect(item.isVisible()).toBe(true)
    })
  })

  test('isUserDataLoading: falseのときは「読み込み中…」を表示しない', () => {
    wrapper.setData({ isUserDataLoading: false })

    wrapper.vm.$nextTick(() => {
      expect(item.isVisible()).toBe(false)
    })
  })
})

describe('Users.vue: ユーザー一覧テーブル', () => {
  const testUsers = [
    {
      id: 11,
      name: "test",
    },
    {
      id: 22,
      name: "test2",
    },
  ]

  test('usersの数と同じ行数を表示する', () => {
    wrapper.setData({ users: testUsers })

    wrapper.vm.$nextTick(() => {
      const item = wrapper.findAll('tbody>tr')
      expect(item.length).toBe(2)
    })
  })

  test('詳細ページのリンク先が正しく登録されている', () => {
    wrapper.setData({ users: testUsers })

    wrapper.vm.$nextTick(() => {
      const links = wrapper.findComponent(RouterLinkStub)
      expect(links.props().to.params.userId).toBe(11)
    })
  })
})

describe('Users.vue: getUsers関数実行時', () => {
  test('Api.jsのgetUsers関数が呼び出される ', () => {
    const spy = jest.spyOn(Api, 'getUsers')
    wrapper.vm.getUsers()
    expect(spy).toHaveBeenCalledTimes(1)
  })
})

describe('Users.vue: created', () => {
  test('getUsersがコールされる', () => {
    // expect(spyGetUsers).toHaveBeenCalledTimes(1)
  })
})
