const vertical = document.querySelector('.vertical');
const horizontal = document.querySelector('.horizontal');
const target = document.querySelector('.target');
const tag = document.querySelector('.tag');


// event fuction for showing coordinates when mouse is moving
document.addEventListener('mousemove', event => {
  const x = event.clientX;
  const y = event.clientY;
  // use backtick ` for clientX,Y property
  //console.log(`${x} ${y}`);

  vertical.style.left = `${x}px`;
  horizontal.style.top = `${y}px`;
  target.style.left =`${x}px`;
  target.style.top =`${y}px`;
  tag.style.left =`${x}px`;
  tag.style.top =`${y}px`;
  tag.innerHTML = `${x}px, ${y}px`;
});

// show the coordinates when user clicked the correct spot
document.addEventListener('click', event => {
  const x = event.clientX;
  const y = event.clientY;

  if ((x >= 320 && x <= 350 && y >= 330 && y <= 360) || (x >= 1040 && x <= 1080 && y >= 540 && y <= 580)) {
    alert('Congratulation! you found the correct spot!');
  }
});