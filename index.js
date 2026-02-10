function analyze(){
  var number = parseInt(document.getElementById("numberInput").value)
  var output = document.getElementById("result")

  var digitCount = 0
  var evenCount = 0
  var oddCount = 0
  var sumOfDigits = 0

  var maxDigit = -1
  var minDigit = 10

  if (isNaN(number)) {
    output.textContent = "Please enter a valid number"
    return
  }

  if(number < 0){
    number = number * -1
  }

  if(number === 0){
    digitCount = 1
    evenCount = 1
    oddCount = 0
    sumOfDigits = 0
    maxDigit = 0
    minDigit = 0
  } else {
    var tempNumber = number

    while(tempNumber != 0){
      var currentDigit = tempNumber % 10

      digitCount++
      sumOfDigits += currentDigit

      if(currentDigit % 2 === 0){
        evenCount++
      } else {
        oddCount++
      }

      if(currentDigit > maxDigit){
        maxDigit = currentDigit
      }
      if(currentDigit < minDigit){
        minDigit = currentDigit
      }

      tempNumber = parseInt(tempNumber / 10)
    }
  }

  output.textContent =
    "Digits count: " + digitCount + "\n" +
    "Sum of digits: " + sumOfDigits + "\n" +
    "Even digits: " + evenCount + "\n" +
    "Odd digits: " + oddCount + "\n" +
    "Max digit: " + maxDigit + "\n" +
    "Min digit: " + minDigit
}



    