function isLGSeven(numbers){
    const different = numbers-7;
    if(different< 7){
        return different
    }else{
       return numbers*2;
    }
}
console.log(isLGSeven(6))

function isEvenOrOdd(numbers){
    
    let remainder = numbers % 2;
if(remainder === 0){
    return true;
}
else{
    return false;
}
};
console.log(isEvenOrOdd(76));
