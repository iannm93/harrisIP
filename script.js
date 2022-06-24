let yelp = document.getElementsByClassName("yelp");
let carousel = document.querySelector("#containerTwo");
let message = document.getElementById("message");
let user = document.getElementById("user");
let starContainer = document.getElementById("star-container")
let consultation = document.getElementById("consultation");
let linkedIn=  document.getElementById("linkedIcon")
let yelpIcon=  document.getElementById("yelpIcon")
let googleReviews=  document.getElementById("googleReviews")




function redirectYelp(){
  window.location.href = "https://www.yelp.com/biz/law-office-of-scott-c-harris-rancho-santa-fe";
}
function redirectGoogle(){
  window.location.href = "https://www.google.com/search?q=awesomew&sxsrf=ALiCzsZI4AxlhG0NqhYod4VWTFSCcZrO-g%3A1652392982448&source=hp&ei=FoR9YoDxF4_JkPIPr6O54Aw&iflsig=AJiK0e8AAAAAYn2SJkCSFScJ9HxGvqkq1g47mZNT5noF&ved=0ahUKEwiA1PrF-9r3AhWPJEQIHa9RDswQ4dUDCAk&uact=5&oq=awesomew&gs_lcp=Cgdnd3Mtd2l6EAMyCwgAEIAEELEDEIMBMgUIABCABDIKCAAQgAQQhwIQFDIFCAAQgAQyBQgAEIAEMgUIABCABDIFCAAQgAQyBQgAEIAEMgUIABCABDIFCAAQgAQ6BwgjEOoCECc6BAgjECc6BQgAEJECOgsILhDHARDRAxCRAjoRCC4QgAQQsQMQgwEQxwEQ0QM6CAguELEDEIMBOgQIABBDOg0ILhCxAxDHARDRAxBDOgoIABCxAxCDARBDOg4ILhCABBCxAxDHARDRAzoICC4QgAQQsQM6BwgAELEDEEM6CAgAEIAEELEDOgsILhCABBCxAxCDAVDeD1i1FGCRFWgBcAB4AIABf4gB4wWSAQMzLjSYAQCgAQGwAQo&sclient=gws-wiz";
}
function redirectLinked(){
  window.location.href = "https://www.linkedin.com/in/scott-harris-7243725/";
}


linkedIn.addEventListener("click", redirectLinked)
yelpIcon.addEventListener("click", redirectYelp)
googleReviews.addEventListener("click", redirectGoogle)

// const URLForScott =
// "https://api.yelp.com/v3/businesses/law-office-of-scott-c-harris-rancho-santa-fe/reviews"
// let settings = {
//   async: true,
//   crossDomain: true,
//   url: URLForScott,
//   method: "GET",
//   beforeSend: function(xhr){
//       xhr.setRequestHeader('Authorization', 'Bearer L5LP46_Y5o-XZR6vdKcPk0t6_gS6id7Kg8lfsBsWj1VVlhH9NeddjVJcCzfsfDm6kMJIN7K0viaoh2Nf7VcTRlmjOLmArJyHcsuJtf7bFsd2HG9gw10JcSqQKKdfYnYx')
//   }
// };

// $.ajax(settings).then((response) => {
//  console.log(response)
//   // i < response.results.length VVVVVV
// })

let yelpArray = [
  {
    id: "Dnahp0r2MqnQbriz2pPpzQ",
    url: "https://www.yelp.com/biz/law-office-of-scott-c-harris-rancho-santa-fe?adjust_creative=NIRN_0qt4aVLwFHoNN3mfQ&hrid=Dnahp0r2MqnQbriz2pPpzQ&utm_campaign=yelp_api_v3&utm_medium=api_v3_business_reviews&utm_source=NIRN_0qt4aVLwFHoNN3mfQ",
    text: "I have worked with Scott Harris two times and both have been an amazing experience. The first time he had helped me with a patent and second time it was a trademark. Very pleasant experience to work with Scott, he truly cares about his customer and goes above and beyond. He is very responsive and keeps his word.",
    user: {
      id: "qsymWtbgqeSY5IWy1bmqPA",
      profile_url:
        "https://www.yelp.com/user_details?userid=qsymWtbgqeSY5IWy1bmqPA",
      image_url: null,
      name: "-Marcin M.",
      star: 4,
    },
  },
  {
    id: "VwBmjZB55SYdlXmU4Z0Hig",
    url: "https://www.yelp.com/biz/law-office-of-scott-c-harris-rancho-santa-fe?adjust_creative=NIRN_0qt4aVLwFHoNN3mfQ&hrid=VwBmjZB55SYdlXmU4Z0Hig&utm_campaign=yelp_api_v3&utm_medium=api_v3_business_reviews&utm_source=NIRN_0qt4aVLwFHoNN3mfQ",
    text: " had filed a patent with another law firm and needed a new attorney to file a CIP due to my former attorney not filing the patent wording correctly. It ended up costing me another fee to hire Scott, but he was more than willing to help me out and gave me a great quote! Scott was involved with me on a conference call with the examiner so we could knock this out correctly in hopes of getting a patent approval. Scott was great about getting back to me by email and reviewing the CIP draft a few times with changes before finally filing with the patent office. He is very open to client suggestions to collaborate for a great result! I recommend Scott for your patent filing, he is reasonable on costs. My patent was approved!",
    rating: 5,
    time_created: "2018-03-27 18:12:18",
    user: {
      id: "BkI848ScrMkvIyYNLFg1BA",
      profile_url:
        "https://www.yelp.com/user_details?userid=BkI848ScrMkvIyYNLFg1BA",
      image_url:
        "https://s3-media1.fl.yelpcdn.com/photo/OQJjNO_gVw9k4Kw9ALQetQ/o.jpg",
      name: "-My Exp. Reviews S.",
      star: 5,
    },
  },
  {
    text: "I am impressed with Scott's integrity, professionalism and expertise. He is a no-nonsense guy who values your time and his. Scott is easy to work with, flexible and efficient. It has been a true pleasure working with Scott. He explained every step of the patent application process and it has gone exactly as he said. If you are looking for a patent attorney who really knows his stuff. Scott is your man. He does the Work himself, he doesn't have some aid in his office do it. He wants to make sure that he understands your product thoroughly in  order to get the job done correctly and in case he ever has to represent you in court. Scott made me feel like I was his only client. I completely forgot that he has an entire office with other businesses and companies to handle. Scott will be my IP attorney for every project in the future. 100% trust and confidence in this professional!",
    user: {
      name: "-Leigh C.",
      star:5,
    },
  },
  {
    text: "He was an absolute joy to work with and an awesome attorney!  Got our provisional patent filed quickly and had excellent communication! Highly recommend!",
    user: {
      name: "-Laurie C.",
      star: 5,
    },
  },
  {},
];


// var modelTwo = document.getElementById('modelTwo')
// modelTwo.addEventListener('show.bs.modal', function (event) {
//   // Button that triggered the modal
//   var button = event.relatedTarget
//   // Extract info from data-bs-* attributes
//   var recipient = button.getAttribute('data-bs-whatever')
//   // If necessary, you could initiate an AJAX request here
//   // and then do the updating in a callback.
//   //
//   // Update the modal's content.
//   var modalTitle = modelTwo.querySelector('#title2')
//   var modalBodyInput = exampleModal.querySelector('#body2')

// modalTitle.innerHTML = `<h5  id="title2"class="modal-title">Protect the Ornamental Features of Your Product,<span id="logo"> Computer User Interface or Computer Icon</span></h5>` +recipient
// modalBodyInput.value = recipient
// })


let count = 60;
let time;





let names = [];
let yelps = [];
let randomYelps = function () {
  let randomNumb = Math.floor(Math.random() * yelpArray.length);

  user.textContent = yelpArray[randomNumb].user.name;
  user.style.opacity = 0
  message.textContent = yelpArray[randomNumb].text;
  message.style.opacity = 0;
  if (yelpArray[randomNumb].user.star === 5){
    starContainer.innerHTML = ` <img
    id = "star" src="http://pluspng.com/img-png/star-png-star-vector-png-transparent-image-2000.png"
  />
  <img
  id = "star"  src="http://pluspng.com/img-png/star-png-star-vector-png-transparent-image-2000.png"
  /><img
  id = "star"  src="http://pluspng.com/img-png/star-png-star-vector-png-transparent-image-2000.png"
  /><img
  id = "star"  src="http://pluspng.com/img-png/star-png-star-vector-png-transparent-image-2000.png"
  /><img
  id = "star"  src="http://pluspng.com/img-png/star-png-star-vector-png-transparent-image-2000.png"
  />`
  starContainer.style.opacity = 0;

  } else if (yelpArray[randomNumb].user.star === 4) {
    starContainer.innerHTML = `<img
    id = "star" src="http://pluspng.com/img-png/star-png-star-vector-png-transparent-image-2000.png"
  />
  <img
  id = "star"  src="http://pluspng.com/img-png/star-png-star-vector-png-transparent-image-2000.png"
  /><img
  id = "star"  src="http://pluspng.com/img-png/star-png-star-vector-png-transparent-image-2000.png"
  /><img
  id = "star"  src="http://pluspng.com/img-png/star-png-star-vector-png-transparent-image-2000.png"
  />`
  starContainer.style.opacity = 0;
  }
  
  count--;
  console.log(count);

};

setInterval(randomYelps, 5000);


// opacity fade in for interval
let opacityFade = function (){
  let opacity = Number(window.getComputedStyle(user).getPropertyValue("opacity"))
  if (opacity < 1){
    opacity = opacity +0.05
    user.style.opacity= opacity
  }

  let opacity2 = Number(window.getComputedStyle(message).getPropertyValue("opacity"))
  if( opacity2 < 1){
    opacity2 = opacity2 +0.05
    message.style.opacity = opacity2 
  }

  let opacity3 = Number(window.getComputedStyle(starContainer).getPropertyValue("opacity"))
  if( opacity3 < 1){
    opacity3 = opacity3 +0.05
    starContainer.style.opacity = opacity3 
  }
 
}
setInterval(opacityFade, 50)
// console.log(users)
//  time = setInterval(() => {
//    for(let i = 0 ; i<count.length; i++){
//      let fullyRandomName = randomName
//      fullyRandomName.setAttribute("data-index", i)
//      let fullyRandomYelp = randomYelp
//      fullyRandomYelp.setAttribute("data-index", i)

//      names.push(fullyRandomName)
//      yelps.push(fullyRandomYelp)

//    }
//    console.log(names, yelps)
// user.textContent = randomName
// message.textContent = randomYelp

//   }, 3000);

yelp.textContent = randomYelp;
console.log(yelp);

let carouselHTML = `<div id="carouselExampleCaptions" class="carousel slide mt-0" data-bs-ride="carousel">
        <div class="carousel-indicators">
          <button type="button" data-bs-target="#carouselExampleCaptions" data-bs-slide-to="0" class="active"
            aria-current="true" aria-label="Slide 1"></button>
          <button type="button" data-bs-target="#carouselExampleCaptions" data-bs-slide-to="1"
            aria-label="Slide 2"></button>
          <button type="button" data-bs-target="#carouselExampleCaptions" data-bs-slide-to="2"
            aria-label="Slide 3"></button>
        </div>
        <div class="carousel-inner">
          <div class="carousel-item active">
            <img
              src="https://images.pexels.com/photos/866398/pexels-photo-866398.jpeg?auto=compress&cs=tinysrgb&w=1260&h=750&dpr=1"
              class="d-block w-100" alt="...">
            <div id = "captions" class="carousel-caption d-none d-md-block">
              <h5>big guy here</h5>
              <p> ${randomYelp}</p>
            </div>
          </div>
          <div class="carousel-item">
            <img
              src="https://images.pexels.com/photos/1486911/pexels-photo-1486911.jpeg?auto=compress&cs=tinysrgb&w=1260&h=750&dpr=2"
              class="d-block w-100" alt="...">
            <div id = "captions" class="carousel-caption d-none d-md-block">
              <h5>yelP?</h5>
              <p>
              ${randomYelp}
              </p>
            </div>
          </div>
          <div class="carousel-item">
            <img
              src="https://images.pexels.com/photos/813465/pexels-photo-813465.jpeg?auto=compress&cs=tinysrgb&w=1260&h=750&dpr=1"
              class="d-block w-100" alt="...">
            <div id = "captions" class="carousel-caption d-none d-md-block">
              <h5>${randomYelp}
    
              </h5>
              <p>Some representative placeholder content for the third slide.</p>
            </div>
          </div>
        </div>
        <button class="carousel-control-prev" type="button" data-bs-target="#carouselExampleCaptions"
          data-bs-slide="prev">
          <span class="carousel-control-prev-icon" aria-hidden="true"></span>
          <span class="visually-hidden">Previous</span>
        </button>
        <button class="carousel-control-next" type="button" data-bs-target="#carouselExampleCaptions"
          data-bs-slide="next">
          <span class="carousel-control-next-icon" aria-hidden="true"></span>
          <span class="visually-hidden">Next</span>
        </button>
    
      </div>
    `;
let array2 = [];
// carousel.innerHTML = carouselHTML
console.log(yelpArray[Math.floor(Math.random() * yelpArray.length)].text);
fetch(
  "https://api.yelp.com/v3/businesses/law-office-of-scott-c-harris-rancho-santa-fe/reviews",
  {
    headers: {
      Authentication:
        "L5LP46_Y5o-XZR6vdKcPk0t6_gS6id7Kg8lfsBsWj1VVlhH9NeddjVJcCzfsfDm6kMJIN7K0viaoh2Nf7VcTRlmjOLmArJyHcsuJtf7bFsd2HG9gw10JcSqQKKdfYnYx",
      mode: "no-cors",
    },
  }
)
  .then((resp) => resp.json())
  .then((json) => console.log(json));

let array = [
  "hello you're gay",
  "goodbye, you're gay",
  "there is no amount of money on earth you could pay me",
  "ooga",
  "booga",
];

function loop(array) {
  for (let i = 0; i < array.length; i++) {
    if (array[i].includes("hello", "money", "booga")) {
      array2.push(array[i]);
    }
  }
  console.log(array2);
}

loop(array);

let navbarText = document.getElementById("navbarText")
consultation.style.display = "block" ? consultation.style.display = "none": 
consultation.style.display = "block";
function display(){
  alert("test")

}
display();

$("#navbarText").on("shown.bs.collapse", function(){
  // consultation.style.display = "none"  

 consultation.style.display == "block" ? consultation.style.display = "none" : 
 consultation.style.display = "block"; 

})