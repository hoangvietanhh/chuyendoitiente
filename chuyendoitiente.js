function convert() {
    let inputamount;
    let from=parseFloat( document.getElementById('fromunit').value)
    let to=parseFloat(document.getElementById('tounit').value)

inputamount=document.getElementById('amount').value

let Amount=parseInt(inputamount)

let S = (Amount * to)/from
document.getElementById('result').innerHTML='Result: ' + S;
}