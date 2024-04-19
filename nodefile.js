var exp=require("express")
var cr=require("cors")
var app=exp()
app.use(cr())
app.listen(1000)
app.get("/first",function(req,res){
res.send("welcome to first Api creation started......")
})

