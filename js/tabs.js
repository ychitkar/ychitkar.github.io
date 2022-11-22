function switchTab(tab) {
    var ex = document.querySelector('.experience');

    var ext = document.querySelector('.ex-tab');

    switch (tab) {
        case 'ex':
            ns.style.display = 'none';
            nst.className = 'tab ns-tab';
            ex.style.display = 'block';
            ext.className = 'tab ex-tab active';
            ac.style.display = 'none';
            act.className = 'tab ac-tab';
            break;
    }
}