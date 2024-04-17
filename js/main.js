/**
 * @author Steve Fallet
 * @since 2022.09.06
 */

'use strict';


const formulaire=document.querySelector('form');
const txtMDP =document.querySelector('#mdp');
const txtMDPConfirm =document.querySelector('#mdpc');

console.log(formulaire);


//écouter l envoi du formulaire
formulaire.addEventListener('submit',function coucou(){
    alert('Coucou!');
});

