 button.onclick = function() {
     var w_str = document.getElementById('name').value;
     var length_of_str = w_str.length;
     console.log(w_str);
     console.log( );
     var out = document.getElementById('out');
     out.innerHTML = ' Длина введенной строки =   ' + length_of_str + ' зн. ';
  };