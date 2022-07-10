const Card = (props) => {
  return (
    <div className="card">
      <div className="content">
        <div className="imgBx">
          <img src={props.data.logo} alt={props.data.logo+"-img"}/>
        </div>
        <div className="contentBx">
          <h3>
            {props.data.technology}
            <br />
            <span></span>
          </h3>
        </div>
      </div>
      <ul className="sci">
        <li>
            {
                props.data.all.map((tech,index)=>(
                    <a className="tech-item" key={index} href={tech.link} target={"_blank"}> {tech.name} </a>
                ))
            }
        </li>
      </ul>
    </div>
  );
};

export default Card;
