const express = require("express");
const app = express();
const port = 5000;


//db connection
const dbConnection = require("./db/dbConfig");

//user routes middleware file
const userRoutes = require("./routes/userRoute")


//questions routes middleware file
const questionsRoutes = require("./routes/questionsRoute");
// authentication middleware file
const authMiddleware = require("./middleware/authMiddleware");


// json middleware  to extract json data
app.use(express.json())

// user routes middleware
app.use("/api/users", userRoutes);


app.get('/', (req, res)=> {
    res.send("Welcome rovel")
})


// questions routes middleware ??
app.use("/api/questions", authMiddleware , questionsRoutes)

// answers routes middle??


async function start() {

    
    try {
        const result = await dbConnection.execute("select 'test' ");
        // console.log(result)
        await app.listen(port)
        console.log("database connection established")
        console.log(`listening on port ${port}`)
    } catch (error) {
        console.log(error.message)
    }
}
start()

// app.listen(port, (err) => {
// 	if (err) {
// 		console.log(err);
// 	} else {
// 		console.log(`listening on ${port}`);
// 	}
// });