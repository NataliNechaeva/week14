let mas = ["1.png","2.png","3.png"] // массив картинок
let to = 0;  // Счетчик, указывающий на порядковый номер массива

function prevCard () // Открытие предыдущей картинки(движение влево)
{
    let obj = document.getElementById("image");
    if (to > 0) to--
    else
    to = mas.length-1;
    obj.src = mas[to];
}

function nextCard () // Открытие следующей картинки(движение вправо)
{
    let obj =document.getElementById("image");
    if (to < mas.length-1) to++
    else
    to=0;
    obj.src = mas[to];
}