function switchTab(tab) {
    var ex = document.querySelector('.experience');

    var ext = document.querySelector('.ex-tab');

    switch (tab) {
        case 'ex':
            ex.style.display = 'block';
            ext.className = 'tab ex-tab active';
            break;
    }
}
