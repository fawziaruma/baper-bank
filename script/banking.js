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
 
    // update account balance
    const balanceTotal = document.getElementById('balance-total')
    const balanceTotalText = balanceTotal.innerText
    const previousBalanceAmount = parseFloat(balanceTotalText)
    const newBalanceTotal = previousBalanceAmount + newDepositeTotal
    balanceTotal.innerText = newBalanceTotal

    //clear the deposite input field 
    depositeInput.value =""
})
    //   handle withdrow even handelar
document.getElementById('withdrow-button').addEventListener('click', function(){
    const withdrowInput = document.getElementById('withdrow-input')
    const newWithdrowAmountText = withdrowInput.value
    const newWithdrowAmount = parseFloat(newWithdrowAmountText)

    const withdrowTotal = document.getElementById('withdrow-total')
    const previousWithdrowText = withdrowTotal.innerText
    const previousWithdrowAmount = parseFloat(previousWithdrowText)
    const newWithdrowTotal = newWithdrowAmount + previousWithdrowAmount
    withdrowTotal.innerText = newWithdrowTotal 

    // update balance
    const balanceTotal = document.getElementById('balance-total')
    const previousBalanceText = balanceTotal.innerText
    const previousBalanceTotal = parseFloat(previousBalanceText)
    const newBalanceTotal = previousBalanceTotal - newWithdrowTotal;
    balanceTotal.innerText = newBalanceTotal
    withdrowInput.value = ""
})

