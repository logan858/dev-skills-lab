module.exports = { 
    skills,
    newSkills,
    addSkill,
    deleteFunc,
    updateSkills
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

function deleteFunc(req, res) {
    console.log(req.params)
    Skill.deleteData(req.params.id)
    res.redirect("/skills");
}

function updateSkills(req, res) {
    Skill.updateStuff(req.params.id, req.body.update) 
    res.redirect("/skills")
}