import LayoutStyle from 'styles/layout/Layout.style'
import { PropsWithChildren } from 'react'

const Layout = ({ children }: PropsWithChildren) => {
  return <LayoutStyle.Container>{children}</LayoutStyle.Container>
}

export default Layout
