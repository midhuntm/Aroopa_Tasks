import React from "react";
import { Link } from "react-router-dom";
import '../App.css';
export function Tasks()
{
    return( 
            <div>
                <div className="table1">
                <table className="table table-responsive ml-5">
                    <tr className="table-bordered">
                        <Link to={'/Task1'}  ><td>Task1 - Kanban Board API</td></Link>
                        {/* <Link to={'/Task2'}><td>Task2 - Autocorrection App</td></Link> */}
                        <Link to={'/Task3'}><td>Task3 - Bit Login</td></Link>
                        <Link to={'/Task4'}><td>Task4 - Movie Title</td></Link>
                        {/* <Link to={'/Task5'}><td>Task5 - Inventory List</td></Link> */}
                        <Link to={'/Task6'}><td>Task6 - Positioning</td></Link>
                    </tr>
                </table>
                </div>


            </div>
    );
}