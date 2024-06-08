require('dotenv').config()
const mongoose = require('mongoose');
const app = require('./app.js');
const port = process.env.PORT || 3000;

// const url = 'mongodb+srv://$_USERNAME_$:$_PASSWORD_$@cluster0.dpithd6.mongodb.net/$_DB_NAME_$?retryWrites=true&w=majority&appName=Cluster0';
const url = 'mongodb+srv://$_USERNAME_$:$_PASSWORD_$@cluster0.jjdeter.mongodb.net/$_DB_NAME_$?retryWrites=true&w=majority&appName=Cluster0'


let dbLink = url.replace("$_USERNAME_$", process.env.DB_USER);
dbLink = dbLink.replace("$_PASSWORD_$", process.env.DB_PASSWORD);
dbLink = dbLink.replace("$_DB_NAME_$", process.env.DB_NAME);


mongoose.connect(dbLink).then(() => {
  console.log('-------- Database Connected --------');
}).catch(()=>{
  console.log("database not connected");
})


app.listen(port,()=>console.log("app connected"));
