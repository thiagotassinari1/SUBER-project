let button = document.getElementById('botao_enviar');

button.onclick = async function() {
    let nome = document.getElementById('nome').value;
    let email = document.getElementById('email').value;
    let telefone = document.getElementById('telefone').value;

    if (!nome || !telefone || !email) {
        alert('Preencha todos os campos!');
        return false
    } else if (!email.includes('@')) {
        alert('Email inválido!')
        return false
    } else {
        let data = {nome,email,telefone}

        const response = await fetch('http://localhost:3001/api/store/usuario', {
            method: 'POST',
            headers: {'Content-type': 'application/json;charset=UTF-8'},
            body: JSON.stringify(data)
        });
    
        let content = await response.json();
    
        if(content.success) {
            alert('Sucesso!');
        } else {
            alert('Email ou telefone inválidos!');
        }
    
        let reload = await content;
        reload = location.reload()
    }

}