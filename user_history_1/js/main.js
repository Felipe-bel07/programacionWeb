function btnMenu(){
    var btn = document.getElementsByClassName('btn__menu');
    var menu = document.getElementsByClassName('nav');
    btn[0].classList.toggle('btn__menu--active')
    menu[0].classList.toggle('nav--active')
}


const list = document.getElementById("skill__list")
const skills = [
"Java (OOP fundamentals)",
"Basic Backend Development",
"SQL & Databases",
"Git & GitHub",
"HTML5 & CSS3",
];

skills.forEach(skill =>{
    const li = document.createElement("li");
    li.classList.add("about__skills-item");
    li.textContent = skill;
    list.appendChild(li);
})
