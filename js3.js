//Задание 3. Пользователь вводит URL адрес в input в формате http или https. Выведите только имя домена без префиксов http://, https://. 

button.onclick = function() {
     
    var w_str = document.getElementById('name').value;
    console.log(w_str);
     
    var out = document.getElementById('out');

    var qw = ( w_str.indexOf('http://') );
    console.log(qw);
    
    if(qw == 0){
        var res = (w_str.substring(7,255));
        console.log(res);
        out.innerHTML = res;
    }
    else {
         var res = (w_str.substring(8,255));
         console.log(res);
         out.innerHTML = res;
     }
     

     
};

     
