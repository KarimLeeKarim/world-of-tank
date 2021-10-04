import { useEffect } from 'react';
import tank from '../images/tank2.png'
import ShootTank from './ShootTank';
const Tank = ({ shoot, setShoot, tankPosition, setTankPosition, boxPositionState, boxDocument, setCheckingCount }) => {
    const step = 5;

    const leftSide = (box) => {
        let tank = document.getElementById('tank');
        tank.style.transform = 'rotate(270deg)';
        const leftFromWindow = box.getBoundingClientRect().left
        if (leftFromWindow !== 0) {
            if ((leftFromWindow - step) < 0) {
                box.style.transform += `translateX(-${leftFromWindow}px)`;
            }
            else {
                box.style.transform += `translateX(-${step}px)`;
            }
        }
    };
    const rightSide = (box) => {
        let tank = document.getElementById('tank');
        tank.style.transform = 'rotate(90deg)';
        const rightFromWindow = window.innerWidth - box.getBoundingClientRect().right
        if (rightFromWindow !== 0) {
            if ((rightFromWindow - step) < 0) {
                box.style.transform += `translateX(${rightFromWindow}px)`;
            }
            else {
                box.style.transform += `translateX(${step}px)`;
            }
        }
    };
    const upSide = (box) => {
        let tank = document.getElementById('tank');
        tank.style.transform = 'rotate(360deg)';
        const topFromWindow = box.getBoundingClientRect().top
        if (topFromWindow !== 0) {
            if ((topFromWindow - step) < 0) {
                box.style.transform += `translateY(${-topFromWindow}px)`;
            }
            else {
                box.style.transform += `translateY(${-step}px)`;
            }
        }
    };
    const downSide = (box) => {
        let tank = document.getElementById('tank');
        tank.style.transform = 'rotate(180deg)';
        const downFromWindow = window.innerHeight - box.getBoundingClientRect().bottom
        if (downFromWindow !== 0) {
            if ((downFromWindow - step) < 0) {
                box.style.transform += `translateY(${downFromWindow}px)`;
            }
            else {
                box.style.transform += `translateY(${step}px)`;
            }
        }
    };

    const shootSide = () => {
        setShoot(true);
    };

    const moveTank = {
        37: leftSide,
        39: rightSide,
        38: upSide,
        40: downSide,
        32: shootSide,
    };

    const movePress = (e) => {
        let box = document.getElementById('tankBox');
        if (e.keyCode == 37 || e.keyCode == 38 || e.keyCode == 39 || e.keyCode == 40 || e.keyCode == 32) {
            moveTank[e.keyCode](box);
        };
        setTankPosition([box.getBoundingClientRect().top, box.getBoundingClientRect().left])
    };

    useEffect(() => {
        window.addEventListener("keydown", movePress);
        return () => {
            window.removeEventListener("keydown", movePress);
        }
    });

    return (
        <>
            <div id="tankBox" >
                <img id="tank" src={tank} alt='tank' />
                {shoot ? <ShootTank
                    setShoot={setShoot}
                    boxPositionState={boxPositionState}
                    boxDocument={boxDocument}
                    setCheckingCount={setCheckingCount}
                    tankPosition={tankPosition}
                /> : ''}
            </div>
        </>
    )
}
export default Tank;
