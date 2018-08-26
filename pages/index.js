import Layout from '../index.js'
import 'antd/lib/button/style';
import Button from 'antd/lib/button';

import styled from 'styled-components'

const Title = styled.h1`
  color: red;
  font-size: 50px;
`

export default () => (
  <Layout>
    <Title>This awesome styled title!</Title>
    <Button>
      And this button!
    </Button>
  </Layout>
)
