const Projects_cards = (props) => {
    return (
        <div className="card">
            <div className="content">
                <div className="imgBx">
                    <img src={props.data.logo} alt={props.data.logo + "-img"} />
                </div>
                <div className="Box">
                    <h3>
                        <a target="_blank" href={props.data.gh_link}>{props.data.project}</a>
                        <br />
                        <span></span>
                    </h3>
                </div>
            </div>
            <ul className="sci">
                <li>
                    {
                        props.data.all.map((proj, index) => (
                            <a className="proj-item" key={index} href={proj.link} target={"_blank"}> {proj.description} </a>
                        ))
                    }
                </li>
            </ul>
        </div>
    );
};

export default Projects_cards;