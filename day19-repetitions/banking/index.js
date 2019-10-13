const bankAccountNumber = {
  '000256784': 790,
  '000986056': 5600,
  '001546238': 78065,
  '030987456': 120910,
}


const action = prompt('What would you like to do? (Write "balance" to show your ballance. Write "withdrawal" to withdraw money.)');

if (action === 'balance') {
  const accountBalance = prompt('Type in your account number.');
  alert(bankAccountNumber[accountBalance]);

} 

else if (action === 'withdrawal') {
  accountBalance = prompt('Type in your account number.');
  const amount = prompt('How much money would you like to withdraw?');

  if (bankAccountNumber[accountBalance] - amount >= 0) {
    document.write(`You have withdrew: ${amount}`);
    document.write(`Your balance is now: ${bankAccountNumber[accountBalance] - amount}`);

  } else {
      document.write(`You do not have enough money on your account. Max value possible is: ${bankAccountNumber[accountBalance]}`);
    } 

} 

else {
  alert("Your input is invalid");
} 


































