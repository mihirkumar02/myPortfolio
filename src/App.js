import React, { Component } from 'react';
import { BrowserRouter, Switch, Route } from 'react-router-dom';
import $ from 'jquery';
import Navbar from './components/Navbar';
import ContactForm from './components/ContactForm';
import Home from './components/Home';
import Skills from './components/Skills';
import Projects from './components/Projects';
import Achievements from './components/Achievements';
import Resume from './components/Resume';

class App extends Component {
  componentDidMount() {
    $(window).scroll(function(){
      if($(this).scrollTop() === 0){
          $('#btnDown').fadeIn();
          $('#btnUp').fadeOut();
      } else {
          $('#btnDown').fadeOut();
          $('#btnUp').fadeIn();
      }
  });

  $('#btnDown').click(function(){
      $('html , body').animate({scrollTop: 800}, 100);
  });

  $('#btnUp').click(function(){
    $('html, body').animate({scrollTop: 0}, 100);
  });

  $(".click").on("click", function(){
    $('.nav').toggleClass("change");
    $('.menu').toggleClass("show");
    $('.bar1').toggleClass("change");
    $('.bar2').toggleClass("change");
    $('.bar3').toggleClass("change");
  });

  }

  render(){
    return (
      <BrowserRouter>
        <div className="App">
          <Navbar />
          <Switch>
              <Route exact path="/" component={Home}/>
              <Route path="/skills" component={Skills} />
              <Route path="/achievements" component={Achievements} />
              <Route path="/projects" component={Projects} />
              <Route path="/resume" component={Resume} />
              <Route path="/contact" component={ContactForm}/>
           </Switch>
        </div>
      </BrowserRouter>
    );
  }
}

export default App;
