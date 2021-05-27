import './style.scss';

window.onload = function() {
    // 全てのリンクにファビコンを適用・追加日を表示
    const linkTags = document.querySelectorAll<HTMLElement>('a');
    linkTags.forEach((a) => {
        setBackgroundImage(a);
        appendAddDateElm(a);
    });

    // 全てのフォルダーをトグルボタン化・追加日を表示
    const pullDownCaptions = document.querySelectorAll<HTMLElement>('h3');
    pullDownCaptions.forEach((h3) => {
        h3.addEventListener('click', (e) => {
            const target = e.currentTarget as HTMLElement;
            toggleVisibility(target);
        });
        appendAddDateElm(h3);
    });

    // 一番根っこのフォルダーのみ展開
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