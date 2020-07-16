import React from 'react'
import TopBar from './TopBar'
import VisitContainer from './VisitContainer'


class App extends React.Component {
  render() {
    return (
      <div>
        <TopBar />
        <VisitContainer />
      </div >
    );
  }
}

export default App;