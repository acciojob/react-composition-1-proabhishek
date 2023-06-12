
import React from "react";
import './../styles/App.css';
import Tabs from './Tabs';


const tabs = [{titles:"Tab 1" , contents:"Tab 1"},{titles:"Tab 2" , contents:"Tab 2"},{titles:"Tab 3" , contents:"Tab 3"}]

const App = () => {
  return (
    <div>
      <Tabs tabs={tabs}/>
    </div>
  )
}

export default App



// npm install 

// npm install cross-env -D 

// replace your scripts (with below scripts)

// npm start

// "scripts": {
//   "test": "cross-env NODE_OPTIONS=--openssl-legacy-provider jest --no-color 2>output.txt",
//   "start": "cross-env NODE_OPTIONS=--openssl-legacy-provider webpack-dev-server --mode development --watch --open --hot",
//   "build": "cross-env NODE_OPTIONS=--openssl-legacy-provider webpack --mode production"
// }