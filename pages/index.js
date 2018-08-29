import Layout from '../index.js'
import Header from '../components/Header'
import Stats from '../components/Stats';
import DdfInfo from '../components/Context/DdfInfo'
import DdfInfoContext from '../components/Context/DdfInfoContext'
import Bounties from '../components/Bounties';

export default () => (
    <DdfInfo>
      <Layout>
        <Header/>
          <DdfInfoContext.Consumer>
            {props => (
              <Stats stats={props.stats}/>
            )}
          </DdfInfoContext.Consumer>
          <Bounties />
      </Layout>
    </DdfInfo>
)
