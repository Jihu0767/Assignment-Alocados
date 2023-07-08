import { createGlobalStyle } from 'styled-components'

const GlobalStyle = createGlobalStyle`
  @font-face {
    font-family: 'Noto Sans KR';
    font-weight: 400;
    font-style: normal;
  }
  @font-face {
    font-family: 'Poppins';
    font-weight: 400;
    font-style: normal;
  }
  body {
    position: relative;
  }
  a,
  input,
  button,
  textarea {
    all: unset;
    cursor: text;
  }
  html,
  body,
  div,
  span,
  applet,
  object,
  iframe,
  h1,
  h2,
  h3,
  h4,
  h5,
  h6,
  p,
  blockquote,
  pre,
  a,
  abbr,
  acronym,
  address,
  big,
  cite,
  code,
  del,
  dfn,
  em,
  img,
  ins,
  kbd,
  q,
  s,
  samp,
  small,
  strike,
  sub,
  sup,
  tt,
  var,
  u,
  i,
  center,
  dl,
  dt,
  dd,
  ol,
  ul,
  li,
  fieldset,
  form,
  label,
  legend,
  table,
  caption,
  tbody,
  tfoot,
  thead,
  tr,
  th,
  td,
  article,
  aside,
  canvas,
  details,
  embed,
  figure,
  figcaption,
  header,
  hgroup,
  menu,
  nav,
  output,
  ruby,
  section,
  summary,
  time,
  mark,
  audio,
  video,
  button,
  input,
  br,
  main,
  textarea {
    margin: 0;
    padding: 0;
    border: 0;
    box-sizing: border-box;
    color: #444;
    font-family: 'Noto Sans KR', sans-serif;
  }
  article,
  aside,
  details,
  figcaption,
  figure,
  footer,
  header,
  hgroup,
  menu,
  nav,
  section {
    display: block;
  }

  a {
    display: inline-block;
    text-decoration: none;
    color: inherit;
    cursor: pointer;
  }

  button {
    cursor: pointer;
  }

  img {
    border: none;
    vertical-align: middle;
  }

  ol,
  ul,
  li {
    list-style: none;
  }
`

export default GlobalStyle
