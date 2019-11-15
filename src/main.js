import homePage from "../pages/mainpageNotlogged.js"
import loginPage from "../pages/login.js"
import registerPage from "../pages/register.js"

const main = document.querySelector("main");

const homeMain = () => {
	main.innerHTML = homePage();
}

const loginMain = () => {
	main.innerHTML = loginPage();
}

const registerMain = () => {
	main.innerHTML = registerPage();
}

const hash = () => {
	if (location.hash ===  '') {
		return homeMain();
	} else if (location.hash === '#login') {
		return loginMain();
	} else if (location.hash === '#register') {
		return registerMain();
	}
}

window.addEventListener('load', hash)
window.addEventListener('hashchange', hash)
