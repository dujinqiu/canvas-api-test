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
var DisplayObject = (function () {
    function DisplayObject(x, y) {
        this.x = 0;
        this.y = 0;
        this.alpha = 1;
        this.globalalpha = 1;
        this.scaleX = 1;
        this.scaleY = 1;
        this.rotation = 0;
        this.localMatrix = new math.Matrix();
        this.globalMatrix = new math.Matrix();
        //liseners:TouchEvents[]=[];
        this.touchEnabled = true;
        this.width = 1;
        this.height = 1;
        this.normalWidth = -1;
        this.normalHeight = -1;
        this.x = x;
        this.y = y;
    }
    DisplayObject.prototype.draw = function (context2D) {
        this.localMatrix.updateFromDisplayObject();
        if (this.parent) {
            this.globalalpha = this.alpha * this.parent.globalalpha;
            console.log("this.globalalpha=this.alpha*this.parent.globalalpha;");
            console.log("parent.globalalpha", this.parent.globalalpha);
            console.log("parent.alpha", this.parent.alpha);
            console.log("globalalpha", this.globalalpha);
        }
        else {
            this.globalalpha = this.alpha * this.parent.globalalpha;
            //this.globalalpha=this.alpha;
        }
        this.context.globalAlpha = this.globalalpha;
        this.render(this.context);
    };
    DisplayObject.prototype.render = function (context) {
    };
    DisplayObject.prototype.transform = function (x, y) {
        this.transMatrix[0][2] += x;
        this.transMatrix[1][2] += y;
    };
    return DisplayObject;
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
    return Stage;
}());
Stage.instance = new Stage();
var Rectangle = (function (_super) {
    __extends(Rectangle, _super);
    function Rectangle(x, y, width, height) {
        var _this = _super.call(this, x, y) || this;
        _this.width = width;
        _this.height = height;
        return _this;
    }
    Rectangle.prototype.draw = function () {
        _super.prototype.draw.call(this);
        this.context.fillRect(this.x, this.y, this.width, this.height);
    };
    return Rectangle;
}(DisplayObject));
var ImageField = (function (_super) {
    __extends(ImageField, _super);
    function ImageField(x, y, img, width, height) {
        var _this = _super.call(this, x, y) || this;
        _this.image = new Image();
        _this.image.src = img;
        return _this;
    }
    ImageField.prototype.draw = function () {
        var _this = this;
        _super.prototype.draw.call(this);
        this.image.onload = function () {
            _this.context.drawImage(_this.image, _this.x, _this.y);
        };
    };
    return ImageField;
}(DisplayObject));
var TextField = (function (_super) {
    __extends(TextField, _super);
    function TextField(x, y, str) {
        var _this = _super.call(this, x, y) || this;
        _this.str = str;
        return _this;
    }
    TextField.prototype.render = function (context) {
        context.fillText(this.str, this.x, this.y, 100);
    };
    return TextField;
}(DisplayObject));
//# sourceMappingURL=DisplayObject.js.map