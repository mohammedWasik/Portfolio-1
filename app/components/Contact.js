import React from "react";
import "../assets/form.css";

const Contact = () => {
  return (
    <div className="text-center pb-20">
      {/* <div id="text-center">
        <h1>
          <span className="uppercase text-4xl fancy-link text-teal-600 tracking-widest">
            Contact
          </span>
        </h1>
      </div> */}
      <div className="form-div ">
        <form
          class="form dark:bg-[#0e1421]"
          action="https://formsubmit.co/b82188eb0eb9f30f0a52192a359be720"
          method="POST">
          <h2 className="text-4xl pb-5 mb-4 fancy-link text-teal-600">
            CONTACT
          </h2>
          <p type="Name :">
            <input
              placeholder="Write your name here.."
              name="name"
              required></input>
          </p>
          <p type="Email :">
            <input
              placeholder="Write your email here.."
              name="email"
              required></input>
          </p>
          <p type="Email Subject :">
            <input
              placeholder="Let me know about the Udessho.."
              name="subject"
              required></input>
          </p>
          <p type="Message :">
            <input
              placeholder="What would you like to tell me.."
              name="message"
              required></input>
          </p>
          <button>Send Message</button>
          <div className="contact-div bg-teal-600 tracking-widest ">
            <span class="fa fa-envelope-o "></span>{" "}
            mashrukmohammedwasik@gmail.com
          </div>
        </form>
      </div>
    </div>
  );
};

export default Contact;
