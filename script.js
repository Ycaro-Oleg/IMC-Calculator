 const button = document.getElementById('resultButton');

 const resetButton = document.getElementById('resetButton');

 const name = document.getElementById('name');

 const weight = document.getElementById('weight');

 const height = document.getElementById('height');

 const result = document.getElementById('result');

 const resetName = document.getElementById('name')

 const resetHeight = document.getElementById('Height')
 const resetWeight = document.getElementById('Weight')
 
const getText = (imc) => {

    if (imc > 40) {
        return 'Obesity III'
    } else if(imc > 35){
        return 'Obesity II'
    } else if(imc > 30){
        return 'Obesity I'
    } else if(imc > 25){
        return 'Slightly overweight'
    } else if(imc > 18.5){
        return 'Ideal weight'
    } else if (null) {
        return 'You did not put anything'
    } else {
        return 'Underweight'
    }

}



 const imcCalc = () => {

    if(!weight.value || !height.value || !name.value){
        return result.textContent = 'Fill all field'
    }

    const imcValue = (+weight.value / (+height.value * +height.value)).toFixed(1);

    console.log(weight.value , height.value, name.value);
    
    result.textContent = `${name.value} , ${getText(imcValue)}`;
 }

const resetBtn= () => {
    result.textContent = ''
}


resetButton.addEventListener('click',resetBtn)
 button.addEventListener('click',imcCalc);