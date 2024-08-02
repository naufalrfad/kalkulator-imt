function calculateIMT() {
    var height = document.getElementById('height').value / 100;
    var weight = document.getElementById('weight').value;
    var imt = (weight / (height * height)).toFixed(1);

    var classification = '';
    if (imt < 18.5) {
        classification = 'Berat badan kurang (Underweight)';
    } else if (imt >= 18.5 && imt <= 22.9) {
        classification = 'Normal';
    } else if (imt >= 23 && imt <= 24.9) {
        classification = 'Kelebihan berat badan (Overweight)';
    } else if (imt >= 25 && imt <= 29.9) {
        classification = 'Obesitas I';
    } else if (imt >= 30) {
        classification = 'Obesitas II';
    }

    document.getElementById('classification').innerText = classification;
    document.getElementById('imtResult').innerText = imt;

    var pointer = document.getElementById('pointer');
    var percentage = (imt - 10) * 5;
    pointer.style.left = `calc(${percentage}% - 5px)`;

    document.getElementById('calculatorPage').classList.add('hidden');
    document.getElementById('resultPage').classList.remove('hidden');
}

function goBack() {
    document.getElementById('calculatorPage').classList.remove('hidden');
    document.getElementById('resultPage').classList.add('hidden');
}
