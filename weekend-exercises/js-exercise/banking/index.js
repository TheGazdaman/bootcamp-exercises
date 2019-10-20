const accountNumber =  {
  '000256784': 790, 
  '000986056': 5600,
  '001546238': 78065,
  '030987456': 120910
}


const action = prompt('What would you like to do?');
if (action === 'balance') {
  const bankAccount = prompt('Type in your account number')
  window.alert('€'+ accountNumber[bankAccount]);
}
  else if (action === 'withdraw') {
    const bankAccount = prompt('Type in your account number')
    const amount = prompt('How much would you like to withdraw?')
    
    if(accountNumber[bankAccount] - amount >= 0) {
      window.alert(`You have withdrew: ${amount}
      Your balance is: ${accountNumber[bankAccount] - amount}`)
    } 
    else {
      window.alert('Not enough money at your bank account')
    }
   
} else {
  window.alert('Unknown action')
};

