function passwordGenerator(length,addlowerCases,addnumbers,addsymbols,addupperCases)  {
   
    const lowerCasesCharacter = "abcdefghijklmnopqrstuvwxyz";
    const upperCasesCharacter = "ABCDEFGHIJKLMNOPQRSTUVWXYZ";
    const numbersCharacters = '0123456789';
    const symbolsCharacter = "!@#$%^&*()_+:<>?/+-*"

    let allowedcharacter = "";
    let password = "";

    allowedcharacter += addlowerCases ? lowerCasesCharacter :"";
    allowedcharacter += addupperCases ? upperCasesCharacter :"";
    allowedcharacter += addnumbers ? numbersCharacters :"";
    allowedcharacter += addsymbols ? symbolsCharacter :"";

    for(let i = 0;i<length;i++) {
        const randomIndex = Math.floor(Math.random() * allowedcharacter.length);
        password += allowedcharacter[randomIndex];
    }
    return password;

} 
const passwordLength = 20;
const addlowerCases = true;
const addupperCases = true;
const addnumbers = true;
const addsymbols = true;

const password = passwordGenerator(passwordLength,addlowerCases,addnumbers,addsymbols,addupperCases)

console.log(`GeneratedPassword${password}`);



