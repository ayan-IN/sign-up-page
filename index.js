//* Selector
const password = document.querySelector('#password')
const passwordConfirm = document.querySelector('#confirmPassword')
const firstName = document.querySelector('#firstName')
const lastName = document.querySelector('#lastName')
const email = document.querySelector('#email')
const phoneNumber = document.querySelector('#phoneNumber')
const passError = document.querySelector('#passwordError')
const passCError = document.querySelector('#passwordCError')
const fnError = document.querySelector('#fnError')
const lnError = document.querySelector('#lnError')
const emailError = document.querySelector('#emailError')
const pnError = document.querySelector('#pnError')

firstName.addEventListener('input', function (event) {
  if (firstName.value === '') {
    fnError.textContent = 'Please type in your fisrt name.'
  } else {
    fnError.textContent = ''
  }
})

lastName.addEventListener('input', function (event) {
  if (lastName.value === '') {
    lnError.textContent = 'Please type in your last name.'
  } else {
    lnError.textContent = ''
  }
})

email.addEventListener('input', function (event) {
  if (email.validity.typeMismatch) {
    emailError.textContent = 'Please enter in a valid email.'
  } else {
    emailError.textContent = ''
  }
})

phoneNumber.addEventListener('input', function (event) {
  if (phoneNumber.validity.patternMismatch) {
    pnError.textContent = 'Please enter in a 10 digit phone number'
  } else {
    pnError.textContent = ''
  }
}) 

password.addEventListener('input', function (event) {
  if (password.validity.patternMismatch) {
    const currentValue = password.value
    const regExpCap = /[A-Z]/g
    const regExpDig = /[0-9]/g
    let result = ''
    if (regExpCap.test(currentValue)) {
      result += ''
    } else {
      result += `Missing at least 1 capital letter. `
      result += '\n'
    }

    if (regExpDig.test(currentValue)) {
      result += ''
    } else {
      result += 'Missing at least 1 number. '
      result += '\n'
    }

    if (currentValue.length < 9) {
      result += 'Password must be at least 8 characters. '
      result += '\n'
    } else {
      result += ''
    }
    passError.textContent = result
  } else {
    passError.textContent = ''
  }
})

passwordConfirm.addEventListener('input', function (event) {
  if (password.value !== passwordConfirm.value) {
    passCError.textContent = 'Passwords do not match'
  } else {
    passCError.textContent = ''
  }
}) 
