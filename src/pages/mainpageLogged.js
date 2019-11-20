import Button from "../components/button.js"

const logout = () => {
	firebase.auth().signOut().then( () => {
		window.location.hash = '';
	})
}

const voltar = () => {
	window.location.hash = '';
}

const barDetails = (id, event) => {	
	event.preventDefault();
	firebase.firestore().collection('bars').doc(id).get().then( bar => {
			const template = `
			<section class='bar'>
				<button type='image' class='btn-back-bar' id='voltar' onclick=voltar()>Voltar</button>
				<h1 class='bar-name-title'>${bar.data().name}</h1>
				<img class='img-bar' src='${bar.data().picture}'>
				<h4 class='title-desc'>Sobre o bar</h4>			
				<p class='desc-bar'>O boteco simples e aconchegante é famoso por seus petiscos diferenciados e pelo chopp cremoso.</p>
				<p class='extras-bar'>${bar.data().extras.join(', ')}</p>				
				<p class='add-bar'>${bar.data().endereco}</p>				
				<p class='phone-bar'>(11) 5096-1152</p>				
				<p class='stars-bar'>${bar.data().avaliacao}⭐⭐⭐⭐</p>
				<div class='regulamento-bar'>
					<h4 class='bar-reg-title'>Regulamento da Promoção</h4>
					<ul>
						<li class='bar-reg-item'>Cupom não cumulativo</li>
						<li class='bar-reg-item'>Válido até 22/12/2019</li>
					</ul>
				</div>
				<button type='submit' class='btn-cupom btn' id='pegarcupom' onclick=pegarcumpom()>Pegar cupom</button>
			</section>`;
		return document.querySelector('main').innerHTML = template;
		})			
}

const pegarcumpom = () => {
	const template = `
	<div class='div-btn-back'>
		${Button({
			id:'voltar',
			title:'<img class="img-voltar" src="images/icone-voltar.png"/>',               
			class:'btn-back btn',
			onclick: voltar
		})}
		<h1 class='page-qrcode'>QRCode</h1>
	</div>
	<div class='cupom-container'>
		<h1 class='bar-name'>Bar Bella Santos</h1>
		<img class='img-desc' src="images/15.png">
		<img src='images/qrcode.jpeg' class='qrcode-image'/>
		<img class='imgbar'/>
		<p class='text-cupom'>Cupom Salvo ✔</p>
		<p class='text-validation'>Valide o QRCode no estabelecimento.</p>
	</div>
	`;
	return document.querySelector('main').innerHTML = template
}

const homeLogged = () => {	
	const template = `
		<div class='top'>
			<div class='logout'>
				${Button({
					id:'btn-logout btn',
					class:'btn-logout btn',
					type:'submit',
					title:'Sair',
					onclick: logout
				})}
				<select class="filter" id="filter-region" onload="mapHere()">
					<option value="nune" selected>Buscar por Região</option>
					<option value="center">Centro</option>
					<option value="oeste">Zona Oeste</option>
					<option value="leste">Zona Leste</option>
					<option value="norte">Zona Norte</option>
					<option value="sul">Zona Sul</option>
				</select> 
			</div>
		</div>
		<section class='map'>
			<div class="map-container" id='map'>
    		</div>
		</section>
		<section class='bar'>
			${Button({
				value:'Bar Bela Santos',
				id:'CUvUsqpwc4zuzhTqRvAa',
				class:'btn-bar btn',
				type:'submit',
				title:'<img src="./images/bar-bela-santos.jpeg" class="img-card">',
				onclick: barDetails
			})}
		</section>`;			
			// ${Button({
			// 	value:'MeGusta Bar',
			// 	id:'Ld1W21vzIyOetbld5uDY',
			// 	class:'btn-bar',
			// 	type:'submit',
			// 	title:'<img src="./images/me-gusta-bar.jpeg" style="float:left;margin-right:0.5em">',
			// 	onclick: barDetails
			// })}
			// ${Button({
			// 	value:'Lanchonete Bella Jau',
			// 	id:'LMe7A8KzuzjsMVkPVuPd',
			// 	class:'btn-bar',
			// 	type:'submit',
			// 	title:'<img src="./images/lanchonete-bella-jau.jpeg" style="float:left;margin-right:0.5em">',
			// 	onclick: barDetails
			// })}
			// ${Button({
			// 	value:'Orange Point',
			// 	id:'kA7KsjYOsU7fS5Kaf6GO',
			// 	class:'btn-bar',
			// 	type:'submit',
			// 	title:'<img src="./images/orange-point.jpeg" style="float:left;margin-right:0.5em">',
			// 	onclick: barDetails
			// })}
			// ${Button({
			// 	id:'GSJGrI91vMwwBvWVDJIV',
			// 	class:'btn-bar',
			// 	type:'submit',
			// 	title:'<img src="./images/o-malley.jpeg" style="float:left;margin-right:0.5em">',
			// 	onclick: barDetails
			// })}
			// ${Button({
			// 	id:'btn-logout',
			// 	class:'btn',
			// 	type:'submit',
			// 	title:'Sair',
			// 	onclick: logout
			// })}			
	window.location.hash='mainlogged';	
	return template
}

window.pegarcumpom = pegarcumpom;
export default homeLogged;