
import React from "react";
import './../styles/App.css';
import Tab from './Tab';


const tabs = [{title:"A" , content:"Hello A"},{title:"B" , content:"Hello B"},{title:"C" , content:"Hello C"}]

const App = () => {
  return (
    <div>
      <Tab tabs={tabs}/>
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