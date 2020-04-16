import React, { Component } from 'react';
import { BrowserRouter, Switch, Route } from 'react-router-dom';
import $ from 'jquery';
import Navbar from './components/Navbar';
import Home from './components/Home';
import Skills from './components/Skills';
import Projects from './components/Projects';
import Achievements from './components/Achievements';
import Resume from './components/Resume';
  
const TypeWriter = function (txtElement, words, wait = 1000) {
    this.txtElement = txtElement;
    this.words = words;
    this.txt = '';
    this.wordIndex = 0;
    this.wait = parseInt(wait, 10);
    this.type();
    this.isDeleting = false;
}


// Type Method
// Adding a new method in TypeWriter using .prototype
TypeWriter.prototype.type = function () {
    // Current index of word
    const current = this.wordIndex % this.words.length;
    // Get full text of current word
    const fullTxt = this.words[current];    

    // Check if deleting a character
    if(this.isDeleting) {
        // Remove char
        this.txt = fullTxt.substring(0, this.txt.length - 1);
    } else {
        // Add char
        this.txt = fullTxt.substring(0, this.txt.length + 1);
    }

    // Insert txt into element
    this.txtElement.innerHTML = `${this.txt}`

    // Initial Type Speed
    let typeSpeed = 100;

    if(this.isDeleting) {
        typeSpeed /= 2;
    }

    // If sentence is completed
    if(!this.isDeleting && this.txt === fullTxt) {
        // Make pause at end
        typeSpeed = this.wait;
        // Set delete to True
        this.isDeleting = true;
    } else if(this.isDeleting && this.txt === '') {
        this.isDeleting = false;
        // Move to next sentence
        this.wordIndex++;
        // Pause before typing again
        typeSpeed = 500;
    }

    setTimeout(() => this.type(), typeSpeed)
}


// INIT App
function init() {
    const txtElement = document.querySelector('.txt-type');
    const words = JSON.parse(txtElement.getAttribute('data-words'));
    const wait = txtElement.getAttribute('data-wait');
    // INIT TypeWriter
    new TypeWriter(txtElement, words, wait);
}



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

  $('.menu li a').on("click", function(){
    $('.nav').toggleClass("change");
    $('.menu').toggleClass("show");
    $('.bar1').toggleClass("change");
    $('.bar2').toggleClass("change");
    $('.bar3').toggleClass("change");
  });

  $('.me').on("click", function(){
    $('.nav').toggleClass("change");
    $('.menu').toggleClass("show");
    $('.bar1').toggleClass("change");
    $('.bar2').toggleClass("change");
    $('.bar3').toggleClass("change");
  });

/*
// Initialize on DOM Load
document.addEventListener('DOMContentLoaded', init);
*/
init();
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
           </Switch>
        </div>
      </BrowserRouter>
    );
  }
}

export default App;
