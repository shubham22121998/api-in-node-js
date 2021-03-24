const express = require('express');
const app = express();
const port = process.env.PORT || 8000;
require("./config/connection");
const userRoute = require('./routes/user_router');

app.use(express.json());
app.use('/api/users',userRoute);

app.listen(8000,()=>{
    console.log(`connection is setup at ${port}`);
});

