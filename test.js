const resetBtn = document.querySelector('.sign-btn');

resetBtn.addEventListener('click', (e) => {
    e.preventDefault();

    let billAmt = document.getElementById('three').value;
    let percentage = document.getElementById('two').value;
    let discountAmt = document.getElementById('four');

    discountAmt.value = billAmt * percentage;
});

