//SENDING  FORM DATA TO BACKEND and FETCHING DATABASE;
const form = document.getElementById("searchPerson");

form.addEventListener("submit", async (e) => {
  e.preventDefault();
  console.log("Form submitted");

  const formData = new FormData(e.target);
  const name = formData.get("search");

  const response = await fetch("http://localhost:8000/find", {
    method: "POST",
    headers: {
      "Content-Type": "application/json",
    },
    body: JSON.stringify({ name }),
  });

  if (response.ok) {
    const data = await response.json();
    console.log("Data from backend:", data);

    let container = document.getElementById("container");
    for (let key in data) {
      let createElement = document.createElement("p");
      const theCapilist = key.charAt(0).toUpperCase() + key.slice(1);
      createElement.innerHTML = `${theCapilist} : ${data[key]}`;
      container.appendChild(createElement);
    }
  } else {
    console.error("Error:", response.status);
    let container = document.getElementById("container");
    let createElement = document.createElement("p");
    createElement.innerHTML = "Check your server";
    container.appendChild(createElement);
  }
});
