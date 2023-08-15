
const express = require('express');
const app = express();

const tasks  = require('./routes/tasks')

const connectDB = require('./db/connect');

require('dotenv').config()


const notFound = require('./middleware/not-found')

const errorHandlerMiddleware = require('./middleware/error-handler')


// middleware
app.use(express.static('./public'))
app.use(express.json())


// routes
app.get('/hello',(req,res)=>{
    res.send('Task Manager App')
})


app.use('/api/v1/tasks',tasks)



// if the user enters wrong URL/ Route : To handle the not found error :  

app.use(notFound)

// handling errors after wrapping the contorllers so that our previos errors can work

app.use(errorHandlerMiddleware)




const port = process.env.PORT || 3000


const start = async () => {
    try{
        await connectDB(process.env.MONGO_URI)
        app.listen(port, console.log(`Server Listening On Port ${port}...`))
    }
    catch(error){
        console.log(error)
    }

}

start()


