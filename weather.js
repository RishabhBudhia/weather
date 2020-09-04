// function fn2() {
//     var inpt = document.getElementById("input");
//     console.log(inpt.value);
// }

function fn1() {
    var input = document.getElementById("input");
    var text_data = document.getElementById("text");
    var one = document.getElementById("one");
    var two = document.getElementById("two");
    var three = document.getElementById("three");

    fetch('https://api.openweathermap.org/data/2.5/weather?q=' + input.value + '&appid=1ff66ad72a9ec577b16ffe46c8c5d2f5')
        .then((res) => res.json()).then((data) => {
                one.innerHTML = 'Temp:' + Math.round(data['main']['temp'] - (273)) + '* C';
                two.innerHTML = 'Visibilty:' + data['visibility'];
                three.innerHTML = 'Clouds:' + data['weather'][0]['description'];


            }

        )
        .catch((err) => alert("wrong name"))
}