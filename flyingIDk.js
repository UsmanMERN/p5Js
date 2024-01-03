
function setup() {
    createCanvas(800, 600);
    strokeWeight(1);

    flyingSaucer = {
        x: 300,
        y: 100,
        w: 200,
        h: 50,
    }
}

function draw() {
    background(50, 0, 80);
    //draw the groung
    fill(0, 255, 0);
    rect(0, 500, 800, 100);

    //draw the flying suacer
    //flying saucer window
    fill(175, 200, 230);
    arc(
        flyingSaucer.x,
        flyingSaucer.y,
        flyingSaucer.w / 2,
        flyingSaucer.h * 2, PI, TWO_PI);

    //flying saucer itself
    fill(150);
    arc(flyingSaucer.x,
        flyingSaucer.y,
        flyingSaucer.w,
        flyingSaucer.h, PI, TWO_PI);
    // //flying saucer base

    fill(0);
    arc(flyingSaucer.x,
        flyingSaucer.y,
        flyingSaucer.w,
        flyingSaucer.h / 2,
        0, PI);

}


