(() => {
    "use strict";
    function isWebp() {
        function testWebP(callback) {
            let webP = new Image;
            webP.onload = webP.onerror = function() {
                callback(2 == webP.height);
            };
            webP.src = "data:image/webp;base64,UklGRjoAAABXRUJQVlA4IC4AAACyAgCdASoCAAIALmk0mk0iIiIiIgBoSygABc6WWgAA/veff/0PP8bA//LwYAAA";
        }
        testWebP((function(support) {
            let className = true === support ? "webp" : "no-webp";
            document.documentElement.classList.add(className);
        }));
    }
    let addWindowScrollEvent = false;
    setTimeout((() => {
        if (addWindowScrollEvent) {
            let windowScroll = new Event("windowScroll");
            window.addEventListener("scroll", (function(e) {
                document.dispatchEvent(windowScroll);
            }));
        }
    }), 0);
    function DynamicAdapt(type) {
        this.type = type;
    }
    DynamicAdapt.prototype.init = function() {
        const _this = this;
        this.оbjects = [];
        this.daClassname = "_dynamic_adapt_";
        this.nodes = document.querySelectorAll("[data-da]");
        for (let i = 0; i < this.nodes.length; i++) {
            const node = this.nodes[i];
            const data = node.dataset.da.trim();
            const dataArray = data.split(",");
            const оbject = {};
            оbject.element = node;
            оbject.parent = node.parentNode;
            оbject.destination = document.querySelector(dataArray[0].trim());
            оbject.breakpoint = dataArray[1] ? dataArray[1].trim() : "767";
            оbject.place = dataArray[2] ? dataArray[2].trim() : "last";
            оbject.index = this.indexInParent(оbject.parent, оbject.element);
            this.оbjects.push(оbject);
        }
        this.arraySort(this.оbjects);
        this.mediaQueries = Array.prototype.map.call(this.оbjects, (function(item) {
            return "(" + this.type + "-width: " + item.breakpoint + "px)," + item.breakpoint;
        }), this);
        this.mediaQueries = Array.prototype.filter.call(this.mediaQueries, (function(item, index, self) {
            return Array.prototype.indexOf.call(self, item) === index;
        }));
        for (let i = 0; i < this.mediaQueries.length; i++) {
            const media = this.mediaQueries[i];
            const mediaSplit = String.prototype.split.call(media, ",");
            const matchMedia = window.matchMedia(mediaSplit[0]);
            const mediaBreakpoint = mediaSplit[1];
            const оbjectsFilter = Array.prototype.filter.call(this.оbjects, (function(item) {
                return item.breakpoint === mediaBreakpoint;
            }));
            matchMedia.addListener((function() {
                _this.mediaHandler(matchMedia, оbjectsFilter);
            }));
            this.mediaHandler(matchMedia, оbjectsFilter);
        }
    };
    DynamicAdapt.prototype.mediaHandler = function(matchMedia, оbjects) {
        if (matchMedia.matches) for (let i = 0; i < оbjects.length; i++) {
            const оbject = оbjects[i];
            оbject.index = this.indexInParent(оbject.parent, оbject.element);
            this.moveTo(оbject.place, оbject.element, оbject.destination);
        } else for (let i = оbjects.length - 1; i >= 0; i--) {
            const оbject = оbjects[i];
            if (оbject.element.classList.contains(this.daClassname)) this.moveBack(оbject.parent, оbject.element, оbject.index);
        }
    };
    DynamicAdapt.prototype.moveTo = function(place, element, destination) {
        element.classList.add(this.daClassname);
        if ("last" === place || place >= destination.children.length) {
            destination.insertAdjacentElement("beforeend", element);
            return;
        }
        if ("first" === place) {
            destination.insertAdjacentElement("afterbegin", element);
            return;
        }
        destination.children[place].insertAdjacentElement("beforebegin", element);
    };
    DynamicAdapt.prototype.moveBack = function(parent, element, index) {
        element.classList.remove(this.daClassname);
        if (void 0 !== parent.children[index]) parent.children[index].insertAdjacentElement("beforebegin", element); else parent.insertAdjacentElement("beforeend", element);
    };
    DynamicAdapt.prototype.indexInParent = function(parent, element) {
        const array = Array.prototype.slice.call(parent.children);
        return Array.prototype.indexOf.call(array, element);
    };
    DynamicAdapt.prototype.arraySort = function(arr) {
        if ("min" === this.type) Array.prototype.sort.call(arr, (function(a, b) {
            if (a.breakpoint === b.breakpoint) {
                if (a.place === b.place) return 0;
                if ("first" === a.place || "last" === b.place) return -1;
                if ("last" === a.place || "first" === b.place) return 1;
                return a.place - b.place;
            }
            return a.breakpoint - b.breakpoint;
        })); else {
            Array.prototype.sort.call(arr, (function(a, b) {
                if (a.breakpoint === b.breakpoint) {
                    if (a.place === b.place) return 0;
                    if ("first" === a.place || "last" === b.place) return 1;
                    if ("last" === a.place || "first" === b.place) return -1;
                    return b.place - a.place;
                }
                return b.breakpoint - a.breakpoint;
            }));
            return;
        }
    };
    const da = new DynamicAdapt("max");
    da.init();
    document.addEventListener("DOMContentLoaded", (() => {
        if (document.querySelector(".icon-tags-arrow_wrap")) document.querySelector(".icon-tags-arrow_wrap").addEventListener("click", (() => {
            document.querySelector(".singleNews__header").classList.toggle("active");
            document.querySelector(".singleNews__hashtags").classList.toggle("active");
        }));
    }));
    function blinkdots(item) {
        const dots1 = item.querySelector(".dots1 span");
        dots1.style.display = "block";
        dots1.style.transition = "all 1s fade-in";
        dots1.style.visibility = "hidden";
        setTimeout((() => {
            dots1.style.visibility = "visible";
        }), 500);
    }
    function blinkdots2(item) {
        const dots2 = item.querySelector(".dots2 span");
        dots2.style.display = "block";
        dots2.style.transition = "all 1s fade-in";
        dots2.style.visibility = "visible";
        setTimeout((() => {
            dots2.style.visibility = "hidden";
        }), 500);
    }
    const showMoreBtn = document.querySelectorAll(".showmore");
    showMoreBtn.forEach((item => {
        item.addEventListener("click", (e => {
            if (e.target) {
                item.querySelector(".showmore__text").innerText = "Загрузка...";
                const blinkDotsInterval1 = setInterval((() => {
                    blinkdots(item);
                }), 1e3);
                const blinkDotsInterval2 = setInterval((() => {
                    blinkdots2(item);
                }), 1e3);
                setTimeout((() => {
                    clearInterval(blinkDotsInterval1);
                    clearInterval(blinkDotsInterval2);
                    item.querySelector(".showmore__text").innerText = "Показать ещё";
                    item.querySelector(".dots1 span").style.display = "none";
                    item.querySelector(".dots2 span").style.display = "none";
                }), 5e3);
            }
        }));
    }));
    const newsDescriptions = document.querySelectorAll(".news__descr");
    if (newsDescriptions) newsDescriptions.forEach((item => {
        item.innerText = item.innerText.slice(0, 105) + "...";
    }));
    document.addEventListener("DOMContentLoaded", (() => {
        let stickySidebar = () => {
            const asides = document.querySelectorAll('[data-sticky="true"]'), header = document.querySelector("header");
            window.getComputedStyle(header).height;
            asides.forEach((aside => {
                let startScroll = 0;
                let endScroll = window.innerHeight - aside.offsetHeight - 500, currPos = window.scrollY, screenHeight = window.innerHeight;
                let asideHeight = aside.offsetHeight;
                aside.style.top = startScroll + "px";
                window.addEventListener("resize", (() => {
                    screenHeight = window.innerHeight;
                    asideHeight = aside.offsetHeight;
                }));
                document.addEventListener("scroll", (() => {
                    endScroll = window.innerHeight - aside.offsetHeight;
                    let asideTop = parseInt(aside.style.top.replace("px;", ""));
                    if (asideHeight > screenHeight) {
                        if (window.scrollY < currPos) {
                            if (asideTop < startScroll) aside.style.top = asideTop + currPos - window.scrollY + "px"; else if (asideTop >= startScroll && asideTop != startScroll) aside.style.top = startScroll + "px";
                        } else if (asideTop > endScroll) aside.style.top = asideTop + currPos - window.scrollY + "px"; else if (asideTop < endScroll && asideTop != endScroll) aside.style.top = endScroll + "px";
                    } else aside.style.top = startScroll + "px";
                    currPos = window.scrollY;
                }), {
                    capture: true,
                    passive: true
                });
            }));
        };
        stickySidebar();
    }));
    window["FLS"] = true;
    isWebp();
})();