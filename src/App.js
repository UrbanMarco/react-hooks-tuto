import React from 'react'
import './App.css';
import ComponentC from './components/04_UseContext/ComponentC';

export const UserContext = React.createContext()
export const ChannelContext = React.createContext()

function App() {
  return (
    <div className="App">
      <UserContext.Provider value={'Marco'}>
        <ChannelContext.Provider value={'React Hooks tuto'}>
          <ComponentC />
        </ChannelContext.Provider>
      </UserContext.Provider>
    </div>
  );
}

export default App;
