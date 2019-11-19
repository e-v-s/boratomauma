import Button from '../components/button.js'
import Input from '../components/input.js'

const recoverPage = () => {
	window.location.hash = 'recover';
	const  template = `
	<section class="recover-layout">
	<h1>Recuperação de senha</h1>
	<h2>Insira seu e-mail cadastrado para redefinir a sua senha</h2>
	<form id='form-email'>
	${Input({
		type:'text',
		id:'email',
		class:'email-recover',
		placeholder:'e-mail'
	})}
	${Button({
		title:'Redefinir senha',
		onclick: recoverPassword
	})}
	</form>
	<p id='message'></p>
	</section>`;
	return template;
}

const recoverPassword = () => {
	const email = document.querySelector('.email-recover').value;
	firebase.auth().sendPasswordResetEmail(email)
		.then(() => {
			document.querySelector('#message').innerHTML = 'E-mail de redefinição de senha enviado',
			document.getElementById('form-email').reset()
		})
}

export default recoverPage;