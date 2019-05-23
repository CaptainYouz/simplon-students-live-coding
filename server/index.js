const app = require('express')()
const port = 2345;
const booksRoutes =require('./books_routes.js')
const authRoute = require('./auth_routes.js')
const cors = require('cors')
const bodyParser = require('body-parser');


app.use(cors());
app.use(bodyParser.json());
app.use(bodyParser.urlencoded({ extended : true }));

app.use('/books', booksRoutes)
app.use('/auth', authRoute)

app.listen(port, ()=> {
    console.log(`the app is running on port ${port}`);
})
