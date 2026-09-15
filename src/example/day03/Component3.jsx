import FrontComp2 from "./FrontComp2";
import BackComp2 from "./BackComp2";
import { useState } from "react";

export default function Component3(props){
    const[mode, setMode] = useState('both')
    const handleSetMode = (mode) =>{
        setMode(mode);
    }
    let contents = '';
    if (mode ==='front'){
        contents = <>
            <FrontComp2 onSetMode={(mode) =>{
                setMode(mode)
            }}></FrontComp2>
        </>
    }
    else if(mode === 'back'){
        contents = <>
            <BackComp2 setMode={setMode}></BackComp2>
        </>
    }
    else{
        contents = <>
            <FrontComp2 onSetMode={(mode) =>{
                handleSetMode(mode);
            }
            }></FrontComp2>
            <BackComp2 setMode={handleSetMode}></BackComp2>
        </>
    }
        return(<>
            <h2><a href="/" onClick={(event) =>{
                event.preventDefault();
                setMode('both');
            }}>React-State</a></h2>
            <ol>
                {contents}
            </ol>
        </>)
}