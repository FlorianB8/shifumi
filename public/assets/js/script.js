let random = 0;
let resultBot = document.getElementById('resultBot');
let resultPlayer = document.getElementById('resultPlayer');
let resultParty = document.getElementById('resultParty');
let btnPaper = document.getElementById('btnPaper');
let btnRock = document.getElementById('btnRock');
let btnScissors = document.getElementById('btnScissors');
let buttons = document.querySelectorAll('.btnChoice');
let btnStat = document.getElementById('btnStat');
let btnReset = document.getElementById('btnReset');
let victoryStat = document.getElementById('victoryStat');
let loseStat = document.getElementById('loseStat'); 
let drawStat = document.getElementById('drawStat');
let nbParty = 0;
let nbLose = 0;
let nbWin = 0;
let nbDraw = 0;
let scissors = 0;
let paper = 2;
let rock = 1;
let vs = document.getElementById('vs');
let noGame = document.getElementById('noGame');
let heart1 = document.getElementById('heart1');
let heart2 = document.getElementById('heart2');
let heart3 = document.getElementById('heart3');
let heart4 = document.getElementById('heart4');
let heart5 = document.getElementById('heart5');
let heart6 = document.getElementById('heart6');
let allGame = document.getElementById('allGame');
let divGame = document.getElementById('divGame');
let divMsgWin = document.getElementById('divMsgWin');
let divMsgLose = document.getElementById('divMsgLose');

const hurtMc = document.getElementById("hurtMc");
const hurtVillager = document.getElementById("hurtVillager");
const anvil = document.getElementById("anvil");

buttons.forEach(button => {
    button.addEventListener('click', () => {
        // Ajout des attributs disabled après 5 secondes pour éviter le spam de bouton
        noGame.classList.add('d-none');
        btnRock.setAttribute('disabled', '');
        btnPaper.setAttribute('disabled', '');
        btnScissors.setAttribute('disabled', '');
        // Suppresion des attributs disabled après 5 secondes pour éviter le spam de bouton
        setTimeout(() => {
            btnRock.removeAttribute('disabled');
            btnPaper.removeAttribute('disabled');
            btnScissors.removeAttribute('disabled');
        }, 5000)
        //Suppresion de l'animation en cours de chaque résultat de la manche en cours
        setTimeout(() => {
            resultPlayer.removeAttribute('class');
        },2500)
        setTimeout(() => {
            vs.removeAttribute('class');
        },3000)
        setTimeout(() => {
            resultBot.removeAttribute('class');
        },5000)

        resultBot.innerHTML = "";
        resultParty.innerHTML = "";
        resultPlayer.innerHTML = "";
        vs.innerHTML = "";
        resultParty.removeAttribute('class');
        random = parseInt(Math.random()*3); 
        // Affichage du choix utilisateur (piere, feuille, ciseau) et de la valeur aléatoire entre 0 et 2 avec chacun correspondant à un choix (pierre, feuille, ciseau);
        if(random == scissors){
            //Ajout de la class pour l'animation d'entrée
            resultPlayer.classList.add("enter");
            //Condition pour vérifier la valeur du bouton pour l'afficher dans le résultat du player
            if(button.value == 'Ciseaux'){
                resultPlayer.innerHTML = `<img src="public/assets/img/cisailles.png" alt="Image d\'une cisaille minecraft">`;
            }else if (button.value == 'Pierre'){
                resultPlayer.innerHTML = `<img src="public/assets/img/pierre.png" alt="Image de cobblestone minecraft">`;
            }else {
                resultPlayer.innerHTML = `<img src="public/assets/img/feuille.png" alt="Image de feuille minecraft">`;
            }
            setTimeout(() => {
                vs.classList.add("enter");
                vs.innerHTML = 'VS';
            }, 1500)
            setTimeout(() => {
                resultBot.classList.add("enter");
                resultBot.innerHTML = '<img src="public/assets/img/cisailles.png" alt="Image d\'une cisaille minecraft">';
            }, 2500)
        } else if (random == rock){
            //Ajout de la class pour l'animation d'entrée
            resultPlayer.classList.add("enter");
            //Condition pour vérifier la valeur du bouton pour l'afficher dans le résultat du player
            if(button.value == 'Ciseaux'){
                resultPlayer.innerHTML = `<img src="public/assets/img/cisailles.png" alt="Image d\'une cisaille minecraft">`;
            }else if (button.value == 'Pierre'){
                resultPlayer.innerHTML = `<img src="public/assets/img/pierre.png" alt="Image de cobblestone minecraft">`;
            }else {
                resultPlayer.innerHTML = `<img src="public/assets/img/feuille.png" alt="Image de feuille minecraft">`;
            }
            setTimeout(() => {
                vs.classList.add("enter");
                vs.innerHTML = 'VS';
            },1500)
            setTimeout(() => {
                resultBot.classList.add("enter");
                resultBot.innerHTML = '<img src="public/assets/img/pierre.png" alt="Image de cobblestone minecraft">';
            }, 2500)
        }else {
            //Ajout de la class pour l'animation d'entrée
            resultPlayer.classList.add("enter");
            //Condition pour vérifier la valeur du bouton pour l'afficher dans le résultat du player
            if(button.value == 'Ciseaux'){
                resultPlayer.innerHTML = `<img src="public/assets/img/cisailles.png" alt="Image d\'une cisaille minecraft">`;
            }else if (button.value == 'Pierre'){
                resultPlayer.innerHTML = `<img src="public/assets/img/pierre.png" alt="Image de cobblestone minecraft">`;
            }else {
                resultPlayer.innerHTML = `<img src="public/assets/img/feuille.png" alt="Image de feuille minecraft">`;
            }
            setTimeout(() => {
                vs.classList.add("enter");
                vs.innerHTML = 'VS';
            }, 1500)
            setTimeout(() => {
                resultBot.classList.add("enter");
                resultBot.innerHTML = '<img src="public/assets/img/feuille.png" alt="Image de feuille minecraft" >';
            }, 2500)
        }
         // Comparaison de la valeur du bouton utilisé (feuille, ciseaux ou pierre) et de la valeur aléatoire entre 0 et 2 pour afficher la victoire, la défaite ou l'égalité

        // En cas d'égalité 

         if((button.value == 'Ciseaux' && random == scissors) || (button.value == 'Pierre' && random == rock) || (button.value == 'Feuille' && random == paper) ) {
            //Affichahe de l'égalité à la fin de l'affichage des résultats bot et joueur
            setTimeout(() => {
                resultParty.innerHTML = "Egalite";
                resultParty.className = "text-secondary enter";
                nbDraw++;
                drawStat.innerHTML = `Egalite : <span class="text-secondary">${nbDraw}<span>`;
                anvil.play();
            }, 4000)
            
            // En cas de victoire 

        } else if ((button.value == 'Ciseaux' && random == paper) || (button.value == 'Pierre' && random == scissors) || (button.value == 'Feuille' && random == rock)) {
            setTimeout(() => {
                //Affichahe de la victoire à la fin de l'affichage des résultats bot et joueur
                resultParty.innerHTML = "Victoire";
                resultParty.className = "green enter";
                nbWin++;
                victoryStat.innerHTML = `Victoire : <span class="text-success">${nbWin}<span>`;

                // Modification des coeurs dès que l'on perd une manche

                if(nbWin == 1){
                    heart4.src = "./public/assets/img/hp1.png";
                    setTimeout(() => {
                        heart4.src = "./public/assets/img/hp3.png";
                        heart4.classList.add('item3');

                    }, 200)
                }else if(nbWin == 2) {
                    heart5.src = "./public/assets/img/hp1.png";
                    setTimeout(() => {
                        heart5.src = "./public/assets/img/hp3.png";
                        heart5.classList.add('item3');
                    }, 200)
                }else if(nbWin == 3) {
                    heart6.src = "./public/assets/img/hp1.png";
                    setTimeout(() => {
                        heart6.src = "./public/assets/img/hp3.png";
                    }, 200)
                }
                hurtVillager.play();
                allGame.classList.remove('bg-white');
                allGame.classList.add('bg-success');
                setTimeout(() => {
                    allGame.classList.remove('bg-success');
                    allGame.classList.add('bg-white');
                }, 1000);
                setTimeout(() => {
                    if(nbWin == 3){
                        allGame.classList.remove('bg-white');
                        allGame.classList.add('bg-success');
                        divGame.classList.add('d-none');
                        divMsgWin.classList.remove('d-none');
                    }
                }, 1000);
            }, 4000)
            
          
            
            // En cas de défaite 

        } else {
            setTimeout(() => {
                //Affichahe de la défaite à la fin de l'affichage des résultats bot et joueur
                resultParty.innerHTML = "Defaite";
                resultParty.className = "red enter";
                nbLose++;
                loseStat.innerHTML = `Defaite : <span class="text-danger">${nbLose}<span>`;

                // Modification des coeurs dès que l'on perd une manche
                if(nbLose == 1){
                    heart1.src = "./public/assets/img/hp1.png";
                    setTimeout(() => {
                        heart1.src = "./public/assets/img/hp3.png";
                        heart1.classList.add('item3');

                    }, 200)
                }else if(nbLose == 2) {
                    heart2.src = "./public/assets/img/hp1.png";
                    setTimeout(() => {
                        heart2.src = "./public/assets/img/hp3.png";
                        heart2.classList.add('item3');
                    }, 200)
                }else if(nbLose == 3) {
                    heart3.src = "./public/assets/img/hp1.png";
                    setTimeout(() => {
                        heart3.src = "./public/assets/img/hp3.png";
                    }, 200)
                }
                allGame.classList.remove('bg-white');
                allGame.classList.add('bg-danger');
                hurtMc.play();
                setTimeout(() => {
                    allGame.classList.remove('bg-danger');
                    allGame.classList.add('bg-white');
                }, 1000);
                setTimeout(() => {
                    if(nbLose == 3){
                        allGame.classList.remove('bg-white');
                        allGame.classList.add('bg-danger');
                        divGame.classList.add('d-none');
                        divMsgLose.classList.remove('d-none');
                    }
                }, 1000);
                
            }, 4000)
        }
    })
});


function resetStats() {
    nbDraw = 0;
    nbParty = 0;
    nbLose = 0;
    nbWin = 0;
    resultBot.innerHTML = "";
    resultParty.innerHTML = "";
    resultPlayer.innerHTML = "";
    loseStat.innerHTML = "";
    victoryStat.innerHTML = "";
    drawStat.innerHTML = "";
    vs.innerHTML = "";
    noGame.classList.remove('d-none');
    heart1.src = "./public/assets/img/hp.png";
    heart2.src = "./public/assets/img/hp.png";
    heart3.src = "./public/assets/img/hp.png";
    heart4.src = "./public/assets/img/hp.png";
    heart5.src = "./public/assets/img/hp.png";
    heart6.src = "./public/assets/img/hp.png";
    divGame.classList.remove('d-none');
    divMsgLose.classList.add('d-none');
    divMsgWin.classList.add('d-none');
    allGame.classList.remove('bg-danger');
    allGame.classList.add('bg-white');
    heart1.classList.remove('item3');
    heart2.classList.remove('item3');
    heart4.classList.remove('item3');
    heart5.classList.remove('item3');

}

btnReset.addEventListener('click', resetStats);

