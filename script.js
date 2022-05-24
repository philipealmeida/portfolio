const DESK_CONTENT =
    `Hi. I’m Philipe.<br>A software engineer,<br>focused in user interfaces.<br>
    <span class="sn">——</span> currently working at <span class="sight">capgemini.</span>`;

const MOB_CONTENT =
    `Hi. I’m Philipe.<br>A software engineer,<br> focused in<br> user interfaces.<br>
    <span class="sn">——</span> currently working at <span class="sight">capgemini.</span>`;

const $HERO = document.getElementById('main-content');

const contentUpdate = () => {
    window.addEventListener('resize', contentUpdate);
    const setContent = isMobile => isMobile ? $HERO.innerHTML = MOB_CONTENT : $HERO.innerHTML = DESK_CONTENT;
    document.documentElement.style.setProperty('--win-height', `${window.innerHeight}px`);
    (window.matchMedia("(max-width: 500px)").matches) ? setContent(true) : setContent();
};

window.addEventListener('load', contentUpdate);