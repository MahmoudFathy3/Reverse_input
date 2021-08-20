

let input = prompt('Enter your name');

function reverseInput(value){
    let temp = [];
    let size = value.length-1;
for(let i = 0; i < value.length; i++){
    temp[i] = value[size-i];
}
temp = temp.toString().replace(/,/g,"");

return temp;
}

alert(reverseInput(input));