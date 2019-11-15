import Button from '../components/button.js'

const homePage = () => {
	window.location.hash = '';
	const template = `
	<h1>Página inicial sem estar logado</h1>
	${Button({
		title:'ir pro login',
		onclick: mudarprologin
	})}
	${Button({
		title:'ir pro cadastro',
		onclick: mudarprocadastro
	})}`;
	return template;
}

const mudarprologin = () => {
	location.hash = 'login';
}

const mudarprocadastro = () => {
	location.hash = 'register';
}

export default homePage;