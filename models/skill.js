module.exports = {
    getAll
}

const skills = [
    {language: "Javascript", school: "GA"},
    {language: "html", school: "GA"},
    {language: "php", school: "self-taught"},
    {language: "python", school: "pending"}
]

function getAll() {
    return skills;
}