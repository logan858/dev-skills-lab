module.exports = { 
    skills,
    newSkills,
    addSkill
}
let Skill = require("../models/skill")

function skills(req, res, next) {
    res.render("skills/index", {
        skills: Skill.getAll()
    })
}

function addSkill(req, res, next) {
    res.render("skills/addskill") 
}

function newSkills(req, res) {
    console.log(req.body)
    Skill.addSkill(req.body.newSkill)
    res.redirect("/skills")
}