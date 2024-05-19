/**
 * Binary search approach with  with small optimization
 *
 * @param {number[]} spells
 * @param {number[]} potions
 * @param {number} success
 * @return {number[]}
 */
var successfulPairs = function (spells, potions, success) {
    const pairs = [];
    potions.sort((a, b) => a - b);
    const spellsLength = spells.length;
    const potionsLength = potions.length;

    for(let i=0;i<spellsLength;i++){
        let count=0
       for(let j=0;j<potionsLength;j++){
        console.log(spells[i] * potions[j])

        if(spells[i] * potions[j] >=success  ){
            count++

        }
       }
       pairs.push(count)

    }
    return pairs
};