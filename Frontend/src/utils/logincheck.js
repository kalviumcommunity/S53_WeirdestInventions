import { getCookie } from "./cookies" //to check the login page

export function loginCheck(){
    const username = getCookie("username")
    if(username.length==0){
        return false
    }else{
        return true
    }
}