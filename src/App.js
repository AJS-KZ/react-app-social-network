import React from 'react';
import './App.css';
import { Route } from 'react-router-dom';

import Header from './components/Header/Header';
import Navbar from './components/Navbar/Navbar';
import Profile from './components/Profile/Profile';
import Dialogs from './components/Dialogs/Dialogs';


function App(props) {
  let profile_component = () => {
    return (
      <Profile
        profilePage={props.state.profilePage}
        dispatch={props.dispatch}
      />
    )
  }

  return (
    <div className="app-wrapper">
      <Header />
      <Navbar />
      <div className="app-wrapper-content">
        <Route
          path='/profile'
          // component={profile_component}   <--- если отрисовывать вот так, то почему то в инпут нельзя вводить более одного символа
          render={() => <Profile profilePage={props.state.profilePage} dispatch={props.dispatch} />}
        />
        <Route path='/dialogs' render={() => <Dialogs data={props.state.messagesPage} dispatch={props.dispatch}/>} />
      </div>
    </div>
  );
}

export default App;
