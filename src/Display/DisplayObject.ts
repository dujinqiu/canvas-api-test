interface ObjectDrawable{
    width:number;
    height:number;
    localMatrix:math.Matrix;
    globalMatrix:math.Matrix;
    father:ObjectDrawable;
    draw(context:CanvasRenderingContext2D);
    transform(x:number,y:number);
    rotate(angle:number);
    scale(x:number,y:number);
}

class DrawObject implements ObjectDrawable{
    x:number;
    y:number;
    width:number;
    height:number;
    father:ObjectDrawable;
    localMatrix:math.Matrix;
    globalMatrix:math.Matrix;
    constructor(x:number,y:number,width:number,height:number){
        this.x=x;
        this.y=y;
        this.width=width;
        this.height=height;
        this.localMatrix=

    }
    draw(){}
}