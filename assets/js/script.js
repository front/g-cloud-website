var tabsWrappers = document.querySelectorAll('.tabs-wrapper');

tabsWrappers.forEach(tabsWrapper => {
    var tabButtons = tabsWrapper.querySelectorAll('.tabs__tab');
    tabButtons.forEach(function(tabButton) {
        var tab = tabButton.dataset.tab;
        tabButton.addEventListener('click', function() {
            tabsWrapper.querySelector('.tabs__content--active').classList.remove('tabs__content--active');
            tabsWrapper.querySelector('.tabs__content--' + tab).classList.add('tabs__content--active');
            tabsWrapper.querySelector('.tabs__tab--active').classList.remove('tabs__tab--active');
            tabButton.classList.add('tabs__tab--active');
        })
    });
})

