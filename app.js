const express=require("express")
const mongoose=require("mongoose")
const cors=require("cors")
const {recipemodel}=require("./models/recipe")

const app=express()
app.use(cors())
app.use(express.json())


mongoose.connect("mongodb+srv://hannasherin:Alazhar4@cluster0.agtcb.mongodb.net/recipeeeiiiDb?retryWrites=true&w=majority&appName=Cluster0")


app.post("/add",(req,res)=>{
    let input=req.body
    let recipe=new recipemodel(input)
    recipe.save()
    console.log(recipe)
    res.json({"status":"success"})
})

app.post("/search",(req,res)=>{
    let input=req.body
    recipemodel.find(input).then((data)=>{
        res.json(data)
    }
    ).catch((error)=>{
        res.json(error)
    })
})

app.post("/delete",(req,res)=>{
    let input=req.body
    recipemodel.findByIdAndDelete(input._id).then(
        (response)=>{
            res.json({"status":"success"})
        }
    ).catch(
        (error)=>{
            res.json({"status":"error"})
        }
    )
})


app.get("/view",(req,res)=>{
    recipemodel.find().then((data)=>{
        res.json(data)
    }).catch((error)=>{
        res.json(error)
    })
})

app.listen(8081,()=>{
    console.log("server started")
})