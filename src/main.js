// import './style/style.css';
import './style/style.scss';
import 'terminal.css'

//  main app

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

//  getting user machine info

var txt = "";
txt += "Browser CodeName: " + navigator.appCodeName + '\n';
txt += "Browser Name: " + navigator.appName + '\n';
txt += "Browser Version: " + navigator.appVersion + '\n';
txt += "Cookies Enabled: " + navigator.cookieEnabled + '\n';
txt += "Browser Language: " + navigator.language + '\n';
txt += "Browser Online: " + navigator.onLine + '\n';
txt += "Platform: " + navigator.platform + '\n';
txt += "User-agent header: " + navigator.userAgent;

console.log(txt);

//  get online status and print to div

var onLine = true;
var offLine = false;

var isOnline = navigator.onLine ? onLine : offLine;

document.getElementById('online_status').innerHTML = `Is online: ` + isOnline;

//  get screen resolution and print to div

var screenHeight = window.screen.height;
var screenWidth = window.screen.width;

document.getElementById('screen').innerHTML = `
Width:  ${screenWidth}px<br>
Height: ${screenHeight}px
`;

//  get OS information and print to a div

var cutText = navigator.appVersion.split('; ');
var cutText2 = cutText[1].split(') ');

document.getElementById('os_info').innerHTML = `Your OS: <br>` + cutText2[0];

//  get date & time and print to a div

function getDate() {

    var getCurrentDate = new Date();

    var secondsWithZero = getCurrentDate.getSeconds();
    console.log(secondsWithZero);
    if (secondsWithZero >= 0 && secondsWithZero <= 9) {
        secondsWithZero = '0' + secondsWithZero;
        console.log(secondsWithZero);
    }

    var minutesWithZero = getCurrentDate.getMinutes();
    console.log(minutesWithZero);
    if (minutesWithZero >= 0 && minutesWithZero <= 9) {
        minutesWithZero = '0' + minutesWithZero;
        console.log(secondsWithZero);
    }

    var dateTime = getCurrentDate.getDate() + "/" + (getCurrentDate.getMonth() + 1)
        + "/" + getCurrentDate.getFullYear() + '\n'
        + getCurrentDate.getHours() + ":"
        + minutesWithZero + ":" + secondsWithZero;

    document.getElementById('date_time').innerHTML = dateTime;
};

setInterval(getDate, 1000);

//