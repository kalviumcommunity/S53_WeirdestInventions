export function getCookie(cookieName) {
    const name = cookieName + "=";
    
    // Decode and split the document.cookie string into an array of individual cookies
    const decodedCookie = decodeURIComponent(document.cookie);
    const cookieArray = decodedCookie.split(';');
  
    // Loop through each cookie in the array
    for (let i = 0; i < cookieArray.length; i++) {
      let cookie = cookieArray[i];
  
      // Remove leading spaces (if any)
      while (cookie.charAt(0) == ' ') {
        cookie = cookie.substring(1);
      }
  
      // If the cookie name matches, return its value
      if (cookie.indexOf(name) == 0) {
        return cookie.substring(name.length, cookie.length);
      }
    }
  
    // If the cookie is not found, return null
    return null;
  }
  
  export function deleteCookie(cookieName) {
    document.cookie =
      cookieName + "=; expires=Thu, 01 Jan 1970 00:00:00 UTC; path=/;";
  }