import Clothes from "../models/Clothes.js"

class ClothesController{
    async getClothes(req,res){
        try{
            const clothes = await Clothes.find()
            res.status(200).json(clothes)
        }catch(err){
            res.status(404).json("Ошибка при получении одежды: " + err)
        }
    }
    async getCloutheOne(req,res){
        try{
            const{id} = req.params
            const clouthe = await Clothes.findById(id)
            if(!clouthe){
                res.status(404).json("Такой одежды не существует!")
            }
            res.status(200).json(clouthe)
        }catch(err){
            res.status(500).json("  Ошибка при выполнении запроса: " + err)
        }
    }

async updateClothes(req,res){
    try{
        const{ id } = req.params
        const updateClothes = await Clothes.findByIdAndUpdate(id,{$set: req.body},{new:true})
        if(!updateClothes){
            res.json("Такой одежды не существует!")
        }
        res.json(updateClothes,"Одежда успешно изменена!")
    }catch(err){
        res.send("Ошибка при изменении одежды: " + err)
    }
}

async deleteClothes(req, res){
    try {
      const { id } = req.params
      const deleteClothes = await Clothes.findByIdAndDelete(id)
      if(!deleteClothes){
        res.send("Такой одежды не существует!")
        }
        res.send("Одежда успешно удалена!");
    }catch (err) {
        res.send("Ошибка при удалении одежды: " + err)
    }
  }







async pay (req,res){
    try{
        const {title, size, color, material} = req.body
        const newClothes = await Clothes.create({title, size, color, material}) 
        res.json(newClothes)
        newClothes.save()
    }catch(err){
        res.status(500).json("Ошибка при регистрации " + err)
        console.log("Ошибка при регистрации " + err );
        
        }
    }

}

export default new ClothesController();