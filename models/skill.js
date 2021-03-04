module.exports = {
    getAll,
    addSkill,
    deleteData,
    updateStuff
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

function deleteData(x) {
    const lang = skills.findIndex(skill => skill.language === x)
    console.log(lang)
    skills.splice(lang, 1);
}
function updateStuff (params, body) {
    const idx = skills.findIndex(x => x.language === params)
    if(body) {
        skills[idx].language = body
    }
} 