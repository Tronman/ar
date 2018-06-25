const express = require('express');
const path = require('path');
const app = express();

app.use(express());
app.use(express.static(path.join(__dirname , 'public')));

app.get('/',(req,res)=>{
    res.render('/public/index.html')
})

app.listen(3000, ()=>{
    console.log('running on port 3000 ..');
})