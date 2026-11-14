const amountInput = document.getElementById('amount');
const fromCurrency = document.getElementById('fromCurrency');
const toCurrency = document.getElementById('toCurrency');
const convertBtn = document.getElementById('convertBtn');
const resultBlock = document.getElementById('resultBlock');

// Курсы валют относительно рубля ПМР (RUP) по данным Агропромбанка
// Базово принимаем за основу средние значения курсов конвертации
const ratesToRUP = {
    RUP: 1,
    USD: 16.325, // Среднее между покупкой (16.30) и продажей (16.35)
    EUR: 18.30,  // Среднее между покупкой (17.85) и продажей (18.75)
    RUB: 0.192   // Курс RUB/RUP
};

convertBtn.addEventListener('click', () => {
    const amount = Number(amountInput.value);
    const from = fromCurrency.value;
    const to = toCurrency.value;

    if (amount <= 0) {
        resultBlock.textContent = 'Введите сумму больше нуля';
        return;
    }

    // 1. Переводим введенную сумму в рубли ПМР
    const amountInRUP = amount * ratesToRUP[from];

    // 2. Переводим из рубликов ПМР в целевую валюту
    const result = amountInRUP / ratesToRUP[to];

    resultBlock.textContent = `${amount} ${from} = ${result.toFixed(2)} ${to}`;
});
