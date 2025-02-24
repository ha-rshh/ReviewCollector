Polyfill for indexOF
//

const userName = document.getElementById("name");
const subject = document.getElementById("title");
const review = document.getElementById("review");
const submitBtn = document.getElementById("submit");
const reviews = document.getElementById("reviews-list");
const newReview = document.createElement("li");
newReview.textContent = ` <span class="user-name"> ${userName.value} </span>
              <span class="user-rating">
                <i class="fa-solid fa-star"></i>
                <i class="fa-solid fa-star"></i>
                <i class="fa-solid fa-star"></i>
                <i class="fa-regular fa-star"></i>
                <i class="fa-regular fa-star"></i>
              </span>

              <div class="user-title">
               ${subject.value}
              </div>
              <div class="user-review">
                ${review}
              </div>`;

submitBtn.addEventListener("click", (e) => {
  if (!userName.value || !subject.value || !review.value) {
    console.log("please enter somthing");
  } else {
    console.log(userName.value, subject.value, review.value);
  }
  
});

