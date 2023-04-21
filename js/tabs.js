function switchTab(tab) {
    var aw = document.querySelector('.award') 
    ex = document.querySelector('.experience'),
    co = document.querySelector('.course');

    var ext = document.querySelector('.ex-tab');
    var awt = document.querySelector('.aw-tab');
    var cot = document.querySelector('.co-tab');

    switch (tab) {
        case 'aw':
            ex.style.display = 'none';
            ext.className = 'tab ex-tab';
            co.style.display = 'none';
            cot.className = 'tab co-tab';
            aw.style.display = 'block';
            awt.className = 'tab aw-tab active';
            break;
         case 'ex':
            aw.style.display = 'none';
            awt.className = 'tab aw-tab';
            co.style.display = 'none';
            cot.className = 'tab co-tab';
            ex.style.display = 'block';
            ext.className = 'tab ex-tab active';
            break;
        case 'co':
            ex.style.display = 'none';
            ext.className = 'tab ex-tab';
            aw.style.display = 'none';
            awt.className = 'tab aw-tab';
            co.style.display = 'block';
            cot.className = 'tab co-tab active';
            break;
    }
}
