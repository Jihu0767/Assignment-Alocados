import { FC, PropsWithChildren } from 'react'
import styled from 'styled-components'

const PageTitle: FC<PropsWithChildren> = ({ children }) => {
  return <St.Title>{children}</St.Title>
}

export default PageTitle

const St = {
  Title: styled.h1`
    margin-bottom: ${(props) => props.theme.spacing.s24};
    font-size: 22px;
    font-weight: 700;
    color: ${(props) => props.theme.colors.shade900};
  `,
}
