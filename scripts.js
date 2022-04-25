    const trollRadius = 150;
    const clientWidth = document.documentElement.clientWidth;
    const clientHeight = document.documentElement.clientHeight;
    let trollLeftX = (clientWidth / 2);
    let trollTopY = (clientHeight / 2);
    let trollCenterX = trollLeftX - (trollRadius / 2);
    let trollCenterY = trollTopY - (trollRadius / 2);
    let badTrollCenterX;
    let badTrollCenterY;

    /*
     * Easy: 250
     * Medium: 200
     * Hard: 100
     * Unreal: 0
     */
    const pause = 250;

    function win(){
        alert('Ты победил!');
        setStartPosition(document.getElementById('troll'));
    }

    function setStartPosition(troll) {
        trollCenterX = (clientWidth / 2);
        trollCenterY = (clientHeight / 2);
        trollLeftX = trollCenterX - (trollRadius / 2);
        trollTopY = trollCenterY - (trollRadius / 2);
        troll.style.top = trollTopY;
        troll.style.left = trollLeftX;
        trollCenterX += (trollRadius / 2);
        trollCenterY += (trollRadius / 2);
    }

    window.onload = function() {
        let troll = document.getElementById('troll');
        troll.style.position = "absolute";
        troll.style.width = trollRadius;
        troll.style.height = trollRadius;
        setStartPosition(troll);
    }

    document.onmousemove = function(e) {
        while ((Math.pow((MouseCoords.getX(e) - trollCenterX), 2)
                + Math.pow((MouseCoords.getY(e) - trollCenterY), 2))
                <= Math.pow((trollRadius), 2)) {
            trollLeftX = Math.random() * clientWidth;
            if (trollLeftX > clientWidth - trollRadius * 1.5) {
                trollLeftX -= trollRadius * 1.5;
            }
            trollTopY = Math.random() * clientHeight;
            if (trollTopY > clientHeight - trollRadius * 1.5) {
                trollTopY -= trollRadius * 1.5;
            }
            let trollForLambda = document.getElementById('troll');
            setTimeout(() => {
                trollForLambda.style.left = trollLeftX;
                trollForLambda.style.top = trollTopY;
            }, pause);
            trollCenterX = trollLeftX + (trollRadius / 2);
            trollCenterY = trollTopY + (trollRadius / 2);
        }
    }

    const MouseCoords = {
        // X-координата
        getX: function (e) {
            if (e.pageX) {
                return e.pageX;
            } else if (e.clientX) {
                return e.clientX + (document.documentElement.scrollLeft || document.body.scrollLeft) - document.documentElement.clientLeft;
            }
            return 0;
        },
        // Y-координата
        getY: function (e) {
            if (e.pageY) {
                return e.pageY;
            } else if (e.clientY) {
                return e.clientY + (document.documentElement.scrollTop || document.body.scrollTop) - document.documentElement.clientTop;
            }
            return 0;
        }
    };