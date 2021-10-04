import React, { useEffect } from 'react'
const Box = ({ boxClassName, addBoxPositionFunc }) => {
    var boxDocument;
    useEffect(() => {
        boxDocument = document.getElementsByClassName(boxClassName);
        window.setInterval(randomBox, 5000);
    }, [window]);

    function randomBox() {
        for (let i = 0; i < boxDocument.length; i++) {
            let eachBox = boxDocument[i];
            eachBox.style.background = 'gray';
            let winWidth = window.innerWidth;
            let winHeight = window.innerHeight;
            let randomTop = Math.random() * (winHeight - 100);
            let randomLeft = Math.random() * (winWidth - 100);
            eachBox.style.top = randomTop + "px";
            eachBox.style.left = randomLeft + "px";
            addBoxPositionFunc([eachBox.getBoundingClientRect().top, eachBox.getBoundingClientRect().left]);
        }
    };
    return (
        <>
            <div className={`${boxClassName} box-style`}></div>
        </>
    )
}
export default Box;
