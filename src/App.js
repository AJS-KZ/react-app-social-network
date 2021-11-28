import React from 'react';
import './App.css';
import { Route } from 'react-router-dom';

import Header from './components/Header/Header';
import Navbar from './components/Navbar/Navbar';
import Profile from './components/Profile/Profile';
import DialogsContainer from './components/Dialogs/DialogsContainer.jsx';
import UsersContainer from './components/Users/UsersContainer';


function App(props) {
  // let profile_component = () => {
  //   return (
  //     <Profile
  //       profilePage={props.state.profilePage}
  //       dispatch={props.dispatch}
  //     />
  //   )
  // }

  return (
    <div className="app-wrapper">
      <Header />
      <Navbar />
      <div className="app-wrapper-content">
        <Route
          path='/profile'
          // component={profile_component}   //  <--- если отрисовывать вот так, то почему то в инпут нельзя вводить более одного символа
          render={() => <Profile />}
        />
        <Route path='/dialogs' render={() => <DialogsContainer />} />
        <Route path='/users' render={() => <UsersContainer />} />
      </div>
    </div>
  );
}

export default App;
