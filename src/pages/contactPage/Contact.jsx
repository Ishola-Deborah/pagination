import React from "react";
import "./contact.css";

const Contact = () => {
  return (
    <div>
      

      <div class="login">
        <div class="login_form">
          <div class="login_heading">
            <h2>Contact Me</h2>
          </div>
          <form action="#">
            <div class="login_info">
              <label for="email">Email Address</label>
              <input type="email" placeholder="debbyope@gmail.com" required />
            </div>
            <div class="login_info">
              <label for="password">Password</label>
              <input type="password" placeholder="****" required />
            </div>
            <div class="contact-field">
              <label for="Message">Message</label>
              <textarea
                name="message"
                placeholder="Type in your message"
              ></textarea>
            </div>
            <button class="btn">Submit</button>
          </form>
        </div>
      </div>
    </div>
  );
};

export default Contact;
