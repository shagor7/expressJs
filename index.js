const express = require('express');

const fs = require('fs');

const app = express();

app.get('/', [
  (req, res, next) => {
    fs.readFile('/file-doesn\'t exist', 'utf-8', (err, data) => {
      console.log(data);
      next(err);
    });
  },
  (req, res, next) =>{
    console.log(data.property);
  },
]);

app.use((req, res, next) =>{
    console.log("requested url was not found");
    next();
  });

// app.get('/', (req, res, next) => {
//   setTimeout(function(){
//     try{
//       console.log(a);
//     } catch(err) {
//       next(err);
//     }
//   }, 100);
// });

// app.get('/', (req, res, next) => {
//   fs.readFileSync('/file doesnt exists', (err, data) => {
//     if(err) {
//       next(err);
//     }else {
//       res.send(data);
//     }
//   });
// });

// app.get("/", (req, res) => {
//         //res.send('hello');
//         //throw new Error('Failed to log');
//         for(let i=0; i<=10; i++)
//         {
//         if(i===5) {
//           next("there was an error");
//         } else {
//           res.write('a');
//         }
//       }
//         res.end(a);
//     });

// app.use((err, req, res, next) =>{
//   if(res.headersSent){
//     next('there was a problem');
//   } else{
//     if(err.message){
//       res.status(500).send(err.message);
//     } else {
//       res.send("there was an error!")
//     }
//   }
// });

// app.use((req, res, next) =>{
//   next("requested url was not found");
// });

    // app.use((err, req, res, next) => {
    //   console.log(err);
    //   if(err.message){
    //     res.status(500).send(err.message);
    //   } else{
    //   res.send('there was an error')
    //   }
    // });
// const cookieParser = require('cookie-parser');
// const handler = require('./handle');
//const handlee = require('./handle');


// app.use(express.json());
// app.use(cookieParser());

// const adminRoute =  express.Router();
// adminRoute.get('/dashboard', (req, res) => {
//     console.log(req.method);
//     res.send('dashboard e');
// });

//app.use('/admin',adminRoute);


//app.locals.title = 'My app';

//app.set('view engine', 'ejs');

// app.enable('case sensitive routing');
// app.disable('case sensitive routing');

// app.get('/about', (req, res) => {
//     res.format({
//         'text/plain': () => {
//             res.send('hi');
//         },
//         'text/html': () => {
//             res.render('pages/about', {
//                 name: 'shagor',
//             });
//         },
//         'application/json': () => {
//             res.json({
//                 message: 'about',
//             });
//         },
//         default: () => {
//             res.status(406).send('not acceptable');
//         },
//     });
// });
// const adminRouter = express.Router();

// const loggerWrapper = (options) => {
//     return function(req, res, next) {
//         if(options.log) {
//             console.log(`${new Date(Date.now()).toLocaleString()} - ${req.method} - ${req.protocol} -  ${req.ip}`);
//             next();
//         } else {
//             throw new Error('Failed to log');
//         }
        

//     }
// };
// const logger = (req, res, next) => {
//     console.log(`${new Date(Date.now()).toLocaleString()} - ${req.method} - ${req.protocol} -  ${req.ip}`);
//     //next();
//     //res.end();
//     throw new Error('This is an error');
// }
// adminRouter.use(loggerWrapper({ log: false}));
// adminRouter.get('/dashboard', (req, res) => {
//     res.send('Dashboard');
// });




// const myMiddleware2 = (req, res, next) => {
//     console.log('I am steve');
//     next();
// }
//app.use('/admin',adminRouter);
//app.use(myMiddleware2);
// app.get('/about', (req, res) => {
//     // res.set('Title', 'shagor');
//     // res.get('Title');
//     res.send('About');
// });

// const errorMiddleware = (err, req, res, next) => {
//     console.log(err.message);
//     res.status(500).send('There was a servere side error!');
// };
// adminRouter.use(errorMiddleware);
// app.post('/user/', (req, res) => {
//     console.log(req.route);
//     res.send('this is homepage');
// });

app.listen(3000, () => {
    console.log('listening on port 3000');
});
