export type NavTitle = '환전하기' | '거래내역'
export type NavLink = '/' | '/transHistories'

interface NavigationType {
  id: number
  title: NavTitle
  link: NavLink
}

const Navigation: readonly NavigationType[] = Object.freeze([
  {
    id: 0,
    title: '환전하기',
    link: '/',
  },
  {
    id: 1,
    title: '거래내역',
    link: '/transHistories',
  },
])

export default Navigation
