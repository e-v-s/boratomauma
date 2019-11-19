import Button from '../components/button.js'

// $(function() {
//   /* caixa-confirmacao representa a id onde o caixa de confirmação deve ser criada no html */
//   $( "#caixa-confirmacao" ).dialog({
//     resizable: false,
//     height:140,

//     /* 
//      * Modal desativa os demais itens da tela, impossibilitando interação com eles,
//      * forçando usuário a responder à pergunta da caixa de confirmação
//      */ 
//     modal: true,

//     /* Os botões que você quer criar */
//     buttons: {
//       "Sim": function() {
//         $( this ).dialog( "close" );
//         alert("Você clicou em Sim!");
//       },
//       "Não": function() {
//         $( this ).dialog( "close" );
//         alert("Você clicou em Não");
//       }
//     }
//   });
// });

// const confirmacaoIdade = () => {
// 	let age = confirm("VOCÊ TEM MAIS DE 18 ANOS?");
// 	if(age ===true){
// 		console.log("muito bem")
// 	}else{
// 		console.log("Vá jogar LOL")
// 	}
// }
// confirmacaoIdade()

// const confirmacao = () => {
//  let template = `<div id= "dialog-confirm" title="Executar função?"></div>
//   ` 
// }
// addEventListener.
// <button id="btn" onclick="confirmar();">Clica</button>
// <div id="dialog-confirm" title="Executar função?"></div>

// function funcao_b() {
//   alert('funcao B');
// }
// function confirmar() {
//     $( "#dialog-confirm" ).dialog({
//       resizable: false,
//       height: "auto",
//       width: 400,
//       modal: true,
//       buttons: {
//         "Yap executa função b": function() {
//           $( this ).dialog( "close" );
//           funcao_b();
//         },
//         'Confirmar': function() {
//           $( this ).dialog( "close" );
//           console.log('cancelado');
//         }
//       }
//     });
// }



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