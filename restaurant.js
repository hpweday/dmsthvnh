


function renderRestaurant() {
    const htmlRes = listRestaurantData.map(function(res) {
        return `<li>
            <a href="./${res.pageID}.html">
                <div class="background_stand" style="background-image: url(./assets/img/${res.folder}/${res.timeSrc});">
                    <label class="label_point">${res.point}</label>
                </div>
                <div class="background_title">${res.title}</div>
                <div class="background_description">
                    <div class="star_wrap">
                        ${getStar(res.star).join('')}
                    </div>
                    <div class="address_des">
                        <i class="fa-solid fa-location-dot"></i>
                        <span>${res.addressShort}</span>
                    </div>
                </div>
            </a>
    </li>`
    })

    $('.outStanding_content ul').html(htmlRes.join(''))
}

renderRestaurant()