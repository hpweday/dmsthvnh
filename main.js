

///

let handleLogicData = {



    // Khởi tạo thư viện datePicker

    IntilizationDatePicker: function() {

        var dateStart = flatpickr("#datepickerStart", {
            defaultDate: "today", // Hiển thị ngày hiện tại
            dateFormat: "d-m-Y", // Định dạng ngày
          });
        
        var dateEnd =  flatpickr("#datepickerEnd", {
            defaultDate: new Date(new Date().getTime() + 24 * 60 * 60 * 1000),
            dateFormat: "d-m-Y", // Định dạng ngày
        });
        
    },


    // Khởi tạo Event trong DOM

    addEventDOM: function() {
        const _this = this;


        $('.search_select-bar').click(function() {
            $('.search_select-bar-check').removeClass('search_select-bar-check')
            $(this).addClass('search_select-bar-check')
        })
        
        
        $('.search_bar-focus').click(function() {
            $('.layer_bt').removeClass('hide')
            $('.content_searchBar').addClass('filter_search-bar')
        })
        
        $('.layer_bt').click(function() {
            $(this).toggleClass('hide')
            $('.content_searchBar').toggleClass('filter_search-bar')
        
        })

        $('.search_cf').keyup(function(e) {

            if(e.originalEvent.keyCode == 13) {
                _this.preSearchBar();

            }
        })


        $('.search_bar-confirm').click(function() {
            _this.preSearchBar();

        })




        
        $(document).keyup(function(e) {
            if(e.originalEvent.code == "Escape") {
                $('.layer_bt').addClass('hide')
                $('.content_searchBar').removeClass('filter_search-bar')
            }
        })
        
        
        $('.outStanding_nav li').click(function() {
            $('.locate_check').removeClass('locate_check')
            $(this).addClass('locate_check')

            const textContent = $(this).find('span').text();

            switch(textContent) {
                case 'Hà Nội':
                    _this.renderRestaurantByCity(1);
                    break;
                case 'Đà Nẵng':
                    _this.renderRestaurantByCity(2);

                    break;
                case 'Hồ Chí Minh':
                    _this.renderRestaurantByCity(3);

                    break;
            }
        })
        
    },


    preSearchBar: function() {

        const _this = this;

        const typeSearch = $('.search_select-bar-check span').text();

        const startDate = $('#datepickerStart').val();
        const endDate = $('#datepickerEnd').val();
        const nameOrCity = $('#nameOrCity').val();
        const quantityPeople = $('#quantity_people').val();

        switch(typeSearch) {
            case "Trung tâm tiệc cưới":
                var result = _this.filterSearchRestaurant(nameOrCity,quantityPeople, startDate, endDate)

                console.log(result)
                break;

            case "Wedding Planner":

                break;
        }
    },


    // Render Restaurant Main

    renderRestaurantByCity: function(idCity) {
        const _this = this;

        const listRestaurant = listRestaurantData.filter((item) => item.idCity == idCity);
        if(listRestaurant) {
            const htmlRes = listRestaurant.map(function(res) {
                return `<li>
                <div class="background_stand" style="background-image: url(./assets/img/${res.folder}/${res.timeSrc});">
                    <label class="label_point">${res.point}</label>
                </div>
                <div class="background_title">${res.title}</div>
                <div class="background_description">
                    <div class="star_wrap">
                        ${_this.getStar(res.star).join('')}
                    </div>
                    <div class="address_des">
                        <i class="fa-solid fa-location-dot"></i>
                        <span>${res.addressShort}</span>
                    </div>
                </div>
            </li>`
            })

            $('.outStanding_content ul').html(htmlRes.join(''))
        }

    },




    filterSearchRestaurant: function(nameOrCity, quantity, dateStart, dateEnd) {
        const dayStart = +dateStart.split('-')[0];
        const dayEnd = +dateEnd.split('-')[0] + 1;

        let arrayDone = []

        const valueFilter = listRestaurantData.filter(function(it) {
            return (it.name.toLowerCase().includes(nameOrCity.toLowerCase()) || it.address.join(',').toLowerCase().includes(nameOrCity.toLowerCase())) && quantity <= it.MaxPeople
        })


        for (let i = 0; i < valueFilter.length; i++) {
            // Duyệt qua mỗi phần tử trong mảng
            for (let j = 0; j < valueFilter[i].EmptyDay.length; j++) {
              // Kiểm tra xem phần tử có nằm trong khoảng không
              if (valueFilter[i].EmptyDay[j] >= dayStart && valueFilter[i].EmptyDay[j] <= dayEnd) {
                // Nếu có, thêm mảng vào kết quả và thoát khỏi vòng lặp trong mảng hiện tại
                arrayDone.push(valueFilter[i]);
                break;
              }
            }
        }


        return arrayDone;
    },


    getStar: function(star) {
        let starHtml = [];
        for(var i = 1; i <= star; i++) {
            starHtml.push(`<i class="fa-solid fa-star"></i>`)
        }

        return starHtml;
    },

    Intialization: function() {
        this.IntilizationDatePicker();
        this.addEventDOM();
        this.renderRestaurantByCity(1);
    }

}


handleLogicData.Intialization();