export default function sub(state = 0, action){
    if (action.type === "SUB"){
      return state - action.value;
    }
    return state;
  }