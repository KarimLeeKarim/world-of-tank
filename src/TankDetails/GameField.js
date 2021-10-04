import { useState, useEffect } from 'react';
import Counter from './Counter';
import GlobalBox from './globalBox/GlobalBox';
import Tank from './Tank';
function GameFiledSandBox() {
    let [count, setCount] = useState(0);
    let [shoot, setShoot] = useState(false);
    let [checkingCount, setCheckingCount] = useState(false);
    let [tankPosition, setTankPosition] = useState([]);
    let [boxPositionState, setBoxPositionState] = useState([]);
    let boxDocument = [];
    const totalBoxes = 4;
    
    let tank = document.getElementById('tankBox');
    for (let i = 0; i < boxPositionState.length; i++) {
        let l=i+1
        boxDocument.push(document.querySelector(`.box`+l));
    };

    useEffect(() => {
        if (checkingCount) {
            setCount(count => count + 1);
        }
    }, [checkingCount]);

    return (
        <div className="main">
            <Counter
                count={count}
            />
            <Tank
                shoot={shoot}
                setShoot={setShoot}
                tankPosition={tankPosition}
                setTankPosition={setTankPosition}
                boxPositionState={boxPositionState}
                boxDocument={boxDocument}
                setCheckingCount={setCheckingCount}
            />
            <GlobalBox
                tank={tank}
                setCount={setCount}
                totalBoxes={totalBoxes}
                tankPosition={tankPosition}
                setCheckingCount={setCheckingCount}
                boxPositionState={boxPositionState}
                setBoxPositionState={setBoxPositionState}
                boxDocument={boxDocument}
            />
        </div>
    );
}
export default GameFiledSandBox;
