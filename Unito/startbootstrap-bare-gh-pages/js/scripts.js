/*!
* Start Bootstrap - Bare v5.0.7 (https://startbootstrap.com/template/bare)
* Copyright 2013-2021 Start Bootstrap
* Licensed under MIT (https://github.com/StartBootstrap/startbootstrap-bare/blob/master/LICENSE)
*/
// This file is intentionally blank
// Use this file to add JavaScript to your project




/*JS til gadet afsnit - fra video https://www.youtube.com/watch?v=MAGWkufL9cg */
//JS for kogende vand
//føreste linje nedenståene siger bare at dette er den funktion der bliver hentet når before knappen i HTML bliver trykket på.
function before () {
    document.getElementById('myImage')
    .src="img/kogende.png"; /*vi tilføjer/udskifter det orginale billede*/

     /*nedenstående indsætter vi en ny overskrift for vores h2 med id message/ vi udskifter h2 med en ny tekst*/
    document.getElementById('message')
    .innerHTML="Kogende vand"

     /*nedenstående indsætter vi en ny brødteks for vores p-tag med id brødtekst*/
     /*Lavet på samme måde som ovenstående afsnit m. h2 - bare ændret id og istedet for et h2 er det et p-tag*/
     document.getElementById('brødtekst')
     .innerHTML="Med SVS Unito Infinity's kogende egenskab kan du nu, ikke bare få kogende vand på 100grader ud af din vandhane. Du kan også selv indstille temperaturen fra 60-100grader, så du nu kan få din te eller kaffe brygget med den helt rigtige temperatur for dig." //her skriver du hvad der skal udskrifte den orginale tekst.
}

//JS for normal
function before1 () {
    document.getElementById('myImage')
    .src="img/vandhane.png"; /*vi tilføjer et billede*/

     /*nedenstående indsætter vi en ny overskrift for vores h2 med id message*/
    document.getElementById('message')
    .innerHTML="Normal vandhane"

     /*nedenstående indsætter vi en ny brødteks for vores p-tag med id brødtekst*/
     /*Lavet på samme måde som ovenstående afsnit m. h2 - bare ændret id og istedet for et h2 er det et p-tag*/
     document.getElementById('brødtekst')
     .innerHTML="SVS Unito Infinity har mange egenskaber, men den kan også bruges som en almindelig vandhane." //her skriver du hvad der skal udskrifte den orginale tekst.
}

//JS for filtreret vand
function after () {
    document.getElementById('myImage')
     .src="img/filtreret.jpg"; /*vi tilføjer/udskifter et billede*/

     /*nedenstående indsætter vi en ny overskrift for vores h2 med id message*/
    document.getElementById('message')
    .innerHTML="Filtreret vand"

    /*nedenstående indsætter vi en ny brødteks for vores p-tag med id brødtekst*/
    document.getElementById('brødtekst')
    .innerHTML="I Danmark har vi en god vandkvalitet på vores postevand, men der er stadige gode fordele ved, at drikke filtreret vand. Ved at filtrere dit drikkevand, reducere du indholdet af bakterier og andre urenheder i  vandet. Ved at bruge SVS Unito Infinity filtrerings egenskaber kan du forbedre dit drikkevands smag og lugt."
}


//JS for isvand
function after2 () {
    document.getElementById('myImage')
    .src="img/is.jpg"; /*vi tilføjer/udskifter et billede*/

    /*nedenstående indsætter vi en ny overskrift for vores h2 med id message*/
    document.getElementById('message')
    .innerHTML="Isvand"

    /*nedenstående indsætter vi en ny brødteks for vores p-tag med id brødtekst*/
    document.getElementById('brødtekst')
    .innerHTML="Vælg isvands temperatur, lige efter din smag. Er du til iskold vand på 3 grader eller er du til kold vand på 12 grader. Med SVS Unito Infinity kan du nu få din isvand koldere, end du nogensinde har kunnet før, hvilket   kun har været ned til 7 grader."
}


//JS for mix vand
function after3 () {
    document.getElementById('myImage')
    .src="img/mix.jpg"; /*vi tilføjer/udskifter et billede*/

    /*nedenstående indsætter vi en ny overskrift for vores h2 med id message*/
    document.getElementById('message')
    .innerHTML="Mix vand"

    /*nedenstående indsætter vi en ny brødteks for vores p-tag med id brødtekst*/
    document.getElementById('brødtekst')
    .innerHTML="Med SVS Unito Infinity's mixer ventil, kan du mixe og matche din vand, som du har lyst. For eksempel ved at mixe kogende og isvand, kan du få vand på 30grader hvis det er det, du har lyst til."
}


//JS for vand med brus
function after4 () {
    document.getElementById('myImage')
    .src="img/brus.jpg"; /*vi tilføjer/udskifter et billede*/

    /*nedenstående indsætter vi en ny overskrift for vores h2 med id message*/
    document.getElementById('message')
    .innerHTML="Vand med brus"

    /*nedenstående indsætter vi en ny brødteks for vores p-tag med id brødtekst*/
    document.getElementById('brødtekst')
    .innerHTML="Med SVS Unito Infinity behøver du aldrig mere have danskvands flasker til at fylde i dit køleskab eller drikke flad danskvand, fordi flasken har være åben for længe. Med dette vandsystem kan du bare åbne for vandhanen og du har danskvand. Du kan også selv vælge mængden af brus i din danskvand, det eneste du skal bruge penge på efter dit køb af SVS Unito Infinity er CO2 flasker."
}
