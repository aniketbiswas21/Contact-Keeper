const mongoose = require('mongoose');
const config = require('config');
const db= config.get('mongoURI');

const connectDB = async () =>{
    try {
        await  mongoose.connect(db,{
            useNewUrlParser: true,
            useCreateIndex: true,
            useFindAndModify: false
          });
          
          console.log('MongoDB connected')
    } catch (err) {
        console.error(err.message);
        process.exit(1);
    }
    //alternate way to do this without async
    
    // mongoose.connect(db,{
    //   useNewUrlParser: true,
    //   useCreateIndex: true,
    //   useFindAndModify: false
    // }).then(() => console.log('MongoDB Connected'))
    // .catch(err=> {                                                   //.catch is for if something goes wrong while connecting database
    //     console.error(err.message);
    //     process.exit(1);
    // });
};

module.exports = connectDB;