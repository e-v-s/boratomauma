import Button from '../components/button.js';
import Input from '../components/input.js';

const login = () => {
	const email = document.getElementById('emailLogin').value;
	const password = document.getElementById('passwordLogin').value;
	firebase.auth().signInWithEmailAndPassword(email, password)
		.catch(function(error) {
  		const errorMessage = error.message;
  		document.getElementById('error-message').innerHTML = 'Senha ou Email incorretos';
			document.getElementById('emailLogin').addEventListener('click', deleteErrorMessage = () => {
					document.getElementById('error-message').innerHTML = '';
			})
		})
	location.hash = 'mainlogged';
}

const recoverPasswordRoute = () => {
	location.hash = 'recover';
}

const registerRoute = () => {
	location.hash = 'register'
}

const loginPage = () => {
	window.location.hash = 'login';
	const template = `
	<form id='homePageForm'>
	${Input({
		type:'text',
		id:'emailLogin',
		class:'input',
		placeholder:'Email'
	})}
	${Input({
		type:'password',
		id:'passwordLogin',
		class:'input',
		placeholder:'Senha'
	})}
	<p id='error-message'></p>
	${Button({
		type:'submit',
		id:'emailSubmit',
		class:'btn',
		title:'Login',
		onclick: login,
	})}
	</form>
	<p>Esqueceu sua senha?</p>
	${Button({
		type:'submit',
		id:'forgotPassword',
		class:'btn',
		title:'Recuperar senha',
		onclick: recoverPasswordRoute
	})}
	<p>Não tem uma conta?</p>
	${Button({
		type:'submit',
		id:'btn-register',
		class:'btn',
		title:'Cadastre-se',
		onclick: registerRoute
	})}`;
	return template;
}


export default loginPage;