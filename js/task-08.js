const form = document.querySelector(".login-form");

form.addEventListener("submit", handleSubmit);

function handleSubmit(event) {
  event.preventDefault();
  const {elements: { email, password }
  } = event.currentTarget;

  if (email.value === "" || password.value === "") {
    const message = "Будь ласка, заповніть всі поля";
    return alert(message);
  }
    
  console.log({ "email": email.value, "password": password.value });
  
  event.currentTarget.reset();
}

