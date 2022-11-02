export default function upc (number) {
    var code_even = 1; //четный
    var code_odd = 3; //нечетный
    var sum = 0;
    
   var n = number.length;
   for (var i=0; i<n; i++;){
        var multiplier = i%2 + 1; 
        var sum = sum + number[i]*(i%2)
   }
    return 
}

