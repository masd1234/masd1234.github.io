const validateForm = () => {
  let nameF = document.forms["myForm"]["name"].value;
  let nameL = document.forms["myForm"]["lname"].value;
  let email = document.forms["myForm"]["email"].value;
  let message = document.forms["myForm"]["message"].value;
  let mailformat = /^[a-z0-9._%+-]+@[a-z0-9.-]+\.[a-z]{2,4}$/;

  if (nameF == "" || nameL == "" || message == "" || email == "") {
    document.querySelector(".unvalid-cont").classList.add("sent");
    document.querySelector(".unvalid-cont").classList.remove("not-sent");
    throw Error("All inputs name mut be fill");
  } else if (email && !email.match(mailformat)) {
    alert("You have entered an invalid email address!");
    throw Error("You have entered an invalid email address!");
    return;
  }
};

const formSubmit = async (e) => {
  e.preventDefault();
  validateForm();
  let data = {
    name: document.getElementById("name").value,
    lname: document.getElementById("lname").value,
    email: document.getElementById("email").value,
    message: document.getElementById("message").value,
  };
  let loading = true;
  let url = "https://git.heroku.com/portfolioservermarco.git";
  let settings = {
    method: "POST",
    headers: {
      "Content-Type": "application/json",
    },

    body: JSON.stringify(data),
  };

  try {
    let res = await fetch(`${url}/contact`, settings).then((res) => {
      if (res.ok) {
        res.json();
        document
          .querySelector(".message-sent-container")
          .classList.remove("not-sent");
        document.querySelector(".message-sent-container").classList.add("sent");
        document.getElementById("name").value = "";
        document.getElementById("lname").value = "";
        document.getElementById("email").value = "";
        document.getElementById("message").value = "";
      } else {
        console.log(res);
      }
    });
  } catch (error) {
    console.error("Error:", error.message);
  }
};

const back = (e) => {
  if (e.target.innerHTML === "x") {
    document.querySelector(".unvalid-cont").classList.add("not-sent");
    document.querySelector(".unvalid-cont").classList.remove("sent");
  } else if (e.target.innerHTML === "Go Back!") {
    document.querySelector(".message-sent-container").classList.remove("sent");
    document.querySelector(".message-sent-container").classList.add("not-sent");
  }
};

document.querySelector(".inputSubmit").addEventListener("click", formSubmit);
document.querySelector(".close").addEventListener("click", back);
document.querySelector(".back").addEventListener("click", back);
