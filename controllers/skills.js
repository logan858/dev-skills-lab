module.exports = { 
    skills
}
let Skill = require("../models/skill")

function skills(req, res, next) {
    res.render("skills/index", {
        skills: Skill.getAll()
    })
}