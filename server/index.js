import express from 'express';
import bodyParser from 'body-parser';
import cors from  'cors'
import mongoose from 'mongoose'
import postRoutes from './routes/posts.js';

const app = express();

//set limit for image 
app.use(bodyParser.json({limit: "30mb" , extended : "true"}));
app.use(bodyParser.urlencoded({limit: "30mb" , extended : "true"}));
// app.use(cors());
app.use(function (req, res, next) {
  res.header("Access-Control-Allow-Origin", "*");
  res.header("Access-Control-Allow-methods", "*");
  res.header("Access-Control-Allow-Headers", "Origin, X-Requested-With, Content-Type, Accept");
  next();
});

app.use('/posts' , postRoutes);

const CONNECTION_URL = 'mongodb+srv://project:project123@cluster0.vknf7sc.mongodb.net/?retryWrites=true&w=majority';
const PORT = process.env.PORT || 5000;


//connection of index.js with mangoose altas 
//if connection is successful .then or give error

mongoose.connect(CONNECTION_URL , {useNewUrlParser:true , useUnifiedTopology:true})
  .then(() => app.listen(PORT , ()=> console.log(`Server running on port: ${PORT}`)))
  .catch((error)=>console.log(error.message));

// mongoose.set('useFindAndModify',false)