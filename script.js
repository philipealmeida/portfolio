const DESK_CONTENT =
    `Hi. I’m Philipe,<br>a Front End & UI<br>Designer, focused in architect user<br>interface<br>
    <span class="sn">——</span> currently<br> working at <span class="sight">vivo.</span>`;

const MOB_CONTENT =
    `Hi. I’m Philipe,<br>a Front End<br>& UI Designer, focused in architect user interface<br>
    <span class="sn">——</span> currently<br> working at <span class="sight">vivo.</span>`;

const contentUpdate = () => {
    const $HERO = document.getElementById('main-content');
    const setContent = isMobile => isMobile ? $HERO.innerHTML = MOB_CONTENT : $HERO.innerHTML = DESK_CONTENT;
    document.documentElement.style.setProperty('--win-height', `${window.innerHeight}px`);
    (window.matchMedia("(max-width: 500px)").matches) ? setContent(true) : setContent();
};

window.addEventListener('load', contentUpdate);
window.addEventListener('resize', contentUpdate);