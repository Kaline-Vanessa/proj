document.addEventListener('DOMContentLoaded', function () {
    const logoutLink = document.getElementById('logout');
    logoutLink.addEventListener('click', function (e) {
        e.preventDefault();
        const confirmed = confirm('Você tem certeza que deseja sair?');
        if (confirmed) {
            window.location.href = 'login.html';
        }
    });
});
