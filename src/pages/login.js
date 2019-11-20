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

const logout = () => {
	firebase.auth().signOut().then( () => {
		window.location.hash = '';
	})
}

const loginPage = () => {
	window.location.hash = 'login';
	const template = `
	<div class='login-register'>
		${Button({
			id:'btn-back',
			class:'btn',
			type:'submit',
			title: '<img class="img-voltar" src="images/icone-voltar.png"/>',
			onclick: logout
		})}
		<h1 class="title-login">Login</h1>
	</div>
	<div class='login'>
	<form class="home-page-form form">
	<p class='title-email-login'>Email</p>
	${Input({
		type:'text',
		id:'emailLogin',
		class:'input',
		placeholder:'ex: exemplo@exemplo.com'
	})}
	<p class='title-password-login'>Senha</p>
	${Input({
		type:'password',
		id:'passwordLogin',
		class:'input',
		placeholder:'ex: abc123#'
	})}
	<p id='error-message'></p>
	${Button({
		id:'btn-login',
		type:'submit',
		class:'btn',
		title:'Login',
		onclick: login,
	})}
	<p class='text-password'>Esqueceu sua senha?</p>
	${Button({
		type:'submit',
		class:'forgot-password btn',
		title:'Recuperar senha',
		onclick: recoverPasswordRoute
	})}
	<p class='text-account'>Não tem uma conta?</p>
	${Button({
		type:'submit',
		class:'btn-register btn',
		title:'Cadastre-se',
		onclick: registerRoute
	})}
	</div> 
	</form>
	`;
	return template;
}


export default loginPage;