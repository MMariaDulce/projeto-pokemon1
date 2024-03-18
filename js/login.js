document.getElementById("Login").addEventListener("submit", function(event) {
    event.preventDefault(); 
  
    // Obtenha os valores dos campos de entrada
    const Nome = document.getElementById("login").value;
    const Senha = document.getElementById("senha").value;
  
    // Aqui você faria a validação do login e senha
    // Por exemplo, você pode compará-los com valores armazenados em algum lugar ou realizar uma solicitação de verificação para um servidor
    if (Nome.trim() !== "" && Senha.trim() !== "") {
    if (Nome !== Senha) 
      alert("Login Aprovado!");      
    }
  });
  