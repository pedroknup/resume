import React from 'react';
import { Link } from 'react-router-dom';
import PropTypes from 'prop-types';

class NavLinkComponent extends React.Component {
  render() {
    var isActive = this.context.router.route.location.pathname === this.props.to;
    var className = isActive ? 'active' : '';

    return (
      <Link className={className} {...this.props}>
        {this.props.children}
      </Link>
    );
  }
}

NavLinkComponent.contextTypes = {
  router: PropTypes.object
};

export {NavLinkComponent};