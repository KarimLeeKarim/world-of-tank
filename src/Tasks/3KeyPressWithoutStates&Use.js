function App() {
    const keyPress = (e) => {
        const step = 50;
        var box = document.getElementById('box');
        /* =====================================LEFTSIDE*/
        if (e.keyCode == "37") {
            const leftFromWindow = box.getBoundingClientRect().left
            if (leftFromWindow !== 0) {
                if ((leftFromWindow - step) < 0) {
                    box.style.transform += `translateX(-${leftFromWindow}px)`;
                }
                else {
                    box.style.transform += `translateX(-${step}px)`;
                }
            }
        }
        /* ====================================RIGHTSIDE*/
        else if (e.keyCode == "39") {
            const rightFromWindow = window.innerWidth - box.getBoundingClientRect().right
            if (rightFromWindow !== 0) {
                if ((rightFromWindow - step) < 0) {
                    box.style.transform += `translateX(${rightFromWindow}px)`;
                }
                else {
                    box.style.transform += `translateX(${step}px)`;
                }
            }
        }
        /* =======================================UPSIDE*/
        else if (e.keyCode == "38") {
            const topFromWindow = box.getBoundingClientRect().top
            if (topFromWindow !== 0) {
                if ((topFromWindow - step) < 0) {
                    box.style.transform += `translateY(-${topFromWindow}px)`;
                }
                else {
                    box.style.transform += `translateY(-${step}px)`;
                }
            }
        }
        /* =====================================DOWNSIDE*/
        else if (e.keyCode == "40") {
            const downFromWindow = window.innerHeight - box.getBoundingClientRect().bottom
            if (downFromWindow !== 0) {
                if ((downFromWindow - step) < 0) {
                    box.style.transform += `translateY(${downFromWindow}px)`;
                }
                else {
                    box.style.transform += `translateY(${step}px)`;
                }
            }
        }
        /* ===============================CHANGING COLOR*/
        else if (e.keyCode == "96") {
            random_bg_color();
        }
    }

    window.addEventListener("keydown", keyPress);

    function random_bg_color() {
        var x = Math.floor(Math.random() * 256);
        var y = Math.floor(Math.random() * 256);
        var z = Math.floor(Math.random() * 256);
        var bgColor = "rgb(" + x + "," + y + "," + z + ")";
        var box = document.getElementById('box');
        box.style.background = bgColor;
    }

    return (
        <div className="main">
            <div id="box" >
            </div>
        </div>
    );
}
export default App;