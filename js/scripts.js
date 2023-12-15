const playButton = document.getElementById ('play-button');
console.log ('playButton', playButton, typeof playButton);

const selectDifficult = document.getElementById ('difficult');
console.log ('selectDifficult', selectDifficult, typeof selectDifficult);

let point = 0;
playButton.addEventListener('click', startgame);

//inizio gioco
function startgame() {
    const cellNumber = parseInt (selectDifficult.value);
    const bombNumber = 16;

    const bomb = [];
    while (bomb.length < bombNumber){
        const newRandomNumber = getRandomNumber(1, cellNumber);
        console.log ('newRandomNumber', newRandomNumber, typeof newRandomNumber);

        if (!bomb.includes(newRandomNumber)) {
            bomb.push(newRandomNumber);
        }
    }

    let gridContainer = document.querySelector ('.container-main');
    gridContainer.innerHTML = '';

    for(let i = 1; i <= cellNumber; i++){
        const cell = document.createElement ('div');
        cell.innerHTML = i;
        cell.classList.add ('cell');

        cell.addEventListener ('click', function() {
            const allClickBomb = document.querySelectorAll ('.cell.bomb');
            console.log ('allClickBomb', allClickBomb, typeof allClickBomb);
            console.log ('punteggio', allClickBomb.length, typeof allClickBomb.length);

            const allClickCell = document.querySelectorAll ('.cell.clicked');
            console.log ('allClickCell', allClickCell, typeof allClickCell);
            console.log ('punteggio', allClickCell.length, typeof allClickCell.length);
   

            if (allClickBomb.length == 0 && allClickCell.length < (cellNumber - bombNumber))
                {
                console.log ('this', this, typeof this);

                const numberInCell = parseInt (this.innerText);
                console.log ('numberInCell', numberInCell, typeof numberInCell);
    
                
                if (bomb.includes(numberInCell) == false) {
                    
                    this.classList.add ('clicked');
                    point++;
                    if (document.querySelectorAll ('.cell.clicked').length == (cellNumber -bombNumber)) (
                        alert ('hai vinto! hai totalizzato:' + document.querySelectorAll('.cell.clicked').length + 'punti')
                    )
                    
                }    
                else {
                    this.classList.add ('bomb');
                    alert ('hai perso! hai totalizzato:' + allClickCell.length + 'punti');
                }
                                
            }
                          
        });

        gridContainer.append (cell);
    }

}

//function

function getRandomNumber(min, max) {
    return Math.floor(Math.random() * (max - min + 1) ) + min;
  }