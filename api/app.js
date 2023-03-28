const createError = require('http-errors');
const express = require('express');
const path = require('path');
const cookieParser = require('cookie-parser');
const logger = require('morgan');
const cors = require('cors');
const fs = require('fs');

const indexRouter = require('./routes/index');
const usersRouter = require('./routes/users');

const app = express();

// view engine setup
app.set('views', path.join(__dirname, 'views'));
app.set('view engine', 'jade');

app.use(cors());
app.use(logger('dev'));
app.use(express.json());
app.use(express.urlencoded({extended: false}));
app.use(cookieParser());
app.use(express.static(path.join(__dirname, 'public')));

app.use('/', indexRouter);
app.use('/users', usersRouter);

app.post('/create', function (request, response) {
    console.log('Append dic.')
    let body = ''
    const filePath = __dirname + '/public/dict.json'
    request.on('data', function (data) {
        body += data
    })

    request.on('end', function () {
        fs.rm(filePath, function () {
            console.log('Файл удален.')
            fs.appendFile(filePath, body, function () {
                response.end()
            })
        })
    })
})

app.get('/get_dic', function (request, response) {
    console.log('Get dic1.')
    const filePath = __dirname + '/public/dict.json'
    fs.readFile(filePath, 'utf8', (err, data) => {
        if (err) {
            console.log('Error:', err)
            return
        }
        console.log('>>>:', JSON.parse(data))
        response.send(JSON.parse(data));
    })
})

app.post('/add_word', (request, response) => {
    console.log('Add word.')
    request.on('data', function (data) {
        console.log('New word:', JSON.parse(data))
        response.end()
    })
})

// catch 404 and forward to error handler
app.use(function (req, res, next) {
    next(createError(404));
});

// error handler
app.use(function (err, req, res, next) {
    // set locals, only providing error in development
    res.locals.message = err.message;
    res.locals.error = req.app.get('env') === 'development' ? err : {};

    // render the error page
    res.status(err.status || 500);
    res.render('error');
});

module.exports = app;
