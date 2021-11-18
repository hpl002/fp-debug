const state = require("./state.json")
var differenceInMilliseconds = require('date-fns/differenceInMilliseconds')



const main = (state) => {
const confirmSignees = state.donetasks.find(e=>e.taskType==="sign-customer-agreement").completedAt
const completed = state.donetasks.find(e=>e.taskType==="successful-onboarding").completedAt

console.log("confirm singees", confirmSignees);
console.log("completed", completed);
const diff = differenceInMilliseconds(new Date(completed), new Date(confirmSignees))
console.log("diff - mill", diff)  
console.log("diff - sec", (diff/1000))  
//2021-11-18T14:29:10.745Z
}

main(state)