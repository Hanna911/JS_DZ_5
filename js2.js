//Задание 2. Создайте массив, который содержит имена изображений в определенной папке. Запустите цикл по массиву и выведите все изображения на страницу. Подсказка, для вывода изображения используйте тег <img src=”xxxx”> где xxx – путь к файлу.

var array = ['1.png', '2.png', '3.png', '4.png', '5.png'];
var out = document.getElementById('out');
for(var i=0; i<array.length; i++){
    var a = '<img src=' + 'img/' + array[i] + '>';
    document.getElementById('out').innerHTML += i + ' ---------- ' + a + '<br>';

}