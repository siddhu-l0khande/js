

const celcius = document.querySelector('#calcius');
const kelvin = document.querySelector('#kalvin');
const farenhite = document.querySelector('#Farenhite');


celcius.addEventListener('input', () =>{
    let c = parseFloat(celcius.value);
    let f = (c*9 / 5)+32;
    let k = c + 273.15;

    farenhite.value = f;
    kelvin.value = k;
});
kelvin.addEventListener('input', () =>{
    let c = k -273.15;
    let f = (k + 273.15 ) *9 / 5+32;
    let k =parseFloat(kelvin.value);

    farenhite.value = f;
    celcius.value = c;
});
farenhite.addEventListener('input', () =>{
    let c = (f-32)*5 / 9;
    let f = parseFloat(farenhite.value);
    let k = (f-32)*5 / 9 +273.15;

    celcius.value = c;
    kelvin.value = k;
});