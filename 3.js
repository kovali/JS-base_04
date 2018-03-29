var myLib = (function () {
    function makeBuffer() {
        var text = '';
        var buffer = function (value) {

            if (arguments.length == 0) {
                return text;
            }
            text += value;
        };
        buffer.clear = function () {
            text = '';
        };

        return buffer;
    }

    function byField(fieldName) {
        return function (a, b) {
            return a[fieldName] > b[fieldName] ? 1 : -1;
        };
    }
    return {

        makeBuffer: makeBuffer,

        byField: byField
    }

})();

var newBuffer = myLib.makeBuffer();

users.sort(myLib.byField('name'));