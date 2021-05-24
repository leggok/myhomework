$(function(){
    $('#time, #time_shift').mask('99:99:99');
});
const car = {
    manufacturer: "Germany",
    model: "slc",
    year: 2006,
    speed: 80,
    time: 0,
    view(){
        let rez = '';
        for(let key in car){
            if(typeof car[key] !== "function"){
                rez += `<b>${key}: </b>${car[key]} <br>`;
            }
        }
        document.getElementById('rez').innerHTML = rez;
    },
    ts(){
        let w = document.getElementById('f_z').value;
        let lent = w / this.speed;
        if(lent>4){
            lent = parseInt(lent + (lent/4));
        }
        this.time = lent;
        this.view();
    }
}

const drib = {
    d1:{
        c:1,
        z:2
    },
    d2:{
        c:1,
        z:2
    },
    summ(){
        let rez = {c:0, z:0}; 
        rez.c =  (drib.d1.c * drib.d2.z) + (drib.d2.c * drib.d1.z);
        rez.z = drib.d1.z * drib.d2.z;
        this.sokr(rez.c, rez.z);
    },
    subtraction(){
        let rez = {c:0, z:0}; 
        rez.c =  (drib.d1.c * drib.d2.z) - (drib.d2.c * drib.d1.z);
        rez.z = drib.d1.z * drib.d2.z;
        this.sokr(rez.c, rez.z);
    },
    multiplication(){
        let rez = {c:0, z:0}; 
        rez.c =  (drib.d1.c * drib.d2.c);
        rez.z = drib.d1.z * drib.d2.z;
        this.sokr(rez.c, rez.z);
    },
    division(){
        let rez = {c:0, z:0}; 
        rez.c =  (drib.d1.c * drib.d2.z);
        rez.z = drib.d1.z * drib.d2.c;
        this.sokr(rez.c, rez.z);
    },
    sokr(c, z){
        let m = c;
        let n = z;
        if(m === 0){
            document.getElementById("rez_sec").innerText = 0;
        }else if(m === n){
            document.getElementById("rez_sec").innerText = 1;
        }else{
            for (let i = 2; i <= c; i++) {
                if (c % i === 0 &&  z % i === 0){
                    m = c / i, n = z / i;
                }
            }
            let rez = m + '/' + n
            document.getElementById("rez_sec").innerText = rez;
        }
    }
}


const time = {
    h: '00',
    m: '00',
    s: '00',
    first(){
        let t = document.getElementById("time").value;
        let arr = t.split(":");
        if((arr[1] < 60)&&(arr[2]<60)){
            this.h = arr[0];
            this.m = arr[1];
            this.s = arr[2];
            let rez = this.h + ':' + this.m + ':' + this.s;
            document.getElementById("rez_tot").innerText = rez;
        }else{
            document.getElementById("rez_tot").innerText = "Incorrect data";
        }
        let se = {};
        se = this.second();

        let he = 0;
        he = this.hours(this.h, se[0]);
        let me = 0;
        me = this.minutes(this.m, se[1]);
        let ses = 0;
        ses = this.seconds(this.s, se[2]);
        if(ses >= 60){
            ses = ses - 60;
            me++;
        }
        if(me >= 60){
            me = me - 60;
            he++;
        }
        if(he <= 9){
            he = '0'+ he;
        }
        if(me <= 9){
            me = '0'+ me;
        }
        if(ses <= 9){
            ses = '0'+ ses;
        }
        let rez_2 = he + ':' + me + ':' + ses;
        document.getElementById("rez_rez").innerText = rez_2;
    },
    second(){
        let ts = document.getElementById("time_shift").value;
        let arrs = ts.split(":");
        if((arrs[1] < 60)&&(arrs[2]<60)){
            return arrs;
        }else{
            document.getElementById("rez_rez").innerText = "Incorrect data";
        }
    },
    hours(f, s){
        let fs = parseInt(f) + parseInt(s);
        return fs;
    },
    minutes(f, s){
        let fs = parseInt(f) + parseInt(s);
        return fs;
    },
    seconds(f, s){
        let fs = parseInt(f) + parseInt(s);
        return fs;
    }
}
