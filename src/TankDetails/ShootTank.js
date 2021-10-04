import { useEffect } from "react";
const ShootTank = ({ shootTank, setShoot, tankPosition, boxPositionState, boxDocument, setCheckingCount }) => {
    let x = null;
    const leftShoot = (bullet) => {
        bullet.style.left = 0 + 'px';
        let left = bullet.getBoundingClientRect().left
        bullet.style.left = -left + "px";
        function TankShootingFunction1(boxElementStyle, boxPosition1, boxPosition2) {
            setTimeout(() => {
                if (tankPosition[1] > boxPosition1 && tankPosition[0] > (boxPosition2 - 15) && tankPosition[0] < (boxPosition2 + 25)) {
                    if (boxElementStyle.style.background != 'black') {
                        boxElementStyle.style.background = 'black'
                        setCheckingCount(true)
                    }
                }
            }, 500)
        };
        for (let i = 0; i < boxDocument.length; i++) {
            TankShootingFunction1(boxDocument[i], boxPositionState[i]?.[1], boxPositionState[i]?.[0])
        };
        x = setInterval(function () {
            setShoot(false)
            clearInterval(x)
        }, 500);
    };

    const rightShoot = (bullet) => {
        bullet.style.left = 50 + 'px';
        let right = window.innerWidth - bullet.getBoundingClientRect().right;
        bullet.style.left = right + 45 + "px";
        function TankShootingFunction2(boxElementStyle, boxPosition1, boxPosition2) {
            setTimeout(() => {
                if (tankPosition[1] < boxPosition1 && tankPosition[0] > (boxPosition2 - 20) && tankPosition[0] < (boxPosition2 + 10)) {
                    if (boxElementStyle.style.background != 'black') {
                        boxElementStyle.style.background = 'black'
                        setCheckingCount(true)
                    }
                }
            }, 500)
        };
        for (let i = 0; i < boxDocument.length; i++) {
            TankShootingFunction2(boxDocument[i], boxPositionState[i]?.[1], boxPositionState[i]?.[0])
        };
        x = setInterval(function () {
            clearInterval(x)
            setShoot(false)
        }, 500);
    };

    const upShoot = (bullet) => {
        bullet.style.top = 0 + 'px';
        let top = bullet.getBoundingClientRect().top;
        bullet.style.top = -top + "px";
        function TankShootingFunction3(boxElementStyle, boxPosition1, boxPosition2) {
            setTimeout(() => {
                if (tankPosition[0] > boxPosition1 && tankPosition[1] > (boxPosition2 - 25) && tankPosition[1] < (boxPosition2 + 5)) {
                    if (boxElementStyle.style.background != 'black') {
                        boxElementStyle.style.background = 'black'
                        setCheckingCount(true)
                    }
                }
            }, 500)
        };
        for (let i = 0; i < boxDocument.length; i++) {
            TankShootingFunction3(boxDocument[i], boxPositionState[i]?.[0], boxPositionState[i]?.[1])
        };
        x = setInterval(function () {
            clearInterval(x)
            setShoot(false)
        }, 500);
    };

    const downShoot = (bullet) => {
        bullet.style.top = 60 + 'px';
        let bottom = window.innerHeight - bullet.getBoundingClientRect().bottom;
        bullet.style.top = bottom + 60 + "px";
        function TankShootingFunction4(boxElementStyle, boxPosition1, boxPosition2) {
            setTimeout(() => {
                if (tankPosition[0] < boxPosition1 && tankPosition[1] > (boxPosition2 - 25) && tankPosition[1] < (boxPosition2 + 5)) {
                    if (boxElementStyle.style.background != 'black') {
                        boxElementStyle.style.background = 'black'
                        setCheckingCount(true)
                    }
                }
            }, 500)
        };
        for (let i = 0; i < boxDocument.length; i++) {
            TankShootingFunction4(boxDocument[i], boxPositionState[i]?.[0], boxPositionState[i]?.[1])
        };
        x = setInterval(function () {
            clearInterval(x)
            setShoot(false)
        }, 500);
    };

    const shootPress = {
        'rotate(270deg)': leftShoot,
        'rotate(90deg)': rightShoot,
        'rotate(360deg)': upShoot,
        'rotate(180deg)': downShoot,
    }

    shootTank = () => {
        let tank = document.getElementById('tank');
        let bullet = document.getElementById('bullet');
        if (bullet === null) {
            bullet.style.background = 'white';
        }
        else {
            bullet.style.background = 'white';
        }
        shootPress[tank.style.transform](bullet);
    }

    useEffect(() => {
        window.addEventListener("keypress", shootTank);
        return () => {
            window.removeEventListener("keypress", shootTank);
        }
    }, [shootTank]);

    return (
        <div id="bullet"></div>
    )
}
export default ShootTank;