function login(event) {
    var username = document.getElementById('username').value;
    var password = document.getElementById('password').value;

}

function generateRandomQuote() {
    const quotes = [
        "The only way to do great work is to love what you do. - Steve Jobs",
        "Believe you can and you're halfway there. - Theodore Roosevelt",
        "Success is not final, failure is not fatal: It is the courage to continue that counts. - Winston Churchill",
        "The future belongs to those who believe in the beauty of their dreams. - Eleanor Roosevelt",
        "Simplicity is the ultimate sophistication. - Leonardo Da Vinci",
        "“Denial is the ultimate comfort zone.” Zven Lajnef",
    ];
    var quoteDisplay = document.getElementById('quoteDisplay');
    var randomIndex = Math.floor(Math.random() * quotes.length);
    var randomQuote = quotes[randomIndex];
    quoteDisplay.innerHTML = '<i class="fa fa-quote-left"></i><p>' + randomQuote + '</p><i class="fa fa-quote-right"></i>';
}

function changeplace(){
    window.location.assign("index.html")
}

