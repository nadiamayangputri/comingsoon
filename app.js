const express = require('express');
const app = express();

const router =  require('./routes/routes.js')

app.set('view engine', 'ejs');
app.use(router);

app.listen(3000, function() {
    console.log('Server started at port 3000');
});