import React from "react";

function CertCard(props) {
  return (
    <div class="card">
      <div class="content">
        <div class="imgBx">
          <img src={props.data.org_img} alt={props.data.org_img+"-img"}/>
        </div>
        <div class="contentBx">
          <h3 className="cert-head">
            {props.data.name}
            <br />
            <span></span>
          </h3>
        </div>
      </div>
      <ul class="sci">
        <li>
            {props.data.org}
        </li>
      </ul>
    </div>
  );
}

export default CertCard;
