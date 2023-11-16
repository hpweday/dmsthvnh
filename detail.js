




var currentURL = window.location.href;
var currentURLArr = currentURL.split('/');
var lastPath = currentURLArr[currentURLArr.length - 1];
var idPagePath = +lastPath.split('.')[0]


var dataRestaurantItem = listRestaurantData.find((item) => item.pageID == idPagePath)

var dataWeddingPlannerItem = dataWeddingPlanner.find((item) => item.pageID == idPagePath)

console.log(dataRestaurantItem)
console.log(dataWeddingPlannerItem)


if(dataRestaurantItem) {
    renderRestaurantItem(dataRestaurantItem)
}

if(dataWeddingPlannerItem) {
    renderWeddingPlannerItem(dataWeddingPlannerItem)
}



function renderRestaurantItem(data) {
    const htmls = `
    <div class="detail_imgs">
        <div class="detail_img-main" style="background-image: url(./assets/img/${data.folder}/${data.timeSrc});"></div>
        <div class="detail_img-list">
            ${getHtmlImageRestaurant(data.imgSrcs, data.folder).join('')}
        </div>
    </div>
    <div class="detail_nav-content">
        <div class="detail_nav-content-left">
            <ul>
                <li id="general_scroll">Tổng quan</li>
            </ul>
        </div>
        <div class="detail_nav-content-right">
            <span>Giá từ: <p>${data.costMin.toString().replace(/\B(?=(\d{3})+(?!\d))/g, ".")} VNĐ</p> - <p>${data.costMax.toString().replace(/\B(?=(\d{3})+(?!\d))/g, ".")} VNĐ</p></span>
            <button id="Booking_btn">Đặt</button>
        </div>
    </div>
    <div class="detail_content">
        <div class="detail_content-left">
            <div class="detail_content-title">
                <div class="">
                    <div class="detail_textTitle">${data.name}</div>
                    <div class="detail_textMainAddress">${data.addressShort} - <p onclick="searchAddressGG('${data.name}, ${data.addressShort}')">Trên bản đồ</p></div>
                </div>
                <div class="detail_content-description">
                    <p>${data.description}</p>
                </div>
            </div>

            <div class="detail_outStanding">
                <h3>Điểm nổi bật</h3>
                <div class="">
                    <div class="detail_outStanding-item">
                        <img src="./assets/img/dish.png" alt="">
                        <span>Tiện nghi</span>
                    </div>
                    <div class="detail_outStanding-item">
                        <img src="./assets/img/glass.png" alt="">
                        <span>Sang trọng</span>

                    </div>
                    <div class="detail_outStanding-item">
                        <img src="./assets/img/wife.png" alt="">
                        <span>Đa dạng</span>

                    </div>
                    <div class="detail_outStanding-item">
                        <img src="./assets/img/waiter.png" alt="">
                        <span>Tận tâm</span>

                    </div>
                </div>
                
            </div>


        </div>
        <div class="detail_content-right">
            <div class="detail_content-point">
                <div class="detail_content-point-item">
                    <img src="./assets/img/phone.png" alt="">
                    
                    <span>${data.phone}</span>
                </div>
                <div class="detail_content-point-item">
                    <img src="./assets/img/price.png" alt="">
                    
                    <span>${data.costPerManMin.toString().replace(/\B(?=(\d{3})+(?!\d))/g, ".")} - ${data.costPerManMax.toString().replace(/\B(?=(\d{3})+(?!\d))/g, ".")} (người)</span>
                </div>
                <div class="detail_content-point-item">
                    <img src="./assets/img/mark-svgrepo-com.png" alt="">
                    
                    <span>${data.point} (điểm đánh giá)</span>
                </div>
            </div>
            <div class="detail_content-address">
                <div class="">
                    <img src="./assets/img/property-map-entry-1.svg" alt="">
                </div>
                <div class="detail_content-address-list">
                    <h3>Danh sách cơ sở</h3>
                    <div class="detail_content-address-list-item">
                        ${getHtmlAddressRestaurant(data.address, data.name).join('')}
                    </div>
                </div>
            </div>
        </div>
    </div>
    
    `

    $('.content-wrap-detail').html(htmls)
}




function getHtmlImageRestaurant(listSrc, folder) {
    return listSrc.map((item) => {
        return `<div class="detail_img-item" style="background-image: url(./assets/img/${folder}/${item});"></div>`
    })
}


function getHtmlAddressRestaurant(listAddress, name) {
    return listAddress.map((item) => {
        return `<span onclick="searchAddressGG('${name}, ${item}')">${item}.</span>`
    })
}


function renderWeddingPlannerItem(data) {
    const htmls = `
    <div class="detail_imgs">
            <div class="detail_img-main" style="background-image: url(./assets/img/${data.folder}/${data.timeSrc});"></div>
            <div class="detail_img-list">
                ${getImageWedding(data.concepts, data.folder).join('')}
            </div>
        </div>
        <div class="detail_nav-content">
            <div class="detail_nav-content-left">
                <ul>
                    <li id="general_scroll">Tổng quan</li>
                    <li id="concept_scroll">Concept</li>
                </ul>
            </div>
            <div class="detail_nav-content-right">
                <span>Giá từ: <p>${data.argeCost.toString().replace(/\B(?=(\d{3})+(?!\d))/g, ".")} VNĐ</span>
                <button id="Booking_btn">Đặt</button>
            </div>
        </div>
        <div class="detail_content">
            <div class="detail_content-left">
                <div class="detail_content-title">
                    <div class="">
                        <div class="detail_textTitle">${data.name}</div>
                        <div class="detail_textMainAddress">${data.address} - <p onclick="searchAddressGG('Tiệc cưới ${data.name}, ${data.address}')">Trên bản đồ</p></div>
                    </div>
                    <div class="detail_content-description">
                        <p>${data.description}</p>
                    </div>
                </div>

                <div class="detail_outStanding">
                    <h3>Điểm nổi bật</h3>
                    <div class="">
                        <div class="detail_outStanding-item">
                            <img src="./assets/img/dish.png" alt="">
                            <span>Tiện nghi</span>
                        </div>
                        <div class="detail_outStanding-item">
                            <img src="./assets/img/glass.png" alt="">
                            <span>Sang trọng</span>

                        </div>
                        <div class="detail_outStanding-item">
                            <img src="./assets/img/wife.png" alt="">
                            <span>Đa dạng</span>

                        </div>
                        <div class="detail_outStanding-item">
                            <img src="./assets/img/waiter.png" alt="">
                            <span>Tận tâm</span>

                        </div>
                    </div>
                    
                </div>


                <div class="detail_concept">
                    <h3>Concept</h3>
                    <div class="detail_concept-list">
                        ${getConceptList(data.concepts, data.folder)}
                        
                    </div>
                    
                </div>
            </div>
            <div class="detail_content-right">
                <div class="detail_content-point">
                    <div class="detail_content-point-item">
                        <img src="./assets/img/phone.png" alt="">
                        
                        <span>${data.phone}</span>
                    </div>
                    
                    <div class="detail_content-point-item">
                        <img src="./assets/img/mark-svgrepo-com.png" alt="">
                        
                        <span>${data.point} (điểm đánh giá)</span>
                    </div>
                </div>
                <div class="detail_content-address">
                    <div class="">
                        <img src="./assets/img/property-map-entry-1.svg" alt="">
                    </div>
                    <div class="detail_content-address-list">
                        <h3>Danh sách cơ sở</h3>
                        <div class="detail_content-address-list-item">
                            <span onclick="searchAddressGG('Tiệc cưới ${data.name}, ${data.address}')">${data.address}</span>
                        </div>
                    </div>
                </div>
            </div>
        </div>
    
    `

    $('.content-wrap-detail').html(htmls)
}


function getConceptList(listConcept, folder) {

    let listHtmls = [];

    for(var key in listConcept) {

        var html = `
            <div class="detail_concept-item">
                <span class="detail_concept-item-title">
                    - ${listConcept[key].name}
                </span>
                <span class="detail_concept-item-price">
                    Từ ${listConcept[key].cost.min.toString().replace(/\B(?=(\d{3})+(?!\d))/g, ".")} đến ${listConcept[key].cost.max.toString().replace(/\B(?=(\d{3})+(?!\d))/g, ".")} (VNĐ)
                </span>

                <div class="detail_concept-imgs">
                    <div class="detail_concept-img" style="background-image: url(./assets/img/${folder}/${key}/${listConcept[key].imgSrc[0]});" ></div>
                    <div class="detail_concept-img" style="background-image: url(./assets/img/${folder}/${key}/${listConcept[key].imgSrc[1]});" ></div>
                    <div class="detail_concept-img" style="background-image: url(./assets/img/${folder}/${key}/${listConcept[key].imgSrc[2]});" ></div>
                </div>
            </div>
        `

        listHtmls.push(html)
    }

    return listHtmls

}

function getImageWedding(listConcept, folder) {
    let listHtmls = [];

    for(var key in listConcept) {

        for(var i = 0; i <= 2; i++) {
            var html = `
            <div class="detail_img-item" style="background-image: url(./assets/img/${folder}/${key}/${listConcept[key].imgSrc[i]});"></div>
                
            `
            if(listHtmls.length < 6) {
                listHtmls.push(html)
            }
        }

        
    }

    return listHtmls
}




// function 




$('#Booking_btn').click(function() {
    $('.modal_results-wrap').removeClass('hide')
})

$('#close_result-search').click(function() {
    $('.modal_results-wrap').addClass('hide')
})

$('#close_result-searchft').click(function() {
    $('#alert').removeClass('hide')

    setTimeout(function() {
        $('#alert').addClass('hide')
        $('.modal_results-wrap').addClass('hide')

        $('.modal_results-content input').val('')
    }, 3000)


})


$('#general_scroll').click(function() {
    
    $('html, body').animate({
        scrollTop: $('.detail_content-title').offset().top
      }, 500); 
})


$('#concept_scroll').click(function() {
    
    $('html, body').animate({
        scrollTop: $('.detail_concept').offset().top
      }, 500); 
})


function searchAddressGG(address) {
    var url = "https://www.google.com/maps/search/?q=" + encodeURIComponent(address);

    // Mở một tab mới với URL này
    window.open(url, '_blank');
}