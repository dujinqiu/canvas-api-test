class DisplayObjectContainer extends DisplayObject {
      globalalpha=1;
    drawList: objectDrawable[] = [];
    addChild(child: DisplayObject) {
        this.drawList.push(child);
        child.parent=this;
      
    }

   render(context:CanvasRenderingContext2D){
       for(let drawable of this.drawList){
           drawable.draw();
       }
   }
}