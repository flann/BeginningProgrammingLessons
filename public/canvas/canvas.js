function useCanvas() {
    var canvas = document.getElementById('myCanvas');
    if (canvas === null) {
        return;
    }
    var parent = canvas.parentElement;
    canvas.width  = parent.clientWidth;
    canvas.height = parent.clientHeight;

    var context = canvas.getContext('2d');

    context.save();
    context.rotate((Math.PI / 180.0) * 10.0);

    context.strokeStyle = 'black';
    context.lineWidth = 1;

    context.fillStyle = 'rgb(200, 0, 0)';
    context.fillRect(10, 10, 150, 150);

    context.fillStyle = 'rgba(0, 0, 200, 0.25)';
    context.fillRect(50, 50, 150, 150);

    context.strokeRect(220, 100, 200, 100);

    context.beginPath();
    context.moveTo(575, 150);
    context.lineTo(650, 175);
    context.lineTo(650, 105);
    context.fill();

    // Unrotate
    context.restore();

    context.fillStyle = 'rgba(0, 175, 0, 0.75)';
    context.beginPath();
    context.arc(500, 300, 150, 0, Math.PI * 2.0);
    context.stroke();
    context.fill();

    context.strokeStyle = 'gray';
    context.lineWidth = 10;
    context.lineJoin = 'round';
    context.setLineDash([5,5]);

    context.beginPath();
    context.moveTo(850, 275);
    context.quadraticCurveTo(1100, 100, 1500, 275);

    context.bezierCurveTo(1400, 50, 1000, 50, 850, 275);
    context.closePath();
    context.stroke();
    context.fill();

    var image = new Image();
    image.src = "/images/photo.jpg";
    image.onload = function() {
      // create pattern
      var pattern = context.createPattern(image, 'repeat');
      context.fillStyle = pattern;
      context.fillRect(100, 250, 200, 200);

      context.drawImage(image, 900, 20, 500, 42);
    }


    context.font = '50px Courier New';
    context.fillStyle = 'black';
    context.fillText("This is some text", 900, 350);
    context.lineWidth = 1;
    context.lineJoin = 'miter';
    context.setLineDash([1,0]);
    context.strokeStyle = 'rgba(100, 100, 100, 0.50)';
    context.strokeText("This is some text", 910, 360);

}

function canvasResize() {
    useCanvas();
}

function startCanvas() {
    window.setTimeout(function() {
        // Need this because the parent height appears to change after the load completes
        useCanvas();
    }, 10);
    subscribeForResize(canvasResize);
}
