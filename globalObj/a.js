import glgl from "./b";

const outFunctionA = (i) => console.log("outFunctionA:", i);

global['outFunctionA'] =outFunctionA;
// if you don't set the "outFunctionA" attribute in global(node.js), you can't get it.
// global(node.js) === window(js)

glgl();
