import React from "react";
import { Tasks } from "./Tasks";

export function Task6()
{
    return(
        <div>
            <div>
                <Tasks/>
            </div>
            <div>
                <h6 className="text-center mt-5">Task 6 - Positioning</h6>
                <h5 className="text-center mt-5">The relative position is adjusted relative to itself,without changing the layout</h5>
            </div>
        </div>
    );
}