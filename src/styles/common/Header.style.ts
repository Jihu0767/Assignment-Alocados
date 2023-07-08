import styled, { css } from 'styled-components'
import { Link } from 'react-router-dom'
const St = {
  HeaderContainer: styled.header`
    position: fixed;
    z-index: 1;
    width: 100%;
    height: 120px;
    padding: 32px;
    background-color: ${(props) => props.theme.colors.white};
    display: flex;
    justify-content: space-between;
    align-items: center;
  `,
  Logo: styled.div``,
  NavLinkContainer: styled.div`
    display: flex;
    align-items: center;
    gap: ${(props) => props.theme.spacing.s24};
  `,
  NavLinkItem: styled(Link)<{ $isActive: boolean }>`
    font-weight: 500;
    padding: 15px;
    border-radius: ${(props) => props.theme.radius.s12};
    color: ${(props) => props.theme.colors.shade700};
    background-color: ${(props) => props.theme.colors.white};
    
      
    ${({ $isActive }) =>
      $isActive &&
      css`
        color: ${(props) => props.theme.colors.primary100};
        background-color: ${(props) => props.theme.colors.primary24};
      `}}
    
  `,
}

export default St
