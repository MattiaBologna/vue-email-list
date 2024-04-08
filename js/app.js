console.log('API')

const { createApp } = Vue

  createApp({
    data() {
      return {
        mailList: [],
      }
    },
    methods: {
        fetchMail() {
            for (i = 0; i < 10; i++) {
                axios.get('https://flynn.boolean.careers/exercises/api/random/mail')
                .then(function (res) {
                const mail = res.data.response
                console.log(`mail: `, mail)
                this.mailList.push(mail)
            })
        }
        console.log('array mail: ', this.mailList)
        }
    }
  }).mount('#app')

// const mailList = document.getElementById('mail--list')

// for (i = 0; i < 10; i++) {
//     axios.get('https://flynn.boolean.careers/exercises/api/random/mail')
//     .then(function (res) {
//     console.log(res.data.response)

//     mailList.innerHTML += `<li>${res.data.response}</li>`
    
//     })
// }
