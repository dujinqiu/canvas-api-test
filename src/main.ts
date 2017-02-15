interface Drawable{
    context:CanvasRenderingContext2D;
    draw();
}
class DrawObject implements Drawable{
    x:number;
    y:number;
    context:CanvasRenderingContext2D;
    draw(){
        this.context=Stage.getInstance().getContext();
    }
}
class Stage{
    static getInstance():Stage{
        return 0;
    }
    getContext(context:CanvasRenderingContext2D){
        
    }
}
window.onload = () => {
    alert(222)
};