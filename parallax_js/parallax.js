function ScrollEvent() {
  let scrollValue = this.pageYOffset;
  console.log(scrollValue);
  ChangeThings(scrollValue)
}

window.addEventListener('scroll', ScrollEvent);

function ChangeThings(value) {
  document.getElementsByClassName('part--2')[0].style.backgroundPositionY = -value/14 + 'px';
  document.getElementsByClassName('part--4')[0].style.backgroundPositionY = -value/14 + 'px';
  document.getElementsByClassName('part--6')[0].style.backgroundPositionY = -value/14 + 'px';
  if (value>400) {
    let spacebetween = value - 400;
    document.getElementsByClassName('part__span--left')[0].style.marginLeft = -spacebetween / 1.5 + 'px';
    document.getElementsByClassName('part__span--right')[0].style.marginLeft = spacebetween * 4 + 'px';
  }
}
