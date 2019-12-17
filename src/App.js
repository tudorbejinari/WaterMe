import React, { Component } from 'react';
import Title from './components/Title';
import Wrapper from './components/Wrapper';
import PlantCard from './components/PlantCard';
import plants from './plants.json';

class App extends Component {
  state = {
    plants
  };

  removePlant = id => {
    const plants = this.state.plants.filter(plants => plants.id !== id);
    this.setState({ plants });
  };

  render() {
    return (
      <div>
        <Title>Plants</Title>

        <Wrapper>
          {this.state.plants.map(plant => (
            <PlantCard
              removePlant={this.removePlant}
              id={plant.id}
              key={plant.id}
              name={plant.name}
              photo={plant.photo}
              water_after={plant.water_after}
            />
          ))}
        </Wrapper>
      </div>
    );
  }
}

export default App;
