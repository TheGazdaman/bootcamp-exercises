const nationalID = prompt('Type your national identification number.')

let monthToCheck = false;

const nidIsValid = (nid) => {
  if (Number.isNaN(parseInt(nid), 10)) {
    return 'Wrong input format';
  } else {
    if (parseInt(nid[2] + nid[3], 10) >= 1 && parseInt(nid[2] + nid[3], 10) <= 12 || parseInt(nid[2] + nid[3], 10) >= 51 && parseInt(nid[2] + nid[3], 10) >= 62) {
      monthToCheck = true;
    } else {
      monthToCheck = false;
    }
    if ((nid.length === 10) && (parseInt(nid) % 11 === 0) && monthToCheck) {
      switch (nid[2] + nid[3]) {
              case '01':
              case '03':
              case '05':
              case '07':
              case '08':
              case '10':
              case '12':
              case '51':
              case '53':
              case '55':
              case '57':
              case '58':
              case '60':
              case '62':
                if (parseInt(nid[4] + nid[5]) <= 31) {
                  return true;
                } else {
                  return false;
                }
     
              case '04':
              case '06':
              case '09':
              case '11':
              case '54':
              case '56':
              case '59':
              case '61':
                if (parseInt(nid[4] + nid[5]) <= 30) {
                  return true;
                } else {
                  return false;
                }
                
      
              case '02':
              case '52':
                  if (parseInt(nid[4] + nid[5]) <= 29) {
                    return true;
                  } else {
                    return false;
                  }
              default: 
                  return false;
          }
        }
      
    } 
  } 


window.alert(nidIsValid(nationalID));