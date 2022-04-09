const filter = document.querySelectorAll('.catalog-item');

$('.catalog-btn').click(function () {
  $(this).addClass('active').siblings().removeClass('active');
});

document.querySelector('.button-catalog').addEventListener('click', event => {
  if (event.target.tagName !== 'BUTTON') return false;

  let filterClass = event.target.dataset['f'];

  filter.forEach(elem => {
    elem.classList.remove('hide');
    if (!elem.classList.contains(filterClass) && filterClass !== 'new') {
      elem.classList.add('hide');

    }
  });
});

