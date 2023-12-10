const express = require('express');
require('dotenv').config();
const cors= require('cors');
// const cookieParser = require('cookie-parser');

const app = express();



// CORS middleware
const originWhiteList = ['http://localhost:3000'];
const options = {
  origin:(origin, callback)=> {
    if (originWhiteList.includes(origin)) {
      callback(null, true)
    } else {
      callback(console.error('Not allowed by CORS'))
    }
  },
  credentials: true
};
app.use(cors(options));
// app.use(cookieParser());


// Body parser middleware
app.use(express.json());
app.use(express.urlencoded({extended:true}));

// Route includes
// const historyRouter = require('./routes/history.router');
const memberRouter = require('./routes/member.router');

/* Routes */
// app.use('/api/history', historyRouter)
app.use('/member', memberRouter)

// Serve static files
app.use(express.static('build'));

// App Set //
const PORT = process.env.PORT || 8080;

/** Listen **/
app.listen(PORT, () => {
  console.log(`Listening on port: ${PORT}`);
});
