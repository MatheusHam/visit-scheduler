import React from 'react'
import TopBar from './TopBar'
import VisitContainer from './VisitContainer'


class App extends React.Component {

  state = {
    days: ["01/08", "02/08", "03/08", "04/08", "05/08", "06/08"],
    timeschedules: ["08:00", "10:00", "12:00", "14:00", "16:00", "18:00"],
    car: {
      "name": "Fiat Argo",
      "specs": "REX FULL V8 4P AUTOMATICO",
      "price": "$100.000",
      "city": "Osasco - SP"
    },
    page: 'initial',
  }

  changeComponents = (nextRender) => {
    this.setState(
      {
        page: nextRender
      }
    )
  } 
  render() {

    return (
      <div>
        <TopBar />
        <VisitContainer car={this.state.car}
          days={this.state.days}
          timeschedules={this.state.timeschedules}
          changeComponents={this.changeComponents}
          page={this.state.page} />
      </div>

    )
  }
}

export default App;