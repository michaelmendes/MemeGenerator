import React, { Component } from 'react';
import { Route, Routes } from 'react-router-dom';
import Header from './components/Header';
import Meme from './components/Meme';
import './custom.css';

export default class App extends Component {
  static displayName = App.name;

  render() {
    return (
      <div>
        <Header />
        <Meme />
      </div>
    );
  }
}
