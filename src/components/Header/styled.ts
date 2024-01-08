import styled from 'styled-components'

export const HeaderContainer = styled.header`
  display: flex;
  justify-content: space-between;
  align-items: center;
  height: 8rem;
`

export const Title = styled.h1`
  color: ${({ theme }) => theme.appTitleColor};
`
