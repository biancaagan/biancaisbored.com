class Ball{
  constructor(x, y, xspeed, yspeed) {
    this.x = x;
    this.y = y;
    this.xspeed = xspeed;
    this.yspeed = yspeed;
  }
  
  bounce() {
    // bounce x
    if(this.x < 0 || this.x > width) {
      this.xspeed = this.xspeed * -1;
    }
    // bounce y
    if(this.y < 0 || this.y > height) {
      this.yspeed = this.yspeed * -1;
    }
  }
  
  move() {
    this.x += this.xspeed;
    this.y += this.yspeed;
  }
  
  display() {
    fill(255);
    ellipse(this.x, this.y, 20, 20);
  }
}