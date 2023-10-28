function onClickReadMore(num) {
    let txt = document.getElementById('read_more' + num);
    let tmp = txt.hidden;
    txt.hidden = !tmp;
    let p1=document.getElementById('button_text' + num);
    if (p1.innerText == 'READ MORE')
        p1.innerText = "SHOW LESS";
    else p1.innerText = "READ MORE";
}