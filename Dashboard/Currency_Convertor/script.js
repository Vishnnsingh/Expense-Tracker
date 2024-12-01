// Define conversion rates (example rates, update with real-time rates if needed)
const conversionRates = {
    INR: { USD: 0.012, EUR: 0.011, GBP: 0.0098, INR: 1 },
    USD: { INR: 82.50, EUR: 0.93, GBP: 0.78, USD: 1 },
    EUR: { INR: 88.30, USD: 1.07, GBP: 0.84, EUR: 1 },
    GBP: { INR: 103.60, USD: 1.28, EUR: 1.19, GBP: 1 },
};

// Select form and result elements
const converterForm = document.getElementById("converterForm");
const convertedAmountDisplay = document.getElementById("convertedAmount");

// Event listener for form submission
converterForm.addEventListener("submit", function (event) {
    event.preventDefault();

    // Get form values
    const amount = parseFloat(document.getElementById("amount").value);
    const fromCurrency = document.getElementById("fromCurrency").value;
    const toCurrency = document.getElementById("toCurrency").value;

    // Check if conversion is valid
    if (!conversionRates[fromCurrency] || !conversionRates[fromCurrency][toCurrency]) {
        convertedAmountDisplay.textContent = "Conversion rate not available.";
        return;
    }

    // Calculate converted amount
    const conversionRate = conversionRates[fromCurrency][toCurrency];
    const convertedAmount = amount * conversionRate;

    // Display result
    convertedAmountDisplay.textContent = `${toCurrency} ${convertedAmount.toFixed(2)}`;
});
