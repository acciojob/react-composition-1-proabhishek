
import React from "react";
import './../styles/App.css';
import Tabs from './Tabs';


const tabs = [
{title:"Tab 1" , content:"Tab 1"},

{title:"Tab 2" , content:"Tab 2"},

{title:"Tab 3" , content:"Tab 3"}
]

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