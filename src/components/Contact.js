import React from "react";

function Contact() {
  return (
    <div className="contact">
      <h1 align="center">Contact Me</h1>
      <form class="cf" action="mailto:ayushkumar71430@gmail.com">
        <div class="half left cf" style={{paddingLeft:0}}>
          <input type="text" id="input-name" placeholder="Name" />
          <input type="email" id="input-email" placeholder="Email address" />
          <input type="text" id="input-subject" placeholder="Subject" />
        </div>
        <div class="half right cf">
          <textarea
            name="message"
            type="text"
            id="input-message"
            placeholder="Message"
          ></textarea>
        </div>
        <input type="submit" value="Submit" id="input-submit"/>
      </form>
    </div>
  );
}

export default Contact;
