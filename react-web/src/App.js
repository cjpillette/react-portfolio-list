import React, { Component } from 'react';
import ProjectList from './components/ProjectList';
import './App.css';

class App extends Component {
  state = {
    projects: null
  }
  render() {
    const { projects } = this.state
    return (
      <div className="App">
        {
          // ![] = false
          // !![] = true
          // !null = true
          // !!null = false (still waiting to load)
          !!projects ? (
            <ProjectList items={ projects } />
          ) : (
            'loading projects'
          )
        }
      </div>
    );
  }

//Run after our component instance first appears on screen
  componentDidMount(){
    // Load projects from API
    fetch('/projects')
    //parsing the json data into JS objects
    .then(res => res.json())
    //update component state with the loaded projects
    .then(json => {
      //changing the state for the projects
      this.setState({
        projects: json
      })
    })
  }
}

export default App;
