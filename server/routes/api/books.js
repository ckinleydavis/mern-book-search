const router = require("express").Router();
const booksCont = require("../../controllers/booksCont");

router.route("/")
  .get(booksCont.findAll)
  .post(booksCont.save);

router.route("/:id")
  .get(booksCont.findOne)
  .delete(booksCont.remove);

module.exports = router;