// courses.js

// HTML elements
const sectionNumberElement = document.querySelector("#sectionNumber");
const enrollStudentElement = document.querySelector("#enrollStudent");
const dropStudentElement = document.querySelector("#dropStudent");

dropStudentElement.html
const aCourse = {
  code: "CSE121b",
  name: "Javascript Language",
  sections: [
    {
      sectionNum: 1,
      roomNum: "STC 353",
      enrolled: 26,
      days: "TTh",
      instructor: "Bro T",
    },
    {
      sectionNum: 2,
      roomNum: "STC 347",
      enrolled: 28,
      days: "TTh",
      instructor: "Sis A",
    },
  ],
  enrollstudent: function (sectionNum) {
    const sectionIndex = this.sections.findIndex(
      (section) => section.sectionNum == sectionNum
    );
    if (sectionIndex >= 0) {
      this.sections[sectionIndex].enrolled++;
      outputSections(this.sections);
    }
  },
  dropStudent: function(sectionNum) {
    const sectionIndex = this.sections.findIndex(
      (section) => section.sectionNum == sectionNum
    );
    if (sectionIndex >= 0) {
        this.sections[sectionIndex].enrolled--;
      outputSections(this.sections);
    }
  },
}

const setNameAndNumber = (courseObject) => {
    const courseName = document.querySelector("#courseName");
    const courseCode = document.querySelector("#courseCode");
    courseName.textContent = courseObject.name;
    courseCode.textContent = courseObject.code;
}

const outputSections = (sections) => {
    const sectionsHTML = sections.map( (section) =>
            `<tr>
            <td>${section.sectionNum}</td>
            <td>${section.roomNum}</td>
            <td>${section.enrolled}</td>
            <td>${section.days}</td>
            <td>${section.instructor}</td>
            </tr>`);
    document.querySelector("#sections").innerHTML = sectionsHTML.join("");
  }

const outputSections2 = (sections) => {
  sections.forEach((section) => {
    const sectionsElement = document.querySelector("#sections");
    let newRow = document.createElement("tr");
    let cell1 = document.createElement("td");
    let cell2 = document.createElement("td");
    let cell3 = document.createElement("td");
    let cell4 = document.createElement("td");
    let cell5 = document.createElement("td");
    cell1.innerText = `${section.sectionNum}`;
    cell2.innerText=`${section.roomNum}`;
    cell3.innerText=`${section.enrolled}`;
    cell4.innerText=`${section.days}`;
    cell5.innerText=`${section.instructor}`;
    newRow.appendChild(cell1);
    newRow.appendChild(cell2);
    newRow.appendChild(cell3);
    newRow.appendChild(cell4);
    newRow.appendChild(cell5);
    sectionsElement.appendChild(newRow);
  });
}


setNameAndNumber(aCourse);
outputSections(aCourse.sections);

enrollStudentElement.addEventListener("click", () => {
  let sectionNum = Number(sectionNumberElement.value);
  aCourse.enrollstudent(sectionNum);
});

dropStudentElement.addEventListener("click", () => {
  let sectionNum = Number(sectionNumberElement.value);
  aCourse.dropStudent(sectionNum);
});

