const userName = document.getElementById("name")
const title = document.getElementById("title")
const review = document.getElementById("review")
const submitBtn = document.getElementById("submit")

const reviewListContainer = document.getElementById('review-list-container')

const reviewArray = [{
  username : userName.value,
  reviewTitle : title.value,
  reviews: review.value
}]


submitBtn.addEventListener("click", ()=>{
 if(userName.value == ""){
    alert("please enter the username")
 } else if(title.value == ""){
    alert("please enter the headline")
 } else if(review.value == ""){
    alert("please enter the review")
 } else {
  const newItem = document.createElement("div")
  newItem.innerHTML = reviewArray.userName
  reviewListContainer.innerHTML = newItem
 }
})  

