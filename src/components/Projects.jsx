import React, { Component } from 'react'
import axios from 'axios'

class Projects extends Component {

  state = {
      projects: [
        {
            "id": 1,
            "name": "My first project"
        },
        {
            "id": 2,
            "name": "My second project"
        },
      ]
  }
  
  componentDidMount() {
      this.readProjects();
  }

  async readProjects() {
      let projects = await axios.get('./projects.json');
      this.setState({projects: projects.data});
  }

  render() {
    let projectsList = this.state.projects.map(project => {
        return(
            <div key={project.id}>
               <h3>{project.name}</h3>
            </div>
        )
    })
    return (
      <>
        {projectsList}
      </>
    )
  }
}

export default Projects;