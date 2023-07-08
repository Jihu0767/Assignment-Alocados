import { useLocation } from 'react-router-dom'
import St from 'styles/common/Header.style'
import Navigation from 'static/navigation'
import { ReactComponent as HeaderLogo } from 'assets/icons/headerLogo.svg'
const Header = () => {
  const { pathname } = useLocation()
  return (
    <St.HeaderContainer>
      <St.Logo>
        <HeaderLogo />
      </St.Logo>
      <St.NavLinkContainer>
        {Navigation.map((nav) => {
          return (
            <St.NavLinkItem key={nav.id} to={nav.link} $isActive={pathname === nav.link}>
              {nav.title}
            </St.NavLinkItem>
          )
        })}
      </St.NavLinkContainer>
    </St.HeaderContainer>
  )
}

export default Header
