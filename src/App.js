import React from 'react'

import Layout from './Components/Layout/Layout'

import Shopping from './Container/Shopping/Shopping'


class App extends React.Component {
  render() {
    return (
      <div>
        <Layout>
          <Shopping />
        </Layout>
      </div>
    )
  }
}

export default App
