class formValidation {
  constructor() {
    this.fullName = document.querySelector('.name-input')
    this.nameError = document.querySelector('#name-error')
    this.cardNumber = document.querySelector('.card-input')
    this.cardError = document.querySelector('#card-error')
    this.month = document.querySelector('.month')
    this.year = document.querySelector('.year')
    this.cvc = document.querySelector('.code-input')
    this.dateError = document.querySelector('#date-error')

    this.cvcError = document.querySelector('#cvc-error')

    this.confirmBtn = document.querySelector('#confirm')


    this.nameOnCard = document.querySelector('.name-on-card')
    this.numbOnCard = document.querySelector('.number-on-card')
    this.monthOnCard = document.querySelector('.month-on-card')
    this.yearOnCard = document.querySelector('.year-on-card')
    this.cvcOnCard = document.querySelector('.cvc')

    this.checkOut = document.querySelector('.check-out')

    this.rightDiv = document.querySelector('.right-div')

    this.continueBtn = document.querySelector('.continue')
  }

  checkName(e) {
    if (this.fullName.type === 'text' && this.fullName.value !== '') {
      this.fullName.style.border = '1px solid #dedddf'
      this.nameError.innerText = '';
      e = this.fullName.value

      this.nameOnCard.innerHTML = e

    } else {
      this.fullName.style.border = '1px solid #ff5252'
      this.nameError.innerText = 'Invalid User Name';
    }
  }

  checkNumberOnly(input) {
    return /^\d+$/.test(input)
  }

  checkNumber(e) {
    if (this.checkNumberOnly(this.cardNumber.value)) {
      this.cardNumber.style.border = '1px solid #dedddf'
      this.cardError.innerText = ''

      e = this.cardNumber.value

      this.numbOnCard.innerHTML = e
    } else {
      this.cardNumber.style.border = '1px solid #ff5252'
      this.cardError.innerText = 'Wrong format, numbers only'
    }

  }

  checkMonth(e) {
    if (this.month.value === '' && this.year.value === '') {
      this.month.style.border = '1px solid #ff5252'
      this.dateError.innerText = "Can't be blank"
      this.cvcError.innerText = "Can't be blank"

    } else {
      e = this.month.value
      this.monthOnCard.innerHTML = e

      this.month.style.border = '1px solid #dedddf'
      this.dateError.innerText = " "
      this.cvcError.innerText = " "
    }
  }

  checkYear(e) {
    if (this.year.value === '') {
      this.year.style.border = '1px solid #ff5252'
      this.dateError.innerText = "Can't be blank"

      this.cvcError.innerText = "Can't be blank"
    } else {
      e = this.year.value
      this.yearOnCard.innerHTML = e

      this.year.style.border = '1px solid #dedddf'
      this.dateError.innerText = " "
      this.cvcError.innerText = " "
    }
  }

  checkCvc(e) {
    if (this.cvc.value === '') {
      this.cvc.style.border = '1px solid #ff5252'
      this.dateError.innerText = "Can't be blank"

      this.cvcError.innerText = "Can't be blank"
    } else {
      e = this.cvc.value
      this.cvcOnCard.innerHTML = e

      this.cvc.style.border = '1px solid #dedddf'
      this.dateError.innerText = " "
      this.cvcError.innerText = " "
    }
  }

  confirm() {
    if (this.fullName.value === '') {
      this.fullName.style.border = '1px solid #ff5252'
      this.nameError.innerText = 'Invalid User Name';
    }

    if (this.cardNumber.value === '') {
      this.cardNumber.style.border = '1px solid #ff5252'
      this.cardError.innerText = 'Wrong format, numbers only'
    }

    if (this.month.value === '' && this.year.value === '') {
      this.month.style.border = '1px solid #ff5252'
      this.dateError.innerText = "Can't be blank"
      this.cvcError.innerText = "Can't be blank"

    }

    if (this.year.value === '') {
      this.year.style.border = '1px solid #ff5252'
      this.dateError.innerText = "Can't be blank"

      this.cvcError.innerText = "Can't be blank"
    }

    if (this.cvc.value === '') {
      this.cvc.style.border = '1px solid #ff5252'
      this.dateError.innerText = "Can't be blank"

      this.cvcError.innerText = "Can't be blank"
    } else {
      this.rightDiv.style.display = 'none'
      this.checkOut.style.display = 'flex'

      this.cvc.value = ''
      this.month.value = ''
      this.fullName.value = ''
      this.cardNumber.value = ''
      this.year.value = ''
    }
  }

  continue() {
    this.rightDiv.style.display = 'flex'
    this.checkOut.style.display = 'none'

    this.nameOnCard.innerHTML = ''
    this.numbOnCard.innerHTML = ''
    this.monthOnCard.innerHTML = ''
    this.yearOnCard.innerHTML = ''
    this.cvcOnCard.innerHTML = ''
  }

  format(s) {
    return s.toString().replace(/\d{4}(?=.)/g, "$&")
  }
}


const validator = new formValidation();

validator.fullName.addEventListener('keyup', (e) => {
  validator.checkName(e)
})

validator.cardNumber.addEventListener('keydown', (e) => {
  validator.checkNumber(e)
  validator.format(e)
})


validator.month.addEventListener('keydown', (e) => {
  validator.checkMonth(e)
})

validator.year.addEventListener('keydown', (e) => {
  validator.checkYear(e)
})

validator.cvc.addEventListener('keydown', (e) => {
  validator.checkCvc(e)
})

validator.confirmBtn.addEventListener('click', (e) => {
  e.preventDefault();
  validator.confirm()
})

validator.continueBtn.addEventListener('click', () => {
  validator.continue()
})
