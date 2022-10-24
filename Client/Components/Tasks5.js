let input=document.getElementById("inputid");
let button1=document.getElementById("buttonid");
let ullist=document.getElementById("ulid");

function f2()
{
    if(input.value === '' || input.value === null)
    {
        alert("Please Enter");
    }
    else
    {
    let inputdata=input.value;
    
    let list=document.createElement("li");
   
    let span=document.createElement('span');
    list.appendChild(span);
    span.innerText=inputdata;    
    ullist.appendChild(list);
    inputdata.value="";
    let Trash=document.createElement('i');
    console.log(Trash);
    Trash.classList.add("fas", "fa-trash");
    list.appendChild(Trash);
    let editbtn=document.createElement('i');
    console.log(editbtn);
    editbtn.classList.add("fas", "fa-edit");
    list.appendChild(editbtn);
    document.getElementById("inputid").value="";
    }
}
function Deletebutton(detail)
{
    if(detail.target.classList[1] === "fa-trash")
    {
        let item = detail.target.parentElement;
        item.remove();
       
    }
}
    function Editbutton(detail)
    
    {
        if(detail.target.classList[1] === "fa-edit")
        {
            let editvalue=prompt("Please Enter the New Name");
            let Additem=detail.target.parentElement;
           
            let span=Additem.querySelector('span');
            span.innerText = editvalue;
            
            
        }
    }


button1.addEventListener("click",f2);
ullist.addEventListener("click",Deletebutton);
ullist.addEventListener("click",Editbutton);

