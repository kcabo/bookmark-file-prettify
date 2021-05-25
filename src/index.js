document.querySelectorAll('a').forEach(a => {
    let iconBase64 = a.getAttribute('ICON');
    a.style.backgroundImage = 'url(' + iconBase64 + ')';

    let unixtime = a.getAttribute('ADD_DATE');
    let dateTime = new Date(unixtime * 1000);
    addDate = dateTime.toLocaleDateString('ja-JP');

    let dateSpan = document.createElement('span');
    dateSpan.textContent = addDate;
    a.after(dateSpan);
});