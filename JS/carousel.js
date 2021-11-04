const imgsTemplate = (pics, counter = 0) => {
    const images = document.getElementById("carousel");
    images.innerHTML = `<img class="rose" src="${pics[counter]}" alt="rose"/>`

    images.innerHTML += `<div class="spans-wrapper"></div>`;
    for (let j = 0; j < pics.length; j++) {
        document.querySelector(".spans-wrapper").innerHTML += `<span class="indicator indicator${j}"></span>`;
    }  

    images.innerHTML += `
                        <button class="backward" id="prev">&lt;</button>
                        <button class="forward" id="next">&gt;</button>
                        `;

    document.getElementById("prev").addEventListener("click", () => onClickBW(counter, pics));
    document.getElementById("next").addEventListener("click", () => onClickFW(counter, pics));

    const onClickBW = (i, pics) => {
        i = i === 0 ? 0 : --i;
        imgsTemplate(pics, i);
    }

    const onClickFW = (i, pics) => {
        i = i < pics.length - 1 ? ++i : i;
        imgsTemplate(pics, i);
    };

    let spansIndicators = i => {
        let spans = document.querySelectorAll(".indicator");
        spans.forEach(el => {
            if (el.classList.contains("active")) {
                el.classList.remove("active");
            }
        });
        spans[i].classList.add("active");
    };

    const buttonsOptions = (i, length) => {
        if (i === 0) {
            document.getElementById("prev").style.display = "none";
        } else if (i === length) {
            document.getElementById("next").style.display = "none";
        } else {
            document.getElementById("next").style.display = "initial";
            document.getElementById("prev").style.display = "initial";
        }
    };
    spansIndicators(counter);
    buttonsOptions(counter, pics.length - 1);
}