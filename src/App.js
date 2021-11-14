import React from 'react';
import './App.css';
import { Route } from 'react-router-dom';

import Header from './components/Header/Header';
import Navbar from './components/Navbar/Navbar';
import Profile from './components/Profile/Profile';
import Dialogs from './components/Dialogs/Dialogs';


function App(props) {
  debugger;
  let profile_component = () => <Profile posts={props.state.profilePage} addPost={props.addPost}/>;

  return (
    <div className="app-wrapper">
      <Header />
      <Navbar />
      <div className="app-wrapper-content">
        <Route
          path='/profile'
          component={profile_component}
        />
        <Route path='/dialogs' render={() => <Dialogs data={props.state.messagesPage} />} />
      </div>
    </div>
  );
}

export default App;
