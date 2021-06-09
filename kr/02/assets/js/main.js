let map;
function initMap(){
    map = L.map('map').setView([40.67576208648928, -73.9368815838548], 14);
    L.tileLayer('https://cartodb-basemaps-{s}.global.ssl.fastly.net/light_all/{z}/{x}/{y}.png', {
    attribution: '&copy; <a href="https://www.openstreetmap.org/copyright">OpenStreetMap</a> contributors'
    }).addTo(map);

    L.marker([40.67576208648928, -73.9368815838548]).addTo(map);
}

map_link.addEventListener('click', function(){
    let link = document.createElement("link");
    link.setAttribute("rel", "stylesheet");
    link.setAttribute("href", "assets/plugins/leaflet/leaflet.css");
    document.head.append(link);
    let script = document.createElement("script");
    script.setAttribute("src", "assets/plugins/leaflet/leaflet.js");
    document.body.append(script);
    script.onload = initMap;
    
    map_link.remove();
    map_pic.remove();
});

jQuery(function($) {
    send_btn.addEventListener('click', function(event) {
        if ( validateForm() ) { // если есть ошибки возвращает true
            event.preventDefault();
            $('#status').text('Failure!!!! Try again');
        }else{
            sendMessage();
            $('#user_name').val('');
            $('#user_email').val('');
            $('#status').text('Success!!!!');
        }
    });
    function validateForm() {
    //
        $('#user_name').removeClass('err');
        $('#user_email').removeClass('err');
        let el_l = $("#user_name");
        let v_login = el_l.val()?false:true;
    
        if ( v_login ) {
            $('#user_name').toggleClass('err');
            alert('The "Your name..." field is required');
        } 
        
        // Проверка e-mail
        
        let reg = /^\w+([\.-]?\w+)*@(((([a-z0-9]{2,})|([a-z0-9][-][a-z0-9]+))[\.][a-z0-9])|([a-z0-9]+[-]?))+[a-z0-9]+\.([a-z]{2}|(com|net|org|edu|int|mil|gov|arpa|biz|aero|name|coop|info|pro|museum))$/i;
        let el_e = $("#user_email");
        let v_email = el_e.val()?false:true;
    
        if ( v_email ) {
            $('#user_email').toggleClass('err');
            alert('The "Your email..." field is required');
        } else if ( !reg.test( el_e.val() ) ) {
            v_email = true;
            $('#user_email').toggleClass('err');
            alert('Incorrect email');
        }
            return ( v_login || v_email );
    };
    function sendMessage(){
        const BOT_TOKEN = '1742544832:AAGLxm_DQYHy1YdzZnxIL6eLK1HGkV_W4e0';
        const CHAT_ID = '-1001480500270';
        const text = 'Name: '+user_name.value + '\r' + ' Email: '+user_email.value;
        if(text!==""){
            axios
                .get('https://api.telegram.org/bot'+BOT_TOKEN+'/sendMessage?chat_id='+CHAT_ID+'&text='+text);
        }
    };
});

/*function sendMessage(){
    const BOT_TOKEN = '1742544832:AAGLxm_DQYHy1YdzZnxIL6eLK1HGkV_W4e0';
    const CHAT_ID = '-1001480500270';
    const text = 'Name: '+user_name.value + '\r' + ' Email: '+user_email.value;
    if(text!==""){
        axios
            .get('https://api.telegram.org/bot'+BOT_TOKEN+'/sendMessage?chat_id='+CHAT_ID+'&text='+text);
    }
}*/
/*
send_btn.addEventListener('click', sendMessage);*/

