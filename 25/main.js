function one(){
    let f = document.getElementById("f_num").value,
        s = document.getElementById("s_num").value;
    let rez = comparison(f, s);
    document.getElementById("one_rez").innerText = rez;
}

function comparison(a, b){
    if(a<b){
        return -1;
    }else if(a>b){
        return 1;
    }else if(a===b){
        return 0;
    }
}

function two(){
    let f = document.getElementById("fact_num").value;
    let rez = factorial(f);
    document.getElementById("two_rez").innerText = rez;
}

function factorial(a){
    let t = 1;
    for(let i = 0; i<a; i++){
        t = t * (a-i);
    }
    return t;
}

function three(){
    let f = parseInt(document.getElementById("first_num").value),
        s = parseInt(document.getElementById("second_num").value),
        t = parseInt(document.getElementById("third_num").value);
    let rez = united(f, s, t);
    document.getElementById("three_rez").innerText = rez;
}

function united(a, b, c){
    return a*100 + b*10 +c;
}

function four(){
    let w = document.getElementById("width").value,
        h = document.getElementById("height").value;
    let rez = square(w, h);
    document.getElementById("four_rez").innerText = rez;
}

function square(w, h){
    if(h === "" || h === '0')h = w;
    if(w === "" || w === '0')w = h;
    return w*h;
}

function sover(){
    debugger;
    let s = document.getElementById("sover").value;
    let rez = sover_search(s);
    document.getElementById("sover_rez").innerText = rez;
}

function sover_search(s){
    let sum = 0;
    for(let i = 1; i < s; i++){
        if(s % i == 0){
            sum += i;
        }
    }
    if(sum == s){
        return true;
    }else{
        return false;
    }
}

function six(){
    let n = document.getElementById("minim").value,
        v = document.getElementById("maxim").value;
    let rez = diap_sover(n, v);
    document.getElementById("six_rez").innerText = rez;
}

function diap_sover(n, v){
    let r = '';
    for(let i = n; i < v; i++){
        if(sover_search(i)){
            r += i+';';
        }
    }
    return r;
}

function seven(){
    let h = parseInt(document.getElementById("hours").value),
        m = parseInt(document.getElementById("minutes").value),
        s = parseInt(document.getElementById("seconds").value);
    if(
        ((h<=24 && h>=0) || isNaN(h)) &&
        ((m<60 && m>=0) || isNaN(m)) &&
        ((s<60 && s>=0) || isNaN(s))
    ){
        let rez = clock(h, m, s);
        document.getElementById("seven_rez").innerText = rez;
    }else{
        document.getElementById("seven_rez").innerText = 'Incorrect data';
    }
}
/*Пробовал сделать function clock(h=0, m=0, s=0), но столкнулся с проблемой,
 что если не вводить число в в input то возвращает NaN, если убрать parseInt в верхней функции, то
 возвращает просто пустую строку. Как я понял undefined возникает когда переменная инициализирована, но пустая, это
 и должно проверяться тут function clock(h=0, m=0, s=0), но поскольку у меня возвращает NaN не смог сделать так.
 Так как получить undefined тут?) Через prompt тоже пробовал*/
function clock(h, m, s){
    if(isNaN(h)){
        h = 0;
    }
    if(isNaN(m)){
        m = 0;
    }
    if(isNaN(s)){
        s = 0;
    }
    if(h<=9){
        h = addzero(h);
    }
    if(m<=9){
        m = addzero(m);
    }
    if(s<=9){
        s = addzero(s);
    }
    return h + ":" + m + ":" + s
}

function addzero(a){
    return '0' + a;
}

function eight(){
    let h = parseInt(document.getElementById("hour").value),
        m = parseInt(document.getElementById("minute").value),
        s = parseInt(document.getElementById("second").value);
    if(isNaN(h)){h = parseInt(addzero(h));}
    if(isNaN(m)){m = parseInt(addzero(m));}
    if(isNaN(s)){s = parseInt(addzero(s));}
    let rez = times(h, m, s);
    document.getElementById("eight_rez").innerText = rez;
}
function times(h, m, s){
    if(h !== 0){
        h *= 3600;
    }
    if(m !== 0){
        m *= 60;
    }
    return h+m+s;
}

function nine(){
    debugger;
    let s = parseInt(document.getElementById("sec").value);
    if(isNaN(s)){s = 0;}
    let rez = rev_time(s);
    document.getElementById("nine_rez").innerText = rez;
}

function rev_time(t){
    let h = Math.floor(t / 60 / 60),
        m = Math.floor(t / 60) - h * 60,
        s = t % 60;
    if(h<=9){
        h = addzero(h);
    }
    if(m<=9){
        m = addzero(m);
    }
    if(s<=9){
        s = addzero(s);
    }
    return h + ':' + m + ':' + s;
}
