import React from 'react';
import ReactDOM from 'react-dom';
import store from '../../redux/store.js';

import './footer.scss';

class Footer extends React.Component {
  constructor(props){
    super(props);
    this.state = {

    };
  }
  render() {
    return (
      <div className="footer">
        <div className="top">
          <div className="wid50"><img src="https://avatars1.githubusercontent.com/u/30022849?v=4&s=60" /></div>
          <div className="wid50"><span>HangZhou in china.</span></div>
        </div>
        <div className="bottom">
          <p>Released under the MIT License<br />Copyright © 2017-2018 Evan You</p>
        </div>
      </div>
    );
  }
}

export default Footer;
