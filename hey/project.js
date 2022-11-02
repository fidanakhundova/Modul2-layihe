const plus = document.querySelector('.plus')
const list = document.querySelector('.list')


plus.addEventListener('click', add) 

function add() {
  const list2 = document.createElement('div')
  list2.classList.add('list1')
  const Tanim  = document.createElement('input')
  Tanim.classList.add('tanim')
  const xbtn  = document.createElement('button')
  xbtn.innerText = 'x'
  xbtn.classList.add('remove')
  list2.appendChild(Tanim)
  list2.appendChild(xbtn)
  list.appendChild(list2)
}
arrItems.sort((a, b) => {


  if (a > b) {
      return -1;
  }
  if (a < b) {
      return 1;
  }
  // a bərabərdir b
  return 0;

})