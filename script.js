function displayNum(num){
    result.value+=num
}
function clearBox(){
    result.value=""
}
function evaluateExpresion(){
    // let expr=result.value
    // let res=eval(expr)
    // result.value=res
    result.value=eval(result.value)
}
function backSpace(){
    let currentValue=result.value
    result.value=currentValue.slice(0,-1)
}