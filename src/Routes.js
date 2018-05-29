import React, {Component} from 'react';
import { Switch, Route } from 'react-router-dom';

//Components
import Slider from './components/Slider/Slider';
import About from './components/About/About';
import Portfolio from './components/Portfolio/Portfolio';
import Blog from './components/Blog/Blog';
import Contact from './components/Contact/Contact';
import Layout from './components/Layout/Layout';

class Routes extends Component {
render(){
      return (
      <Layout>
        <Switch>
            <Route path='/' exact component={About}/>
            <Route path='/slider' component={Slider}/>
            <Route path='/portfolio' component={Portfolio}/>
            <Route path='/blog' component={Blog}/>
            <Route path='/contact' component={Contact}/>
        </Switch>
      </Layout>
    )

}};
export default Routes;