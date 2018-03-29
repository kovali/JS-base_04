/*Задача – реализовать строковый буфер на функциях в JS:
вызов makeBuffer должен возвращать такую функцию, которая при вызове buffer(value)
добавляет значение в некоторое внутреннее хранилище,
а при вызове без аргументов buffer() – возвращает его*/

function makeBuffer() {
    var text = '';
    var buffer = function (value) {
        if (arguments.length == 0) {
            return text;
        }
        text += value;
    };
    buffer.clear = function () {
        text = "";
    };

    return buffer;
}

(function () {

    var buffer = makeBuffer(),

        bufferVal = document.getElementById("bufferVal"),
        clearVal = document.getElementById("clearVal"),
        showVal = document.getElementById("showVal"),
        addVal = document.getElementById("addVal"),
        bufferRes = document.getElementById("bufferResult");


    addVal.addEventListener("click", function () {
        buffer(bufferVal.value);
    });


    clearVal.addEventListener("click", function () {
        buffer.clear();
    });


    showVal.addEventListener("click", function () {
        bufferRes.innerHTML = buffer();

    });

})();
