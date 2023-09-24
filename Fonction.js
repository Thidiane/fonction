"use strict";

let a= "Jean";
let b= "paul";
let result= checkname(a,b)

function checkname(name1, name2){
    if(name1===name2){
        return true
    }else{
        return false
    }
}console.log(result);