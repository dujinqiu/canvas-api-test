interface objectDrawable{
    context:CanvasRenderingContext2D;
    draw();
}


class DrawObject implements objectDrawable{
    x:number;
    y:number;
    context:CanvasRenderingContext2D;
    
    draw(){
        this.context=Stage.getInstance().getContext();
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
    draw() {
        super.draw();
      
        this.context.fillText(this.str, this.x, this.y);
     
    }
}


class DrawObjectContainer extends DrawObject {
    drawList: objectDrawable[] = [];

    addChild(drawable: objectDrawable) {
        this.drawList.push(drawable);
    }

    draw() {
        this.drawList.forEach((value) => {
            value.draw();
        });
    }
}

window.onload = () => {
    alert(222)
};