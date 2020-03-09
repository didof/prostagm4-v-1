// import dependencies
import React from 'react';

// import styling sheets
import './App.css';

// import components
import Topbar from '../components/Topbar/Topbar'
import Cockpit from '../components/Cockpit/Cockpit'



class App extends React.Component {
  constructor() {
    super()
    this.state = {
      game: {
        day: 0
      },
      mgmt: {
        resources: [
          { name: 'food', quant: 200, max: 300, rate: 0, icon: 'fas fa-drumstick-bite' },
          { name: 'wood', quant: 100, max: 150, rate: 0, icon: 'fas fa-tree'},
          { name: 'stone', quant: 80, max: 150, rate: 0, icon: 'fas fa-cubes' },
          { name: 'gold', quant: 50, max: 50, rate: 0, icon: 'fas fa-coins' },
          { name: 'pop', quant: 3, max: 25, rate: 0, icon: 'fas fa-campground' }
        ],
        options: [
          { name: 'economy', icon: 'fas fa-balance-scale', disable: false },
          { name: 'building', icon: 'fas fa-hammer', disable: false},
          { name: 'jurisdiction', icon: 'fas fa-gavel', disable: true},
        ],
        activeOption: {
        name: 'building'
        },
        dispositions: {
          food: {
            rations: 3
          }
        },
        jobs: {
          foodJob: [
            { name: 'hunters', quant: 2, skills: 3 },
            { name: 'fishers', quant: 0, skills: 1 },
            { name: 'farmers', quant: 1, skills: 1 }
          ]
        }
    }
  }
  }

  handleChangeActiveOption = changeName => {
    const temp = {...this.state.mgmt}
    temp.activeOption = changeName
    this.setState({ mgmt: temp }
    //, () => {console.log(this.state.mgmt.activeOption)}
    )
  }

  // componentDidMount() {
  //   setTimeout(this.nextDay, 1000)
  //   setInterval(this.nextDay, 3000)
  // }

  nextDay = () => {
    const temp = {...this.state.game}
    temp.day = temp.day + 1

    const update = [...this.state.mgmt.resources]
    const workers = this.state.mgmt.jobs
    
    // about food
    // food produced
    let foodProd = 0;
    workers.foodJob.forEach(w => {
     foodProd += w.quant * (Math.floor(Math.random() * w.skills))
    })

    // food consumed
    let popAmount = update.find(item => {
      return item.name === 'pop'
    }).quant 
    let foodCons = popAmount * this.state.mgmt.dispositions.food.rations

    // food I've got
    update.find(item => {
      return item.name === 'food'
    }).quant += (foodProd - foodCons)

    this.setState({ 
      game: temp,
      resources: update
      })

  }


  render() {
    return (
      <div className="App">
        <div className="Topbar">
          <Topbar day={this.state.game.day}/>
        </div>
        <div className="Cockpit">
          <Cockpit
            mgmt={this.state.mgmt}
            action={this.handleChangeActiveOption}
          />
        </div>
      </div>
    )
  }
}

export default App;
