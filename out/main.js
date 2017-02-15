var DrawObject = (function () {
    function DrawObject() {
    }
    DrawObject.prototype.draw = function () {
        this.context = Stage.getInstance().getContext();
    };
    return DrawObject;
}());
var Stage = (function () {
    function Stage() {
    }
    Stage.getInstance = function () {
        return 0;
    };
    Stage.prototype.getContext = function (context) {
    };
    return Stage;
}());
window.onload = function () {
    alert(222);
};
//# sourceMappingURL=main.js.map