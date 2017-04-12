var __extends = (this && this.__extends) || (function () {
    var extendStatics = Object.setPrototypeOf ||
        ({ __proto__: [] } instanceof Array && function (d, b) { d.__proto__ = b; }) ||
        function (d, b) { for (var p in b) if (b.hasOwnProperty(p)) d[p] = b[p]; };
    return function (d, b) {
        extendStatics(d, b);
        function __() { this.constructor = d; }
        d.prototype = b === null ? Object.create(b) : (__.prototype = b.prototype, new __());
    };
})();
var DisplayObjectContainer = (function (_super) {
    __extends(DisplayObjectContainer, _super);
    function DisplayObjectContainer() {
        var _this = _super !== null && _super.apply(this, arguments) || this;
        _this.globalalpha = 1;
        _this.drawList = [];
        return _this;
    }
    DisplayObjectContainer.prototype.addChild = function (child) {
        this.drawList.push(child);
        child.parent = this;
    };
    DisplayObjectContainer.prototype.render = function (context) {
        for (var _i = 0, _a = this.drawList; _i < _a.length; _i++) {
            var drawable = _a[_i];
            drawable.draw();
        }
    };
    return DisplayObjectContainer;
}(DisplayObject));
//# sourceMappingURL=DisplayObjectContainer.js.map