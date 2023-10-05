const buttons = document.querySelectorAll('button');
const screen = document.getElementById('screen');

buttons.forEach(button => {
    button.addEventListener('click', (event) =>{
     const boutonValue = event.target.value;
     //switch

     switch (boutonValue) {
        case '=':
            //eval est utilisée pour evaluer une expression mathematique
            screen.textContent = eval(screen.textContent);
            
            break;
        case 'C':
            screen.textContent = '';//pour effacer le contenu qui est dejq sur le screen   
           break;
        default:
            screen.textContent += boutonValue;
     }

    });
});