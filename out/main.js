/*interface objectDrawable{
    context:CanvasRenderingContext2D;
    draw();
}


class DrawObject implements objectDrawable{
    x:number;
    y:number;
    context:CanvasRenderingContext2D;
    alpha=1;
    globalalpha=1;
    parent:DrawObjectContainer;
    transMatrix:number[][];

    draw(){
        this.context=Stage.getInstance().getContext();
        if(this.parent){
            this.globalalpha=this.alpha*this.parent.globalalpha;
            console.log("this.globalalpha=this.alpha*this.parent.globalalpha;");
            console.log("parent.globalalpha",this.parent.globalalpha);
            console.log("parent.alpha",this.parent.alpha);
            console.log("globalalpha",this.globalalpha);
            
        }
        else{
            this.globalalpha=this.alpha*this.parent.globalalpha;
            //this.globalalpha=this.alpha;
        }
        this.context.globalAlpha=this.globalalpha;
        this.render(this.context);
    }
    render(context:CanvasRenderingContext2D){
    }
    transform(x:number,y:number){
        this.transMatrix[0][2]+=x;
        this.transMatrix[1][2]+=y;
    }
    constructor(x:number,y:number){
        this.x=x;
        this.y=y;
    }
}





class Stage{
    private static instance=new Stage();
    private context:CanvasRenderingContext2D;
    drawList:objectDrawable[]=[];
    addchild(drawable:objectDrawable){
        this.drawList.push(drawable);
    }
    draw(){
        this.drawList.forEach((value)=>{value.draw()});
    }


    static getInstance():Stage{

       if(Stage.instance)
           return Stage.instance;
        

       else
       Stage.instance=new Stage();
    }


    setContext(context:CanvasRenderingContext2D){
        console.log("set context");
        this.context=context;

    }
    getContext():CanvasRenderingContext2D{
        if(this.context)
        return this.context;
        console.error("please cset 2D context");
    }
}

class Rectangle extends DrawObject {
    width: number;
    height: number;
    constructor(x: number, y: number, width: number, height: number) {
        super(x, y);
        this.width = width;
        this.height = height;
    }
    draw() {
        super.draw();
        this.context.fillRect(this.x, this.y, this.width, this.height);
    }
}


class ImageField extends DrawObject {
    image:HTMLImageElement;
    constructor(x: number, y: number,img:string,width?:number, height?:number) {
        super(x, y);
        this.image = new Image();
        this.image.src = img;
    }
    draw() {
        super.draw();
        this.image.onload = ()=>{
            this.context.drawImage(this.image,this.x, this.y);
        }
        
    }
}

class TextField extends DrawObject {
    str: string;

    constructor(x: number, y: number, str: string) {
        super(x, y);
        this.str = str;
        
    }
    render(context:CanvasRenderingContext2D){
         context.fillText(this.str,this.x,this.y,100);
             }

}
*/
// class DrawObjectContainer extends DrawObject {
//     drawList: objectDrawable[] = [];
//     addChild(child: DrawObject) {
//         this.drawList.push(child);
//         child.parent=this;
//     }
//    render(context:CanvasRenderingContext2D){
//        for(let drawable of this.drawList){
//            drawable.draw();
//        }
//    }
// }
window.onload = function () {
    var canvas = document.getElementById('canvasEl');
    var context = canvas.getContext("2d");
    context.fillStyle = "#66ccff";
    context.fillRect(0, 0, canvas.width, canvas.height);
    //初始化舞台
    var stage = new DrawObjectContainer(canvas);
    //创建绘制对象
    context.fillStyle = "#EE0000";
    var rect = new Rectangle(0, 0, 50, 50);
    var text = new TextField(100, 100, "Hello World");
    text.alpha = 0.1;
    var img = new Image();
    img.src = "/src/img.jpg";
    var image = new ImageField(200, 200, "/src/img.jpg");
    stage.addchild(rect);
    stage.addchild(text);
    stage.addchild(image);
    stage.draw();
};
//# sourceMappingURL=main.js.map