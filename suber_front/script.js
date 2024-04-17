let button = document.getElementById('botao_enviar');

button.onclick = async function() {
    let nome = document.getElementById('nome').value;
    let email = document.getElementById('email').value;
    let telefone = document.getElementById('telefone').value;
    let data = {nome,email,telefone}

    const response = await fetch('http://localhost:3001/api/store/usuario', {
        method: 'POST',
        headers: {'Content-type': 'application/json;charset=UTF-8'},
        body: JSON.stringify(data)
    });

    let content = await response.json();

    if(content.success) {
        alert('Sucesso');
    } else {
        alert('Não');
    }

    let reload = await content;
    reload = location.reload()
}