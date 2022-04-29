let yelp = document.getElementsByClassName("yelp")
let carousel = document.querySelector("#containerTwo")
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
          text: "I have worked with Scott Harris two times and both have been an amazing experience. The first time he had helped me with a patent and second time it was a...",
          rating: 5,
          time_created: "2018-07-30 14:19:43",
          user: {
              "id": "qsymWtbgqeSY5IWy1bmqPA",
              "profile_url": "https://www.yelp.com/user_details?userid=qsymWtbgqeSY5IWy1bmqPA",
              "image_url": null,
              "name": "Marcin M."
        }
      },
        {
          "id": "VwBmjZB55SYdlXmU4Z0Hig",
          "url": "https://www.yelp.com/biz/law-office-of-scott-c-harris-rancho-santa-fe?adjust_creative=NIRN_0qt4aVLwFHoNN3mfQ&hrid=VwBmjZB55SYdlXmU4Z0Hig&utm_campaign=yelp_api_v3&utm_medium=api_v3_business_reviews&utm_source=NIRN_0qt4aVLwFHoNN3mfQ",
          "text": "I had filed a patent with another law firm and needed a new attorney to file a CIP due to my former attorney not filing the patent wording correctly. It...",
          "rating": 5,
          "time_created": "2018-03-27 18:12:18",
          "user": {
              "id": "BkI848ScrMkvIyYNLFg1BA",
              "profile_url": "https://www.yelp.com/user_details?userid=BkI848ScrMkvIyYNLFg1BA",
              "image_url": "https://s3-media1.fl.yelpcdn.com/photo/OQJjNO_gVw9k4Kw9ALQetQ/o.jpg",
              "name": "My Exp. Reviews S."
        }
      }
      
    ]
    let randomYelp = yelpArray[Math.floor(Math.random()*yelpArray.length)].text
    yelp.textContent = randomYelp
    console.log(yelp)
    
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
    `
      let array2 =[];
    carousel.innerHTML = carouselHTML
    console.log(yelpArray[Math.floor(Math.random()*yelpArray.length)].text)
fetch('https://api.yelp.com/v3/businesses/law-office-of-scott-c-harris-rancho-santa-fe/reviews', {

  headers: {
      Authentication: 'L5LP46_Y5o-XZR6vdKcPk0t6_gS6id7Kg8lfsBsWj1VVlhH9NeddjVJcCzfsfDm6kMJIN7K0viaoh2Nf7VcTRlmjOLmArJyHcsuJtf7bFsd2HG9gw10JcSqQKKdfYnYx',
      mode: "no-cors"
    
    }
})
   .then(resp => resp.json())
   .then(json => console.log(json))


   
let array = ["hello you're gay", "goodbye, you're gay", "there is no amount of money on earth you could pay me", "ooga", "booga"]


function loop(array){
  for (let i =0; i <array.length; i++){
    if (array[i].includes("hello", "money", "booga")){
      array2.push(array[i])

    }
  }
  console.log(array2)
}

loop(array)