import React from "react";
import "./storyline.component.scss";
import StoryComponent from "./story.component";

export const StoryLineAcademicComponent = props => {
  return (
    <div className="storyline">
      <div className="storyline__bar" />
      <div className="storyline__circle" />
      <StoryComponent
        color="#01356E"
        title="Informatics Technician"
        picture="https://i.imgur.com/wK98lXf.jpg"
        orientation="left"
        label={"JAN 2011 - DEC 2013"}
      />
      <div
        style={{ marginTop: "60px", cursor: "pointer" }}
        className="storyline__circle"
      />
      <StoryComponent
        label={"JAN 2015 - MAR 2019"}
        title="Computer Engineering"
        picture="https://i.imgur.com/cYHnbAi.jpg"
        orientation="right"
      />
    </div>
  );
};

export const StoryLineProfessionalComponent = props => {
  return (
    <div className="storyline">
      <div className="storyline__bar" />
      <div className="storyline__circle" />
      <StoryComponent
        color="#01356E"
        title="IT Intern"
        picture="https://i.imgur.com/wK98lXf.jpg"
        description="User technical support, server maintenance, network restructuring and implementation of a Redmine server for university's teachers."
        orientation="left"
        label={"JUL 2014 - MAR 2015"}
      />
      <div
        style={{ marginTop: "60px", cursor: "pointer" }}
        className="storyline__circle"
      />
      <StoryComponent
        color="#52BBEB"
        label={"JUN 2016 - MAR 2017"}
        title="Public Relationship Assessor "
        picture="https://i.imgur.com/GpQIi0p.jpg"
        description="Worked in a voluntary consulting for a community asylum where a software was developed for the management of the institution (Lar de Ozanam). Web applications development, server maintenance and creation of digital media."
        orientation="right"
      />
      <div
        style={{ marginTop: "60px", cursor: "pointer" }}
        className="storyline__circle"
      />
      <StoryComponent
        color="#AE1943"
        title="IT Assessor"
        picture="https://i.imgur.com/Ra2Zabi.jpg"
        description="Web applications development, server maintenance."
        orientation="left"
        label={"JUL 2016 - MAR 2017"}
      />
      <div
        style={{ marginTop: "60px", cursor: "pointer" }}
        className="storyline__circle"
      />
      <StoryComponent
        title="Computer Engineering Intern"
        picture="https://i.imgur.com/DxNJc2Q.jpg"
        description=".NET applications and web services RESTful development. Mobile applications in React Native. Creation of a smart telegram bot (learns and recognizes users patterns), also in C#. Creation and maintenance of SQL Server databases (query optimizing, procedures creation, functions, triggers, jobs etc)."
        orientation="right"
        label={"JAN 2018 - AUG 2018"}
      />
      <div
        style={{ marginTop: "60px", cursor: "pointer" }}
        className="storyline__circle"
      />
      <StoryComponent
        color="#1C1C26"
        title="Full Stack Developer"
        picture="https://i.imgur.com/K7pXl3v.jpg"
        description="Web development with ReactJS. Web services in .NET Framework. Microsoft DevOps."
        orientation="left"
        label={"AUG 2018 - MAR 2019"}
      />
      <div
        style={{ marginTop: "60px", cursor: "pointer" }}
        className="storyline__circle"
      />
      <StoryComponent
        color="#261C3E"
        title="Front End Developer"
        picture="https://i.imgur.com/7QL61fb.jpg"
        description="Web Applications development with ReactJS. Through weekly scrum meetings, I aim to delivery a well written code in due time following the best practices in the whole development process."
        orientation="right"
        label={"MAR 2019 - OCT 2019"}
      />
      <StoryComponent
        color="white"
        title="Full Stack Developer"
        picture="https://www.signl4.com/wp-content/uploads/2018/07/Integrations-b2Fw-10.png"
        description=""
        orientation="left"
        label={"OCT 2019 - NOW"}
      />
    </div>
  );
};
