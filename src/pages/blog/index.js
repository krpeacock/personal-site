import React from 'react'
import styled from 'styled-components'
import PowerStripPage from './power-strip'
import Layout from '../../components/layout'

const Banner = styled.div`
  width: 100vw;
  height: 20em;
  background-image: url(/static/blog_banner.jpg);
`

const Blog = () => (
  <Layout>
    <Banner />
    <PowerStripPage />
  </Layout>
)

export default Blog
