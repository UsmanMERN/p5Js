function setup() {
    createCanvas(600, 400)
}
function draw() {
    background("#000")

    // face
    fill(255, 214, 153)
    rect(160, 60, 200, 200)

    // Nose
    fill(255, 112, 77)
    triangle(245, 130, 265, 130, 255, 110);

    // Ears
    // first ear
    fill(230, 90, 0)
    rect(135, 85, 40, 60);
    // second ear
    fill(230, 90, 0)
    rect(345, 85, 40, 60);

    // Mouth
    fill(255, 51, 51)
    arc(260, 160, 100, 40, 0, PI);
    // Eyes
    fill(255, 112, 77)
    ellipse(200, 120, 20, 20);
    // Eyes
    fill(0)
    ellipse(310, 120, 20, 20);
    // additional feature
    // quad(189, 18, 216, 18, 216, 360, 144, 360);
    if (mouseIsPressed) {
        fill(0);
    } else {
        fill(255);
    }
    ellipse(mouseX, mouseY, 80, 80);
}

// ellipse(50, 50, 80, 80);
// if (mouseIsPressed) {
//     fill(0);
// } else {
//     fill(255);
// }
// ellipse(mouseX, mouseY, 80, 80);

// background(0);
// noFill();

// // The two parameters of the point() method each specify
// // coordinates.
// // The first parameter is the x-coordinate and the second is the Y
// stroke(255);
// point(width * 0.5, height * 0.5);
// point(width * 0.5, height * 0.25);

// // Coordinates are used for drawing all shapes, not just points.
// // Parameters for different functions are used for different
// // purposes. For example, the first two parameters to line()
// // specify the coordinates of the first endpoint and the second
// // two parameters specify the second endpoint
// stroke(0, 153, 255);
// line(0, height * 0.33, width, height * 0.33);

// // By default, the first two parameters to rect() are the
// // coordinates of the upper-left corner and the second pair
// // is the width and height
// stroke(255, 153, 0);
// rect(width * 0.25, height * 0.1, width * 0.5, height * 0.8);
// background(127);
// noStroke();
// for (let i = 0; i < height; i += 20) {
//     fill(129, 206, 15);
//     rect(0, i, width, 10);
//     fill(255);
//     rect(i, 0, 10, height);
// }
