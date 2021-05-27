import './style.scss';

window.onload = function() {
    const linkTags = document.querySelectorAll<HTMLElement>('a');
    linkTags.forEach((a) => {
        setBackgroundImage(a);
        appendAddDateElm(a);
    });

    const pullDownCaptions = document.querySelectorAll<HTMLElement>('h3');
    pullDownCaptions.forEach((h3) => {
        h3.addEventListener('click', (e) => {
            const target = e.currentTarget as HTMLElement;
            toggleVisibility(target);
        });
    });

    const rootFolderCaption = document.querySelector<HTMLElement>('h3');
    toggleVisibility(rootFolderCaption);
}

function setBackgroundImage(a: HTMLElement) {
    const iconBase64: string = a.getAttribute('ICON');
    if (iconBase64) {
        a.style.backgroundImage = 'url(' + iconBase64 + ')';
    }
}

function appendAddDateElm(a: HTMLElement) {
    const unixTime = +a.getAttribute('ADD_DATE');
    const addDate = unixTimeToDateString(unixTime);
    const addDateElm = document.createElement('span');
    addDateElm.textContent = addDate;
    a.after(addDateElm);
}

function unixTimeToDateString(unixTime: number): string {
    const d = new Date(unixTime * 1000);
    const dateString = d.toLocaleDateString('ja-JP');
    return dateString
}

function toggleVisibility(target: HTMLElement) {
    target.classList.toggle('show');
}