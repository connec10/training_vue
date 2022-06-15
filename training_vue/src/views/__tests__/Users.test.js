import { shallowMount, RouterLinkStub } from '@vue/test-utils'
import Api from 'training_vue/mock/Api.js'
import Users from '../Users.vue'

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
      id: 1,
      name: "test",
    },
    {
      id: 2,
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

  // test('詳細ページのリンク先が正しく登録されている', () => {
  //   wrapper.setData({ users: testUsers })

  //   wrapper.vm.$nextTick(() => {
  //     const item = wrapper.findAllComponents(RouterLinkStub)
  //     console.log(item.at(0).props().to);
  //     expect(item.at(0).props().to).toBe('/users/2')
  //   })
  // })
})

describe('Users.vue: getUsers関数実行時', () => {
  test('Api.jsのgetUsers関数が呼び出される ', () => {
    const spy = jest.spyOn(Api, 'getUsers')
    wrapper.vm.getUsers()
    expect(spy).toHaveBeenCalledTimes(1)
  })
})

// describe('Users.vue: created', () => {
//   test('getUsersがコールされる', () => {
//     const spy = jest.spyOn(Api, 'getUsers')

//     const wrapper = shallowMount(Users)

//     expect(spy).toHaveBeenCalledTimes(1)
//   })
// })
