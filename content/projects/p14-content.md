<style type="text/css">
    #mycontent {
        padding:1em;
    }
    #contentcanvas {
        border:1px solid black;
        width:100%;
    }
</style>
<p id="mycontent">You can also make dynamic HTML thumbnails.</p>
<canvas id="contentcanvas" width="100" height="100"></canvas>

<script>
    var contentcanvas = document.getElementById("contentcanvas");
    var cctx = contentcanvas.getContext('2d');
    function drawContent() {
        cctx.fillStyle="hsl("+((Date.now()*0.1)%360)+",50%, 50%)";
        cctx.fillRect(0, 0, contentcanvas.width, contentcanvas.height);
        window.requestAnimationFrame(drawContent);
    }
    window.requestAnimationFrame(drawContent);
</script>