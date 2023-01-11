import "./index.scss";
import Loader from "react-loaders";
import AnimatedLetters from "../AnimatedLetter";
import { useState } from "react";
const Contact = () => {
  const [letterClass] = useState("text-animate");
  return (
    <>
      <div className="container contact-page ">
        <div className="text-zone">
          <h1>
            <AnimatedLetters
              letterClass={letterClass}
              strArray={["C", "o", "n", "t", "a", "c", "t", " ", "M", "e"]}
              idx={15}
            />
          </h1>
          <p>
            I am looking for opportunities where I can carefully and
            realistically channel some of my curiosities and apply my knowledge,
            skills to improve myself and my knowledge for the better of myself
            and any organization I become a part of.
          </p>
          <div className="contact-form">
            <form>
              <ul>
                <li className="half">
                  <input
                    type="text"
                    name="name"
                    placeholder="Your Name"
                    required
                  />
                </li>
                <li className="half">
                  <input
                    type="email"
                    name="email"
                    placeholder="Your Email"
                    required
                  />
                </li>
                <li>
                  <input placeholder="Subject" type="text" name="subject" />
                </li>
                <li>
                  <textarea
                    name="message"
                    placeholder="Message"
                    required
                  ></textarea>
                </li>

                <li>
                  <input type="submit" className="flat-button" value="SEND" />
                </li>
              </ul>
            </form>
          </div>
        </div>
      </div>
      <Loader type="pacman" />
    </>
  );
};

export default Contact;
