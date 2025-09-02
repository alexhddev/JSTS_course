function greetNames(){
    
    /**
     * @type {string}
     */
    const input = document.getElementById('namesInput').value
    const names = input.split(' ')
    
    const greetingsDiv = document.getElementById('greetings')
    greetingsDiv.innerHTML = '';
    names.forEach((name)=>{
        const paragraph = document.createElement('p')
        paragraph.textContent = `Hi ${name}`
        greetingsDiv.appendChild(paragraph)
    })

}