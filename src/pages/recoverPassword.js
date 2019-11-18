import Button from '../components/button.js';
import Input from '../components/input.js';

const recoverPage = () => {
	window.location.hash = 'recover';
	const  template = `
	<h1>Recuperação de senha</h1>
	<h2>Insira seu e-mail cadastrado para recuperar a sua senha</h2>
	${Input({
		type:'text',
		id:'email',
		class:'email-recover',
		placeholder:'e-mail'
	})}
	${Button({
		title:'Recuperar senha',
		onclick: recoverPassword
	})}`;
	return template;
}

const recoverPassword = () => {
	const email = document.querySelector('.email-recover').value;
	firebase.auth().sendPasswordResetEmail(email)
		.then(() => {
			alert = 'E-mail de redefinição de senha enviado'
		})
		
	// UserRecord = FirebaseAuth.getInstance().getUserByEmail(email);
	location.hash = '';
}

export default recoverPage;