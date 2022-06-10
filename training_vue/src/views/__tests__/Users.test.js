import { mount } from '@vue/test-utils'
import Users from '../Users.vue'

const wrapper = mount(Users)

describe('Users.vue: 読み込み中表示', () => {
  const item = wrapper.findAll('div').at(1)
  const msg = '「読み込み中…」.isVisible(): '

  test('読み込み中のときは「読み込み中…」を表示する', done => {
    wrapper.setData({ isUserDataLoading: true })
    expect(wrapper.vm.isUserDataLoading).toBe(true)

    wrapper.vm.$nextTick(() => {
      // console.log(msg + item.isVisible())
      expect(item.isVisible()).toBe(true)
      done()
    })
  })
  
  test('読み込みをしていないときは「読み込み中…」を表示しない', done => {
    wrapper.setData({ isUserDataLoading: false })
    expect(wrapper.vm.isUserDataLoading).toBe(false)

    wrapper.vm.$nextTick(() => {
      // console.log(msg + item.isVisible())
      expect(item.isVisible()).toBe(false)
      done()
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
  
  test('usersの数だけ行が表示される', done => {
    wrapper.setData({ users: testUsers })

    wrapper.vm.$nextTick(() => {
      const item = wrapper.findAll('tbody>tr')
      // console.log('item: ' + JSON.stringify(item.length))
      expect(item.length).toBe(2)
      done()
    })
  })
})
