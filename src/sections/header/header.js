import React from "react";
import "./header.scss";
import ReactGA from "react-ga";

export function Header() {
  const [expandedCard, setExpandedCard] = React.useState(false);

  return (
    <div className="header">
      <div className="background">
        <img
          alt="bg"
          style={{ height: "250px", width: "100%", objectFit: "cover" }}
          src={"https://i.imgur.com/niaI3Jc.jpg"}
        />
        {/* <div className='card-badge'>
          Download CV
        </div> */}
      </div>
      <img
        alt="profile"
        src="https://i.imgur.com/1wecbG7.jpg"
        className="profile"
      />
      <div className="card">
        <div className="card-sticky">
          <h2 className="name">Pedro Knup</h2>
          <span className="job-title">FULL STACK DEVELOPER</span>
        </div>

        <span className="personal-info">
          25 years old, Brazilian
          <a href="mailto:phknup@gmail.com">phknup@gmail.com</a>
          Eindhoven, Netherlands
        </span>
        <div className="contact">
          <a
            className="linkedin"
            href="https://www.linkedin.com/in/pedroknup/"
            target="_blank"
            rel="noopener noreferrer"
            onClick={() => {
              ReactGA.event({
                category: "Social",
                action: "Linkedin"
              });
            }}
          >
            <i className="fa fa-linkedin" />
          </a>
          <a
            className="facebook"
            href="https://www.facebook.com/pedroknup"
            target="_blank"
            rel="noopener noreferrer"
            onClick={() => {
              ReactGA.event({
                category: "Social",
                action: "Facebook"
              });
            }}
          >
            <i className="fa fa-facebook" />
          </a>
          <a
            className="instagram"
            href="https://www.instagram.com/pedroknup"
            target="_blank"
            rel="noopener noreferrer"
            onClick={() => {
              ReactGA.event({
                category: "Social",
                action: "Instagram"
              });
            }}
          >
            <i className="fa fa-instagram" />
          </a>
          <a
            className="github"
            href="https://www.github.com/pedroknup"
            target="_blank"
            rel="noopener noreferrer"
          >
            <i className="fa fa-github-alt" />
          </a>
          <a
            className="deviantart"
            href="https://www.deviantart.com/pedroknup"
            target="_blank"
            rel="noopener noreferrer"
            onClick={() => {
              ReactGA.event({
                category: "Social",
                action: "DeviantArt"
              });
            }}
          >
            <i className="fa fa-deviantart" />
          </a>
        </div>
        <div
          style={{ maxHeight: !expandedCard ? "240px" : "1050px" }}
          className="about-me"
        >
          {!expandedCard && <div className="gradient" />}
          <span>
            <p>
              &nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;Hi! My name is Pedro Henrique
              Knup and I’m a tech enthusiast. I began my journey as an explorer
              of the programming scene, wanna-be musician, and passionate
              artist. While music and visual art are my main hobbies, the
              developing experience I had turned out to be my decision for a
              career path. This path started out when I learned my first
              programming language at age 13, my stepfather needed help and I
              was curious enough to help him on his small operation developing
              company. From there I got to CEFET-MG where I was a student under
              the technician graduation course, and got the opportunity to work
              as intern managing and setting up the servers for the school.
              These experiences led me to the Federal University of Itajubá,
              where I paused my last year of the Computer Engineering bachelor
              to do an internship as a front end developer in The Netherlands.
              <br />
              &nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp; I'm always doing something
              new, seeking new ways to challenge myself. One of those challenges
              which makes me really proud, it’s the{" "}
              <a
                onClick={() => {
                  ReactGA.event({
                    category: "Social",
                    action: "Cabe+1"
                  });
                }}
                target="_blank"
                href="https://www.facebook.com/cabemais1app/"
              >
                Cabe+1
              </a>
              , project where I developed a free mobile app that helps students
              finding carpools to get to the university. Among some other
              projects, I{" "}
              <a
           
                target="_blank"
                href="https://github.com/pedroknup/MicroMegaDrum"
              >
                contributed
              </a>{" "}
              to an open-source project for an electric drum (Micro Drum) made
              with Arduino which later became an official parallel project.
              <br />
              &nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp; Even though I am young I’m
              pretty confident I chose a really nice educational path that
              brings me joy and motivates me everyday, I can only hope the
              future holds more great experiences in the area.
            </p>
          </span>
        </div>
        {!expandedCard ? (
          <div className="card-show-more">
            <span
              onClick={() => {
                setExpandedCard(true);
              }}
            >
              Show more
            </span>
          </div>
        ) : (
          <div className="card-show-less">
            <span
              onClick={() => {
                setExpandedCard(false);
              }}
            >
              Show less
            </span>
          </div>
        )}
      </div>
    </div>
  );
}
