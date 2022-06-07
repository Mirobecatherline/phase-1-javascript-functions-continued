// code your solution here
function saturdayFun(game='roller-skate') {
    return `This Saturday, I want to ${game}!`;
}
function mondayWork(response='go to the office') {
    return `This Monday, I will ${response}.`;
}
function wrapAdjective(params="*") {
    return function name(def="a hard worker") {
        return `You are ${params}${def}${params}!`
    }
}
