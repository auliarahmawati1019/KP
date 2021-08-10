const input = document.querySelectorAll('input')
const submit = document.getElementById('submit')


submit.addEventListener('click', e => {
    e.preventDefault()
    const username = input[0].value // input pertama (username)
    const password = input[1].value // input ke-dua (password)
    const data = { username, password } // ini yang di kirim ke server
    console.log(data)
})