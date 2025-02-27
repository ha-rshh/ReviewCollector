
const userName = document.getElementById("name");
const subject = document.getElementById("title");
const review = document.getElementById("review");
const submitBtn = document.getElementById("submit");
const reviews = document.getElementById("reviews-list");
const newReview = document.createElement("li");


const userReview = [{
    userKaNaam : userName.value,
    reveiwKaSubject : subject.value,
    userKaReview : review.value,
}]

submitBtn.addEventListener("click", e =>{

    // console.log(userReview.userKaNaam)
    console.log(userName.value);
    
    
})
