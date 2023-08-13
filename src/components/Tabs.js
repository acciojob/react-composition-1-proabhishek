import React, {useState} from "react";



const Tabs = ({tabs}) => {
    let [tabClicked, setTabClicked] = useState("")

   function handleClick(content){
        setTabClicked(content)
   }


     return(
      <div>
         <ul>
           {
            tabs.map((value) => 
                <li onClick={()=>handleClick(value.contents)}>{value.titles}</li>
            )
           }
         </ul>

         {
            // tabClicked!="" ? <p>This is the content for {tabClicked}</p> : ""

            tabClicked && <p>This is the content for {tabClicked}</p>
         }

      </div>
     )

   
    

}

export default Tabs;