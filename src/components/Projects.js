import React, { useState } from 'react'
import Projects_cards from '../mini-components/Projects_card';

function Projects() {
  const [proj, setprojects] = useState([
    {
      project: "TODO Application",
      logo: "https://img.freepik.com/free-vector/list-concept-illustration_114360-2498.jpg?w=2000",
      gh_link : "https://github.com/AyushKumarPal/ToDo-app-using-ReactJS",
      all: [
        {
          technology_used: "ReactJS",
          description: "You can add your day to day tasks..."
        }
      ]
    },
    {
      project: "Portfolio",
      logo: "https://cdn.dribbble.com/users/1451727/screenshots/6132701/dribble-shot-2.png",
      gh_link : "#",
      all: [
        {
          technology_used: "ReactJs",
          description: "Some description of the portfolio"
        }
      ]
    },
  ]);

  return (
    <div className="projects">
      <h1 align="center">My Work</h1>
          <div className="container">
            {
              proj.map((project,index)=>(
                <Projects_cards key={index} data={project}/>
              ))
            }
          </div>
    </div>
  );
}

export default Projects