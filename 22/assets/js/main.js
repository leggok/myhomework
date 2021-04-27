function userName(){
    let userName = prompt("Как тебя зовут?");
    alert("Привет, " + userName);
}

function userOld(){
    const y = 2021;
    let userYear = parseInt(prompt("Год?")),
        rez = y - userYear;
    alert(rez);
}

function userPer(){
    let len_q = parseInt(prompt("Длина стороны?")),
        rez = 4 * len_q;
    alert(rez);
}

function userRad(){
    let circle_rad = parseInt(prompt("Радиус?")),
        rez = Math.PI * Math.pow(circle_rad, 2);
    alert(rez);

}
function userSpeed(){
    let km = parseInt(prompt("Растояние?")),
        time = parseInt(prompt("Время?")),
        rez = km/time;
    alert(rez);
}

function userMoney(){
    const k = 0.83;
    let d_m = parseInt(prompt("Доллар?")),
        rez = k * d_m;
    alert(rez);
}

function userMemory(){
    const k = 820;
    let memory = parseInt(prompt("GB?")),
        rez = (memory*1024) / k;
    alert(parseInt(rez));
} 

function userChoco(){
    let money = parseInt(prompt("Money?")),
        price = parseInt(prompt("Price?")),
        hm = money / price;
    alert(`Сколько: ${parseInt(hm)}; Осталось: ${hm % 10}`);
}

function userNaoborot(){
    let numb = parseInt(prompt("Num?")),
        f = parseInt((numb / 100))+'',
        s = parseInt((parseInt(numb % 100)/10))+'',
        t = parseInt((parseInt(numb % 10)))+'';
        rez = t+s+f;
        alert(rez);
}

function userProc(){
    let money = parseInt(prompt("Money?")),
        rez = money * (1 + 5 * 2);
    alert(rez);
}