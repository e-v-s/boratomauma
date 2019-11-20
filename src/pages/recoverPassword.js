import Button from '../components/button.js'
import Input from '../components/input.js'

const recoverPage = () => {
	window.location.hash = 'recover';
	const  template = `
        <div class='login-register'>
            ${Button({
                id:'voltar',
                class:'btn-back',
                title:'<img class="img-voltar" src="images/icone-voltar.png"/>',
                onclick: comeBack
            })}
            <h2 class="title-recover">Recuperação de senha</h2>
        </div>
        <section class="recover-layout">
            <p class="message-recover">Insira seu e-mail cadastrado para redefinir a sua senha</p>
            <form id='form-email'>
            <p class="email">Email</p>
            ${Input({
                type:'text',
                id:'email',
                class:'email-recover',
                placeholder:'ex: marta@hotmail.com'
            })}
            ${Button({
                class: 'btn-recover',
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
		.catch(() =>{
			document.querySelector('#message').innerHTML = 'E-mail não localizado',
			document.getElementById('form-email').reset()
		})
}

const comeBack = () => {
	window.location.hash = '';
}

export default recoverPage;