const dates = ['10-02-2022', 'тест', '11/12/2023', '00/13/2022', '41/12/2023'];

function filterValidDates(arr) {
    return arr.filter(item => !isNaN(Date.parse(item)));
  }
  
  const validDates = filterValidDates(dates);
  
  console.log(validDates);
  

