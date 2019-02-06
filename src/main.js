import './style/style.css';
import './style/style.scss';
import 'terminal.css'



document.getElementById('browser').innerHTML = 'Browser????';

// var info={
//
//     timeOpened:new Date(),
//     timezone:(new Date()).getTimezoneOffset()/60,
//
//     pageon(){return window.location.pathname},
//     referrer(){return document.referrer},
//     previousSites(){return history.length},
//
//     browserName(){return navigator.appName},
//     browserEngine(){return navigator.product},
//     browserVersion1a(){return navigator.appVersion},
//     browserVersion1b(){return navigator.userAgent},
//     browserLanguage(){return navigator.language},
//     browserOnline(){return navigator.onLine},
//     browserPlatform(){return navigator.platform},
//     javaEnabled(){return navigator.javaEnabled()},
//     dataCookiesEnabled(){return navigator.cookieEnabled},
//     dataCookies1(){return document.cookie},
//     dataCookies2(){return decodeURIComponent(document.cookie.split(";"))},
//     dataStorage(){return localStorage},
//
//     sizeScreenW(){return screen.width},
//     sizeScreenH(){return screen.height},
//     sizeDocW(){return document.width},
//     sizeDocH(){return document.height},
//     sizeInW(){return innerWidth},
//     sizeInH(){return innerHeight},
//     sizeAvailW(){return screen.availWidth},
//     sizeAvailH(){return screen.availHeight},
//     scrColorDepth(){return screen.colorDepth},
//     scrPixelDepth(){return screen.pixelDepth},
//
//
//     latitude(){return position.coords.latitude},
//     longitude(){return position.coords.longitude},
//     accuracy(){return position.coords.accuracy},
//     altitude(){return position.coords.altitude},
//     altitudeAccuracy(){return position.coords.altitudeAccuracy},
//     heading(){return position.coords.heading},
//     speed(){return position.coords.speed},
//     timestamp(){return position.timestamp},
//
//
// };

// console.log(info);

var txt = "";
txt += "Browser CodeName: " + navigator.appCodeName +'\n';
txt += "Browser Name: " + navigator.appName +'\n';
txt += "Browser Version: " + navigator.appVersion +'\n';
txt += "Cookies Enabled: " + navigator.cookieEnabled +'\n';
txt += "Browser Language: " + navigator.language +'\n';
txt += "Browser Online: " + navigator.onLine +'\n';
txt += "Platform: " + navigator.platform +'\n';
txt += "User-agent header: " + navigator.userAgent;

console.log(txt);

var onLine = true;
var offLine = false;

var isOnline = navigator.onLine ? onLine : offLine;

console.log(isOnline);

document.getElementById('online_status').innerHTML = `Is online: `+isOnline;

var screenHeight = window.screen.height;
var screenWidth = window.screen.width;

document.getElementById('screen').innerHTML = `
Width: ${screenWidth} <br>
Height: ${screenHeight}
`;