document.addEventListener('DOMContentLoaded', function() {
    var heightInput = document.getElementById('height');
    var weightInput = document.getElementById('weight');
    var calculateButton = document.querySelector('#calculatorPage button');

    // Function to trigger the IMT calculation
    function handleEnterKey(event) {
        if (event.key === 'Enter') {
            event.preventDefault(); // Prevent form submission if in a form
            calculateIMT();
        }
    }

    // Add keypress event listeners to both input fields
    heightInput.addEventListener('keypress', handleEnterKey);
    weightInput.addEventListener('keypress', handleEnterKey);

    // Add click event listener to the button
    calculateButton.addEventListener('click', calculateIMT);
});

function calculateIMT() {
    var height = document.getElementById('height').value / 100;
    var weight = document.getElementById('weight').value;
    var imt = (weight / (height * height)).toFixed(1);

    var classification = '';
    if (imt < 18.5) {
        classification = 'Underweight';
    } else if (imt >= 18.5 && imt <= 22.9) {
        classification = 'Normal';
    } else if (imt >= 23 && imt <= 24.9) {
        classification = 'Overweight';
    } else if (imt >= 25 && imt <= 29.9) {
        classification = 'Obesitas I';
    } else if (imt >= 30) {
        classification = 'Obesitas II';
    }

    document.getElementById('classification').innerText = classification;
    document.getElementById('imtResult').innerText = imt;

    var pointer = document.getElementById('pointer');
    var percentage = ((imt - 10) * 2).toFixed(1);
    if (percentage < 0) percentage = 0;
    if (percentage > 100) percentage = 100;
    pointer.style.left = `calc(${percentage}% - 5px)`;

    document.getElementById('calculatorPage').classList.add('hidden');
    document.getElementById('resultPage').classList.remove('hidden');
}

function goBack() {
    document.getElementById('calculatorPage').classList.remove('hidden');
    document.getElementById('resultPage').classList.add('hidden');
}
