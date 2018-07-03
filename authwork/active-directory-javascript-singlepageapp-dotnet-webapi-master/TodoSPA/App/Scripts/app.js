
/* To check if the URL contains the access token*/
var currentURL = window.location.href;                 
var arrhash = currentURL.split("#");
var arrAmp;
var accessToken;

if (arrhash.length > 1) {
    var arrtemp = arrhash[1];
    arrAmp = arrtemp.split("&");
    
    accessToken = arrAmp[0];
    accessToken = accessToken.replace("access_token=", "");
    API(accessToken);
}

/*starts get Request from Microsoft graph Api*/
 
function API(token) {
    var key = "Bearer " + token;
    var url = "https://graph.microsoft.com/v1.0/cccbf502-6b91-40d6-be02-5ffa0eb711d6/users/15000b65-4d66-4d8a-9a03-980bed8be18c/calendar/events";
    console.log(httpGet(url, key));
}


function httpGet(url, key) {
    console.log(key);
    console.log("IN REQUEST");
    var req = new XMLHttpRequest();
    req.open("GET", url, false);
    req.setRequestHeader("Authorization", key);
    req.send(null);
    return req.responseText;
}
/*Authorize the Pi and get access token which is returned in the URL from redirect from Azure*/
function Authorize() {
   
    window.location.href = "https://login.microsoftonline.com/cccbf502-6b91-40d6-be02-5ffa0eb711d6/oauth2/v2.0/authorize?" +
        "client_id=2bd95660-7a62-4dbf-879d-f60294edf8d9" +
        "&response_type=id_token+token" +
        "&redirect_uri=https%3A%2F%2Flocalhost%3A44302" +
        "&scope=openid%20https%3A%2F%2Fgraph.microsoft.com%2Fmail.read" +
        "&response_mode=fragment" +
        "&state=12345" +
        "&nonce=678910";


}

