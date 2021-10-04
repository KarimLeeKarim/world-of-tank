import React, { useEffect, useState } from 'react'
import Box from './Box';
const GlobalMishen = ({ totalBoxes, tankPosition, setCheckingCount, setBoxPositionState, boxPositionState, boxDocument }) => {
    let [distanceBetweenElements, setDistanceBetweenElements] = useState();
    let boxPositionArray = [];

    function addBoxPositionFunc(boxPositionsArguments) {
        boxPositionArray.push(boxPositionsArguments);
        if (boxPositionArray.length === boxCounterArray.length) {
            setBoxPositionState(boxPositionArray);
            boxPositionArray = [];
        }
    };

    let boxCounterArray = [];
    for (let i = 0; i < totalBoxes; i++) {
        boxCounterArray.push(i + 1);
    };

    useEffect(() => {
        let distanceArray = [];
        const calculateDistanceTankAndBox = (boxElement, topPosition, leftPosition) => {
            let radiusOfElementMishen = boxElement && boxElement.offsetHeight / 2;
            let distance1 = (radiusOfElementMishen + tankPosition[0]) - (radiusOfElementMishen + topPosition)
            let distance2 = (radiusOfElementMishen + tankPosition[1]) - (radiusOfElementMishen + leftPosition)
            let res = Math.sqrt(Math.pow(distance1, 2) + Math.pow(distance2, 2));
            distanceArray.push(res);
            setDistanceBetweenElements(distanceArray);
            setCheckingCount(false);
            for (let i = 0; i < boxDocument.length; i++) {
                if (distanceBetweenElements?.[i] < 45) {
                    boxDocument[i].style.background = 'black';
                    setCheckingCount(!false);
                }
            }
        }
        for (let i = 0; i < boxDocument.length; i++) {
            calculateDistanceTankAndBox(boxDocument[i], boxPositionState[i]?.[0], boxPositionState[i]?.[1]);
        }
    }, [tankPosition, setDistanceBetweenElements]);

    return (
        <div className='allBoxes'>
            {
                boxCounterArray.map(boxClassName => (
                    <Box
                        key={boxClassName}
                        addBoxPositionFunc={addBoxPositionFunc}
                        boxClassName={`box${boxClassName}`}
                    />
                ))

            }
        </div>
    )
}
export default GlobalMishen;
