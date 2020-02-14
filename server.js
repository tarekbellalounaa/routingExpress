const express= require('express')
const app=express()



app.use(express.static(__dirname+'/htmlPages'))

const date = (req , res , next) => {
    var d = new Date()
    if( (d.getHours() < 15  ) || (d.getHours() > 17) ){
        return res.sendFile(__dirname + "/htmlPages/outOfTime.html")
    }
    next()
}

app.get('/home' , date , (req ,res )=> {
    res.sendFile(__dirname + "/htmlPages/home.html" )
})
app.get('/aboutus' , date , (req ,res )=> {
    res.sendFile(__dirname + "/htmlPages/home.html" )
})
app.get('/ourservices' , date , (req ,res )=> {
    res.sendFile(__dirname + "/htmlPages/home.html" )
})


app.listen(3001,(err)=>{
    if(err) console.log('server is not running')
    else console.log('server is running on port 3001')

})