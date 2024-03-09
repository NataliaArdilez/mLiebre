const express = require('express');
const path = require('path')
const app = express();
const port = process.env.PORT||500;

//Config static folder
app.use(express.static(path.join(__dirname, 'public')))

app.get('/', (req, res)=> {
    res.sendFile(path.join(__dirname, 'views', 'home.html'))
})

app.listen(port, ()=> {
    console.log(`Servidor corriendo en http://localhost:${port}`)
})

app.get('/register',(req, res)=>{
    res.sendFile(path.join(__dirname, 'views', 'register.html'))
    //res.send('Funcionando')
  });
  
  app.get('/login',(req, res)=>{
    res.sendFile(path.join(__dirname, 'views', 'login.html'))
    //res.send('Funcionando')
  });
