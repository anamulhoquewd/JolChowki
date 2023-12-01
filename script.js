let totalLunch = 0;
let totalDinner = 0;
let totalPrice = 0;

// Loop through all the rows except the header and total row
const rows = document.querySelectorAll('table tr:not(:first-child):not(:last-child)');
rows.forEach(function(row) {
    const priceCell1 = row.querySelector('td:nth-child(2)');
    if (priceCell1) {
        const price = parseFloat(priceCell1.textContent.match(/[\d.]+/));
        totalLunch += price;
    }

    const priceCell2 = row.querySelector('td:nth-child(3)');
    if (priceCell2) {
        const price = parseFloat(priceCell2.textContent.match(/[\d.]+/));
        totalDinner += price;
    }

    const priceCell3 = row.querySelector('td:nth-child(4)');
    if (priceCell3) {
        const price = parseFloat(priceCell3.textContent.match(/[\d.]+/));
        totalPrice += price;
    }
});

const lunchElement = document.getElementById('lunch');
if (lunchElement) {
    lunchElement.textContent = 'Total Lunch: ' + totalLunch.toFixed(2) + ' Box';
}
const dinnerElement = document.getElementById('dinner');
if (dinnerElement) {
    dinnerElement.textContent = 'Total Dinner: ' + totalDinner.toFixed(2) + ' Box';
}
const priceElement = document.getElementById('price');
if (priceElement) {
    priceElement.textContent = 'Total Price: ' + totalPrice.toFixed(2) + " Taka";
}
