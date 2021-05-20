function sumOfDiap() {
    let f = parseInt(document.getElementById("min").value);
    const s = parseInt(document.getElementById("max").value);
    let rez=0;
    if(f!=s && !isNaN(f) && !isNaN(s)){
        while(f<s){
            f++;
            rez=rez+f;
            document.getElementById("rez").innerText = rez;
            console.log(rez);
        }
    }else{
        alert("Incorect data");
    }
}

function nod() {
    let f = parseInt(document.getElementById("first_num").value);
    let s = parseInt(document.getElementById("second_num").value);
    if (isNaN(f) || isNaN(s)){
        alert("Incorect data");
    }
    if (f == 0){
        document.getElementById("nod_rez").innerText = s;
    }
    if (s == 0){
        document.getElementById("nod_rez").innerText = f;
    }
    if (f!=0 && s!=0){
        while (s != 0) {
            if (f > s)
                f = f - s;
            else
                s = s - f;
        }
        document.getElementById("nod_rez").innerText = f;
    }
}

function deliteli() {
    let f = parseInt(document.getElementById("deliteli").value);
    let rez = '';
    for(let i = 1; i <= f;i++){
        if(f % i == 0){
            rez += i +'; ';
            console.log(rez);
        }
    }
    document.getElementById("del_rez").innerText = rez;
}

function kolvo() {
    let f = parseInt(document.getElementById("kolvo").value);
    let i = 0;
    while(f>0){
        f = parseInt(f/10);
        i++;
    }
    document.getElementById("kolvo_rez").innerText = i;
}

function ten() {
    let plus = 0,
        minus = 0,
        zero = 0,
        chet = 0,
        rez = '',
        nechet = 0;
    const arr = [];
    for (let i = 0; i < 10; i++) {
        let f = prompt('Enter a number' + (i+1));
        arr.push(f);
        if(f > 0){
            plus++;
        }
        if(f < 0){
            minus++;
        }
        if(f == 0){
            zero++;
        }
        if(f % 2 == 0){
            chet++;
        }else{
            nechet++;
        }
        rez = 'Додатні: ' + plus +'; \r' + "Від'ємні: " +  minus + '; \r' + 
        'Нуль: ' +  zero + '; \r' + 'Парні: ' +  chet + '; \r' + 
        'Непарні: ' +  nechet + '; \r';
    }
    console.log(arr);
    document.getElementById("ten_rez").innerText = rez;
}

function kalk() {
    let start = true;
    while(start === true){
        let f = parseInt(prompt('First number')),
            s = parseInt(prompt('Second number')),
            z = prompt('Sign'),
            rez = '';
        if (isNaN(f) || isNaN(s)){
            alert("Incorect data");
        }
        switch(z){
            case '-':
                rez = f - s;
                break;
            case '+':
                rez = f + s;
                break;
            case '*':
                rez = f * s;
                break;
            case '/':
                rez = f / s;
                break;
        }
        alert(rez);
        start = confirm('Start?');
    }
}

function shift() {
    let f = document.getElementById("num").value;
    let s = parseInt(document.getElementById("shift_num").value);
    if (isNaN(f) || isNaN(s)){
        alert("Incorect data");
    }
    debugger;
    let res = f.split('');
    let ret = res;
    console.log(res);
    let i = 0;
    while(i<s){
        ret.push(res[0]);
        ret.shift();
        i++; 
    }
    document.getElementById("shift_rez").innerText = ret;
}

function week() {
    let week = ["Monday", "Tuesday", "Wednesday", "Thursday", "Friday", "Saturday", "Sunday"];
    let i = 0;
    let start = true;
    while(start === true){
        alert(week[i]);
        i++;
        if(i>6){
            i = 0;
        }
        start = confirm('Хотите увидеть следующий день?');
    }
    
}

function table(){
    debugger;
    res = '';
    for(let f = 2;f<10;f++){
        for(let i = 1;i<11;i++){
            res += f + '*' + i + '=' + (f*i) + '\r';
            document.getElementById("table_rez").innerText = res; 
        }
    }
}

function find(){
    let i = 50,
        a = 100,
        b = 0;
    do{
        que = prompt('Ваше число - ' + i + '? \r 1-Да 2-Больше 3-Меньше');
        if(que == 1){
            alert("Ура!!!")
        }
        if(que == 2){
            b = i;
            i = parseInt(a - (a - i)/2);
        }
        if(que == 3){
            a = i
            i = parseInt(b + (i - b)/2);
        }
    }while(que != 1)
}