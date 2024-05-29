import express from 'express'
import bodyParser from 'body-parser'
import cors from 'cors'

const app = express();
app.use(cors())

app.use(bodyParser.json())
const arr=[1,2,3,4,5,6,7]

   
app.post('/api', (req, res) => {
    console.log(req.body);
    const temp = `The body received was: ${req.body.name}:${req.body.age}`;
    console.log(temp);
    res.send({data:temp});
})  

app.get('/api', (req, res) => {
    res.send([1,2]);
})

app.listen(4000, () => {
    console.log("Server is running on port 4000");

});