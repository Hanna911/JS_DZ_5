//Задание 6. Пользователь вводит символ, выведите его код.


button.onclick = function() {
     
    var symbol = document.getElementById('symbol_p').value;
    console.log(symbol);
     
    var out = document.getElementById('out');
    
    var res = symbol.charCodeAt(0); // вернёт 65
    console.log(res);
    
    out.innerHTML= res;

};

     
