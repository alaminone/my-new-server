const express = require('express');
const cors = require('cors');
const app = express();
const port =process.env.PORT || 5000;



// midelwer

app.use(cors());
app.use(express.json());

const user =[
    {id:1,name:"sabana",email:"sabana@gmail.com"},
    {id:2,name:"sabnur",email:"sabnur@gmail.com"},
    {id:3,name:"sbila",email:"sbila@gmail.com"},
]


app.get('/', (req, res) => {
  res.send('surver is running')
})

app.get('/user', (req, res) => {
    res.send(user);
  })

  app.post('/user', (req , res)=>{
    console.log(req.body)
    const newUser = req.body;
    newUser.id = user.length + 1;
    user.push(newUser);
    res.send(newUser);
  })

app.listen(port, () => {
  console.log(`my new server on the port ${port}`)
})