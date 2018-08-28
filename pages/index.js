import Layout from '../index.js'
import Header from '../components/Header'

import styled from 'styled-components'

const Title = styled.h1`
  color: red;
  font-size: 50px;
`

export default () => (
  <Layout>
    <Header/>
  </Layout>
)
