let isUserLogin = JSON.parse(localStorage.getItem('loggedInUser'))
if (!isUserLogin) {
    window.location.href = 'login.html'
}