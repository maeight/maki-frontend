import React from 'react'
import styled, { keyframes } from 'styled-components'
import { Link } from 'react-router-dom'
import { ButtonMenu, ButtonMenuItem } from 'maki-uikit-v2'

const Load = keyframes`{
  0% {
    opacity: 0%;
  }
  100% {
    opacity: 100%;
  }
}`;

const StyledNav = styled.div`
  margin-bottom: 40px;
  // animation: ${Load} 300ms ease-in forwards;
`

const Nav = ({ activeIndex = 0 }: { activeIndex?: number }) => (
  <StyledNav>
    <ButtonMenu activeIndex={activeIndex} scale="sm" variant="subtle">
      <ButtonMenuItem id="swap-nav-link" to="/swap" as={Link}>
        Swap
      </ButtonMenuItem>
      <ButtonMenuItem id="pool-nav-link" to="/pool" as={Link}>
        Liquidity
      </ButtonMenuItem>
    </ButtonMenu>
  </StyledNav>
)

export default Nav
