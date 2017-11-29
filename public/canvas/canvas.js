function useCanvas() {
    var canvas = document.getElementById('myCanvas');
    if (canvas === null) {
        return;
    }
    var parent = canvas.parentElement;
    canvas.width  = parent.clientWidth;
    canvas.height = parent.clientHeight;

    var context = canvas.getContext('2d');

    context.fillStyle = 'rgb(200, 0, 0)';
    context.fillRect(10, 10, 50, 50);

    context.fillStyle = 'rgba(0, 0, 200, 0.75)';
    context.fillRect(30, 30, 50, 50);
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
