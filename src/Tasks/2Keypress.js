import { useRef, useState, useEffect } from "react";



function App(props) {

    const step = 50;
    const boxRef = useRef();

    const [left, setLeft] = useState();
    const [up, setUp] = useState();


    const keyPress = (e) => {
        /* =====================================LEFTSIDE*/
        if (e.keyCode == "37") {
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
        /* =====================================RIGHTSIDE*/

        else if (e.keyCode == "39") {
            let rightFromWindow = window.innerWidth - boxRef.current.getBoundingClientRect().right;
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
        /* =====================================UPSIDE*/

        else if (e.keyCode == "38") {
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
        /* =====================================DOWNSIDE*/

        else if (e.keyCode == "40") {
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
        /* =====================================CHANGING COLOR*/

        else if (e.keyCode == "96") {
            random_bg_color()
        }
    }

    function random_bg_color() {
        var x = Math.floor(Math.random() * 256);
        var y = Math.floor(Math.random() * 256);
        var z = Math.floor(Math.random() * 256);
        var bgColor = "rgb(" + x + "," + y + "," + z + ")";

        boxRef.current.style.background = bgColor;
    }

    useEffect(() => {
        setLeft(boxRef.current.style.left);
        setUp(boxRef.current.style.top);
    }, [])


    useEffect(() => {
        window.addEventListener("keydown", keyPress);
        return () => {
            window.removeEventListener("keydown", keyPress);
        }
    }, [window, keyPress])



    return (
        <div className="main">
            <div ref={boxRef} id="box" >
            </div>
        </div>
    );
}

export default App;


