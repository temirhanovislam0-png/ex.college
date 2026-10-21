import mongoose from "mongoose";

const clothesSchema = new mongoose.Schema({
    title:{
        type:String,
        required:[true,"Название обязательно для заполнения"],
        trim:true
    },
    size:{
        type:Number,
        required:[true,"Размер обязателен для заполнения"],
        min: 25
    },
    color:{
        type:String,
        required:[true,"Цвет обязателен для заполнения"],
        trim:true
    },
    material:{
        type:String,
        required:[true,"Материал обязателен для заполнения"],
        trim:true
    }
})
export default mongoose.model("Clothes",clothesSchema)