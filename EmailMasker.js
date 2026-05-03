function maskEmail(email){
    let atIndex = email.indexOf("@");
    let username = email.slice(0,atIndex);
    let domain = email.slice(atIndex);
    
    let firstChar = username[0];
    let lastChar = username[username.length -1];
    
    let star = "*".repeat(username.length -2);

    return firstChar + star +lastChar + domain;

}
let email = "example@gmail.com";
console.log(maskEmail(email));
console.log(maskEmail("ebenezer@gmail.com"));