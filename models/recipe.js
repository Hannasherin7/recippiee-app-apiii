const mongoose=require("mongoose")
const schema=mongoose.Schema({
    "image":{type:String,required:true},
    "incredients":{type:String,required:true},
    "title":{type:String,required:true},
    "description":{type:String,required:true},
    "type":{type:String,required:true}
})

let recipemodel=mongoose.model("recipes",schema);
module.exports={recipemodel}