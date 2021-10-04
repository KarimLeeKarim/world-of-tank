import { useRef, useState, useEffect } from "react";

function ButtonPress() {

    const step = 50;

    const boxRef = useRef();
    const [left, setLeft] = useState();
    const [up, setUp] = useState();

    const changeLeft = () => {
        let leftFromWindow = boxRef.current.getBoundingClientRect().left;
        if (leftFromWindow !== 0) {
            if ((leftFromWindow - step) < 0) {
                setLeft(left - leftFromWindow);
                boxRef.current.style.left = left - leftFromWindow + "px";
            } else {
                setLeft(left - step);
                boxRef.current.style.left = left - step + "px";
            }
        }
    }

    const changeRight = () => {
        let rightFromWindow = window.innerWidth - boxRef.current.getBoundingClientRect().right;
        console.log(left);
        if (rightFromWindow !== 0) {
            if ((rightFromWindow - step) < 0) {
                setLeft(left - 0 + rightFromWindow);
                boxRef.current.style.left = left - 0 + rightFromWindow + "px";
            } else {
                setLeft(left - 0 + step);
                boxRef.current.style.left = left - 0 + step + "px";
            }
        }
    }

    const changeUp = () => {
        let upFromWindow = boxRef.current.getBoundingClientRect().top;
        if (upFromWindow !== 0) {
            if ((upFromWindow - step) < 0) {
                setUp(up - upFromWindow);
                boxRef.current.style.top = up - upFromWindow + "px";
            } else {
                setUp(up - step);
                boxRef.current.style.top = up - step + "px";
            }
        }
    }

    const changeDown = () => {
        let downFromWindow = window.innerHeight - boxRef.current.getBoundingClientRect().bottom;
        if (downFromWindow !== 0) {
            if ((downFromWindow - step) < 0) {
                setUp(up - 0 + downFromWindow);
                boxRef.current.style.top = up - 0 + downFromWindow + "px";
            } else {
                setUp(up - 0 + step);
                boxRef.current.style.top = up - 0 + step + "px";
            }
        }
    }

    useEffect(() => {
        setLeft(boxRef.current.style.left);
        setUp(boxRef.current.style.top);
    }, [])

    return (
        <div className="main">

            <div ref={boxRef} className="box" >

            </div>
            <div className="buttons">
                <button onClick={changeLeft}>Left</button>
                <button onClick={changeUp}>Up</button>
                <button onClick={changeDown}>Down</button>
                <button onClick={changeRight} >Right</button>
            </div>
        </div>
    );
}

export default ButtonPress;
