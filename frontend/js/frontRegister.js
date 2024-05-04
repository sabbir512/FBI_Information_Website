const getFormId = document.getElementById("registerForm");
const registerContainer = document.getElementById("registerContainer");
getFormId.addEventListener("submit", (e) => {
  //preventing from reload the page
  e.preventDefault();

  //Getting name and value from the data
  const formData = new FormData(e.target);

  //consverting in json;
  const jsonObject = {};

  //FormData have have forEach method even though it's an object
  formData.forEach((value, key) => {
    jsonObject[key] = value;
  });
  console.log(jsonObject);

  fetch("http://localhost:8000/register", {
    method: "POST",
    headers: { "Content-Type": "application/json" },
    //converting jsonObject to json string
    body: JSON.stringify(jsonObject),
  })
    .then((res) => res.json())
    .then((data) => {
      console.log("Data saved successfully:", data);
      registerContainer.innerHTML = data.message;
    })
    .catch((err) => {
      console.log(err);
    });
});
