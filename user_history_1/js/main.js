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
"MySQL & Databases",
"Git & GitHub",
"HTML5 & CSS3",
"FastAPI"
];

skills.forEach(skill =>{
    const li = document.createElement("li");
    li.classList.add("about__skills-item");
    li.textContent = skill;
    list.appendChild(li);
})


const cardInfomration = [
  {
    name: "Student Database",
    description: "A MySQL database to manage students, courses and grades with basic CRUD queries.",
    technologies: ["MySQL", "SQL"],
    github: "#"
  },
  {
    name: "Library API",
    description: "A REST API built in Java to manage books, authors and loans.",
    technologies: ["Java", "OOP"],
    github: "#"
  },
  {
    name: "Portfolio",
    description: "Personal portfolio built with HTML, CSS and vanilla JavaScript.",
    technologies: ["HTML5", "CSS3", "JavaScript"],
    github: "#"
  }
];
const projects = document.getElementById("projects-grid")

cardInfomration.forEach(cards =>{
    const card = document.createElement("div")
    card.classList.add("projects__card")

    const techBadges = cards.technologies
    .map(tech => `<span class="tech-badge">${tech}</span>`)
    .join(""); 

    card.innerHTML = `
    <h3 class="card-title">${cards.name}</h3>
    <p class="card-description">${cards.description}</p>
    <div class="card-techs">${techBadges}</div>
    <a href="${cards.github}" class="card-link" target="_blank">GitHub →</a>
    `;

    projects.appendChild(card);
})