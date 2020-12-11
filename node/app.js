var express = require('express')
var app = express();


var bodyParser = require('body-parser');
const cookieParser = require('cookie-parser');
const cors = require('cors');

app.use(bodyParser.json())
app.use(bodyParser.urlencoded({ extended: true }))

var tvShows = require('./routes/show')

app.set('port', 5000);

app.use(function (req, res, next) {
    res.header("Access-Control-Allow-Origin", "*")
    res.header("Access-Control-Allow-Headers", "Origin,X-Rqeuested-With,Content-Type,Accept");
    res.header("Access-Control-Allow-Methods", "PUT,POST,GET,DELETE");
    next();
})

app.use(cors({ credentials: true, origin: 'http://localhost:9000' }));
app.use(cookieParser());
app.use(express.json());



function cookieMiddleware(req, res, next) {
    // console.log("ReQuesT: ", req)
    // if (!req.cookies.myCookie) {
    //     if (req._parsedUrl.pathname === '/authenticate') {
    //         const { name, value, options } = {
    //             name: 'myCookie',
    //             value: 'POC',
    //             options: { maxAge: 900000 }
    //         };
    //         res.cookie(name, value, options);
    //     } else {
    //         res.status(401).send('Failure')
    //     }
    //     next();
    // } else if (!(req._parsedUrl.pathname === '/authenticate')) {
    //     console.log('Failure cookie');
    //     res.status(401).send('Failure')
    // } else {
    //     next();
    // }

    if (!req.cookies.myCookie) {
        if (req._parsedUrl.pathname === '/authenticate') {
            const { name, value, options } = {
                name: 'myCookie',
                value: 'POC',
                options: { maxAge: 900000 }
            };
            res.cookie(name, value, options);
        } else {
            res.status(401).send('Failure')
        }
        next();
    } else {
        next();
    }
}

app.use(cookieMiddleware);

app.use('/api', tvShows);
app.post('/authenticate', (req, res) => {
    if (req.body.username === 'admin' && req.body.password === 'admin') {
        // const { name, value, options } = {
        //     name: 'myCookie',
        //     value: 'POC',
        //     options: { maxAge: 900000, httpOnly: true }
        // };
        // res.cookie(name, value, options);
        res.send("Success").status(201);
    } else {
        res.status(401).send('Failure')
    }
});

app.listen(app.get('port'), function () {
    console.log('Rest Server running on port 5000');
})