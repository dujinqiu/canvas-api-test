class DrawObjectContainer extends DrawObject {
    drawList: objectDrawable[] = [];
    addChild(child: DrawObject) {
        this.drawList.push(child);
        child.parent=this;
    }

   render(context:CanvasRenderingContext2D){
       for(let drawable of this.drawList){
           drawable.draw();
       }
   }
}