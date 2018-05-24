import React, {Component} from 'react';
import Header from '../Header/Header';
import './layout.css';

class Layout extends Component {
    render(){
  return (
    <div className="container">
        <Header />
        <div className="page_container">
            {this.props.children}
        </div>
    </div>
  )
}
};

export default Layout;