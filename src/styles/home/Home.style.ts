import styled from 'styled-components'

const St = {
  HomeContainer: styled.section``,
  MyCoinListContainer: styled.article`
    border-radius: ${(props) => props.theme.radius.s12};
    padding: ${(props) => props.theme.spacing.s24};
    background-color: ${(props) => props.theme.colors.shade000};

    h2 {
      font-weight: 600;
      color: ${(props) => props.theme.colors.shade700};
    }

    hr {
      display: inline-block;
      width: 100%;
      height: 1px;
      border: none;
      background-color: ${(props) => props.theme.colors.shade300};
      // border-top: 1px solid ${(props) => props.theme.colors.shade300};
      margin: ${(props) => props.theme.spacing.s16} 0;
    }
  `,
}
export default St
