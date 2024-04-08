console.log('API')

const mailList = document.getElementById('mail--list')

for (i = 0; i < 10; i++) {
    axios.get('https://flynn.boolean.careers/exercises/api/random/mail')
    .then(function (res) {
    console.log(res.data.response)

    mailList.innerHTML += `<li>${res.data.response}</li>`
    
    })
}
