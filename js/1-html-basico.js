document.addEventListener('DOMContentLoaded', () => {
    const form = document.getElementById('form')
    const nome = document.getElementById('nome')
    const email = document.getElementById('email')
    const senha = document.getElementById('senha')

    form.addEventListener('submit', (e) => {
        e.preventDefault()
        const nomeValue = nome.value.trim();
        const emailValue = email.value.trim();
        const senhaValue = senha.value.trim();
        if (nomeValue === '') {
            alert('nome obrigatório');
            nome.focus();
        } else if (emailValue === '') {
            alert ('email obrigatório')
            email.focus();
        } else if (senhaValue === '') {
            alert ('senha obrigatória')
            senha.focus();
        } else {
            alert ('fomulario enviado com sucesso')
            nome.value = '';
            email.value = '';
            senha.value = '';
        }
    })
})