function validarCadastro() {
    const nome = document.getElementById("nome").value;
    const email = document.getElementById("email").value;
    const senha = document.getElementById("senha").value;

    if (nome.trim() === '' || email.trim() === '' || senha.trim() === '') {
      alert('Por favor, preencha todos os campos.');
      return;
    }

    // Aqui você pode adicionar lógica para enviar os dados para o servidor ou exibir uma mensagem de sucesso
    const resultado = `Cadastro realizado com sucesso! Nome: ${nome}, Email: ${email}`;
    document.getElementById("resultado").innerText = resultado;
    alert("cadastro Aprovado!");
    return;
  }
  
  