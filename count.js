var countArray = []; //start with a blank array

for (i=0; i < 20; i++) {
    countArray[i] = (Number(window.prompt("Enter number" + (i + 1) )));
}

var total = 0;

for (i=0; i < countArray.length; i++) {
    total = total + countArray[i];
}



document.write("The total number is " + total + "<br>");
document.write("The average number is " + total / countArray.length  + "<br>");

var lowest = countArray[0];

for (i=1; i < countArray.length; i++) {
   if (countArray [i]< lowest) {
       lowest = countArray[i];
   }
}

document.write("The lowest number is " + lowest  + "<br>");

var highest = countArray[0];

for (i=1; i < countArray.length; i++) {
   if (countArray [i]> highest) {
       highest = countArray[i];
   }
}

document.write("The highest number is " + highest  + "<br>");


