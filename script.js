let inputField = document.getElementById("answer");
let btn = document.querySelector(".btn"); 
let result = document.querySelector(".result-txt"); 

btn.addEventListener("click", ()=>{
    let str = inputField.value; 
    str = str.toLowerCase();
    let strArr = str.match(/[a-z0-9]/g); 
    let test1 = strArr; 
    let test2 = [];
    for(var i = strArr.length; i >= 0; i--){
        test2.push(strArr[i]); 
    }
    test2 = test2.join(""); 
    test1 = test1.join(""); 
    
    if(test1 == test2){
        result.textContent = "Yes, it is a palindrome!";
        return true;
    }else{
        result.textContent = "No, it is not a palindrome!";
        return false; 
    }
     
}); 