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
  <header>
	  <div class="logo"></div>
	  <div class='loginRegister-logout'></div> 
    <div class='loginRegister'>
      ${Button({
        class: 'btn-login',
        title:'Login',
        onclick: loginRoute
      })}
      ${Button({
        class:'btn-register',
        title:'Cadastro',
        onclick: registerRoute
      })} 
    </div>
  </header>
  	<section class="section">
	 	  <div class="search">Aqui vai a barra de pesquisa </div>
	    <div class="map-container" id="map">
        Aqui vai o mapa
      </div>
	</section>
	<main></main>
  <footer>
    <p>&copy; BoraProBar </p>
	</footer>

  `;
  return template;
}


const loginRoute = () => {
	location.hash = 'login';
}

const registerRoute = () => {
	location.hash = 'register';
}

export default homePage;