//Corection et/ou ajout a faire

//Correstion : Quand tous les champs sont rempli et le calcul fait et qu'on change le nombre de personne, le resultat redonne 0
//Faire une version desktop


//Bouton 5%
function calcul5() {
    let bill = document.getElementById('bill')
    let customer = document.getElementById('people')
    let button5 = document.getElementById('5')

    function amountTips() {
        return (parseInt(button5.value) * parseInt(bill.value)) / 100
    }

    let tips = amountTips()
    let tipsPerPerson = tips / customer.value
    let totalPerPerson = (parseInt(bill.value) + tips) / customer.value

    if (bill.value > 0 && customer.value > 0) {
        document.getElementById('tip-price').innerHTML = Math.round(tipsPerPerson * 100) / 100 + ' $'
        document.getElementById('total-price').innerHTML = Math.round(totalPerPerson * 100) / 100 + ' $'
    } else {
        document.getElementById('tip-price').innerHTML = '0$'
        document.getElementById('total-price').innerHTML = '0$'
    }

    if (bill.value == 0) {
        document.getElementById('bill-fail').innerHTML = 'Enter the amount of the bill'
        addClassBillInput()
    } else {
        document.getElementById('bill-fail').innerHTML = 'Bill'
    }

    if (customer.value == 0) {
        document.getElementById('people-fail').innerHTML = 'Enter the number of people'
        addClassCustomerInput()
    } else {
        document.getElementById('people-fail').innerHTML = 'Number of people'
    }
}

let button5 = document.getElementById('5')
button5.addEventListener('click', calcul5) // button5.addEventListener('click', calcul5())
button5.addEventListener('click', resetCustom)

//Bouton 10%

function calcul10() {
    let bill = document.getElementById('bill')
    let customer = document.getElementById('people')
    let button10 = document.getElementById('10')

    function amountTips() {
        return (parseInt(button10.value) * parseInt(bill.value)) / 100
    }

    let tips = amountTips()
    let tipsPerPerson = tips / customer.value
    let totalPerPerson = (parseInt(bill.value) + tips) / customer.value

    if (bill.value > 0 && customer.value > 0) {
        document.getElementById('tip-price').innerHTML = Math.round(tipsPerPerson * 100) / 100 + ' $'
        document.getElementById('total-price').innerHTML = Math.round(totalPerPerson * 100) / 100 + ' $'
    } else {
        document.getElementById('tip-price').innerHTML = '0$'
        document.getElementById('total-price').innerHTML = '0$'
    }

    if (bill.value == 0) {
        document.getElementById('bill-fail').innerHTML = 'Enter the amount of the bill'
        addClassBillInput()
    } else {
        document.getElementById('bill-fail').innerHTML = 'Bill'
    }

    if (customer.value == 0) {
        document.getElementById('people-fail').innerHTML = 'Enter the number of people'
        addClassCustomerInput()
    } else {
        document.getElementById('people-fail').innerHTML = 'Number of people'
    }
}

let button10 = document.getElementById('10')
button10.addEventListener('click', calcul10)
button10.addEventListener('click', resetCustom)

//Bouton 15%

function calcul15() {
    let bill = document.getElementById('bill')
    let customer = document.getElementById('people')
    let button15 = document.getElementById('15')

    function amountTips() {
        return (parseInt(button15.value) * parseInt(bill.value)) / 100
    }

    let tips = amountTips()
    let tipsPerPerson = tips / customer.value
    let totalPerPerson = (parseInt(bill.value) + tips) / customer.value

    if (bill.value > 0 && customer.value > 0) {
        document.getElementById('tip-price').innerHTML = Math.round(tipsPerPerson * 100) / 100 + ' $'
        document.getElementById('total-price').innerHTML = Math.round(totalPerPerson * 100) / 100 + ' $'
    } else {
        document.getElementById('tip-price').innerHTML = '0$'
        document.getElementById('total-price').innerHTML = '0$'
    }

    if (bill.value == 0) {
        document.getElementById('bill-fail').innerHTML = 'Enter the amount of the bill'
        addClassBillInput()
    } else {
        document.getElementById('bill-fail').innerHTML = 'Bill'
    }

    if (customer.value == 0) {
        document.getElementById('people-fail').innerHTML = 'Enter the number of people'
        addClassCustomerInput()
    } else {
        document.getElementById('people-fail').innerHTML = 'Number of people'
    }
}

let button15 = document.getElementById('15')
button15.addEventListener('click', calcul15)
button15.addEventListener('click', resetCustom)

//Bouton 25%

function calcul25() {
    let bill = document.getElementById('bill')
    let customer = document.getElementById('people')
    let button25 = document.getElementById('25')

    function amountTips() {
        return (parseInt(button25.value) * parseInt(bill.value)) / 100
    }

    let tips = amountTips()
    let tipsPerPerson = tips / customer.value
    let totalPerPerson = (parseInt(bill.value) + tips) / customer.value

    if (bill.value > 0 && customer.value > 0) {
        document.getElementById('tip-price').innerHTML = Math.round(tipsPerPerson * 100) / 100 + ' $'
        document.getElementById('total-price').innerHTML = Math.round(totalPerPerson * 100) / 100 + ' $'
    } else {
        document.getElementById('tip-price').innerHTML = '0$'
        document.getElementById('total-price').innerHTML = '0$'
    }

    if (bill.value == 0) {
        document.getElementById('bill-fail').innerHTML = 'Enter the amount of the bill'
        addClassBillInput()
    } else {
        document.getElementById('bill-fail').innerHTML = 'Bill'
    }

    if (customer.value == 0) {
        document.getElementById('people-fail').innerHTML = 'Enter the number of people'
        addClassCustomerInput()
    } else {
        document.getElementById('people-fail').innerHTML = 'Number of people'
    }
}

let button25 = document.getElementById('25')
button25.addEventListener('click', calcul25)
button25.addEventListener('click', resetCustom)

//Bouton 50% 

function calcul50() {
    let bill = document.getElementById('bill')
    let customer = document.getElementById('people')
    let button50 = document.getElementById('50')

    function amountTips() {
        return (parseInt(button50.value) * parseInt(bill.value)) / 100
    }

    let tips = amountTips()
    let tipsPerPerson = tips / customer.value
    let totalPerPerson = (parseInt(bill.value) + tips) / customer.value

    if (bill.value > 0 && customer.value > 0) {
        document.getElementById('tip-price').innerHTML = Math.round(tipsPerPerson * 100) / 100 + ' $'
        document.getElementById('total-price').innerHTML = Math.round(totalPerPerson * 100) / 100 + ' $'
    } else {
        document.getElementById('tip-price').innerHTML = '0$'
        document.getElementById('total-price').innerHTML = '0$'
    }

    if (bill.value == 0) {
        document.getElementById('bill-fail').innerHTML = 'Enter the amount of the bill'
        addClassBillInput()
    } else {
        document.getElementById('bill-fail').innerHTML = 'Bill'
    }

    if (customer.value == 0) {
        document.getElementById('people-fail').innerHTML = 'Enter the number of people'
        addClassCustomerInput()
    } else {
        document.getElementById('people-fail').innerHTML = 'Number of people'
    }
}


let button50 = document.getElementById('50')
button50.addEventListener('click', calcul50)
button50.addEventListener('click', resetCustom)

//Bouton Custom

function calculCustom() {
    let bill = document.getElementById('bill')
    let customer = document.getElementById('people')
    let custom = document.getElementById('custom')

    function amountTips() {
        return (parseInt(custom.value) * parseInt(bill.value)) / 100
    }

    let tips = amountTips()
    let tipsPerPerson = tips / customer.value
    let totalPerPerson = (parseInt(bill.value) + tips) / customer.value

    if (bill.value > 0 && customer.value > 0 && custom.value > 0) {
        document.getElementById('tip-price').innerHTML = Math.round(tipsPerPerson * 100) / 100 + ' $'
        document.getElementById('total-price').innerHTML = Math.round(totalPerPerson * 100) / 100 + ' $'
    }

    if (custom.value > 0 && bill.value == 0) {
        document.getElementById('bill-fail').innerHTML = 'Enter the amount of the bill custom'
        addClassBillInput()
    }

    if (custom.value > 0 && customer.value == 0) {
        document.getElementById('people-fail').innerHTML = 'Enter the number of people'
        addClassCustomerInput()
    }
}


let buttonCustom = document.getElementById('custom')
let bill = document.getElementById('bill')
let customer = document.getElementById('people')

buttonCustom.addEventListener('change', calculCustom)
buttonCustom.addEventListener('click', removeClass)
buttonCustom.addEventListener('click', resetPriceByCustom)
bill.addEventListener('change', calculCustom)
customer.addEventListener('change', calculCustom)
bill.addEventListener('click', removeClass)
bill.addEventListener('click', removeClassBillInput)
customer.addEventListener('click', removeClass)
customer.addEventListener('click', removeClassCustomerInput)

//Fonction remove pour l'input custom et le bouton reset
function removeClass()  {

   let allElements = document.getElementsByTagName('button');
   for (i = 0; i < allElements.length; i++)
   { 
    allElements[i].classList.remove('button');
   }
  }

  //Fonction ajout de class fail pour l'input bill
function addClassBillInput() {
    let failInput = document.getElementById('bill')
    failInput.classList.add('input-fail')
}

//Fonction remove class fail pour l'input bill
function removeClassBillInput() {
    let failInput = document.getElementById('bill')
    failInput.classList.remove('input-fail')
}

//Fonction ajout de class fail pour l'input people

function addClassCustomerInput() {
    let failInput = document.getElementById('people')
    failInput.classList.add('input-fail')
}

//Fonction remove class fail pour l'input people
function removeClassCustomerInput() {
    let failInput = document.getElementById('people')
    failInput.classList.remove('input-fail')
}

//Bouton reset
function reset() {
    document.getElementById('bill').value = null
    document.getElementById('total-price').innerHTML = '0$'
    document.getElementById('tip-price').innerHTML = '0$'
    document.getElementById('custom').value = null
    document.getElementById('people').value = null
    document.getElementById('bill-fail').innerHTML = 'Bill'
    document.getElementById('people-fail').innerHTML = 'Number of people'
    removeClassBillInput()
    removeClassCustomerInput()
    
}

//fonction reset price par le champ custom

function resetPriceByCustom() {
    document.getElementById('total-price').innerHTML = '0$'
    document.getElementById('tip-price').innerHTML = '0$'
}

//Fonction reset du champs custom par les boutton %

function resetCustom() {
    document.getElementById('custom').value = null
}

let resetButton = document.getElementById('reset')

resetButton.addEventListener('click', reset)
resetButton.addEventListener('click', removeClass)

//ajout de la fonction jquery pour le switch de class sur les bouton

$(() => {
    $('button').click(function () {
        $('button').removeClass('button')

        $(this).addClass('button')
    })
})


/*
  document.querySelectorAll('.circle').forEach(item => {
        item.addEventListener('click', function() {
          let test = item.value * 2
          alert(test)
        })
      })
*/ 
