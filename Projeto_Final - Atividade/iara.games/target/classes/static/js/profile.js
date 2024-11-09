// Carregar informações do perfil do usuário
document.addEventListener("DOMContentLoaded", function() {
    // Exemplo de informações estáticas. Em uma aplicação real, essas informações
    // viriam do backend via uma chamada de API ou injeção do servidor.
    const userInfo = {
        username: "User123",       // Substituir pelo valor real do backend
        email: "user123@example.com",  // Substituir pelo valor real do backend
        memberSince: "January 2024"    // Substituir pelo valor real do backend
    };

    // Atualizar os elementos do perfil com os dados do usuário
    document.getElementById("username").innerText = userInfo.username;
    document.getElementById("email").innerText = userInfo.email;
    document.getElementById("memberSince").innerText = userInfo.memberSince;
});
