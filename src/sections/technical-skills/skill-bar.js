import React from 'react';

import './technical-skills.component.scss';
import IncreaseIcon from '../../assets/icons/increase-pink.png';
import ReactTooltip from 'react-tooltip';

export class SkillBarComponent extends React.Component {
  constructor(props) {
    super(props);
    this.state = {
      value: 3
    };
    this.checkValue = this.checkValue.bind(this);
    this.increaseValue = this.increaseValue.bind(this);
    this.initialValue = -1;
  }
  componentDidMount() {
    this.initialValue = this.props.value;
    const initialValueRandom =
      this.props.speed > 0 ? this.initialValue + Math.floor(Math.random() * 3) : this.initialValue;
    this.setState({ value: initialValueRandom });
    this.checkValue(initialValueRandom);
  }

  getSpeed(speed) {
    if (speed === 1) return 160;
    if (speed === 2) return 81;
    if (speed === 3) return 30;
  }
  checkValue(value) {
    const initialValue = this.initialValue;
    const SPEED = this.props.speed;
    let MAX = SPEED === 1 ? this.initialValue + 2 : this.initialValue + SPEED;
    if (!(SPEED >= 1 && SPEED <= 3)) return;

    const self = this;
    if (value >= MAX)
      setTimeout(() => {
        this.setState({ value: initialValue }, this.checkValue(initialValue));
      }, self.getSpeed(SPEED));
    else {
      this.increaseValue(value);
    }
  }
  increaseValue(value) {
    const newValue = value + 0.2;
    const self = this;
    const SPEED = this.props.speed;
    setTimeout(() => {
      self.setState({ value: newValue }, this.checkValue(newValue));
    }, self.getSpeed(SPEED));
  }
  render() {
    const { speed, title, text, id } = this.props;
    return (
      <div data-for={`tooltip-${id}`} data-tip={text} className='container-technical-skills'>
        <span className='skill-title'>{title}</span>

        <ReactTooltip className="tooltip" clickable={true} multiline={true} id={`tooltip-${id}`} />
        <div className='bar-container'>
          <div className='bar'>
            <div style={{ width: this.state.value.toString().concat('%') }} className='progress' />
            <div className='svg'>
              {speed && [...Array(speed)].map((item, index) => <img alt="arrow" key={index} className='svg-icon' src={IncreaseIcon} />)}
            </div>
          </div>
        </div>
      </div>
    );
  }
}
