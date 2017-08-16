import React from 'react';
import ReactDOM from 'react-dom';
import store from '../../redux/store.js';

import './header.scss';

class Header extends React.Component {
  constructor(props){
    super(props);
    this.state = {

    };
  }
  render() {
    return (
      <div className="top">
        <h3><a href="/">Yumu</a></h3>
        <div className="gu">
          <a href="/guide.html">Guide</a>
          <a href="more.html">More</a>
        </div>
      </div>
    );
  }
}

export default Header;
