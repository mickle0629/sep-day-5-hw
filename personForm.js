const personForm = document.getElementById("personForm");
const nameInput = document.getElementById("personName");
const ageInput = document.getElementById("personAge");
const addPersonBtn = document.getElementById("addPersonBtn");

// const people = JSON.parse(localStorage.getItem("people")) || [];
let people = JSON.parse(localStorage.getItem("people"));
if (!people) people = [];

personForm.addEventListener("submit", (e) => {
  e.preventDefault();
  //   return;
  const newPerson = {
    name: nameInput.value,
    age: Number(ageInput.value),
  };
  people.push(newPerson);
  localStorage.setItem("people", JSON.stringify(people));
  //refresh the table here
  const peopleTable = document.querySelector(".people-table");
  //return table to state of only headers
  peopleTable.innerHTML = `
    <tr class="people-table__heading">
      <th>Name</th>
      <th>Age</th>
    </tr>
  `
  //iterate through people object and add to peopleTable
  people.forEach(person => {
    peopleTable.innerHTML += `
      <tr>
        <td>${person.name}</td>
        <td>${person.age}</td>
      </tr>
    `
  })
});

//looks thru every person in local storage, adds each person into dom
function showPeople(people) {
  const peopleTable = document.querySelector(".people-table");
  people.forEach(element => {
    peopleTable.innerHTML += `
      <tr>
        <td>${element.name}</td>
        <td>${element.age}</td>
      </tr>
    `
  });
}
//ensures this function executes on page loading
document.onload = showPeople(people);

