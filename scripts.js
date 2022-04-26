    const trollRadius = 150;
    const clientWidth = document.documentElement.clientWidth;
    const clientHeight = document.documentElement.clientHeight;
    const marginDiv = 10;
    let pause = 200;
    let maxY;

    let troll = {
        name: "troll"
    };

    let badTroll = {
        name: "bad_troll"
    };

    let trolls = [troll, badTroll];

    window.onload = function() {
        maxY = document.body.querySelector("div#div").clientHeight + marginDiv;
        setStartPosition();
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
            trollButton.style.left = troll.trollLeftX + "px";
            trollButton.style.top = troll.trollTopY + "px";
        });
    }

    function win(){
        alert('Ты победил!');
        setStartPosition();
    }

    function loss(){
        alert('Ты выбрал не ту кнопку:(');
    }

    document.onmousemove = function(e) {
        trolls.forEach((troll) => {
            while ((Math.pow((e.pageX - troll.trollCenterX), 2)
                    + Math.pow((e.pageY - troll.trollCenterY), 2))
                    <= Math.pow(trollRadius, 2)) {
                troll.trollLeftX = Math.random() * clientWidth;
                if (troll.trollLeftX > clientWidth - trollRadius * 1.5) {
                    troll.trollLeftX -= trollRadius * 1.5;
                }
                troll.trollTopY = Math.random() * clientHeight;
                if (troll.trollTopY > clientHeight - trollRadius * 1.5) {
                    troll.trollTopY -= trollRadius * 1.5;
                }
                if (troll.trollTopY < maxY) {
                    troll.trollTopY += maxY;
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

    function setPause() {
        let complexity = document.getElementById("complexity");
        switch (complexity.value) {
            case "Я пабедю!":
                pause = 400;
                break;
            case "Ну, погоди!!!":
                pause = 250;
                break;
            case "Кто на меня?":
                pause = 200;
                break;
            case "Хардкор":
                pause = 185;
                break;
            case "Кошмар":
                pause = 0;
        }
    }