const express = require("express");
const mysql = require("mysql");
const cors = require("cors");
const bodyParser = require('body-parser');
const fileupload = require('express-fileupload');

const app = express();
app.use(cors());
app.use(express.json());
app.use(bodyParser.json());
app.use(bodyParser.urlencoded({extended : true}));
app.use(express.static('public'));
app.use(fileupload());

const c = mysql.createConnection({
    host : "localhost",
    user : "root",
    password : "Midhun8940@",
    database : "companytasks"
});
c.connect(function(err){
    if(err)
    {
        console.log(err);
    }
    else
    {
        console.log("Database Connected");
    }
});

app.post('/task1',(req,res)=>
{
   let title1 = req.body.title;
    let sql1= 'insert into task1(title,stage1) values(?,?)';
    c.query(sql1,[title1,1],(err,result)=>
    {
        if(err)
        {
            let s = {"status " : "error"}
            res.send(s);
            
        }
        else
        {
            let s = {"status" : "created"}
            res.send(s);
        }
    })
})



app.get('/Task1_one',(request,response)=>{
    let sql = 'select * from task1 where stage=?';

    c.query(sql,[1],(error,result)=>{
        if(error){response.send(error);}
        else{response.send(result);}
    })

})

app.get('/Task1_two',(request,response)=>{
    let sql = 'select * from task1 where stage=?';

    c.query(sql,[2],(error,result)=>{
        if(error){response.send(error);}
        else{response.send(result);}
    })

})

app.get('/Task1_three',(request,response)=>{
    let sql = 'select * from task1 where stage=?';

    c.query(sql,[3],(error,result)=>{
        if(error){response.send(error);}
        else{response.send(result);}
    })

})

app.put('/Task1_2/:id',(request,response)=>{
    let id = request.params.id;
    let sql = 'update task1 set stage=? where id=?';
    c.query(sql,[2,id],(err,res)=>{
        if(err){
            let s = {"status":"error"};
            response.send(s);
        }
        else{
            let s = {"status":"updated"};
            response.send(s);
        }
    })
})

app.put('/Task1_3/:id',(request,response)=>{
    let id = request.params.id;
    let sql = 'update task1 set stage=? where id=?';
    c.query(sql,[3,id],(err,res)=>{
        if(err){
            let s = {"status":"error"};
            response.send(s);
        }
        else{
            let s = {"status":"updated"};
            response.send(s);
        }
    })
})


app.listen(3001);

app.post('/getuserdetails',(req,res)=>{
    let title = req.body.title;
    let sql = 'select * from task1 where title=?';
    c.query(sql,[title],(error,result)=>{
        res.send(result);
    })
});


