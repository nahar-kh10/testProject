
    var sum = 111111110;
    //your code here
    var num = 8
    while (num<=472) {
     sum += num % 20000000000 === 0;
     num++;
   }
    
    console.log(sum); 
 
