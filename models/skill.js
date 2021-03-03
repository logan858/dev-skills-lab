module.exports = {
    getAll,
    addSkill
}



let skills = [
    {language: "Javascript", school: "GA"},
    {language: "html", school: "GA"},
    {language: "php", school: "self-taught"},
    {language: "python", school: "pending"}
]

function getAll() {
    return skills;
}

function addSkill(x) {
    skills.push({language: x})
    console.log(skills)
}