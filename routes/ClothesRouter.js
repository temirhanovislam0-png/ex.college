import {Router} from "express";
import ClothesController from "../controllers/ClothesConroller.js";

const router = new Router()

router.get("/clothes", ClothesController.getClothes)
router.get("/clothes/:id", ClothesController.getCloutheOne)
router.post("/pay",ClothesController.pay )
router.patch("/clothes/:id",ClothesController.updateClothes )
router.delete("/clothes/:id", ClothesController.deleteClothes)





export default router;