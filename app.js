// Usando objeto express
const express = require ('express')

//App de express
const app = express ()
// Puerto en que vamos a ver nuestra app : localhost:3000
const port = 3000

// path inicial, responderá a la url localhost 
app.get('/', (req,res) =>{
    res.send ('Hello Word!')
})
//Respondiendo texto 
// localhost: 3000/launchX

app.get ('/launchx', (req,res) =>{
    res.send ('Bienvenidos a launchX')
})

//Regresando un objeto
// localhost: 3000/explorersInNode

app.get ('/explorersInNode', (req,res) =>{
    const explorer ={ name: "Explorer", masg:"Hello"}
    res.send (explorer)
})

//Query Params: Recibir parametros por la url
// http://localhost:3000/explorers/dany
//req.params = {"explorerName":"carlo"}
app.get('/explorers/:explorerName', (req,res) =>{
    res.send (req.params)
})
// Con esto inicializamos esta app
app.listen (port,() =>{
    console.log (`Example app listening on port ${port}`)

})