$(function(){
    $(window).scroll(function(){
        if($(window).scrollTop()>200){
            $("header").addClass("fixed");
        }else{
            $("header").removeClass("fixed");
        }
        if($(window).scrollTop()>400){
            $(".kv").addClass("disp");
        }else{
            $(".kv").removeClass("disp");
        }
    });            
});
$(".kv").click(function(){            
    $("html,body").animate({scrollTop:0}, 400)
});
$(".mobile_menu a, .menu a").click(function(e){
    e.preventDefault();
    let top = $($(this).attr("href")).offset().top;
    $("html,body").animate({scrollTop:top}, 400)
});
$(".hamburger, #menu_shadow").click(function(){
    $(".hamburger").toggleClass("is-active");
    $("body").toggleClass("open");
});

$(".mobile_menu a").click(function(){
    $(".hamburger").removeClass("is-active");
    $("body").removeClass("open");
});        


const card={
    0:{
        img:'assets/img/ft.png',
        full_name:'Miguel Obrien',
        position:'CEO & Founder',
        social: ['linkedin','gplus','facebook','twitter' ],
    },
    1:{
        img:'assets/img/st.png',
        full_name:'Jackie Carrol',
        position:'Art Director',
        social: ['behance','linkedin','gplus','facebook','twitter'],
    },
    2:{
        img:'assets/img/tt.png',
        full_name:'Ida Morrison',
        position:'Designer',
        social: ['behance','linkedin','gplus','facebook','twitter'],
    },
    3:{
        img:'assets/img/st.png',
        full_name:'Jackie Carrol',
        position:'Art Director',
        social: ['gplus','facebook'],
    },
    4:{
        img:'assets/img/ft.png',
        full_name:'Miguel Obrien',
        position:'CEO & Founder',
        social: ['behance','linkedin'],
    },    
    5:{
        img:'assets/img/tt.png',
        full_name:'Ida Morrison',
        position:'Designer',
        social: ['gplus','facebook','twitter'],
    },
}
localStorage.setItem("third", JSON.stringify(card));
function fillCards(){      
    let threeparse = JSON.parse(localStorage.getItem('third'));
    for (let key in threeparse) { 
           
        let card = `
        <div class="slider-item">
            <div class="card">
                <div class="content" itemscope itemtype="https://schema.org/Person">
                    <img src="${threeparse[key].img}" alt="ft">
                    <div class="full_name bold" itemprop="name">${threeparse[key].full_name}</div>
                    <div class="position PTitalic" itemprop="jobTitle">${threeparse[key].position}</div>       
                </div>
                <div class="social_list item${key}" itemprop="follows">
        `;
        for(let s in threeparse[key].social){
            let soc = `        
            <a href="https://www.${threeparse[key].social[s]}.com" target="_blank" rel="nofollow" title="${threeparse[key].social[s]}"><i class="icon-${threeparse[key].social[s]}"></i></a>
            `;
            card += soc;
        }
        $(".slider_team").append(card);
        let end = `
                </div>
            </div>
        </div>
        `
        $(".slider_team").append(end);        
    }  
}
fillCards();
/*Validate*/

$(function(){
    $('#name_email_message_form').on('submit', function(e){
        e.preventDefault();
        sendsMessage($(this));
    });
    $("input, textarea").on('focus', function(){
        if($(this).parents(".form_row").hasClass("has_err")){
            $(this).parents(".form_row").removeClass("has_err")
            $(this).next("div").text("");
        }
    });
    $("input[name='email']").on("keyup", function(){
        if(!isValidEmail($(this).val())){
            $(this).parents(".form_row").addClass("has_err");
            $(this).next("div").text("Invalid email");            
        }else{
            if(!isValidEmail($(this).val())){
                $(this).parents(".form_row").addClass("has_err");
                $(this).next("div").text("Invalid email");
            }else{
                $(this).parents(".form_row").removeClass("has_err")
                $(this).next("div").text("");
            }
        }
    })
});

function isValidEmail(email){
    const regex = /^(([^<>()[\]\\.,;:\s@\"]+(\.[^<>()[\]\\.,;:\s@\"]+)*)|(\".+\"))@((\[[0-9]{1,3}\.[0-9]{1,3}\.[0-9]{1,3}\.[0-9]{1,3}\])|(([a-zA-Z\-0-9]+\.)+[a-zA-Z]{2,}))$/;
    return regex.test(email);
}

function sendsMessage($form){
    let valid = true;
    $form.find('*[data-required]').each(function(){
        if($(this).val()===""){
            valid = false;
            $(this).parents(".form_row").addClass("has_err");
            $(this).next("div").text("Field is required");
        }else{
            if($(this).attr('name')==='email'){
                if(!isValidEmail($(this).val())){
                    valid = false;
                    $(this).parents(".form_row").addClass("has_err");
                    $(this).next("div").text("Invalid email");

                }
            }
        }
    });
    if(valid){
        const BOT_TOKEN = '1742544832:AAGLxm_DQYHy1YdzZnxIL6eLK1HGkV_W4e0';
        const CHAT_ID = '-1001480500270';
        const text = 'Name: '+user_name.value + '\r' + ' Email: '+user_email.value + '\r' + ' Message: '+ msg.value;
        axios
            .get('https://api.telegram.org/bot'+BOT_TOKEN+'/sendMessage?chat_id='+CHAT_ID+'&text='+text)
            .then((resp)=>{                                  
                $("#name_email_message_form").trigger("reset");               
                $('#my_modal').addClass("open");
            })  
    }
}
$(".modal_close").click(function(){
    $(this).parents(".modal_wrap").removeClass("open");
});