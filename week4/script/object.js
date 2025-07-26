let aCourse = {
  code: "WDD131",
  title: "Dynamic Web Fundamentals",
  credits: 2,
  sections: [
    { section: "001", enrolled: 95, instructor: "Kelvyn Silva Lima" },
    { section: "002", enrolled: 80, instructor: "Maria Eduarda" },
    { section: "003", enrolled: 70, instructor: "Manoel silva" },
  ]
};

function setCourseInformation(course) {
  document.querySelector("#courseName").innerHTML = `${course.code} – ${course.title}`;
}

function sectionTemplate(section) {
  return `<tr>
           <td>${section.section}</td>
           <td>${section.enrolled}</td>
           <td>${section.instructor}</td>
          </tr>`;
}

function renderSections(course) {
  const html = course.sections.map(sectionTemplate);
  document.querySelector("#sections tbody").innerHTML = html.join("");
}

// Chamada das funções
setCourseInformation(aCourse);
renderSections(aCourse);
