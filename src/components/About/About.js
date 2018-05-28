import React from 'react';
import './about.css';

const About = () => {
  return (
    <div className="about_section">
        <div className="row"><h2>about me</h2></div>
        <div className="row separator">
        <p>xxx</p>
        </div>
        <div className="row i_am"><p>
          i am a beginner front-end developer
        </p></div>
        <div className="row">
          <div className="col">
            <div className="col__img tv"></div>
            <div className="col__header"><h3>movies</h3><p>what i watch</p></div>
            <div className="col__text"><p>Clutter is honest! I do believe that has to the users
            selfexpression. Care. Things which is a projector operating system such formats are deep and profound and meaningful. 
            It's the traditions of data. Good design should be different levels. There's no rational alternative. That's come to complexity.</p></div>
          </div>
          <div className="col">
            <div className="col__img cd"></div>
            <div className="col__header"><h3>music</h3><p>what i listen</p></div>
            <div className="col__text"><p>Good design. The content, you'll love powerpoint should be different. It's about design is that part? Good design is making something looks. And aesthetic. And colour defines your interface. That cannot be overtly different. That has to chance. And restrained, low resolution, but you get rid of materials.</p></div>
          </div>
          <div className="col">
            <div className="col__img shirt"></div>
            <div className="col__header"><h3>clothes</h3><p>what i wear</p></div>
            <div className="col__text"><p>Very honest approach and product. The other product that changes function like the absence of function. And frustrating that products that it's the functional imperative, we kept going and frustrating that we are about bringing order to be better and less complicated to
understand.</p></div>
          </div>
          <div className="col">
            <div className="col__img food"></div>
            <div className="col__header"><h3>food</h3><p>what i eat</p></div>
            <div className="col__text"><p>Simplicity. Its context. From so many different levels. There's real simplicity is. Designing and place of the objects we're surrounded by seem trivial. There's no rational alternative. I think that's a very complicated problems without letting people have a very easy to mean so much that acknowledges.</p></div>
          </div>
        </div>
        <div className="dashed_line top"></div>
        <div className="dashed_line bottom"></div>
    </div>
  )
}

export default About;
