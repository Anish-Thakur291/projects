
const translateButton = document.getElementById('translateButton');
const inputText = document.getElementById('inputText');
const outputText = document.getElementById('outputText');

translateButton.addEventListener('click', () => {
    const textToTranslate = inputText.value;

    // Replace 'YOUR_API_KEY' with your actual API key
    const apiKey = 'YOUR_API_KEY';
    
    // Make a request to the translation API
    fetch(`https://translation.googleapis.com/language/translate/v2?key=${apiKey}`, {
        method: 'POST',
        headers: {
            'Content-Type': 'application/json',
        },
        body: JSON.stringify({
            q: textToTranslate,
            source: 'en',
            target: 'hi', // Hindi language code
        }),
    })
    .then(response => response.json())
    .then(data => {
        const translatedText = data.data.translations[0].translatedText;
        outputText.textContent = translatedText;
    })
    .catch(error => {
        console.error('Translation error:', error);
    });
});
