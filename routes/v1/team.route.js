const express = require("express");
const router = express.Router();
const controller = require("../../controllers/team.controller");
// const { acceptFormData, uploadBuffer } = require("../../utils/multer");

router.route("/team/list").get(controller.findAllData);
router.route("/team/add").post(controller.addData);
router.route("/team/edit").put(controller.addData);
// router.route("/team/delete").delete(controller.deleteData);
module.exports = router;
