import React from "react";
import { Tasks } from "./Tasks";
import { useState } from "react";

export function Task2()
{
    
   
        const [input, setInput] = useState("");
        const [lastIndex, setLastIndex] = useState();
        const wordsToCorrect = {
           realy : "really",
           wierd : "weird",
           goggle: "google",

        };
       
        function checkWordMatch(e) {
            if (e[e.length - 1] === " ") {
                let lastWord = e.slice(lastIndex + 1, e.length - 1);
                let spellCheckMistakes = Object.keys(wordsToCorrect);
       
            for (let i = 0; i <= spellCheckMistakes.length - 1; i++) {
                if (lastWord === spellCheckMistakes[i]) {
                    e = `${e.slice(0, lastIndex)} ${wordsToCorrect[lastWord]}`;
                }
            }
            setLastIndex(e.length - 1);
        }
        setInput(e);
    }
    return(
        <div>
            <div>
                <Tasks/>
            </div>
            <p className="text-center mt-5"><b>Task 2 - Autocorrection App</b></p>
            <div className="t2bgcolor">
            <input type="text" onChange={(event) => checkWordMatch(event.target.value)} value={input} className="t2text mt-4"/>
            </div>

            
        </div>
    );
}