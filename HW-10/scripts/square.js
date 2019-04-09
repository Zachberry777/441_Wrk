class Square{
    constructor(x,y,h,w)
{

 this.xcoord = x;
 this.ycoord = y;
 this.h = h;
 this.w = w;
}

 get x()
{
return this.xcoord;
}

get y()
{
return this.ycoord;
}

 get width()
 {
 return this.w;
 }

get height()
{
return this.h;
}

set addX(value)
{
  this.xcoord += value;
}





}
