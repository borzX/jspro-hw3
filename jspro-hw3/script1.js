// const initialData = [
//   {
//     product: "Apple iPhone 13",
//     reviews: [
//       {
//         id: "1",
//         text: "Отличный телефон! Батарея держится долго.",
//       },
//       {
//         id: "2",
//         text: "Камера супер, фото выглядят просто потрясающе.",
//       },
//     ],
//   },
//   {
//     product: "Samsung Galaxy Z Fold 3",
//     reviews: [
//       {
//         id: "3",
//         text: "Интересный дизайн, но дорогой.",
//       },
//     ],
//   },
//   {
//     product: "Sony PlayStation 5",
//     reviews: [
//       {
//         id: "4",
//         text: "Люблю играть на PS5, графика на высоте.",
//       },
//     ],
//   },
// ];


const productEl = document.querySelector('.product');
const commentEL = document.querySelector('.comment');
const btnEl = document.querySelector('.reviewBtn');
const reviewsEl = document.querySelector('.reviewField');
const btnVievAllEl = document.querySelector('.btnVievAll')
// const data = JSON.parse(initialData)

btnEl.addEventListener('click', function (e) {
  const prodText = document.getElementById('product').value
  const commentText = document.getElementById('comment').value
  localStorage.setItem(prodText, commentText)

  // console.log(prodText);
  reviewsEl.insertAdjacentHTML('beforeend', `
    <h2>${prodText}</h2>
    <h4>${commentText}</h4>`
  )

});

console.log(initialData);

initialData.forEach((el) =>{
  el.reviews.forEach((rev) =>{
    reviewsEl.insertAdjacentHTML('beforeend', `
      <h2>${el.product}</h2>
      <h3>${rev.text}</h3>`
    )
  })
})

// btnVievAll.addEventListener('click', function (e) {
//   console.log('click');
//   localStorage.getItem(prodText, commentText)
//   homePageLink.insertAdjacentHTML('beforeend', `
//     <h2>${prodText}</h2>
//     <h3>${commentText}</h3>`
//   )
// })


