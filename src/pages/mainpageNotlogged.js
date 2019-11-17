import Button from '../components/button.js'

const db = firebase.firestore();

db.collection('bars').get().then((snap) => {
	snap.forEach((doc) => {
		console.log(`${doc.id} => ${doc.data()}`)
	})
})

const mudarprologin = () => {
	location.hash = 'login';
}

const mudarprocadastro = () => {
	location.hash = 'register';
}

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

export default homePage;