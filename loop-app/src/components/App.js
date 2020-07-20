import React from 'react'
import TopBar from './TopBar'
import VisitContainer from './VisitContainer'


class App extends React.Component {

  state = {
            days: ["01/01", "01/02", "01/03", "01/01", "01/01", "01/01"],
            timeschedules: ["08:00", "10:00", "12:00", "14:00", "16:00", "18:00"],
            car: {
                    "name": "Fiat Argo",
                    "specs": "v8 2.0",
                    "price": "$10.000",
                    "city": "Osasco"
                  },
        }

  removeComponents = () => {
    console.log('O Button Passou Por Aqui')
    this.setState(
      {
        status: 'false'
      }
    )
    console.log(this.state.status)
  }
  render() {


    return (
      <div>
        <TopBar />
        <VisitContainer car={this.state.car}
                        days={this.state.days}
                        timeschedules={this.state.timeschedules}
                        status={this.state.status}
                        removeComponents={this.removeComponents} />
      </div>
    )
  }
}

export default App;