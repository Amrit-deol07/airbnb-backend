//External Modules
const path = require('path');

const express = require('express');

//Local Module
const userRouter = require('./routes/userRouter');
const hostRouter = require('./routes/hostRouter');
const app = express();

app.use((req,res,next)=>{
    console.log(req.url,req.method);
    next();
})

app.use(express.urlencoded({extended:true}));

app.use(userRouter);
app.use(hostRouter);

app.use((req,res,next)=>{
    res.status(404).sendFile(path.join(__dirname,'views','404error.html'));
})

const port = 3000;
app.listen(port, () => {
  console.log(`Server is running at http://localhost:${port}`);
});