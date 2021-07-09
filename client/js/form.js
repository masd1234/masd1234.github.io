/*const formSubmit = (e) => {
  e.preventDefault();
  let data = { name: document.getElementById("name").value };

  console.log(data);
  console.log(JSON.stringify(data));
  fetch("http://localhost:3001/contact", {
    method: "POST",
    headers: {
      "Content-Type": "application/json",
    },

    body: JSON.stringify(data),
  })
    .then((response) => response.json())

    .then((result) => {
      console.log("Success:", result);
    })
    .catch((error) => {
      console.error("Error:", error);
    });
};

document.querySelector(".inputSubmit").addEventListener("click", formSubmit);
document.querySelector(".test").addEventListener("click", formSubmit);
*/
