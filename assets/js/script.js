var employees = [
    {
      names: "Jane Doe",
      age: 20,
      image: "https://via.placeholder.com/25",
      role: "Manager",
    },
    {
      names: "Jack Doe",
      age: 23,
      image: "https://via.placeholder.com/25",
      role: "Developer",
    },
    {
      names: "Joe Doe",
      age: 23,
      image: "https://via.placeholder.com/25",
      role: "Employee",
    },
    {
      names: "Juke Doe",
      age: 46,
      image: "https://via.placeholder.com/25",
      role: "Employee",
    },
  ];
  // 1. Implement the functionality for adding all these employees in the DOM as cards when the page is loaded
  
  employees.forEach(function(employee){
    var cardDiv = document.createElement("div")
    var image = document.createElement("img")
    var details = document.createElement("div")
    var person = document.createElement("h4")
    var years = document.createElement("p")
    var position = document.createElement("p")

    cardDiv.setAttribute("class", "card")
    image.setAttribute("src", employee.image)
    details.setAttribute("class", "container")

    person.innerText = employee.names
    years.innerText = employee.age
    position.innerText = employee.role

    var cardRow = document.getElementById("existing-employees")

    cardRow.append(cardDiv)
    cardDiv.append(image)
    cardDiv.append(details)
    details.append(person)
    details.append(years)
    details.append(position)

  })

  // 2. Implement the functionality for adding a new employee

  document.getElementById("add-btn").addEventListener("click", function(e){
    e.preventDefault()
    var employeeName = document.getElementById("employee-name").value
    var employeeAge = document.getElementById("employee-age").value
    var employeeImage = document.getElementById("employee-image").value
    var employeeRole = document.getElementById("employee-role").value

    var cardDiv = document.createElement("div")
    var image = document.createElement("img")
    var details = document.createElement("div")
    var person = document.createElement("h4")
    var years = document.createElement("p")
    var position = document.createElement("p")

    cardDiv.setAttribute("class", "card")
    image.setAttribute("src", employeeImage)
    details.setAttribute("class", "container")

    person.innerText = employeeName
    years.innerText = employeeAge
    position.innerText = employeeRole

    var cardRow = document.getElementById("existing-employees")

    cardRow.append(cardDiv)
    cardDiv.append(image)
    cardDiv.append(details)
    details.append(person)
    details.append(years)
    details.append(position)

  })
  