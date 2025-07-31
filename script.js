function increase(button) {
    const card = button.closest('.product-card');
    const countDiv = card.querySelector('.count');
    let count = parseInt(countDiv.textContent);
    count++;
    countDiv.textContent = count;
}

function decrease(button) {
    const card = button.closest('.product-card');
    const countDiv = card.querySelector('.count');
    let count = parseInt(countDiv.textContent);
    if (count > 0) {
        count--;
        countDiv.textContent = count;
    }
}

function setTab(selectedBadge) {
    const badgesContainer = selectedBadge.closest('.badges');
    badgesContainer.querySelectorAll('.badge').forEach(b => b.classList.remove('active'));
    selectedBadge.classList.add('active');
}