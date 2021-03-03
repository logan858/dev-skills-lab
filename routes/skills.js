let express = require("express")
let router = express.Router()
let skillsCtrl = require("../controllers/skills.js")
let skills = require("../models/skill")



router.get("/", skillsCtrl.skills)
router.get("/skills", function(req, res) {
    res.send("working as intended")
})

//router.get("/:id", skillsCtrl.skills)
router.get("/:id", function(req, res) {
    for(x of skills.getAll()) {
        if (x.language === req.params.id) {
            res.render("../views/skills/show", {language: x})
            console.log(x)
        }
    }
    res.send("error message prompt")
})

module.exports = router;