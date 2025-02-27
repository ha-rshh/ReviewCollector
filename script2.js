

const userName = document.querySelector(".name")
const userReview = document.querySelector(".review")
const submitBtn = document.querySelector(".submit_btn")
const reviewList = document.querySelector("reveiw-list")
const newReviewElement = document.createElement("p")

let 

submitBtn.addEventListener("click", ()=>{

    if(userName.value || userName.value){
        console.log("mil gayi value")
    } else {
        console.log("Sahi se")
    }
})

console.log(reviewList)