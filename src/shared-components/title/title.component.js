import React from 'react';

import './title.component.scss';
import { DividerComponent } from '../divider/divider.component';

export class TitleComponent extends React.Component {
  render() {
    return (
      <div style={{"pointer": "auto"}} className='title-container'>
       {!this.props.right &&  <DividerComponent />}
        <h4 className='title-component'>{this.props.title}</h4>
        <span className='subtitle-component'>{this.props.subtitle}</span>
      </div>
    );
  }
}
