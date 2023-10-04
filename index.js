import characterData from '/data.js'
import Character from '/Character.js'

let monstersArray = ['orc','demon','goblin']
let isWaiting = false

const hero = new Character(characterData.hero)
let monster = newMonster()

function newMonster(){
    const nextMonster = characterData[monstersArray.shift()]
    return nextMonster ? new Character(nextMonster) : {}
}

function attack(){
    if(!isWaiting){
        hero.getDiceHtml()
        monster.getDiceHtml()    
        hero.takeDamage(monster.currentDiceScore)
        monster.takeDamage(hero.currentDiceScore)
        render()    
        
        if(hero.dead)
        {
            endGame()
            
        }
        else if(monster.dead)
        { 
         isWaiting = true
            if(monstersArray.length > 0)
            {
            setTimeout(function(){
                monster = newMonster() 
                render()
                isWaiting = false
            },1500)
            }
            else{
                endGame()
            }
        }
    }  
}

function endGame(){
    isWaiting = true
    const endMessage = hero.health === 0 && monster.health === 0 ?
        "No victors - all creatures are dead" :
        hero.health > 0 ? "The Wizard Wins" :
            "The monsters are Victorious"

    const endEmoji = hero.health > 0 ? "🔮" : "☠️"
    setTimeout(()=>{
        document.body.innerHTML = `
                <div class="end-game">
                    <h2>Game Over</h2> 
                    <h3>${endMessage}</h3>
                    <p class="end-emoji">${endEmoji}</p>
                </div>
                `        
    },1500)
}

function render(){
document.getElementById('hero').innerHTML = hero.getCharactersHtml()
document.getElementById('monster').innerHTML = monster.getCharactersHtml()
}

document.getElementById("attack-button").addEventListener('click',attack)

render()
