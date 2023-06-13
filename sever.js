const mysql=require('mysql');
const fs=require('fs');
const con=mysql.createConnection({
    host:'localhost',
    user:'root',
    password:''
});
con.connect((err)=>{
    if(err) throw err;
    console.log('connected!');
 con.query('use person',(err,result)=>{
    if(err) throw err;
    console.log("Using database");
 });



   const Data=JSON.parse(fs.readFileSync('Data.json','utf8'));

   for(let i=0;i<Data.length;i++){
    const row=Data[i];
    const sql=`  insert into persons (id,name,addres) values ('${row.id}','${row.name}','${row.address}')`;
   con.query(sql,(err,result)=>{
    if(err) throw err;
    console.log(`${i+12}`);
   })
   }
});

 