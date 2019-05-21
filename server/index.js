const app = require('express')()
const port = 2345;
const route =require('./books_routes.js')
const cors = require('cors')
app.use(cors())

app.use('/books', route)

app.listen(port, ()=> {
    console.log(`the app is running on port ${port}`);
})
