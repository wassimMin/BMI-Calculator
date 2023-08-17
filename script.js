function calculateBMI(){
    let heightInput = document.getElementById('height');
    let weightInput = document.getElementById('weight');
    let result = document.getElementById('result');
    let height = parseFloat(heightInput.value);
    let weight = parseFloat(weightInput.value);
    if(isNaN(height) || isNaN(weight)){
        result.innerHTML = "Please Enter valid height and weight.";
        return
    }

    let bmi = weight / ((height/100)**2);
    let category = " ";
    if(bmi<18.5){
        category = "Underweight";
    }else if(bmi <30){
        category ="Overweight" ;
    }else{
        category="Obese";
    }
result.innerHTML = "Your BMI is " + bmi.toFixed(2) + "("+category+")";
}