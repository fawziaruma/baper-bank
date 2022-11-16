document.getElementById('deposite-button').addEventListener('click', function(){
    // get the amount deposite
    const depositeInput = document.getElementById('deposite-input')
    const newDepositeAmountText = depositeInput.value 
    const newDepositeAmount = parseFloat(newDepositeAmountText)
    // update deposite total
    const depositeTotal = document.getElementById('deposite-total')
    const previousDepositeText = depositeTotal.innerText
    const previousDepositeAmount = parseFloat(previousDepositeText)
    const newDepositeTotal = previousDepositeAmount + newDepositeAmount
    depositeTotal.innerText=newDepositeTotal
})