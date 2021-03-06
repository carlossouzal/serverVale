const bcrypt = require('bcrypt');

const generate = async (str) => {
    if(typeof(str) !== "string")
        throw new TypeError('O parametro não é uma string');

    if(str.length <= 0)
        throw new TypeError('A senha esta vazia');

    const saltRounds = 10;
    const salt = await bcrypt.genSalt(saltRounds);
    const hash = await bcrypt.hash(str, salt);

    return hash;
};

const compare = async ( hash, str ) => {
    if(typeof(str) !== "string")
        throw new TypeError('O parametro não é uma string');

    if(str.length <= 0)
        throw new TypeError('A senha esta vazia');
        
    const res = await bcrypt.compare(str, hash); 
    return res;
} 

module.exports = {generate, compare};