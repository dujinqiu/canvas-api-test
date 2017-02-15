var __extends = (this && this.__extends) || function (d, b) {
    for (var p in b) if (b.hasOwnProperty(p)) d[p] = b[p];
    function __() { this.constructor = d; }
    d.prototype = b === null ? Object.create(b) : (__.prototype = b.prototype, new __());
};
var DrawObject = (function () {
    function DrawObject(x, y) {
        this.x = x;
        this.y = y;
    }
    DrawObject.prototype.draw = function () {
        this.context = Stage.getInstance().getContext();
    };
    return DrawObject;
}());
var Stage = (function () {
    function Stage() {
        this.drawList = [];
    }
    Stage.prototype.addchild = function (drawable) {
        this.drawList.push(drawable);
    };
    Stage.prototype.draw = function () {
        this.drawList.forEach(function (value) { value.draw(); });
    };
    Stage.getInstance = function () {
        if (Stage.instance)
            return Stage.instance;
        else
            Stage.instance = new Stage();
    };
    Stage.prototype.setContext = function (context) {
        console.log("set context");
        this.context = context;
    };
    Stage.prototype.getContext = function () {
        if (this.context)
            return this.context;
        console.error("please cset 2D context");
    };
    Stage.instance = new Stage();
    return Stage;
}());
var Rectangle = (function (_super) {
    __extends(Rectangle, _super);
    function Rectangle(x, y, width, height) {
        _super.call(this, x, y);
        this.width = width;
        this.height = height;
    }
    Rectangle.prototype.draw = function () {
        _super.prototype.draw.call(this);
        this.context.fillRect(this.x, this.y, this.width, this.height);
    };
    return Rectangle;
}(DrawObject));
var ImageField = (function (_super) {
    __extends(ImageField, _super);
    function ImageField(x, y, img, width, height) {
        _super.call(this, x, y);
        this.image = new Image();
        this.image.src = img;
    }
    ImageField.prototype.draw = function () {
        var _this = this;
        _super.prototype.draw.call(this);
        this.image.onload = function () {
            _this.context.drawImage(_this.image, _this.x, _this.y);
        };
    };
    return ImageField;
}(DrawObject));
var TextField = (function (_super) {
    __extends(TextField, _super);
    function TextField(x, y, str) {
        _super.call(this, x, y);
        this.str = str;
    }
    TextField.prototype.draw = function () {
        _super.prototype.draw.call(this);
        this.context.fillText(this.str, this.x, this.y);
    };
    return TextField;
}(DrawObject));
var DrawObjectContainer = (function (_super) {
    __extends(DrawObjectContainer, _super);
    function DrawObjectContainer() {
        _super.apply(this, arguments);
        this.drawList = [];
    }
    DrawObjectContainer.prototype.addChild = function (drawable) {
        this.drawList.push(drawable);
    };
    DrawObjectContainer.prototype.draw = function () {
        this.drawList.forEach(function (value) {
            value.draw();
        });
    };
    return DrawObjectContainer;
}(DrawObject));
window.onload = function () {
    alert(222);
};
//# sourceMappingURL=main.js.map