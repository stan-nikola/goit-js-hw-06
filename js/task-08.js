const loginForm = document.querySelector(".login-form");

loginForm.addEventListener("submit", onFormSubmit);

function onFormSubmit(event) {
  event.preventDefault();

  const {
    elements: { email, password },
  } = event.currentTarget;

  if (email.value === "" || password.value === "") {
    return alert("Заполните все поля, ну... :)");
  }

  const formData = {
    email: email.value,
    password: password.value,
  };

  event.currentTarget.reset();
  console.log(formData);

  // ========================================================
  //   const formElements = event.currentTarget.elements;
  //   const email = formElements.email.value;
  //   const password = formElements.password.value;

  //   if (email === "" || password === "") {
  //     return alert("Заполните все поля, ну... :)");
  //   }
  //   const formData = {
  //     email,
  //     password,
  //   };

  //   console.log(formData.email, formData.password);
  //   event.currentTarget.reset();

  // =========================================
  //   const formData = new FormData(event.currentTarget);

  //   formData.forEach((value, name) => {
  //     if (value === "") {
  //       return alert("Заполните все поля, ну... :)");
  //     }
  //     console.log(name, value);
  //   });

  //   event.currentTarget.reset();
}
