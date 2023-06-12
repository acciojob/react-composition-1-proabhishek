import React, {useState} from "react";



const Tabs = ({tabs}) => {
   const [tabClicked, setTabClicked] = useState("");
    

     function tabClickHandler(content){
        setTabClicked(content);
     }
   
    return(
        <div>
            <ul>
             {
                tabs.map((tab)=>(
                    <li
                     onClick={()=>tabClickHandler(tab.contents)}
                    >{tab.titles}</li>
                ))
             }
             </ul>
             {
             tabClicked &&
                <p>{tabClicked}</p>
             }
        </div>
    )

}

export default Tabs;