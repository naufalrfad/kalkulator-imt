function calculateIMT() {
    var height = document.getElementById('height').value / 100;
    var weight = document.getElementById('weight').value;
    var imt = (weight / (height * height)).toFixed(1);

    var classification = '';
    if (imt < 18.5) {
        classification = 'Berat badan kurang';
    } else if (imt >= 18.5 && imt <= 24.9) {
        classification = 'Normal';
    } else if (imt >= 25 && imt <= 29.9) {
        classification = 'Kelebihan berat badan';
    } else if (imt >= 30 && imt <= 34.9) {
        classification = 'Obesitas I';
    } else if (imt >= 35 && imt <= 39.9) {
        classification = 'Obesitas II';
    } else if (imt >= 40) {
        classification = 'Obesitas III';
    }

    document.getElementById('classification').innerText = classification;
    document.getElementById('imtResult').innerText = imt;

    var pointer = document.getElementById('pointer');
    var percentage = ((imt - 10) * 5).toFixed(1);
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
