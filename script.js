const DESK_CONTENT = `Hi. I’m Philipe.<br>A software engineer,<br>focused in user interfaces.<br>
    <span class='sn'>——</span> currently working at <span class='sight'>diconium.</span>`;
const MOB_CONTENT = `Hi. I’m Philipe.<br>A software engineer,<br> focused in<br> user interfaces.<br>
    <span class='sn'>——</span> currently working at <span class='sight'>diconium.</span>`;
const $HERO = document.getElementById('main-content');

const contentUpdate = () => {
    const setContent = (isMobile) => {
        $HERO.innerHTML = isMobile ? MOB_CONTENT : DESK_CONTENT;
    };

    const handleResize = () => {
        document.documentElement.style.setProperty(
            '--win-height',
            `${window.innerHeight}px`
        );
        window.matchMedia('(max-width: 500px)').matches
            ? setContent(true)
            : setContent(false);
    };

    window.addEventListener('resize', handleResize);
    window.addEventListener('load', handleResize);
};

contentUpdate();
