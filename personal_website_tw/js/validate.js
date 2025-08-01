document
  .getElementById("contact_form")
  .addEventListener("submit", function (event) {
    event.preventDefault();
    console.log("form submitted");

    //validate all fields

    const nameValue = document.getElementById("user_name").value;
    const emailValue = document.getElementById("user_email").value;
    const messageValue = document.getElementById("user_message").value;

    const nameErrorP = document.getElementById("nameError");

    const messageError = document.getElementById("messageError");
    const errorEmailDiv = document.getElementById("emailError");
    // error ko clear...
    nameErrorP.innerText = "";
    nameErrorP.classList.add("hidden");
    errorEmailDiv.innerText = "";
    errorEmailDiv.classList.add("hidden");
    messageError.innerText = "";
    messageError.classList.add("hidden");


    
    // console.log(nameValue);
    // console.log(emailValue);
    // console.log(messageValue);
    // let errors = [];
    let hasError = false;

    // if (nameValue.trim() == "") {
    //   errors.push("Name is required !!");
    // }

    if (!/^(?=.*\d)(?=.*[!@#$%^&*])[A-Za-z\d!@#$%^&*]{3,7}$/.test(nameValue)) {
      hasError = true;

      nameErrorP.innerText =
        "Username must be between 2 and 8 characters long. Username must contain at least one digit. Username must contain at least one special character (!@#$%^&*).";
      nameErrorP.classList.remove("hidden");
    }

    // if (emailValue.trim() == "") {
    //   errors.push("Email is required !!");
    // }
    // if (!emailValue.includes("@")) {
    //   errors.push("Invalid Email !! ");
    // }
    if (!/^[^s@]+@[^s@]+.[^s@]+$/.test(emailValue)) {
      hasError = true;

      errorEmailDiv.innerText =
        "Given email in not in correct format [abc@dev.in]";
      errorEmailDiv.classList.remove("hidden");
    }

    if (messageValue.trim() == "") {
      hasError = true;

      messageError.innerText = "Message is required !!";
      messageError.classList.remove("hidden");
    }

    // if (errors.length > 0) {
    //   //error
    //   const errorsDiv = document.getElementById("errors");
    //   errorsDiv.innerHTML = "";

    //   for (const error of errors) {
    //     errorsDiv.innerHTML =
    //       errorsDiv.innerHTML +
    //       `<p class='mt-2 border p-2 rounded-2xl border-red-300 '>  ${error} </p>`;
    //   }

    //   errorsDiv.classList.remove("hidden");
    // } else {
    //   this.submit();
    // }

    if (!hasError) {
      this.submit();
    }
  });
