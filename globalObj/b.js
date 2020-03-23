export default function glgl() {
    let str = '+(() => {outFunctionA(123123);})();';
    (()=>{return eval(str)}).call(this);
}
