module.exports = function check(str, bracketsConfig) {
    let arr = [];
    let objBrackets = {};
    let stack = [];
    let er = [];

    for (let i = 0; i < bracketsConfig.length; i++) {
        arr[i] = bracketsConfig[i][0];
        objBrackets[bracketsConfig[i][1]] = bracketsConfig[i][0];
        if (bracketsConfig[i][0] === bracketsConfig[i][1]) { er.push(bracketsConfig[i][0]); }
    }

    if (!arr.includes(str[0])) { return false; }

    for (let i = 0; i < str.length; i++) {
        if (arr.includes(str[i]) && !er.includes(str[i])) { stack.push(str[i]); }
        else if (er.includes(str[i]) && !stack.includes(str[i])) { stack.push(str[i]); }
        else if (stack.length === 0) { return false; }
        else if (objBrackets[str[i]] === stack[stack.length - 1]) { stack.pop(); }
        else { return false; }
    }
    
    if (stack.length === 0) { return true; }
    else { return false; }
}
