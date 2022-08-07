const express = require('express')
const path = require('path')
const app = express()
const views = require('./module/module')

let {babbage,bernersLee,clarke,hamilton,hopper,index,lovelace,turing,error} = views

app.use(express.static("public"))

function ruta (res,pagina){
    return res.sendFile(path.join(__dirname,pagina))
}


app.get('/', (req,res) =>{
    res.sendFile(path.join(__dirname, index))
})

app.get('/*', (req,res) =>{

    switch (req.url){
        case '/babbage':
             ruta(res,babbage)
        break;
        
        case '/bernersLee':
             ruta(res,bernersLee)
        break;

        case '/clarke':
            ruta(res,clarke)
        break;

        case '/hamilton':
            ruta(res,hamilton)
        break;

        case '/hopper':
            ruta(res,hopper)
        break;

        case '/lovelace':
            ruta(res,lovelace)
        break;

        case '/turing':
            ruta(res,turing)
        break;

        default:
            console.log(req.url)
            ruta(res,error) 
        break
    }
    
})





app.listen(3030, () =>{
    console.log('Servidor UP')
})