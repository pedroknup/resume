import React from 'react';
import { SkillBarComponent } from './skill-bar';
import './technical-skills.component.scss';

const TechnicalSkills = () => {
  return (
    <div className="sector-container">
      <div className="sector">
        <h2>Front End</h2>
        <SkillBarComponent
          id={0}
          title="HTML+JS+CSS"
          text="I like to play with those languages since I was a kid. I'm always challenging myself creating different layouts scenarios. I consider my html+css skills advanced."
          speed={1}
          value={95}
        />
        <SkillBarComponent
          id={1}
          text="I've been studying and working with React intensively. I'm constantly following the new releases of it. On my React projects, I like to use Redux (or context), Typescript and SCSS."
          title="ReactJS"
          speed={3}
          value={90}
        />
        <SkillBarComponent
          id={2}
          title="VueJS"
          text="Just curious. I stopped studying it after I met ReactJS."
          value={40}
        />
      </div>
      <div className="sector">
        <h2>Back End</h2>
        <SkillBarComponent
          id={3}
          title=".NET Framework/Core"
          text="I had several .NET experiences, with both Core (v1.0 & v2.0) and Framework. I delivered big projects where some of them I had to deal with millions of data (from the database) "
          value={80}
        />
        <SkillBarComponent
          id={4}
          title="Relational DB"
          speed={1}
          text="I've been working with relational databases since I started programming (10 years ago). I consider my database knowledges advanced."
          value={80}
        />
        <SkillBarComponent
          id={5}
          title="NodeJS"
          text="I've been intensively using NodeJS for both stacks, front and back end. For Web services, I like to use ExpressJS with TypeScript and some object-relational mapping framework, such as Loopback, TypeORM, Mongoose etc. For tests I use Jest. "
          speed={2}
          value={75}
        />
        <SkillBarComponent
          id={7}
          title="NoSQL DB"
          speed={1}
          text="Sometimes I use a NoSQL database in some project. Normally I use MongoDB when I am working on a Serverless application or when the DB structure is relatively simple and will store a big amount of data. "
          value={60}
        />
        <SkillBarComponent
          id={11}
          title="Docker"
          text="Docker made my life easier. I'm using it for almost every project I'm working on."
          value={60}
        />
        <SkillBarComponent
          id={6}
          title="Microsoft Azure"
          text="I use Azure to host some personal projects. Serverless applications, CI/CD pipelines, hosting, function apps and so on. "
          value={30}
        />
        <SkillBarComponent
          id={8}
          title="Google Firebase"
          text="I used Firebase to host some web apps and also for a serverless application. "
          value={25}
        />
        <SkillBarComponent
          id={9}
          speed={1}
          title="AWS"
          text="I used AWS to host my biggest Mobile App I have made (Cabe+1). But I switched to Azure due the Azure plan that I got."
          value={20}
        />
        <SkillBarComponent
          id={10}
          title="PHP"
          text="PHP was my first full stack/back-end language. I learned it by myself when I saw it on highschool. I was always using it on my first web projects.   "
          value={20}
        />
      </div>
      <div className="sector">
        <h2>Mobile</h2>
        <SkillBarComponent
          id={12}
          title="React Native"
          text="I've been studying React Native in the last year and I used it for some freelance projects. I'm able to build native mobile application in an awesome speed. "
          speed={1}
          value={85}
        />
        <SkillBarComponent
          id={11}
          title="Xamarin"
          text="With my knowledge on C#, I was quickly building rich and well written mobile native applications. It was what I needed for mobile development. But nowadays I switched to React Native."
          value={80}
        />
        <SkillBarComponent
          id={14}
          title="Android"
          text="Just for curiosity, to help me solving some possible problems in Xamarin."
          value={35}
        />
        <SkillBarComponent
          id={15}
          title="iOS"
          text="Just for curiosity, to help me solving some possible problems in Xamarin."
          value={30}
        />
        <SkillBarComponent
          id={13}
          title="Flutter"
          text="I started studying flutter when it was released. I didn't get too far, since I quickly switched back to Xamarin.Forms"
          value={25}
        />
      </div>
      <div className="sector">
        <h2>Others</h2>
        <SkillBarComponent
          id={16}
          title="Photoshop & Illustrator"
          text="I am a photography/design enthusiast. I have solid knowledge on photo manipulation and graphics creation (logo, banners, flyers, UI design etc)."
          speed={1}
          value={92}
        />
        <SkillBarComponent
          id={17}
          title="Git"
          text="I follow the git best practices (by Github). "
          speed={2}
          value={80}
        />
        <SkillBarComponent
          id={18}
          title="Scrum"
          text="I've been working with scrum in the last 2 years. Usually it's based on 2 weeks sprints with daily stand-up, retrospective and planning scrum meetings. "
          speed={2}
          value={75}
        />
        <SkillBarComponent
          id={20}
          title="Illustration"
          speed={1}
          text="I like to drawn since I was a kid. Usually I work with graphite, colored pencils, nankin and aquarela. I discovered the digital painting in a few years ago and I loved it too. "
          value={75}
        />
        <SkillBarComponent
          id={19}
          title="Audiovisual Production"
          text="I used to make music and produce them on Reaper. I recorded every instrument and proper mixed on DAW. I also liked record myself playing some music in some instrument and upload it to my social networks (Youtube and Facebook)."
          speed={1}
          value={70}
        />
        <SkillBarComponent
          id={21}
          title="3D Modeling"
          text="Another hobby I found because of my curiosity. When I was a kid, I used to be a car lover and that motivates me to learn 3D modelling. I chose Autodesk 3D Studio Max and spent many hours on learning. I loved, it's very relaxing and stress reliever for me. I have a solid knowledge on geometric modeling (non-organic) and a little bit of animation."
          value={60}
        />
      </div>
    </div>
  );
};

export default TechnicalSkills;
