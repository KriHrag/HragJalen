game.MiniMap = me.Entity.extend({
   init: function(x, y, settings){
       this._super(me.Entity, "init", [x, y, {
               image: "mkmap", 
               width: 261,
               height: 85,
               spritewidth: "261",
               spriiteheight: "85",
               getShape: function(){
                   return (new me.Rect(0, 0, 874, 270)).toPolygon();
               }
       }]);
   this.floating = true;
   
   } 
});