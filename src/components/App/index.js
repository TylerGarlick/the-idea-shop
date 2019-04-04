import React, { useState } from 'react'

import { Normalize } from '@smooth-ui/core-sc'
import styled from 'styled-components'
import { MdMenu } from 'react-icons/md'

import RouterContent from '../Router'
import RightNav from './RightNavigation'
import { DEFAULT_PADDING, FOURTH_PADDING, PRIMARY, SECONDARY, TERCIARY, RED } from '../../styles'

const Main = styled.main`
  display: flex;
  background: ${TERCIARY.alt300};
`
const Header = styled.header`
  display: flex;
  padding: ${FOURTH_PADDING} ${DEFAULT_PADDING};
  background: ${PRIMARY.alt700};
  color: ${TERCIARY.alt300};
`

const Brand = styled.h3`
  display: inline-block;
  flex: 2;
  color: ${TERCIARY.alt300};
`

const UserNavigation = styled.section`
  display: flex;
  flex-direction: column;
  justify-content: center;
  margin: ${FOURTH_PADDING} 0px;
  margin-left: ${DEFAULT_PADDING};

  nav {
    display: none;
    background: red;
    padding: ${DEFAULT_PADDING};
  }

  nav:hover {
    display: block;
  }

  nav a {
    display: block;
  }
`

const UserName = styled.a`
  text-decoration: none;
  cursor: pointer;

  &:hover {
    text-decoration: underline;
  }
`

const ShoppingCart = styled(UserNavigation)`
  padding: ${DEFAULT_PADDING};
  &:hover {
    color: ${RED.primary};
    background: ${PRIMARY.alt900};
  }
`

const Footer = styled.footer`
  padding: ${DEFAULT_PADDING};
  background: ${SECONDARY.alt700};
  color: ${SECONDARY.alt100};
`
const MainContent = styled.article`
  flex: 1;
  display: flex;
  flex-direction: column;
  padding: 16px;
  height: 100%;
`

// FaShoppingCart

export default () => {
  const [isRightNavVisible, setRightNavVisible] = useState(false)

  return (
    <>
      <Normalize />
      <Header>
        <Brand>The Idea Shop</Brand>
        <nav>
          <a href="/checkout">Check Out</a>
        </nav>
        <UserNavigation>
          <UserName>Tyler Garlick</UserName>
          {/*<nav>*/}
          {/*<a href="#">Orders</a>*/}
          {/*<a href="#">Profile</a>*/}
          {/*<a href="#">Logout</a>*/}
          {/*</nav>*/}
        </UserNavigation>
        <ShoppingCart onClick={e => setRightNavVisible(!isRightNavVisible)}>
          <MdMenu />
        </ShoppingCart>
      </Header>
      <Main>
        <MainContent>
          <RouterContent />
        </MainContent>
        {isRightNavVisible && <RightNav>Some things</RightNav>}
      </Main>
      <Footer>This is my footer..</Footer>
    </>
  )
}
