import characterData from './data.js'
import {getEmptyHtml,getRandomNumber,getPercentage} from './utils.js'

class Character{
    constructor(data)
    {
        Object.assign(this,data)
        this.diceHtml = getEmptyHtml(this.diceCount)
        this.maxHealth = this.health
    }
    
    takeDamage = function(currentDiceArray)
        {
        this.totalAttack = currentDiceArray.reduce((total,current)=> total + current)
        
        this.health -= this.totalAttack
        if(this.health <= 0)
        {
            this.health = 0
            this.dead = true
        }
        
    }
    
    getHealthHtml = function(){
    let percentage = getPercentage(this.maxHealth,this.health)
       return `<div class="health-bar-outer">
                    <div class="health-bar-inner ${percentage < 30 ? 'danger' : ''} " 
                    style="width: ${percentage}%;">
                    </div>
                </div>`
    }
    
    getDiceHtml = function(){
     this.currentDiceScore = getRandomNumber(this.diceCount)
     this.diceHtml = this.currentDiceScore.map((num)=>{
         return `<div class="dice">${num}</div>`
     }).join('')        
    }
    
    
    getCharactersHtml = function(){
        const {name,avatar,health,diceHtml} = this
        let healthHtml = this.getHealthHtml()
               
           return `<div class="character-card">
                <h4 class="name"> ${name} </h4>
                <img class="avatar" src="${avatar}" />
                <div class="health">health: <b> ${health} </b></div>
                ${healthHtml}
                <div class="dice-container">
                    ${diceHtml}
                </div>
            </div>`
                
    }
}

export default Character
