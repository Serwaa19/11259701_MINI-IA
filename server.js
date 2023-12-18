const express = require('express')
const app = express()
const port = 3000;
//routes

app.post('/patients', (req, res) =>{
  const patientData =req.body;

  requestAnimationFrame.status(201).json({message:'Patient registered successfully'})
  res.send('Patient registered successfully')
});


app.listen(3000, ()=>{
  console.log('Server is running on port 3000')
})


mongoose.
connect('mongodb+srv://motifrempong:marcel.311@cluster0.llxt3rh.mongodb.net/Node-API?retryWrites=true&w=majority')
.then(()=> {
  console.log('connected to MongoDB')
  app.listen(3000, ()=>{
    console.log('Node API app is running on port 3000')
  }); 
}).catch((error) =>{
  console.log(error)
})
