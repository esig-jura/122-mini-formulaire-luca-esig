/**
 * @author Steve Fallet
 * @since 2022.09.06
 */

'use strict';


const formulaire=document.querySelector('form');
const txtMDP =document.querySelector('#mdp');
const txtMDPConfirm =document.getElementById('mdpc');
console.log(formulaire,txtMDPConfirm,txtMDP);



//écouter l'envoi du formulaire
formulaire.addEventListener('submit', (event)=>{
    event.preventDefault() //stoppe l envoie du formulaire.
    //récuperer valeur mdr et la confirmation

    let erreurs=[];

    if(txtMDP.value.length<3){
        erreurs.push('mdp trop court + que 3 caractères');
        return;
    }


    //tester les mdp pour qu ils soient identiques
    if (txtMDP.value!==txtMDPConfirm.value){
        erreurs.push('mdp differents')

    }



    if(erreurs.length>0){
        let msg="";
        for (let e of erreurs){
            msg += '\n-'+ e;

        }
        alert(msg)

        return
    }

        alert('Compte créé avec succés')
        formulaire.submit();


    alert(mdp+' : '+mdpConfirm);

    alert('Coucou!');
});

