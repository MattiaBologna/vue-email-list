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
                axios.get('https://flynn.boolean.careers/exercises/api/random/mail')
                .then(function (res) {
                const mail = res.data.response
                console.log(mail)
            })
        console.log('array mail: ', this.mailList)
        },
        fetchMails(n) {
			for (let i = 0; i < n; i++) {
				axios
					.get('https://flynn.boolean.careers/exercises/api/random/mail')
					.then( (res) => {
						this.mailList.push(res.data.response)
					})
			}
            console.log(this.mailList)
		}
    },
    created() {
        this.fetchMail()
        this.fetchMails(10)
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
