const url = 'http://127.0.0.1:3000/';

async function getRequest() {
    const res = await fetch(url);
    const responseText = await res.text();

    const p = document.createElement('p');
    p.textContent = responseText

    const div = document.getElementById('getResponse')
    div.appendChild(p)
}

async function postRequest() {
    const inputNumbers = document.getElementById('numbersInput').value;
    if (inputNumbers) {
        const inputNumbersAsNumber = Number(inputNumbers)
        const response = await fetch(url, {
            method: 'POST',
            headers: { 'Content-Type': 'application/json' },
            body: JSON.stringify({ numbers: inputNumbersAsNumber })
        })

        const responseBody = await response.json();
        /**
         * @type {array}
         */
        const numbers = responseBody.randomNumbers
        const div = document.getElementById('postResponse')
        div.innerHTML = '';
        numbers.forEach((number) => {
            const p = document.createElement('p');
            p.textContent = number
            div.appendChild(p)
        })
    }
}
