import { shallowMount } from '@vue/test-utils'
import Api from 'training_vue/mock/Api.js'
import Users from '../Users.vue'

const wrapper = shallowMount(Users, {
  stubs: ['router-link', 'router-view']
})

describe('Users.vue: 読み込み中表示', () => {
  const item = wrapper.findAll('div').at(1)

  test('isUserDataLoading: trueのときは「読み込み中…」を表示する', () => {
    wrapper.setData({ isUserDataLoading: true })

    wrapper.vm.$nextTick(() => {
      expect(wrapper.vm.isUserDataLoading).toBe(true)
      expect(item.isVisible()).toBe(true)
    })
  })
  
  test('isUserDataLoading: falseのときは「読み込み中…」を表示しない', () => {
    wrapper.setData({ isUserDataLoading: false })

    wrapper.vm.$nextTick(() => {
      expect(wrapper.vm.isUserDataLoading).toBe(false)
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
})

describe('Users.vue: mount', () => {
  test('マウント時にgetUsersがコールされる', () => {
    const spy = jest.spyOn(Api, 'getUsers')
    expect(spy).toHaveBeenCalledTimes(0)

    const wrapper = shallowMount(Users)

    expect(spy).toHaveBeenCalledTimes(1)
  })
})
