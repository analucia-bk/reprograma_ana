const express = require("express")
const router = express.Router()
const controller = require()

router.get("/",controller.get)
router.get("/nasceuSp",controller.getSp)
router.get("/:id/books", controller.getBooks)

module.exports = router