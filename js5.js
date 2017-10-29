//Задание 5. Пользователь заполняет форму состоящую из фамилии, имени пароля и email. Используя приведенные методы выполните обработку формы состоящую из удаления пробелов до и после введённых слов, пароль не должен быть меньше 5 символов, email должен содержать один символ @ и не содержать пробелов. Если форма заполнена корректно, возвращать true.


button.onclick = function() {
   
    var name = document.getElementById('name_').value;
    var parol = document.getElementById('parol_').value;
    var email = document.getElementById('email_').value;
    
    name = (name.replace(/\ /g, ''));
    parol = (parol.replace(/\ /g, ''));
    email = (email.replace(/\ /g, ''));
    
    var result = email.value.match(/['@'\?\<]/g).length;
    console.log(result);
    
    if(parol.length < 6) || (result >= 2) {
        alert('Try again - your parol include only 4 symbols or your email include more 1 -@- symbols!')
    }
    
    if(parol.length > 5) && (result == 1) {
        alert('Good, form is true')
    }
 
    
    console.log(name);
    console.log(parol);
    console.log(email);
    

}