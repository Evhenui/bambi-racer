export let inputValidate = function() {
  const modalWindow = document.querySelector('[data-popup-modal]'),
        personalArea = document.querySelector('[data-personal-area-section]'),
        carProduct = document.querySelector("[data-wrapper-car-product]");   
  //------------------input validate---------------------
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
                    
                    isActiveButton(inputs, inputButton, inputButtonMobile)
                    isActiveButton(inputsModal, inputButtonEnterModal);
                    isActiveButton(inputsModal, inputButtonRegisterModal);

                    inputValidate(inputButton);
                    inputValidate(inputButtonMobile);

                    inputValidate(inputButtonEnterModal);
                    inputValidate(inputButtonRegisterModal);

    }
    if(carProduct !== null ) {
      const  inputNameModalOnClick = carProduct.querySelector("[data-modal-on-click-input-name]"),
             inputPhoneModalOnClick = carProduct.querySelector("[data-modal-on-click-input-phone]"),
             labelNameModalOnClick = carProduct.querySelector("[data-modal-on-click-label-name]"),
             labelPhoneModalOnClick = carProduct.querySelector("[data-modal-on-click-label-phone]"),
             inputsModalOnClick = carProduct.querySelectorAll(".js-modal-on-click-input"),
             buttonModalOnClick = carProduct.querySelector("[data-modal-on-click-button]"),
             modalOnClick = carProduct.querySelector('[data-modal-on-click-container]');
             
      const  regPhone = /^(\s*)?(\+)?([- _():=+]?\d[- _():=+]?){10,14}(\s*)?$/,
             regText = /^([A-Za-z\-\']{1,50})|([А-Яа-я\-\']{1,50})$/;

            function validInput(regex, input) {
              return regex.test(input.value);
            }

            function inputsChange(inputs, button) {
              inputs.forEach((item)=>{
                item.addEventListener('input', function() {
                 if(inputs[0].value && inputs[1].value) {
                  if(validInput(regText, inputNameModalOnClick) && validInput(regPhone, inputPhoneModalOnClick)){
                    button.classList.add('active')
                  } 
                 }
                })
              })
            }

            inputNameModalOnClick.addEventListener('input', function(){
              exam(regText, labelNameModalOnClick, inputNameModalOnClick)
            });
            inputPhoneModalOnClick.addEventListener('input', function(){
              exam(regPhone, labelPhoneModalOnClick, inputPhoneModalOnClick)
            });
          
            inputsChange(inputsModalOnClick, buttonModalOnClick);

            buttonModalOnClick.addEventListener('click', function(event){
              event.preventDefault();
              if(validInput(regText, inputNameModalOnClick) && validInput(regPhone, inputPhoneModalOnClick)) {
                modalOnClick.classList.add('done'); 
              }
            });


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

    if(carProduct !== null || personalArea != null) {
      const phoneInputs = document.querySelectorAll('[data-tel-input]');

      const getInputNumbersValue = function (input) {
          return input.value.replace(/\D/g, '');
      }
      const onPhonePaste = function (e) {
          let input = e.target,
              inputNumbersValue = getInputNumbersValue(input);
          let pasted = e.clipboardData || window.clipboardData;
          if (pasted) {
              let pastedText = pasted.getData('Text');
              if (/\D/g.test(pastedText)) {
                  input.value = inputNumbersValue;
                  return;
              }
          }
      }
      const onPhoneInput = function (e) {
          var input = e.target,
              inputNumbersValue = getInputNumbersValue(input),
              selectionStart = input.selectionStart,
              formattedInputValue = "";
  
          if (!inputNumbersValue) {
              return input.value = "";
          }
  
          if (input.value.length != selectionStart) {
              if (e.data && /\D/g.test(e.data)) {
                  input.value = inputNumbersValue;
              }
              return;
          }
  
          if (["3", "8", "0"].indexOf(inputNumbersValue[0]) > -1) {
            if (inputNumbersValue[0] == "0") inputNumbersValue = "8" + inputNumbersValue;
            if (inputNumbersValue[0] == "3") inputNumbersValue = "8";
            var firstSymbols = (inputNumbersValue[0] == "8") ? "8" : "+3";
            formattedInputValue = input.value = firstSymbols + " ";
            if (inputNumbersValue.length > 1) {
                formattedInputValue += '(' + inputNumbersValue.substring(1, 4);
            }
            if (inputNumbersValue.length >= 5) {
                formattedInputValue += ') ' + inputNumbersValue.substring(4, 7);
            }
            if (inputNumbersValue.length >= 8) {
                formattedInputValue += '-' + inputNumbersValue.substring(7, 9);
            }
            if (inputNumbersValue.length >= 10) {
                formattedInputValue += '-' + inputNumbersValue.substring(9, 11);
            }
        } else {
            formattedInputValue = '+' + inputNumbersValue.substring(0, 16);
        }
          input.value = formattedInputValue;
      }
      var onPhoneKeyDown = function (e) {
          var inputValue = e.target.value.replace(/\D/g, '');
          if (e.keyCode == 8 && inputValue.length == 1) {
              e.target.value = "";
          }
      }
      for (var phoneInput of phoneInputs) {
          phoneInput.addEventListener('keydown', onPhoneKeyDown);
          phoneInput.addEventListener('input', onPhoneInput, false);
          phoneInput.addEventListener('paste', onPhonePaste, false);
      }
    }
}
