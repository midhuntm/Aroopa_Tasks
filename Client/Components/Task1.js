import React, { useState } from "react";
import axios from 'axios';
import { useStat,useEffect } from "react";
import { Tasks } from "./Tasks";

export function Task1()
{
    const [titledetails,setTitledetails]=useState([]);
    const [titledetails2,setTitledetails2]=useState([]);
    const [titledetails3,setTitledetails3]=useState([]);

    const submit=(detail)=>
    {
        detail.preventDefault();
        const datastring = new FormData(detail.target);
        const contents = {header:{'content-type':'multipart/form-data'}};
        var title = document.getElementById("title").value;
        if(title === '' || title === null)
        {
            alert("Enter Title");
        }
        else{
        axios.post('http://localhost:3001/task1',datastring,contents)
        .then(function(res)
        {
            if(res.data.status === 'Not Inserted')
            {
                 alert("Not Inserted");
              window.location.reload();
            }
            else
            {
                alert("Inserted");
                window.location.reload();
            }
        })
        .catch(function(err)
        {
            alert(err);
            window.location.reload();
        })
    }}

    useEffect(()=>{
        axios.get('http://localhost:3004/Task1 _one')
        .then(function(res){
            setTitledetails(res.data);
        })
        axios.get('http://localhost:3004/Task1_two')
        .then(function(res){
            setTitledetails2(res.data);
        })
        axios.get('http://localhost:3004/Task1_three')
        .then(function(res){
            setTitledetails3(res.data);
        })
    },[])
    
    const movetwo = (id) => {
        axios.put('http://localhost:3004/Task1_2/'+id)
             .then(function(res){
               if(res.data === 'updated'){
                   alert('Moved');
                   window.location.reload();
               }
             })
             .catch(function(err){
               alert(err);
               window.location.reload();
             })
   }

   const movethree = (id) => {
    axios.put('http://localhost:3004/Task1_3/'+id)
         .then(function(res){
           if(res.data === 'updated'){
               alert('Moved');
               window.location.reload();
           }
         })
         .catch(function(err){
           alert(err);
           window.location.reload();
         })
    }
  
    return(
        <div>
            <div>
                <Tasks/>
            </div>
               
                 <div className="container mt-2">
            <div className="row">
                <div className="col-lg-12">
                <p className="text-center"><b>Kanban Borad API</b></p>
                </div>
            </div>
        </div>
        <div className="container mt-2">
            <div className="row">
                <div className="col-lg-4">&nbsp;</div>
                <div className="col-lg-4">
                    <form onSubmit={submit}>
                    <label className="form-label">Title</label>
                    <input type="text" name="title" id="title" className="form-control"/>
                    <button type="submit" name="data_submit" id="data_submit" value="submit" className=" mt-4 ml-4 t1-btn1">
                        Save
                    </button>
                    </form>
                </div>
                {/* <div className="col-lg-4">&nbsp;</div> */}
            </div>
        </div>

        <div className="container mt-5">
        <div className="row">
            <div className="col-lg-4">
            <div className="table-responsive">
                    <table className="table table-bordered">
                        <thead>
                            <tr>
                                <th>Title</th>
                                <th>Stage</th>
                            </tr>
                        </thead>
                        <tbody>

                        {titledetails.map((value,index)=>(
                            <tr key={index}>
                                <td>{value.title}</td>
                                <td><button onClick={movetwo(value.id)}>Move to Stage-2</button></td>
                            </tr>
                        ))}
                        </tbody>
                    </table>
                </div>
            </div>
            <div className="col-lg-4">
                <div className="table-responsive">
                    <table className="table table-bordered">
                        <thead>
                            <tr>
                                <th>Title</th>
                                <th>Stage</th>
                            </tr>
                        </thead>
                        <tbody>

                        {titledetails2.map((value,index)=>(
                            <tr key={index}>
                                <td>{value.title}</td>
                                <td><button onClick={movethree(value.id)}>Move to Stage-3</button></td>
                            </tr>
                        ))}
                        </tbody>
                    </table>
                </div>
            </div>
            <div className="col-lg-4">
            <div className="table-responsive">
                    <table className="table table-bordered">
                        <thead>
                            <tr>
                                <th>Title</th>
                                <th>Stage</th>
                            </tr>
                        </thead>
                        <tbody>

                        {titledetails3.map((value,index)=>(
                            <tr key={index}>
                                <td>{value.title}</td>
                                <td><button>Final Stage</button></td>
                            </tr>
                        ))}
                        </tbody>
                    </table>
            
          </div>
        </div>
        </div>
        </div>
        </div>
        

        

    );

}

