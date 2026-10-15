 // Forbered canvas
        const c = document.getElementById("draw-area");
        c.width = 1400;
        c.height = 400;

        const ctx = c.getContext("2d");

        // Funksjon til at tegne bold
        function drawBall(x, y, radius) {
            ctx.beginPath();
            ctx.fillStyle = "#003366";
            ctx.arc(x, y, radius, 0, Math.PI * 2);
            ctx.fill();
            ctx.closePath();
        }

        // Variabler til boldens position
        const ballRadius = 10;
        let ballX = c.width / 2;
        let ballY = c.height - ballRadius;

        // Funktion til at tegne elementer
        function drawElements() {
            // Ryd canvas
            ctx.clearRect(0, 0, c.width, c.height);

            // Tegn bold
            drawBall(ballX, ballY, ballRadius);

            // Opdater position til næste tegning
            ballX += 2;
            ballY -= 2;
        }

        // Kør drawElements() hvert sekund
        const animateBall = setInterval(drawElements, 1000);