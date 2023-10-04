 const getRandomNumber = (diceCount)=>{
     return new Array(diceCount).fill(0).map(()=>{
     return Math.floor(Math.random() * 6 ) + 1
     })
 }

const getPercentage = (maxHealth,currentHealth)=>{
  return currentHealth / maxHealth * 100   
 }
 
 
const getEmptyHtml = (diceCount)=>{
        return new Array(diceCount).fill(0).map(()=>{
           return  `<div class="placeholder-dice"></div>`
        }).join('')   
    }
    
export {getEmptyHtml , getRandomNumber,getPercentage}
