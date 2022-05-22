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

    document.getElementById('tip-price').innerHTML = tipsPerPerson
    document.getElementById('total-price').innerHTML = totalPerPerson
}

let button5 = document.getElementById('5')
button5.addEventListener('click', calcul5)