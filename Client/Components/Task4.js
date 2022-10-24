import React from "react";
import { Tasks } from "./Tasks";
import { useState } from "react";

export function Task4()
{
    const [movdetails,setMovdetails] = useState([]);

    fetch('https://jsonmock.hackerrank.com/api/moviesdata/search/')
    .then(res => res.json())
    .then(function(json){setMovdetails(json.data)});
    return(
        <div>
            <div>
                <Tasks/>
            </div>
            <p className="text-center mt-5"><b>Task 4 - Movie Title</b></p>
            
        {/* <div className="container mt-2">
            <div className="row">
                <div className="col-lg-12">
                <p className="text-center"><b>Movie Title</b></p>
                </div>
            </div>
        </div> */}
        <div className="container mt-3">
            <div className="table-responsive">
                <table className="table table-bordered">
                    <thead>
                        <tr>
                            <td>Movie Title</td>
                        </tr>
                    </thead>
                    <tbody>
                        {movdetails.map((value,index)=>(
                            <tr>
                                <td>{value.Title}</td>
                                <td>{value.Year}</td>
                                <td>{value.imdbID}</td>
                            </tr>
                        ))}
                    </tbody>
                </table>
            </div>
        </div>

    </div>
    );
}