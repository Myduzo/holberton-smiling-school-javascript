$(document).ready(function () {
    function dynamicQuote() {
        $("#loader").show();
        $.ajax({
            url: 'https://smileschool-api.hbtn.info/quotes',
            method: "GET",
            success: function(fetched) {
                fetched.forEach(data => {     
                    carouselstat = '';
                    if (data.id == 1) {
                        carouselstat = 'active';
                    }
                    $("#loader").hide();
                    let content = $(`
                    <div class="carousel-item px-5 ${carouselstat}">
                        <div class="row d-flex justify-content-center align-items-center">
                            <div class="ml-sm-5 col-sm-3 d-flex justify-content-sm-end justify-content-center">
                                <img src=${data.pic_url} class="rounded-circle" alt="Person Name" width="180px" height="180px">
                            </div>
                            <div class="col pt-2 carousel-text">
                                <p>${data.text}</p>
                                <h4 class="font-weight-bold mb-1">${data.name}</h4>
                                <p>${data.title}</p>
                            </div>
                        </div>
                    </div>`);
                    $("#carousel-inner").append(content);
                });
            }
        });
    }

    function popularTutorials() {
        $.ajax({
            url: 'https://smileschool-api.hbtn.info/popular-tutorials',
            method: "GET",
            success: function(fetched) {
                fetched.forEach(data => {     
                    carouselstat = '';
                    if (data.id == 1) {
                        carouselstat = 'active';
                    }
                    stars = '';
                    for(let i = 0; i < data.star; i++) {
                        stars += '<img src="images/star_on.png" width="20px">';
                    }
                    for(let j = 0; j < 5 -data.star; j++) {
                        stars += '<img src="images/star_off.png" width="20px">';
                    }
                    let content = $(`
                        <div class="card mx-1 col-lg-3 col-md-4 col-sm-6">
                            <div class="${carouselstat}">
                                <img src=${data.thumb_url} alt="" class="card-img-top">
                                <img src="images/play.png" alt="" class="position-absolute w-25">
                            </div>
                            <div class="card-body">
                                <h5 class="card-title font-weight-bold text-left">${data.title}</h5>
                                <p class="card-text text-muted text-left">${data["sub-title"]}</p>
                                <div class="d-flex align-items-center">
                                    <div class="mr-3">
                                        <img src=${data.author_pic_url} alt="Phillip Massey" class="rounded-circle" width="50px" height="50px">
                                    </div>
                                    <p class="purple-learn font-weight-bold pt-3">${data.author}</p>
                                </div>
                                <div class="d-flex justify-content-between mt-3 align-items-center">
                                    ${stars}
                                    <div class="purple-learn font-weight-bold">${data.duration}</div>
                                </div>
                            </div>
                        </div>`);
                    $("#tuto").append(content);
                });
            }
        });
    }

    dynamicQuote();
    popularTutorials();
});