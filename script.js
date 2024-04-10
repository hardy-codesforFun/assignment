document.addEventListener('DOMContentLoaded', function () {
    document.querySelector('form').addEventListener('submit', (e) => {
        e.preventDefault();
        const annualIncome =document.getElementById('annualIncome').value
        const extraIncome =document.getElementById('extraIncome').value
        const ageGroup = document.getElementById('age').value;
        const deduction =document.getElementById('deduction').value
        let alertDivannualincome = document.querySelector('.alertAnnualIncome');
        let alertDivextraincome = document.querySelector('.alertextraIncome');
        let alertDivdeduction=document.querySelector('.alertDeduction');
       
        if (!isNumeric(annualIncome)) {
            alertDivannualincome.style.display = "block";
            return; // Exit the function if validation fails
        }
        else {
            alertDivannualincome.style.display = 'none';
        }
        if(!isNumeric(extraIncome)){
            alertDivextraincome.style.display='block';
            return;
        }
        else{
            alertDivextraincome.style.display='none';
        }
        if(!isNumeric(deduction)){
            alertDivdeduction.style.display='block';

        }
        else{
            alertDivdeduction.style.display='none';
        }
        // if(!isNumeric(deduction)){
        //     alertDivdeduction.style.display='block';
        //     return;
        // }
        // else{
        //     alertDivdeduction.display='none';
        // }
        let tax=0;
        let taxRate=0;
        let netIncome=parseFloat(annualIncome)+parseFloat(extraIncome)-parseFloat(deduction);
        console.log(netIncome);
        if (netIncome > 800000) { // Only calculate tax if net income is over 8 Lakhs
            
            if (ageGroup === "<40") {
                taxRate = 0.30;
            } else if (ageGroup === "40-59") {
                taxRate = 0.40;
            } else if (ageGroup === ">=60") {
                taxRate = 0.10;
            }
        }
       console.log(taxRate);
        tax = (netIncome) * taxRate;
        console.log(`Calculated Tax: ${tax}`); 
    // Function to check if a value is numeric
    function isNumeric(value) {
        return /^\d+$/.test(value);
    }
})})
