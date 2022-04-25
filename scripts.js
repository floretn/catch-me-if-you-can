    const trollRadius = 150;
    const clientWidth = document.documentElement.clientWidth;
    const clientHeight = document.documentElement.clientHeight;

    let troll = {
        name: "troll"
    };

    let badTroll = {
        name: "bad_troll"
    };

    let trolls = [troll, badTroll];

    /*
     * Easy: 200
     * Medium: 150
     * Hard: 50
     * Unreal: 0
     */
    const pause = 150;

    function win(){
        alert('Ты победил!');
        setStartPosition();
    }

    function loss(){
        alert('Ты выбрал не ту кнопку:(');
    }

    function setStartPosition() {
        trolls.forEach((troll) => {
            let trollButton = document.getElementById(troll.name);
            trollButton.style.position = "absolute";
            trollButton.style.width = trollRadius + "px";
            trollButton.style.height = trollRadius + "px";
            troll.trollCenterX = (clientWidth / 2);
            troll.trollCenterY = (clientHeight / 2);
            troll.trollLeftX = troll.trollCenterX - (trollRadius / 2);
            troll.trollTopY = troll.trollCenterY - (trollRadius / 2);
            console.log(troll);
            trollButton.style.left = troll.trollLeftX + "px";
            trollButton.style.top = troll.trollTopY + "px";
        });
    }

    window.onload = function() {
        setStartPosition();
    }

    document.onmousemove = function(e) {
        trolls.forEach((troll) => {
            while ((Math.pow((MouseCoords.getX(e) - troll.trollCenterX), 2)
                    + Math.pow((MouseCoords.getY(e) - troll.trollCenterY), 2))
                    <= Math.pow(trollRadius, 2)) {
                troll.trollLeftX = Math.random() * clientWidth;
                if (troll.trollLeftX > clientWidth - trollRadius * 1.5) {
                    troll.trollLeftX -= trollRadius * 1.5;
                }
                troll.trollTopY = Math.random() * clientHeight;
                if (troll.trollTopY > clientHeight - trollRadius * 1.5) {
                    troll.trollTopY -= trollRadius * 1.5;
                }
                let trollForLambda = document.getElementById(troll.name);
                setTimeout(() => {
                    trollForLambda.style.left = troll.trollLeftX + "px";
                    trollForLambda.style.top = troll.trollTopY + "px";
                }, pause);
                troll.trollCenterX = troll.trollLeftX + (trollRadius / 2);
                troll.trollCenterY = troll.trollTopY + (trollRadius / 2);
            }
        });
    }

    const MouseCoords = {
        getX: function (e) {
            return e.pageX;
        },
        getY: function (e) {
            return e.pageY;
        }
    };