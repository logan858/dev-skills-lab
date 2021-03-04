let express = require("express")
let router = express.Router()
let skillsCtrl = require("../controllers/skills.js")
let skills = require("../models/skill")



router.get("/", skillsCtrl.skills)
router.get("/addskill", skillsCtrl.addSkill)
router.post("/new", skillsCtrl.newSkills)
router.put("/:id", skillsCtrl.updateSkills)



router.get("/:id", function(req, res) {
    for(x of skills.getAll()) {
        if (x.language === req.params.id) {
            res.render("../views/skills/show", {language: x})
            console.log(x)
        }
    }
    res.send("error message prompt")
})

router.delete("/:id", skillsCtrl.deleteFunc)


module.exports = router;