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

    if (bill.value, customer.value == 0) {
        document.getElementById('tip-price').innerHTML = '0€'
        document.getElementById('total-price').innerHTML = '0€'
    } else {
        document.getElementById('tip-price').innerHTML = tipsPerPerson + ' €'
        document.getElementById('total-price').innerHTML = totalPerPerson + ' €'
    }
}

let button5 = document.getElementById('5')
button5.addEventListener('click', calcul5)

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

    if (bill.value, customer.value == 0) {
        document.getElementById('tip-price').innerHTML = '0€'
        document.getElementById('total-price').innerHTML = '0€'
    } else {
        document.getElementById('tip-price').innerHTML = tipsPerPerson + ' €'
        document.getElementById('total-price').innerHTML = totalPerPerson + ' €'
    }
}

let button10 = document.getElementById('10')
button10.addEventListener('click', calcul10)

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

    if (bill.value, customer.value == 0) {
        document.getElementById('tip-price').innerHTML = '0€'
        document.getElementById('total-price').innerHTML = '0€'
    } else {
        document.getElementById('tip-price').innerHTML = tipsPerPerson + ' €'
        document.getElementById('total-price').innerHTML = totalPerPerson + ' €'
    }
}

let button15 = document.getElementById('15')
button15.addEventListener('click', calcul15)

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

    if (bill.value, customer.value == 0) {
        document.getElementById('tip-price').innerHTML = '0€'
        document.getElementById('total-price').innerHTML = '0€'
    } else {
        document.getElementById('tip-price').innerHTML = tipsPerPerson + ' €'
        document.getElementById('total-price').innerHTML = totalPerPerson + ' €'
    }
}

let button25 = document.getElementById('25')
button25.addEventListener('click', calcul25)

//Bouton 50% 

function calcul50() {
    let bill = document.getElementById('bill')
    let customer = document.getElementById('people')
    let button25 = document.getElementById('50')

    function amountTips() {
        return (parseInt(button50.value) * parseInt(bill.value)) / 100
    }

    let tips = amountTips()
    let tipsPerPerson = tips / customer.value
    let totalPerPerson = (parseInt(bill.value) + tips) / customer.value

    if (bill.value, customer.value == 0) {
        document.getElementById('tip-price').innerHTML = '0€'
        document.getElementById('total-price').innerHTML = '0€'
    } else {
        document.getElementById('tip-price').innerHTML = tipsPerPerson + ' €'
        document.getElementById('total-price').innerHTML = totalPerPerson + ' €'
    }
}

let button50 = document.getElementById('50')
button50.addEventListener('click', calcul50)

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

    if (bill.value, customer.value == 0) {
        document.getElementById('tip-price').innerHTML = '0€'
        document.getElementById('total-price').innerHTML = '0€'
    } else {
        document.getElementById('tip-price').innerHTML = Math.round(tipsPerPerson * 100) / 100 + ' €'
        document.getElementById('total-price').innerHTML = Math.round(totalPerPerson * 100) / 100 + ' €'
    }
}

let buttonCustom = document.getElementById('custom')
buttonCustom.addEventListener('change', calculCustom)
