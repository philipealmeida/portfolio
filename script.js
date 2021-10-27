const DESK_CONTENT =
    `Hi. I’m Philipe,<br>an Front End <br>Engineer, focused in architect web <br>user interfaces<br>
    <span class="sn">——</span> currently<br> working at <span class="sight">vivo.</span>`;

const MOB_CONTENT =
    `Hi. I’m Philipe,<br>an Front End<br>Engineer, focused in architect web user interfaces<br>
    <span class="sn">——</span> currently<br> working at <span class="sight">vivo.</span>`;

const $HERO = document.getElementById('main-content');

const contentUpdate = (() => {
    const setContent = isMobile => isMobile ? $HERO.innerHTML = MOB_CONTENT : $HERO.innerHTML = DESK_CONTENT;
    document.documentElement.style.setProperty('--win-height', `${window.innerHeight}px`);
    (window.matchMedia("(max-width: 500px)").matches) ? setContent(true) : setContent();
})();

window.addEventListener('resize', contentUpdate);