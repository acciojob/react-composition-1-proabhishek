import React, {useState} from "react";



const Tab = ({tabs}) => {
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
                     onClick={()=>tabClickHandler(tab.content)}
                    >{tab.title}</li>
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

export default Tab;