function OdOrEven(num){
    while(num>0){
        num%2 === 0 ? console.log(num, '"odd"') : console.log(num, '"even"');
        num--
    }
}

OdOrEven(78)
