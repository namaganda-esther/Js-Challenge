// let num = [1,2,3,4,5];
// let output =0;
// for(i=0; i<num.length; i++){
//     if (num[i]%2===0){
//         output = output+1;
//     } else{
//         output = output+3;
//     }
//     if (num[i] === 8) {
//         output = output+5;
//     }
// }
// console.log(output);



let nums = [8,8];
let sum = 0;
for(x=0; x<nums.length; x++){
    if (nums[x]%2===0){
        if(nums[x] === 8)
        {
            sum = sum+5;
        }
    } else{
        sum = sum+3;
    }
}
console.log(sum);


let number = [8,8];
let total = 0;
for(y=0; y<number.length; y++){
    if (number[y]%2===0 && number[y] === 8){
            total = total+5;
    } else{
        total = total+3;
    }
}
console.log(total);

var k = "The respective values are :";
var output = 0;
function submitButton(){
    var input = document.getElementsByName("array[]");
    for(i=0; i<input.length; i++){
        if (input[i]%2===0 && number[i] === 8){
                output = total+5;
        } else{
            output = total+3;
        }
    }
    document.getElementById("par").innerHTML = k;
    document.getElementById("po").innerHTML = "Output";
}

