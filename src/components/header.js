import React from 'react'
import { Link } from 'gatsby'
import styled from 'styled-components'

const homeRef = '/'
// const blogRef = '/blog';

const HeaderShell = styled.div`
  background: white;
  position: relative;
  z-index: 2;
  background-color: white;
  padding-top: 10px;
`
const Column = styled.div`
  margin: 0 auto;
  max-width: 960;
  display: flex;
  justify-content: center;
  flex-direction: column;
  position: relative;
  z-index: 2;
`
const Header = ({ pathname }) => (
  <HeaderShell>
    <Column>
      <Link
        to="/"
        style={{
          textDecoration: 'none',
          width: 'auto',
          display: 'flex',
          justifyContent: 'center',
        }}
      >
        <img
          src="/static/peacock-logo.png"
          style={{ width: '110px', height: '100px' }}
        />
      </Link>
      <div
        style={{
          display: 'flex',
          flexDirection: 'column',
          alignItems: 'center',
        }}
      >
        <div
          style={{
            display: 'flex',
            flexDirection: 'row',
            justifyContent: 'center',
            marginBottom: '10px',
          }}
        >
          <Link
            to="/"
            activeClassName="active"
            style={{
              textDecoration: 'none',
              marginRight: '15px',
            }}
          >
            home
          </Link>
          <Link
            to="/blog"
            activeClassName="active"
            style={{
              textDecoration: 'none',
            }}
          >
            blog
          </Link>
          <Link
            to="/contact"
            activeClassName="active"
            style={{
              textDecoration: 'none',
              marginLeft: '15px',
            }}
          >
            contact
          </Link>
        </div>
      </div>
    </Column>
  </HeaderShell>
)

export default Header
