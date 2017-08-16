import React from 'react';
import ReactDOM from 'react-dom';

import Header from '../../component/header';
import Footer from '../../component/footer';

import '../../common/common.scss';
import './more.scss';

class More extends React.Component {
  constructor(props){
    super(props);
    this.state = {

    };
  }
  render() {
    return (
      <div className="more">
        <Header />
        <div className="inner">
          <ul>
            <li>
              <a target="_blank" href="https://github.com/yumu-webpack/yumu">Yumu</a>
              <p>一款webpack+react+redux的脚手架，让你快速搭建一个react项目。</p>
            </li>
            <li>
              <a target="_blank" href="https://github.com/dushao103500/js-tint">Js-tint</a>
              <p>一款收集了前端js常用的场景与方法，让你在工作中能更快速的完成特定业务场景。</p>
            </li>
            <li>
              <a target="_blank" href="https://github.com/dushao103500/blog">博客——人类前端精华</a>
              <p>一个执着于分析前端框架源码的博客，让你更透彻的理解前端框架的思想。</p>
            </li>
            <li>
              <a target="_blank" href="http://www.qdfuns.com/tools">前端工具库</a>
              <p>前端最全的工具库网站。</p>
            </li>
            <li>
              <a target="_blank" href="https://laod.cn/hosts/2017-google-hosts.html">翻墙黑科技</a>
              <p>修改host来翻墙。</p>
            </li>
            <li>
              <a target="_blank" href="https://laod.cn/hosts/2017-google-hosts.html">翻墙黑科技</a>
              <p>修改host来翻墙。</p>
            </li>
            <li>
              <a target="_blank" href="https://www.zhihu.com/question/21102664/answer/141973022">培养气质</a>
              <p>气质才能决定一个人的高度。</p>
            </li>
          </ul>
        </div>
        <Footer />
      </div>
    );
  }
}

export default More;
