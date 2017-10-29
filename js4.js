//Задание 4. Пользователь может ввести адрес сайта в формате http://site.ua, https://site.ua, http://www.site.ua, https://www.site.ua или site.ua. Ваша задача используя поиск в подстроке вывести site в виде: site.ua.

button.onclick = function() {
     
    var w_str = document.getElementById('name').value;
    console.log(w_str);
     
    var out = document.getElementById('out');

    
    if(( w_str.indexOf('https://') ) == 0){
        if(( w_str.indexOf('https://www.') )){
        var res = (w_str.substring(12,255));
        console.log(res);
        out.innerHTML = res; 
        }
        else{
            var res = (w_str.substring(8,255));
            console.log(res);
            out.innerHTML = res;  
        }
    }
       
    
    else if(( w_str.indexOf('https://') )){
                        if ( w_str.indexOf('http://www.')){
            var res = (w_str.substring(11,255));
            console.log(res);
            out.innerHTML = res; 
           }
        else{
        var res = (w_str.substring(7,255));
        console.log(res);
        out.innerHTML = res;  
        }
    }
        

    

    

    else {
         
         console.log(w_str);
         out.innerHTML = w_str;
     }
     

     
};

     
