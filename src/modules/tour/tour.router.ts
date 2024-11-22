import express from "express";
import { tourController } from "./tour.controller";

const router = express.Router();

router.post("/create-tour", tourController.createTour);
router.get("/", tourController.getAllTour);
router.get("/:id", tourController.getSingleTour);
router.put("/:id", tourController.updateTour);
router.delete("/:id", tourController.deleteTour);


 export const  TourRouter = router;