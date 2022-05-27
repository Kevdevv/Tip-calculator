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

//Fonction remove pour l'input custom et le bouton reset
function removeClass() {

    let allElements = document.getElementsByTagName('button');
    for (i = 0; i < allElements.length; i++) {
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

//Fcontion calcul pour tous les bouton pourcent
document.querySelectorAll('.percent-button').forEach(button => {
    button.addEventListener('click', function () {
        let bill = document.getElementById('bill')
        let customer = document.getElementById('people')

        function amountTips() {
            return (parseInt(button.value) * parseInt(bill.value)) / 100
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

    })
})
//Fin des fonction

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
