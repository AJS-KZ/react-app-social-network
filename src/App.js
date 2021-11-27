import React from 'react';
import './App.css';
import { Route } from 'react-router-dom';

import Header from './components/Header/Header';
import Navbar from './components/Navbar/Navbar';
import Profile from './components/Profile/Profile';
import DialogsContainer from './components/Dialogs/DialogsContainer.jsx';


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
          render={() => <Profile 
                          // store={props.store}
                        />}
        />
        <Route path='/dialogs' render={() => <DialogsContainer 
                                                // store={props.store}
                                            />} />
      </div>
    </div>
  );
}

export default App;
