export let inputValidate = function() {
  const modalWindow = document.querySelector('[data-popup-modal]'),
        personalArea = document.querySelector('[data-personal-area-section]');   
  //------------------input validate---------------------
    if (personalArea != null || modalWindow != null) {
        const   inputName = personalArea.querySelector(".js-input-name"),
                inputSurname = personalArea.querySelector(".js-input-surname"),
                inputPhone = personalArea.querySelector(".js-input-phone"),
                inputCheckbox = personalArea.querySelector(".js-input-checkbox"),
                inputEmail = personalArea.querySelector(".js-input-email"),
                inputButton = personalArea.querySelector(".js-btn"),
                inputButtonMobile = personalArea.querySelector(".js-btn-mobile"),
                inputPassword = personalArea.querySelector(".js-password"),
                inputPasswordRe = personalArea.querySelector(".js-password-repead"),
                labelName = personalArea.querySelector(".js-label-name"),
                labelSurname = personalArea.querySelector(".js-label-surname"),
                labelPhone = personalArea.querySelector(".js-label-phone"),
                labelEmail = personalArea.querySelector(".js-label-email"),
                labelPassword = personalArea.querySelector(".js-label-password"),
                labelPasswordRepeat = personalArea.querySelector(".js-label-password-repeat"),
                inputs = personalArea.querySelectorAll('.js-input'),
//-----------------------modal-------------------------------------------------------
                inputEmailModal = modalWindow.querySelector("[data-modal-input-email]"),
                labelEmailModal = modalWindow.querySelector("[data-modal-label-email]"),
                inputButtonEnterModal = modalWindow.querySelector("[data-modal-button-enter]"),
                inputsModal = modalWindow.querySelectorAll('.js-modal-input'),
                inputNameModal = modalWindow.querySelector("[data-modal-input-name]"),
                inputPhoneModal = modalWindow.querySelector("[data-modal-input-phone]"),
                inputPasswordFirstModal = modalWindow.querySelector("[data-modal-input-password-first]"),
                inputPasswordReModal = modalWindow.querySelector("[data-modal-input-password-re]"),
                labelNameModal = modalWindow.querySelector("[data-modal-label-name]"),
                labelPhoneModal = modalWindow.querySelector("[data-modal-label-phone]"),
                labelPasswordFirstModal = modalWindow.querySelector("[data-modal-label-password-first]"),
                labelPasswordReModal = modalWindow.querySelector("[data-modal-label-password-re]"),
                inputButtonRegisterModal = modalWindow.querySelector("[data-modal-button-register]");
        
            const regPhone = /^(\s*)?(\+)?([- _():=+]?\d[- _():=+]?){10,14}(\s*)?$/,
                  regText = /^([A-Za-z\-\']{1,50})|([А-Яа-я\-\']{1,50})$/,
                  regEmail = /[a-zA-Z0-9]+@[a-zA-Z0-9]+.[a-zA-Z0-9]/;

                    function validate(regex, input) {
                    return regex.test(input);
                    }
                    function valid(input, label, value) {
                    if (value) {
                        input.classList.remove("is-invalid");
                        label.classList.remove("is-invalid");
                    } else {
                        input.classList.add("is-invalid");
                        label.classList.add("is-invalid");
                    }
                    }
                    function validPassword(
                    password,
                    passwordRe,
                    labelPassword,
                    labelPasswordRepeat
                    ) {
                    if (password.value !== passwordRe.value) {
                        password.classList.add("is-invalid");
                        passwordRe.classList.add("is-invalid");
                        labelPassword.classList.add("is-invalid");
                        labelPasswordRepeat.classList.add("is-invalid");
                    } else {
                        password.classList.remove("is-invalid");
                        passwordRe.classList.remove("is-invalid");
                        labelPassword.classList.remove("is-invalid");
                        labelPasswordRepeat.classList.remove("is-invalid");
                    }
                    }
                    function exam(reg, label, input) {
                    if (!validate(reg, input.value) && input.value != "") {
                        valid(input, label, false);
                    } else {
                        valid(input, label, true);
                    }
                    }
                    function inputValidate (button) {
                    button.addEventListener("click", function (event) {
                        event.preventDefault();
                        exam(regPhone, labelPhone, inputPhone);
                        exam(regText, labelName, inputName);
                        exam(regText, labelSurname, inputSurname);
                        exam(regEmail, labelEmail, inputEmail);
                        validPassword(inputPassword, inputPasswordRe, labelPassword, labelPasswordRepeat);
  
                        exam(regEmail, labelEmailModal, inputEmailModal);
                        exam(regPhone, labelPhoneModal, inputPhoneModal);
                        exam(regText, labelNameModal, inputNameModal);
                        validPassword(inputPasswordFirstModal, inputPasswordReModal, labelPasswordFirstModal, labelPasswordReModal);
                    }
                    );
                    }
                    function isActiveButton(inputList, button, buttonMobile) {
                      inputList.forEach(function(item) {
                        item.addEventListener('input', function(){
                        if(item.value !== '' || inputCheckbox.checked ) {
                          if(buttonMobile) {
                            buttonMobile.classList.add('active');
                          }
                          button.classList.add('active');
                        } else{
                          button.classList.remove('active');
                          if(buttonMobile) {
                            buttonMobile.classList.remove('active');
                          }
                        }
                        })
                      })
                    }
                    isActiveButton(inputs, inputButton, inputButtonMobile)
                    isActiveButton(inputsModal, inputButtonEnterModal);
                    isActiveButton(inputsModal, inputButtonRegisterModal);

                    inputValidate(inputButton);
                    inputValidate(inputButtonMobile);

                    inputValidate(inputButtonEnterModal);
                    inputValidate(inputButtonRegisterModal);
    }
   //------------------show password--------------------- 
   if (personalArea != null || modalWindow != null) {
    const btnShowPassModal = modalWindow.querySelectorAll('[data-show-password]'),
          btnShowPassPersonalArea = personalArea.querySelectorAll('[data-show-password-personal-area]');
    function showPass(buttons) {
      buttons.forEach((item) => {
        item.addEventListener('click', function() {
          let target = this.getAttribute("data-target"),
              input = document.querySelector(target);
              if (input.getAttribute("type") === "password") {
                input.setAttribute("type", "text");
                item.classList.add("active");
              } else {
                input.setAttribute("type", "password");
                item.classList.remove("active");
              } 
        })
      })
    }
    showPass(btnShowPassPersonalArea)
    showPass(btnShowPassModal)
  }
}
