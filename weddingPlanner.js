




function renderRestaurant() {
    const htmlRes = dataWeddingPlanner.map(function(res) {
        return `<li>
            <a href="./${res.pageID}.html">
                <div class="background_stand" style="background-image: url(./assets/img/${res.folder}/${res.timeSrc});">
                </div>
                <div class="background_title">${res.title}</div>
                <div class="background_description">
                    <div class="phone_wrap">
                        ${res.phone}
                    </div>
                    <div class="address_des">
                        <i class="fa-solid fa-location-dot"></i>
                        <span>${res.address}</span>
                    </div>
                </div>
            </a>
    </li>`
    })

    $('.outStanding_content ul').html(htmlRes.join(''))
}

renderRestaurant()