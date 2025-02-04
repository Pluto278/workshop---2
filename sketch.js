let i = 0;
let rects = [];
let countprint;

function setup() {
  createCanvas(600, 600);
  background(220);

  // 创建离屏图形缓冲区
  countprint = createGraphics(100, 100);
  countprint.background(220);

  // 3秒后显示文本
  setTimeout(() => {
    text('这是3秒后显示的内容', 100, 20);
    for(let i = 0; i < 20; i++) {
      let x = random(600);
      let y = 100 + random(500);
      let vx = random(-1, 1);
      let vy = random(-1, 1);
      let r = random(20, 50);
      let col = color(random(255), random(255), random(255));
      rects.push({x,y,vx,vy,r,col});
    }
    // 每秒更新一次
    setInterval(() => {
      printrects();
    }, 100);
  }, 3000);
}

function printrects() {
  console.log(i);
  countprint.clear();
  countprint.background(220);
  countprint.text("这是第" + i + "秒", 10, 20);
  image(countprint, 300, 20);
  i++;
            
  for(let rect of rects) {
    fill(rect.col);
    beginShape();
    for(let j = 0; j < 4; j++) {
      let x = rect.x + rect.r * cos(j * TWO_PI / 4 + i * TWO_PI / 36);
      let y = rect.y + rect.r * sin(j * TWO_PI / 4 + i * TWO_PI / 36);
      vertex(x, y);
    }
    endShape(CLOSE);
  }
}

function draw() {
  for(let rect of rects) {
    rect.x += rect.vx;
    rect.y += rect.vy;
    if(rect.x < 0 || rect.x > width) {
      rect.vx = -rect.vx;
    }
    if(rect.y < 0 || rect.y > height) {
      rect.vy = -rect.vy;
    }
  }
}