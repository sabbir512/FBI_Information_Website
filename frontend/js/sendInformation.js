//SENDING THE DATA TO BACKEND
let form = document.getElementById("addPersonInformation");
form.addEventListener("submit", (e) => {
  e.preventDefault();

  //FormData is a build-in javascript constructor which is help to get form data as key value pair object, Here with e.target we are telling the FormData that from this form give the key and value as a object
  const formData = new FormData(e.target);

  // Convert FormData to JSON
  const jsonObject = {};

  //ALTHOUGH we know we only can use forEach method to iterate an array but in this case we can use forEach method.
  formData.forEach((value, key) => {
    if (key === "subscribe") {
      jsonObject[key] = value === "on"; // Convert "on" to true, otherwise false
    } else {
      jsonObject[key] = value;
    }
  });

  if (!formData.has("subscribe")) {
    jsonObject["subscribe"] = false;
  }

  const jsonData = JSON.stringify(jsonObject);

  // Send a POST request to the backend with the form data
  fetch("http://localhost:8000/add", {
    method: "POST",
    headers: {
      "Content-Type": "application/json",
    },
    body: jsonData,
  })
    .then((response) => response.json())
    .then((data) => {
      console.log("Data saved successfully:", data);
      document.getElementById("displayMessage").innerHTML = data;
    })
    .catch((error) => {
      console.error("Error saving data:", error);
      // Optionally, you can display an error message to the user
    });
});
