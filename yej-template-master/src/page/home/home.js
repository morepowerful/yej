import React from 'react';

import Header from '../../component/header';
import Footer from '../../component/footer';

import './home.scss';

class Home extends React.Component {
  constructor(props){
    super(props);
    this.state = {

    };
  }
  render() {
    return (
      <div className="home">
        <Header />
        <div className="inner">
          <div className="left">
            <a href="https://github.com/yumu-webpack/yumu"><img alt="Yumu Logo" src="https://scdn2.ycosystem.com/liudong.png" /></a>
          </div>
          <div className="right">
            <h1>yej Webpack And React Solution</h1>
            <p>
              <a className="button white" href="https://github.com/morepowerful/yej" target="_blank">GITHUB</a>
            </p>
          </div>
        </div>
        <Footer />
      </div>
    );
  }
}

export default Home;
