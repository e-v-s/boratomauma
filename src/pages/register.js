import Button from '../components/button.js'

const registerPage = () => {
	window.location.hash = 'register';
	const  template = `
	<h1>página de registro</h1>
	${Button({
		title:'ir pro início',
		onclick: irproinicio
	})}`;
	return template;
}

const irproinicio = () => {
	location.hash = '';
}

export default registerPage;