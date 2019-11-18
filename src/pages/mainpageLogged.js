import Button from "../components/button.js"
import Input from "../components/input.js"

const logout = () => {
	firebase.auth().signOut().then( () => {
		window.location.hash = '';
	})
}

const homeLogged = () => {
	window.location.hash='mainlogged'
	const template = `
	${Button({
		id:'btn-logout',
		class:'btn',
		type:'submit',
		title:'Sair',
		onclick: logout
	})}`;
	return template
}

export default homeLogged;