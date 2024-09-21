

function refreshPage(){
  window.location.reload()
}



btnVievAll.addEventListener('click', function (e) {
  // refreshPage()
  // location.reload()

  for (let i = 0; i < localStorage.length; i++) {
    let key = localStorage.key(i);
    let val = localStorage.getItem(key);
    
    commentField.insertAdjacentHTML('beforeend', `
    <div class="commentsItem" id="commentsItem">
      <h2>Название товара: ${key}</h2>
      <h4>Отзыв: ${val}</h4>
      <button class="btnDel" onclick= id="${key}">Удалить отзыв</button>
    </div>
    `
    
    )
  }
  
})
// location.reload()

document.addEventListener("click", (ev) => {
  console.log('qwer');
  if (ev.target.closest(".btnDel")) {
    console.log("rrr");
    
    const item = ev.target.closest(".btnDel").id
    console.log(item);
    if (item) {
      localStorage.removeItem(item)
      location.reload()
      setTimeout(30000, btnVievAll.click())
      // btnVievAll.click()
    }
  }
});




