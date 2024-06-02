import express from 'express'
import bodyParser from 'body-parser'
import cors from 'cors'
import 'dotenv/config'
const app = express();
app.use(cors())
const PORT = process.env.PORT
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

app.listen(PORT, () => {
    console.log(`Server is running on port http://localhost:${PORT}/api`);

});