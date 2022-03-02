let btn = document.querySelectorAll('.withdrawal__item-approve-btn');

btn.forEach(item => {
    item.addEventListener('click', function(e) {
        item.classList.toggle('active');
        if(e.target.innerHTML === 'одобрить') {
          e.target.innerHTML = 'успешно';
        } else {
          e.target.innerHTML = 'одобрить';
        }
    });
});