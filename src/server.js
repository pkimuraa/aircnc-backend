const express = require ('express');
const mongoose = require ('mongoose');
const routes = require ('./routes');
const mukter= require ('multer');

const app = express();

mongoose.connect('mongodb+srv://aircnc:95175301@aircnc-yjzsm.mongodb.net/test?retryWrites=true&w=majority',
  {
    useNewUrlParser: true,
    useUnifiedTopology: true,
  }
);
app.use(express.json());
app.use(routes);


app.listen(3333);