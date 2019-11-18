import Button from '../components/button.js';
import Input from '../components/input.js';

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
	${Button({
		type:'submit',
		id:'emailSubmit',
		class:'btn',
		title:'Login',
		onclick: teste,
	})}
	</form>
	${Button({
		title:'ir pro início',
		onclick: irproinicio
	})}`;
	return template;
}

const teste = (id) => {
	console.log('funcionou');
}

const irproinicio = () => {
	location.hash = '';
}

export default loginPage;