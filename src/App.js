import React from 'react';
import './App.css';
import { Header } from './sections/header';
import { TitleComponent } from './shared-components/title/title.component';
import TechnicalSkills from './sections/technical-skills/technical-skills.component';
import LanguagesSkills from './sections/technical-skills/languages.component';
import 'animate.css/animate.min.css';
import ScrollAnimation from 'react-animate-on-scroll';
import ReactDOM from 'react-dom';
import ReactGA from 'react-ga';

import {
  StoryLineAcademicComponent,
  StoryLineProfessionalComponent
} from './shared-components/storyline/storyline.component';
import { NavBarComponent } from './sections/navbar';
import { MobNavBarComponent } from './sections/mob-navbar/mob-navbar';
import { ThankYou } from './sections/thank-you';
import Sticky from 'react-stickynode';
class App extends React.Component {
  constructor(props) {
    super(props);
    this.state = {
      currentPage: 0
    };
    this.professionalExperience = React.createRef();
    this.onScroll = this.onScroll.bind(this);
    this.handleScroll = this.handleScroll.bind(this);
    this.tech = React.createRef();

    ReactGA.initialize('UA-126446895-1');
    ReactGA.pageview(window.location.pathname);
  }
  handleScroll() {
    if (typeof this.refs.technicalSkills != 'undefined' && this.refs.technicalSkills != null) {
      let domNode = ReactDOM.findDOMNode(this.refs.technicalSkills);
      const technicalSkillsY = domNode.getBoundingClientRect();
      domNode = ReactDOM.findDOMNode(this.refs.interactiveBio);
      const interactiveBioY = domNode.getBoundingClientRect().y;

      domNode = ReactDOM.findDOMNode(this.refs.education);
      const educationY = domNode.getBoundingClientRect().y;

      domNode = ReactDOM.findDOMNode(this.refs.workExperiences);
      const workExperiencesY = domNode.getBoundingClientRect().y;

      domNode = ReactDOM.findDOMNode(this.refs.languages);
      const languagesY = domNode.getBoundingClientRect().y;

      let currentPage = 0;
      if (technicalSkillsY.y <= 100) currentPage = 1;
      if (interactiveBioY <= 100) currentPage = 2;
      if (educationY <= 100) currentPage = 3;
      if (workExperiencesY <= 100) currentPage = 4;
      if (languagesY <= 850) currentPage = 5;

      this.setState({ currentPage });
    }
  }
  componentDidMount() {
    window.addEventListener('scroll', this.handleScroll);
  }

  componentWillUnmount() {
    window.removeEventListener('scroll', this.handleScroll);
  }

  onScroll() {
    if (typeof this.professionalExperience != 'undefined' && this.professionalExperience != null) {
      let domNode = ReactDOM.findDOMNode(this.refs.cc);
      const y = domNode.getBoundingClientRect().y;
    }
  }

  // React.useEffect(() => {
  //   window.addEventListener('scroll', onScroll, true);
  // }, []);
  render() {
    return (
      <div className='App'>
        <MobNavBarComponent />
        <div name='about'> </div>
        <Header />
        <Sticky innerZ={100} enabled={true}>
          <NavBarComponent currentPage={this.state.currentPage} />
        </Sticky>
        <div ref='technicalSkills' className='main-container'>
          <div name='technicalSkills'> </div>
          <TitleComponent title='Technical Skills' subtitle='MY FAVORITE AND MOST NOTICEABLE TOOLS AND FRAMEWORKS' />
          <TechnicalSkills />

          <div ref='interactiveBio' />
          {/* <ScrollAnimation animateOnce={false} duration={3} animateIn='fadeIn'>
            <ScrollAnimation duration={0.8} animateIn='slideInUp'>
              <div name='interactiveBio'> </div>
              <TitleComponent title='Interactive Biography' subtitle='A DIFFERENT WAY TO TALK ABOUT ME :)' />
              <img style={{ width: '50%', margin: ' auto' }} src='http://pedroknup.com/assets/images/preview.jpg' />
            </ScrollAnimation>
          </ScrollAnimation> */}

          <div ref='education' />

          <div name='education'> </div>
          <TitleComponent title='Education' subtitle='Academic Career' />
          <StoryLineAcademicComponent />

          <div ref='workExperiences' />

          <div name='workExperiences'> </div>
          <TitleComponent ref='aa' id='section1' name='section1' title='Work Experience' subtitle='Previous Jobs' />
          <StoryLineProfessionalComponent />

          <div ref='languages' />

          <div name='languages'> </div>
          <TitleComponent title='Languages' subtitle='Human Languages this time lol' />
          <LanguagesSkills />

          <ThankYou />
        </div>
      </div>
    );
  }
}

export default App;
