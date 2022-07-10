import React, {useState} from "react";
import Card from "../mini-components/Card";

function Skills() {

  const[skills,setSkills] = useState([
    {
      technology : "Frontend",
      logo : "https://cdni.iconscout.com/illustration/premium/thumb/front-end-developer-doing-web-designing-4152245-3444401.png",
      all : [
        {
        name : "HTML5",
        link : "https://en.wikipedia.org/wiki/HTML5"
        },
        {
          name : "CSS3",
          link : "https://en.wikipedia.org/wiki/CSS"
        },
        {
          name : "Bootstrap",
          link : "https://en.wikipedia.org/wiki/Bootstrap_(front-end_framework)"
          },
          {
            name : "ReactJs",
            link : "https://en.wikipedia.org/wiki/React_(JavaScript_library)"
          }
      ]
    }, 
    {
      technology : "Backend",
      logo : "https://epnovate.com/wp-content/uploads/2020/08/back-end-development-it-concept_126283-67.png",
      all : [
        {
        name : "NodeJs",
        link : "https://en.wikipedia.org/wiki/Node.js"
        },
        {
          name : "Express.js",
          link : "https://en.wikipedia.org/wiki/Express.js"
        },
        {
          name : "PHP",
          link : "https://en.wikipedia.org/wiki/PHP"
        }
      ]
    },
    {
      technology : "Progamming Languages",
      logo : "https://img.freepik.com/free-vector/programer-learning-programming-languages-by-computer-laptop-website-tutorial-channel-online-education-class-vector-illustration-software-development-programming-languages-learning_1150-55428.jpg?w=2000",
      all : [
        {
        name : "C",
        link : "https://en.wikipedia.org/wiki/C_(programming_language)"
        },
        {
          name : "C++",
          link : "https://en.wikipedia.org/wiki/C%2B%2B"
        }
      ]
    },
  ]);

  return (
    <div className="skills">
      <h1 align="center">My Tech Stack</h1>
          <div class="container">
            {
              skills.map((stack,index)=>(
                <Card key={index} data={stack}/>
              ))
            }
          </div>
    </div>
  );
}

export default Skills;
