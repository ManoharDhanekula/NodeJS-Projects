import express from "express";
import mobileController from "../controller/mobile.controller.js";
import { auth } from "../middleware/author.js";

const route = express.Router();

route
  .route("/")
  // .get(mobileController.getAllMobileData)
  .post(auth, mobileController.postDataByID)
  .get(mobileController.paginationForMobilesData);
route.route("/sortBy").get(mobileController.sortByItems);
route.route("/price").get(mobileController.priceByItems);
route.route("/search").get(mobileController.ramByItems);
route
  .route("/:id")
  .get(mobileController.getMobileDataByID)
  .put(auth, mobileController.putMobileDataByID)
  .delete(auth, mobileController.deleteMobileDataByID);

export default route;
