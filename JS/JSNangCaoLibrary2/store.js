import { createStore } from "./core.js"; 
import reducer from "./reducer.js";
import withlogger from "./logger.js";
const {attach, connect, dispacth} = createStore(withlogger(reducer));
window.dispacth = dispacth;
export{
    attach,
    connect
}