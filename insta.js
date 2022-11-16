import express, { json, request, response } from 'express'
import fetch from 'node-fetch'
import bodyparser from 'body-parser'

const app=express()

app.use(bodyparser.urlencoded({ extended: false }))
 
app.use(bodyparser.json())

app.set("view engine","ejs")


app.get('/' , (req,res)=>{
    res.render("index") 
  
 })
 app.get('/result' , (req,res)=>{
  res.render("result",{n:''}) 

})
 app.post('/check',(req,res)=>{
   console.log(req.body.username)
   
   
  fetch( `https://www.instagram.com/${req.body.username}/reels/?__a=1&__d=dis`, options)
  .then((response) => response.json())
  .then((data) => {console.log(data);
     
     const dt=JSON.stringify(data)
     const n=dt.includes("seo_category_infos")
     
    
     if(n){
      console.log(" exist")
      res.render("result",{n:n})
     }else
     {
      console.log("not exsit")
      res.render("result",{n:n})
     }

  })
  .catch((error) => {
    console.log(error);
    })
    
  
})



app.listen(5000 , ()=>{
  console.log("server running");
});


const options = {
  method: 'GET',
   headers:{
    'Content-type':'application/json'
   } ,

  
}




 