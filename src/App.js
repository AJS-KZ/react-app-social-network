import React from 'react';
import './App.css';
import { BrowserRouter, Route } from 'react-router-dom';

import Header from './components/Header/Header';
import Navbar from './components/Navbar/Navbar';
import Profile from './components/Profile/Profile';
import Dialogs from './components/Dialogs/Dialogs';


function App(props) {

  let profile_component = () => <Profile posts={props.state.profilePage} />;

  return (
    <BrowserRouter>
      <div className="app-wrapper">
        <Header />
        <Navbar />
        <div className="app-wrapper-content">
          <Route path='/profile' component={profile_component} />
          <Route path='/dialogs' render={() => <Dialogs data={props.state.messagesPage} />} />
        </div>
      </div>
    </BrowserRouter>
  );
}

export default App;
