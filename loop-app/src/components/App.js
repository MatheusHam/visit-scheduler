import React from 'react'
import TopBar from './TopBar'
import VisitContainer from './VisitContainer'


class App extends React.Component {

  car = {
      "name": "Fiat Argo",
      "specs": "v8 2.0",
      "price": "$10.000",
      "city": "Osasco"
  }
  


  render() {
    return (
      <div>
        <TopBar />
        <div>
        <VisitContainer car={ this.car} />
        </div>
      </div>
    )
  }
}

export default App;