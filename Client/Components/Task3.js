import React,{useState,useEffect} from 'react';
import 'bootstrap/dist/css/bootstrap.min.css';
import { Tasks } from './Tasks';
import axios from 'axios';


export function Task3(){

    function f2(){
        var firstnumber = document.getElementById('firstno').value;
        var secondnumber = document.getElementById('secondno').value;
        var thirdnumber = document.getElementById('thirdno').value;
        var output = document.getElementById('output');

        if(firstnumber === '' || firstnumber === null)
        {
            alert('Enter the Number');
        }
        else if(secondnumber === '' || secondnumber === null || secondnumber <= firstnumber)
        {
            alert('Enter the Secondnumber greaterthan Firstnumber');
            document.getElementById('secondno').value = '';
        }
        else if(thirdnumber === '' || thirdnumber === null) 
        {
            alert('Enter the Third Number');
        }
        else{
            const xorvalue = firstnumber^secondnumber;
            if(xorvalue < thirdnumber)
            {
                output.value = xorvalue;
                f1();
            }
            else if(xorvalue <= thirdnumber)
            {
                output.value = thirdnumber ;
                f1();
            }
            else
            {
                document.getElementById('firstno').value = '';
                document.getElementById('secondno').value = '';
                document.getElementById('thirdno').value = ''; 
            }
        }

    }

    function f1(){
        var thirdno = document.getElementById('thirdno').value;
        var output = document.getElementById('output').value;
        if(output > thirdno){
            document.getElementById('firstno').value = '';
            document.getElementById('secondno').value = '';
            document.getElementById('thirdno').value = '';  
            document.getElementById('output').value = '';    
        } 
    }
    

    return(
        <>
        <div>
                <Tasks/>
        </div>
    
        <div className="container mt-2">
            <div className="row">
                <div className="col-lg-12">
                <p className="text-center mt-5"><b>Task 3 - Bit Logic</b></p>
                </div>
            </div>
        </div>
        <div className="container mt-2">
            <div className="row">
                <div className="col-lg-4">&nbsp;</div>
                <div className="col-lg-4">
                    <input type="number" name="firstno" id="firstno" className="form-control" placeholder='First number'/>
                    <input type="number" name="secondno" id="secondno" className="form-control" placeholder='Second number'/>
                    <input type="number" name="thirdno" id="thirdno" className="form-control" placeholder='Third number'/>
                    <input type="number" name="output" id="output" className="form-control" readOnly placeholder='Output'/>
                    <button type="button" name="data_submit" id="data_submit" value="submit" className="mt-3 bit-btn1"
                    onClick={f2}>
                        Click
                    </button>
                </div>
                {/* <div className="col-lg-4">&nbsp;</div> */}
            </div>
        </div>
        </>
    )
}
