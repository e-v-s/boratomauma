import Button from '../components/button.js'

const confirmacaoIdade = () => {
	let age = confirm("VOCÊ TEM MAIS DE 18 ANOS?");
	if(age ===true){
		console.log("muito bem")
	}else{
		console.log("Vá jogar LOL")
	}
}
//confirmacaoIdade()

const db = firebase.firestore();
  db.collection('bars').get().then((snap) => {
	snap.forEach((doc) => {
		console.log(`${doc.id} => ${doc.data()}`)
	})})
	
const homePage = () => {
  window.location.hash = '';
  const template = `
  <h1>Página inicial sem estar logado</h1>
  ${Button({
    title:'ir pro login',
    onclick: loginRoute
  })}
  ${Button({
    title:'ir pro cadastro',
    onclick: registerRoute
  })}`;
  return template;
}

const loginRoute = () => {
	location.hash = 'login';
}

const registerRoute = () => {
	location.hash = 'register';
}

export default homePage;