var that;
class Tab {
    constructor(id) {
        that = this;
        this.main = document.querySelector(id);
        this.init();
        console.log(this);
    }
    init() {
        this.updateNode();
        for (var i = 0; i < this.dis.length; i++) {
            this.dis[i].index = i;
            this.dis[i].onclick = this.toggleTab;
        }
    }
    updateNode() {
        this.dis = this.main.querySelectorAll("button");
    }
    toggleTab() {
        that.clearClass();
        this.className = "current";
    }
    clearClass() {
        for (var i = 0; i < this.dis.length; i++) {
            this.dis[i].className = "";
        }
    }
}
let disb = document.querySelectorAll("#display button");
let disc = document.querySelector("#display .code");
let disgra = document.querySelector("#display .graph");
disb[0].addEventListener("click", function () {
    disc.innerHTML = ".parent{display: flex;}"
    disgra.style.display = "flex";
    disgra.style.flexDirection = "column";


})
disb[1].addEventListener("click", function () {
    disc.innerHTML = ".parent{display:inline-flex;}";
    disgra.style.display = "inline-flex";
    disgra.style.flexDirection = "row";
})
var that2;
class Tab2 {
    constructor(ids) {
        that2 = this;
        this.main = document.querySelector(ids);
        this.init();
        console.log(this);
    }
    init() {
        this.updateNode();
        for (var i = 0; i < this.dis.length; i++) {
            this.dis[i].index = i;
            this.dis[i].onclick = this.toggleTab;
        }
    }
    updateNode() {
        this.dis = this.main.querySelectorAll("button");
    }
    toggleTab() {
        that2.clearClass();
        this.className = "current";
    }
    clearClass() {
        for (var i = 0; i < this.dis.length; i++) {
            this.dis[i].className = "";
        }
    }
}
let fdirb = document.querySelectorAll("#flex-direction button");
let fdirc = document.querySelector("#flex-direction  .code");
let fdirgra = document.querySelector("#flex-direction ul");
fdirb[0].addEventListener("click", function () {
    fdirc.innerHTML = ".parent{display:flex;flex-direction:row;height:100%;}"
    fdirgra.style.flexDirection = "row";
})
fdirb[1].addEventListener("click", function () {
    fdirc.innerHTML = ".parent {display: flex;flex - direction: row - reverse; height:100%;}";
    fdirgra.style.flexDirection = "row-reverse";
})
fdirb[2].addEventListener("click", function () {
    fdirc.innerHTML = ".parent {display: flex;flex-direction: column;height: 100%;}"
    fdirgra.style.flexDirection = "column";
})
fdirb[3].addEventListener("click", function () {
    fdirc.innerHTML = ".parent {display: flex;flex-direction:column-reverse;height:100%;}";
    fdirgra.style.flexDirection = "column-reverse";
})
var that3;
class Tab3 {
    constructor(ids) {
        that3 = this;
        this.main = document.querySelector(ids);
        this.init();
        console.log(this);
    }
    init() {
        this.updateNode();
        for (var i = 0; i < this.dis.length; i++) {
            this.dis[i].index = i;
            this.dis[i].onclick = this.toggleTab;
        }
    }
    updateNode() {
        this.dis = this.main.querySelectorAll("button");
    }
    toggleTab() {
        that3.clearClass();
        this.className = "current";
    }
    clearClass() {
        for (var i = 0; i < this.dis.length; i++) {
            this.dis[i].className = "";
        }
    }
}
let fwrab = document.querySelectorAll("#flex-wrap button");
let fwrac = document.querySelector("#flex-wrap  .code");
let fwragra = document.querySelector("#flex-wrap ul");
fwrab[0].addEventListener("click", function () {
    fwrac.innerHTML = ".parent {display:flex;align-items:flex-start;flex-wrap:nowrap;height: 100%;}.child {width: 40%;}";
    fwragra.style.flexWrap = "nowrap";
})
fwrab[1].addEventListener("click", function () {
    fwrac.innerHTML = ".parent {display:flex;align-items:flex-start;flex-wrap:wrap;height: 100%;}.child {width: 40%;}";
    fwragra.style.flexWrap = "wrap";
})
fwrab[2].addEventListener("click", function () {
    fwrac.innerHTML = ".parent {display:flex;align-items:flex-start;flex-wrap:wrap-reverse;height: 100%;}.child {width: 40%;}";
    fwragra.style.flexWrap = "wrap-reverse";
})
var that4;
class Tab4 {
    constructor(ids) {
        that4 = this;
        this.main = document.querySelector(ids);
        this.init();
        console.log(this);
    }
    init() {
        this.updateNode();
        for (var i = 0; i < this.dis.length; i++) {
            this.dis[i].index = i;
            this.dis[i].onclick = this.toggleTab;
        }
    }
    updateNode() {
        this.dis = this.main.querySelectorAll("button");
    }
    toggleTab() {
        that4.clearClass();
        this.className = "current";
    }
    clearClass() {
        for (var i = 0; i < this.dis.length; i++) {
            this.dis[i].className = "";
        }
    }
}
let fflowb = document.querySelectorAll("#flex-flow button");
let fflowc = document.querySelector("#flex-flow  .code");
let fflowgra = document.querySelector("#flex-flow ul");
fflowb[0].addEventListener("click", function () {
    fflowc.innerHTML = ".parent {display:flex;align-items:flex-start;flex-wrap:nowrap;height: 100%;}.child {width: 40%;}";
    fflowgra.style.flexFlow = "row nowrap";
})
fflowb[1].addEventListener("click", function () {
    fflowc.innerHTML = ".parent {display:flex;align-items:flex-start;flex-wrap:wrap;height: 100%;}.child {width: 40%;}";
    fflowgra.style.flexFlow = "column-reverse";
})
fflowb[2].addEventListener("click", function () {
    fflowc.innerHTML = ".parent {display:flex;align-items:flex-start;flex-wrap:wrap-reverse;height: 100%;}.child {width: 40%;}";
    fflowgra.style.flexFlow = "column wrap";
})
fflowb[3].addEventListener("click", function () {
    fflowc.innerHTML = ".parent {display:flex;align-items:flex-start;flex-wrap:wrap-reverse;height: 100%;}.child {width: 40%;}";
    fflowgra.style.flexFlow = "row-reverse wrap-reverse";
})
var that5;
class Tab5 {
    constructor(ids) {
        that5 = this;
        this.main = document.querySelector(ids);
        this.init();
        console.log(this);
    }
    init() {
        this.updateNode();
        for (var i = 0; i < this.dis.length; i++) {
            this.dis[i].index = i;
            this.dis[i].onclick = this.toggleTab;
        }
    }
    updateNode() {
        this.dis = this.main.querySelectorAll("button");
    }
    toggleTab() {
        that5.clearClass();
        this.className = "current";
    }
    clearClass() {
        for (var i = 0; i < this.dis.length; i++) {
            this.dis[i].className = "";
        }
    }
}
let orderb = document.querySelectorAll("#order button");
let orderc = document.querySelector("#order  .code");
let ordergra = document.querySelectorAll("#order ul li");
orderb[0].addEventListener("click", function () {
    orderc.innerHTML = ".parent {display:flex;align-items:flex-start;flex-wrap:nowrap;height: 100%;}.child {width: 40%;}";
    ordergra[2].style.order = "-1";
})
orderb[1].addEventListener("click", function () {
    orderc.innerHTML = ".parent {display:flex;align-items:flex-start;flex-wrap:wrap;height: 100%;}.child {width: 40%;}";
    ordergra[2].style.order = "0";
})
orderb[2].addEventListener("click", function () {
    orderc.innerHTML = ".parent {display:flex;align-items:flex-start;flex-wrap:wrap-reverse;height: 100%;}.child {width: 40%;}";
    ordergra[2].style.order = "1";
})
var that6;
class Tab6 {
    constructor(ids) {
        that6 = this;
        this.main = document.querySelector(ids);
        this.init();
        console.log(this);
    }
    init() {
        this.updateNode();
        for (var i = 0; i < this.dis.length; i++) {
            this.dis[i].index = i;
            this.dis[i].onclick = this.toggleTab;
        }
    }
    updateNode() {
        this.dis = this.main.querySelectorAll("button");
    }
    toggleTab() {
        that6.clearClass();
        this.className = "current";
    }
    clearClass() {
        for (var i = 0; i < this.dis.length; i++) {
            this.dis[i].className = "";
        }
    }
}
let jcb = document.querySelectorAll("#justify-content button");
let jcc = document.querySelector("#justify-content  .code");
let jcgra = document.querySelector("#justify-content ul");
jcb[0].addEventListener("click", function () {
    jcc.innerHTML = ".parent {display:flex;align-items:flex-start;flex-wrap:nowrap;height: 100%;}.child {width: 40%;}";
    jcgra.style.justifyContent = "flex-start";
})
jcb[1].addEventListener("click", function () {
    jcc.innerHTML = ".parent {display:flex;align-items:flex-start;flex-wrap:wrap;height: 100%;}.child {width: 40%;}";
    jcgra.style.justifyContent = "flex-end";
})
jcb[2].addEventListener("click", function () {
    jcc.innerHTML = ".parent {display:flex;align-items:flex-start;flex-wrap:wrap-reverse;height: 100%;}.child {width: 40%;}";
    jcgra.style.justifyContent = "center";
})
jcb[3].addEventListener("click", function () {
    jcc.innerHTML = ".parent {display:flex;align-items:flex-start;flex-wrap:wrap-reverse;height: 100%;}.child {width: 40%;}";
    jcgra.style.justifyContent = "space-between";
})
jcb[4].addEventListener("click", function () {
    jcc.innerHTML = ".parent {display:flex;align-items:flex-start;flex-wrap:wrap-reverse;height: 100%;}.child {width: 40%;}";
    jcgra.style.justifyContent = "space-around";
})
var that7;
class Tab7 {
    constructor(ids) {
        that7 = this;
        this.main = document.querySelector(ids);
        this.init();
        console.log(this);
    }
    init() {
        this.updateNode();
        for (var i = 0; i < this.dis.length; i++) {
            this.dis[i].index = i;
            this.dis[i].onclick = this.toggleTab;
        }
    }
    updateNode() {
        this.dis = this.main.querySelectorAll("button");
    }
    toggleTab() {
        that7.clearClass();
        this.className = "current";
    }
    clearClass() {
        for (var i = 0; i < this.dis.length; i++) {
            this.dis[i].className = "";
        }
    }
}
let aib = document.querySelectorAll("#align-items button");
let aic = document.querySelector("#align-items  .code");
let aigra = document.querySelector("#align-items ul");
aib[0].addEventListener("click", function () {
    aic.innerHTML = ".parent {display:flex;align-items:flex-start;flex-wrap:nowrap;height: 100%;}.child {width: 40%;}";
    aigra.style.alignItems = "flex-start";
})
aib[1].addEventListener("click", function () {
    aic.innerHTML = ".parent {display:flex;align-items:flex-start;flex-wrap:wrap;height: 100%;}.child {width: 40%;}";
    aigra.style.alignItems = "flex-end";
})
aib[2].addEventListener("click", function () {
    aic.innerHTML = ".parent {display:flex;align-items:flex-start;flex-wrap:wrap-reverse;height: 100%;}.child {width: 40%;}";
    aigra.style.alignItems = "center";
})
aib[3].addEventListener("click", function () {
    aic.innerHTML = ".parent {display:flex;align-items:flex-start;flex-wrap:wrap-reverse;height: 100%;}.child {width: 40%;}";
    aigra.style.alignItems = "baseline";
})
aib[4].addEventListener("click", function () {
    aic.innerHTML = ".parent {display:flex;align-items:flex-start;flex-wrap:wrap-reverse;height: 100%;}.child {width: 40%;}";
    aigra.style.alignItems = "stretch";
})
var that8;
class Tab8 {
    constructor(ids) {
        that8 = this;
        this.main = document.querySelector(ids);
        this.init();
    }
    init() {
        this.updateNode();
        for (var i = 0; i < this.dis.length; i++) {
            this.dis[i].index = i;
            this.dis[i].onclick = this.toggleTab;
        }
    }
    updateNode() {
        this.dis = this.main.querySelectorAll("button");
    }
    toggleTab() {
        that8.clearClass();
        this.className = "current";
    }
    clearClass() {
        for (var i = 0; i < this.dis.length; i++) {
            this.dis[i].className = "";
        }
    }
}
let asb = document.querySelectorAll("#align-self button");
let asc = document.querySelector("#align-self  .code");
let asgra = document.querySelectorAll("#align-self ul li");
asb[0].addEventListener("click", function () {
    asc.innerHTML = ".parent {display:flex;align-items:flex-start;flex-wrap:nowrap;height: 100%;}.child {width: 40%;}";
    asgra[2].style.alignSelf = "flex-start";
})
asb[1].addEventListener("click", function () {
    asc.innerHTML = ".parent {display:flex;align-items:flex-start;flex-wrap:wrap;height: 100%;}.child {width: 40%;}";
    asgra[2].style.alignSelf = "flex-end";
})
asb[2].addEventListener("click", function () {
    asc.innerHTML = ".parent {display:flex;align-items:flex-start;flex-wrap:wrap-reverse;height: 100%;}.child {width: 40%;}";
    asgra[2].style.alignSelf = "center";
})
asb[3].addEventListener("click", function () {
    asc.innerHTML = ".parent {display:flex;align-items:flex-start;flex-wrap:wrap-reverse;height: 100%;}.child {width: 40%;}";
    asgra[2].style.alignSelf = "baseline";
})
asb[4].addEventListener("click", function () {
    asc.innerHTML = ".parent {display:flex;align-items:flex-start;flex-wrap:wrap-reverse;height: 100%;}.child {width: 40%;}";
    asgra[2].style.alignSelf = "stretch";
})
var that9;
class Tab9 {
    constructor(ids) {
        that9 = this;
        this.main = document.querySelector(ids);
        this.init();
    }
    init() {
        this.updateNode();
        for (var i = 0; i < this.dis.length; i++) {
            this.dis[i].index = i;
            this.dis[i].onclick = this.toggleTab;
        }
    }
    updateNode() {
        this.dis = this.main.querySelectorAll("button");
    }
    toggleTab() {
        that9.clearClass();
        this.className = "current";
    }
    clearClass() {
        for (var i = 0; i < this.dis.length; i++) {
            this.dis[i].className = "";
        }
    }
}
let acb = document.querySelectorAll("#align-content button");
let acc = document.querySelector("#align-content  .code");
let acgra = document.querySelector("#align-content ul");
acb[0].addEventListener("click", function () {
    acc.innerHTML = ".parent {display:flex;align-items:flex-start;flex-wrap:nowrap;height: 100%;}.child {width: 40%;}";
    acgra.style.alignContent = "flex-start";
})
acb[1].addEventListener("click", function () {
    acc.innerHTML = ".parent {display:flex;align-items:flex-start;flex-wrap:wrap;height: 100%;}.child {width: 40%;}";
    acgra.style.alignContent = "flex-end";
})
acb[2].addEventListener("click", function () {
    asc.innerHTML = ".parent {display:flex;align-items:flex-start;flex-wrap:wrap-reverse;height: 100%;}.child {width: 40%;}";
    acgra.style.alignContent = "center";
})
acb[3].addEventListener("click", function () {
    acc.innerHTML = ".parent {display:flex;align-items:flex-start;flex-wrap:wrap-reverse;height: 100%;}.child {width: 40%;}";
    acgra.style.alignContent = "space-between";
})
acb[4].addEventListener("click", function () {
    acc.innerHTML = ".parent {display:flex;align-items:flex-start;flex-wrap:wrap-reverse;height: 100%;}.child {width: 40%;}";
    acgra.style.alignContent = "space-around";
})
acb[5].addEventListener("click", function () {
    acc.innerHTML = ".parent {display:flex;align-items:flex-start;flex-wrap:wrap-reverse;height: 100%;}.child {width: 40%;}";
    acgra.style.alignContent = "stretch";
})
var that10
class Tab10 {
    constructor(ids) {
        that10 = this;
        this.main = document.querySelector(ids);
        this.init();

    }
    init() {
        this.updateNode();
        for (var i = 0; i < this.dis.length; i++) {
            this.dis[i].index = i;
            this.dis[i].onclick = this.toggleTab;
        }
    }
    updateNode() {
        this.dis = this.main.querySelectorAll("button");
    }
    toggleTab() {
        that10.clearClass();
        this.className = "current";
    }
    clearClass() {
        for (var i = 0; i < this.dis.length; i++) {
            this.dis[i].className = "";
        }
    }
}
let flexb = document.querySelectorAll("#flex-grow button");
let flexc = document.querySelector("#flex-grow .code");
let flexgra = document.querySelectorAll("#flex-grow ul li");
flexb[0].addEventListener("click", function () {
    flexc.innerHTML = ".parent {display:flex;align-items:flex-start;flex-wrap:nowrap;height: 100%;}.child {width: 40%;}";
    flexgra[2].style.flexGrow = "0";
})
flexb[1].addEventListener("click", function () {
    flexc.innerHTML = ".parent {display:flex;align-items:flex-start;flex-wrap:wrap;height: 100%;}.child {width: 40%;}";
    flexgra[2].style.flexGrow = "1";
})
var that11
class Tab11 {
    constructor(ids) {
        that11 = this;
        this.main = document.querySelector(ids);
        this.init();

    }
    init() {
        this.updateNode();
        for (var i = 0; i < this.dis.length; i++) {
            this.dis[i].index = i;
            this.dis[i].onclick = this.toggleTab;
        }
    }
    updateNode() {
        this.dis = this.main.querySelectorAll("button");
    }
    toggleTab() {
        that11.clearClass();
        this.className = "current";
    }
    clearClass() {
        for (var i = 0; i < this.dis.length; i++) {
            this.dis[i].className = "";
        }
    }
}
let shrinkb = document.querySelectorAll("#flex-shrink button");
let shrinkc = document.querySelector("#flex-shrink .code");
let shrinkgra = document.querySelectorAll("#flex-shrink ul li");
shrinkb[0].addEventListener("click", function () {
    shrinkc.innerHTML = ".parent {display:flex;align-items:flex-start;flex-wrap:nowrap;height: 100%;}.child {width: 40%;}";
    shrinkgra[2].style.flexShrink = "0";
})
shrinkb[1].addEventListener("click", function () {
    shrinkc.innerHTML = ".parent {display:flex;align-items:flex-start;flex-wrap:wrap;height: 100%;}.child {width: 40%;}";
    shrinkgra[2].style.flexShrink = "1";
})
var that12
class Tab12 {
    constructor(ids) {
        that12 = this;
        this.main = document.querySelector(ids);
        this.init();
    }
    init() {
        this.updateNode();
        for (var i = 0; i < this.dis.length; i++) {
            this.dis[i].index = i;
            this.dis[i].onclick = this.toggleTab;
        }
    }
    updateNode() {
        this.dis = this.main.querySelectorAll("button");
    }
    toggleTab() {
        that12.clearClass();
        this.className = "current";
    }
    clearClass() {
        for (var i = 0; i < this.dis.length; i++) {
            this.dis[i].className = "";
        }
    }
}
let basisb = document.querySelectorAll("#flex-basis button");
let basisc = document.querySelector("#flex-basis .code");
let basisgra = document.querySelectorAll("#flex-basis ul li");
basisb[0].addEventListener("click", function () {
    basisc.innerHTML = ".parent {display:flex;align-items:flex-start;flex-wrap:nowrap;height: 100%;}.child {width: 40%;}";
    basisgra[2].style.flexBasis = "30%";
})
basisb[1].addEventListener("click", function () {
    basisc.innerHTML = ".parent {display:flex;align-items:flex-start;flex-wrap:wrap;height: 100%;}.child {width: 40%;}";
    basisgra[2].style.flexBasis = "50%";
})
basisb[2].addEventListener("click", function () {
    basisc.innerHTML = ".parent {display:flex;align-items:flex-start;flex-wrap:wrap;height: 100%;}.child {width: 40%;}";
    basisgra[2].style.flexBasis = "content";
})
new Tab("#display");
new Tab2("#flex-direction");
new Tab3("#flex-wrap");
new Tab4("#flex-flow");
new Tab5("#order");
new Tab6("#justify-content");
new Tab7("#align-items");
new Tab8("#align-self");
new Tab9("#align-content");
new Tab10("#flex-grow");
new Tab11("#flex-shrink");
new Tab12("#flex-basis");

let git = document.querySelector("#github");
let twitter = document.querySelector("#twitter")
git.onclick = function () {
    window.location.href="https://github.com/yoksel/flex-cheatsheet";
}
twitter.onclick = function () {
    window.location.href="https://twitter.com/yoksel_en";
}


let ball = document.querySelector(".ball");
let words = document.querySelectorAll(".nav ul li a");
words[0].style.color = "#CFF09E"
document.addEventListener("scroll", function () {
    if (window.pageYOffset >= 0 && window.pageYOffset <= 1000) {
        ball.style.top = "10px"
        words[0].style.color = "#CFF09E"
    } else {
        words[0].style.color = ""
    }
    if (window.pageYOffset >= 1000 && window.pageYOffset <= 2000) {
        ball.style.top = "110px"
        words[1].style.color = "#CFF09E"
    } else {
        words[1].style.color = ""
    }
    if (window.pageYOffset >= 2000 && window.pageYOffset <= 2500) {
        ball.style.top = "140px"
        words[2].style.color = "#CFF09E"
    } else {
        words[2].style.color = ""
    }

    if (window.pageYOffset >= 3000 && window.pageYOffset <= 3500) {
        ball.style.top = "180px"
        words[3].style.color = "#CFF09E"
    } else {
        words[3].style.color = ""
    }
    if (window.pageYOffset >= 3500 && window.pageYOffset <= 4000) {
        ball.style.top = "220px"
        words[4].style.color = "#CFF09E"
    } else {
        words[4].style.color = ""
    }
    if (window.pageYOffset >= 4000 && window.pageYOffset <= 5000) {
        ball.style.top = "300px"
        words[5].style.color = "#CFF09E"
    } else {
        words[5].style.color = ""
    }
    if (window.pageYOffset >= 5000 && window.pageYOffset <= 5700) {
        ball.style.top = "340px"
        words[6].style.color = "#CFF09E"
    } else {
        words[6].style.color = ""
    }
    if (window.pageYOffset >= 5700 && window.pageYOffset <= 6600) {
        ball.style.top = "370px"
        words[7].style.color = "#CFF09E"
    } else {
        words[7].style.color = ""
    }
    if (window.pageYOffset >= 6600 && window.pageYOffset <= 7400) {
        ball.style.top = "400px"
        words[8].style.color = "#CFF09E"
    } else {
        words[8].style.color = ""
    }
    if (window.pageYOffset >= 7400 && window.pageYOffset <= 7800) {
        ball.style.top = "490px"
        words[9].style.color = "#CFF09E"
    } else {
        words[9].style.color = ""
    }
    if (window.pageYOffset >= 7900 && window.pageYOffset <= 8500) {
        ball.style.top = "530px"
        words[10].style.color = "#CFF09E"
    } else {
        words[10].style.color = ""
    }
    if (window.pageYOffset >= 8400 && window.pageYOffset <= 8700) {
        ball.style.top = "560px"
        words[11].style.color = "#CFF09E"
    } else {
        words[11].style.color = ""
    }
    console.log(window.pageYOffset);
})
let topB = document.querySelector(".top button");
let left = document.querySelector(".left")
let right = document.querySelector(".right")
let h2 = document.querySelectorAll(".left h2")
flag = 0;
topB.onclick = function () {
    if (flag === 0) {
        left.style.backgroundColor = "rgb(221,221,221)";
        right.style.backgroundColor = "rgb(255,255,255)"
        for (let i = 0; i < words.length; i++) {
            words[i].style.color = "blue"
        }
        for (let i = 0; i < h2.length; i++) {
            h2[i].style.color = "black"
        }
        flag = 1;
    } else {
        left.style.backgroundColor = "";
        right.style.backgroundColor = "";
        for (let i = 0; i < words.length; i++) {
            words[i].style.color = ""
        }
        for (let i = 0; i < h2.length; i++) {
            h2[i].style.color = ""
        }
        flag = 0
    }
}

