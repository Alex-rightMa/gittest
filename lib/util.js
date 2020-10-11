let pubConfig = {
    ver: 1.0,
    name: 'public tools'
}
function logTime(){
    let now = new Date().toLocaleString();
    console.log(`this time is ${now}`);
}


export {pubConfig, logTime} 