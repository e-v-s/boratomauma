import homePage from "../pages/mainpageNotlogged.js"
import loginPage from "../pages/login.js"
import registerPage from "../pages/register.js"
import homeLogged from "../pages/mainpageLogged.js"
import recoverPage from "../pages/recoverPassword.js"

const user = firebase.auth().currentUser;
const main = document.querySelector('main');

const homeMain = () => {
	main.innerHTML = homePage();
	document.querySelector('.map-container').onload = mapHere();
}

const loginMain = () => {
	main.innerHTML = loginPage();
}

const recoverPageMain = () => {
	main.innerHTML = recoverPage();
}

const registerMain = () => {
	main.innerHTML = registerPage();
}

const homeLoggedMain = () => {
	main.innerHTML = homeLogged();
	document.querySelector('.map-container').onload = mapHere();
}

const hash = () => {
	firebase.auth().onAuthStateChanged((user) =>
	{
	if (user) {
		if (location.hash === '') {
			return homeLoggedMain();
		} else if (location.hash === '#mainlogged') {
  				return homeLoggedMain();
  			} 
  		} else {
  			if (location.hash === '') {
  				return homeMain();
  			} else if (location.hash === '#register') {
  				return registerMain();
  			} else if (location.hash === '#login') {
  				return loginMain();
  			}else if (location.hash === '#recover') {
  				return recoverPageMain();
  			}
  		}
		})
	// if (location.hash ===  '') {
	// 	return homeMain();
	// } else if (location.hash === '#login') {
	// 	return loginMain();
	// } else if (location.hash === '#register') {
	// 	return registerMain();
	// }
}

window.addEventListener('load', hash)
window.addEventListener('hashchange', hash)