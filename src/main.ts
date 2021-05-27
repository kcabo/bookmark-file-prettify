window.onload = function() {
    const linkTags = document.querySelectorAll<HTMLElement>('a');
    linkTags.forEach((a) => {
        setBackgroundImage(a);
        appendAddDateElm(a);
    });
}

function setBackgroundImage(a: HTMLElement) {
    const iconBase64: string = a.getAttribute('ICON');
    a.style.backgroundImage = 'url(' + iconBase64 + ')';
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