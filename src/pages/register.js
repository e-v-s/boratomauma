import Input from '../components/input.js'
import Button from '../components/button.js'

const register = (event) => {
	const email = document.getElementById('email').value;
	const password = document.getElementById('password').value;
	firebase.auth().createUserWithEmailAndPassword(email, password).catch(function(error) {
  const errorMessage = error.message;
  //alert(errorMessage);
	})
	const name = document.getElementById('name').value;	
	const born = document.getElementById('date').value;
	const gender = document.querySelector(`input[name='gender']:checked`).value;
	const user = {
		name: name,
		email: email,
		born: born,
		gender: gender
	}
	firebase.firestore().collection('users').add(user);
	location.hash = 'mainlogged';
	document.getElementById('register-form').reset();
}

const logout = () => {
	firebase.auth().signOut().then( () => {
		window.location.hash = '';
	})
}

const registerPage = () => {
	window.location.hash = 'register';
	const  template = `
	<div class='login-register'>
	${Button({
		id:'btn-logout',
		class:'btn',
		type:'submit',
		title: '<img class="img-voltar" src="images/icone-voltar.png"/>',
		onclick: logout
	})}
	<h1 class="title-register">Registro</h1>
</div>
	<form class='page-register-form form'>
	<p class='title-email-login'>Email</p>
	${Input({
		type:'text',
		id:'name',
		class:'input',
		placeholder:'Nome'
	})}
	${Input({
		type:'email',
		id:'email',
		class:'input',
		placeholder:'E-mail'
	})}
	${Input({
		type:'date',
		id:'date',
		class:'input'
	})}
	<div class='radio-gender'>
		<p>Gênero</p>
		${Input({
			type:'radio',
			id:'female',
			class:'radio',
			name:'gender',
			value:'feminino'
		})}
		<label for="female">Feminino</label>
		${Input({
			type:'radio',
			id:'male',
			class:'radio',
			name:'gender',
			value:'masculino'
		})}
		<label for="male">Masculino</label>
		${Input({
			type:'radio',
			id:'other',
			class:'radio',
			name:'gender',
			value:'outros',
		})}
		<label for="other">Outros</label>
		${Input({
			type:'radio',
			id:'prefer-nor-to-answer',
			class:'radio',
			name:'gender',
			value:'não declarar'
		})}
		<label for="prefer-nor-to-answer">Não declarar</label>
	</div>
	${Input({
		type:'password',
		id:'password',
		class:'input',
		placeholder:'Senha'
	})}
	${Input({
		type:'password',
		id:'password-confirmed',
		class:'input',
		placeholder:'Confirme sua senha'
	})}
	${Button({
		type:'submit',
		id:'btn-register',
		class:'btn',
		title:'Cadastrar',
		onclick: register
	})}
	</form>`;
	return template;
}

export default registerPage;