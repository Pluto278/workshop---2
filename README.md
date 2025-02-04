# workshop_2

link:https://pluto278.github.io/workshop_2

---

# Tasks

- Create a p5.js sketch using `setTimeout` and `setInterval` functions.
- Create an off-screen graphics buffer to display dynamic content.
- Display text after 3 seconds and generate multiple randomly moving rectangles.
- Use `beginShape` and `vertex` to draw dynamically rotating rectangles.
- Control the movement and bouncing of rectangles using variables and conditional statements.

---

# Notes

## 1. Using `setTimeout` and `setInterval`

In the `setup` function, use `setTimeout` to display text after 3 seconds, and use `setInterval` to update the content every 100 milliseconds.

```javascript
setTimeout(() => {
    text('This is the content displayed after 3 seconds', 100, 20);
    for(let i = 0; i < 20; i++) {
        let x = random(600);
        let y = 100 + random(500);
        let vx = random(-1, 1);
        let vy = random(-1, 1);
        let r = random(20, 50);
        let col = color(random(255), random(255), random(255));
        rects.push({x,y,vx,vy,r,col});
    }
    setInterval(() => {
        printrects();
    }, 100);
}, 3000);
```

## 2. Creating an Off-Screen Graphics Buffer
Use createGraphics to create an off-screen graphics buffer for displaying dynamic content.
```
countprint = createGraphics(100, 100);
countprint.background(220);
```

## 3. Drawing Dynamically Rotating Rectangles
Use beginShape and vertex to draw dynamically rotating rectangles, and control their rotation angle using variables.
```
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
```

## 4. Controlling Rectangle Movement and Bouncing
Control the movement and bouncing of rectangles using variables and conditional statements.
```
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
```
