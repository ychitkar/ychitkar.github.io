function switchTab(tab) {
    var aw = document.querySelector('.award') 
    ex = document.querySelector('.experience');

    var ext = document.querySelector('.ex-tab');
    var awt = document.querySelector('.aw-tab');

    switch (tab) {
        case 'aw':
            ex.style.display = 'none';
            ext.className = 'tab ex-tab';
            aw.style.display = 'block';
            awt.className = 'tab aw-tab active';
            break;
         case 'ex':
            aw.style.display = 'none';
            awt.className = 'tab aw-tab';
            ex.style.display = 'block';
            ext.className = 'tab ex-tab active';
            break;
    }
}
