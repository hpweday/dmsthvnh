

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

        $(window).click(function(event) {
            if (!event.target.matches('.select_type-bar-content span') && !event.target.matches('#list_arrange') && !event.target.matches('#type_arrange')) {
                $('#list_arrange').addClass('hide')
              }
            // if(e.ta)
        })


        $('.search_select-bar').click(function() {
            $('.search_select-bar-check').removeClass('search_select-bar-check')
            $(this).addClass('search_select-bar-check')

            const typeSearch = $('.search_select-bar-check span').text();

            switch(typeSearch) {
                case "Trung tâm tiệc cưới":
                    $('#arrange_count').removeClass('hide')
                    $('#arrange_planner').addClass('hide')
                    break;

                case "Wedding Planner":

                    $('#arrange_count').addClass('hide')
                    $('#arrange_planner').removeClass('hide')


                    break;
            }

        })

        $('#arrange_planner span').click(function() {
            $('#list_arrange').removeClass('hide')
        })


        $('#list_arrange li').click(function() {
            const text = $(this).text();
            console.log(text)
            $('#type_arrange').html(text)

            $('#list_arrange').addClass('hide')

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

        $('.locate_view').click(function() {
            const textType = $(this).find('.name_locate span').text();

            $('.locate_check').removeClass('locate_check')

            switch(textType) {
                case "Hà Nội":
                    $('#outStand_HN').addClass('locate_check')
                    _this.scrollWithLocate(1);
                    break;
                case "Đà Nẵng":
                    $('#outStand_DN').addClass('locate_check')
                    _this.scrollWithLocate(2)
                    break;
                case "Hồ Chí Minh":
                    $('#outStand_HCM').addClass('locate_check')
                    _this.scrollWithLocate(3)
                    break;
            }
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

        $('#close_result-search').click(function() {
            $('.modal_results-wrap').addClass('hide')
            $('.search_modal-empty').addClass('hide')
        })

        $('#close_result-searchft').click(function() {
            $('.modal_results-wrap').addClass('hide')
            $('.search_modal-empty').addClass('hide')

        })
        
    },


    scrollWithLocate: function(id) {
        this.renderRestaurantByCity(id)
        

        $('html, body').animate({
            scrollTop: $('.outStanding').offset().top
          }, 500); 

        
    },


    preSearchBar: function() {

        const _this = this;

        const typeSearch = $('.search_select-bar-check span').text();

        const startDate = $('#datepickerStart').val();
        const endDate = $('#datepickerEnd').val();
        const nameOrCity = $('#nameOrCity').val();
        const quantityPeople = $('#quantity_people').val();

        const typeArrange = $('#type_arrange').text();

        $('.modal_results-wrap').removeClass('hide');
        $('.search_modal-empty').addClass('hide')

        switch(typeSearch) {
            case "Trung tâm tiệc cưới":
                var result = _this.filterSearchRestaurant(nameOrCity,quantityPeople, startDate, endDate)
                console.log(result)
                if(result.length == 0) {
                    console.log('empty')
                    $('.search_modal-empty').removeClass('hide')
                } else {
                    _this.renderItemSearchRestaurant(result);
                }
                break;

            case "Wedding Planner":
                var resultWedding = _this.filterSearchWeddingPlanner(nameOrCity, typeArrange)
                if(resultWedding.length == 0) {
                    $('.search_modal-empty').removeClass('hide')
                } else {
                    _this.renderItemSearchWeddingPlanner(resultWedding)
                }


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
                    <a href="./${res.pageID}.html">
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
                    </a>
            </li>`
            })

            $('.outStanding_content ul').html(htmlRes.join(''))
        }

    },


    renderItemSearchRestaurant: function(listResult) {
        const _this = this;

        const htmlRes = listResult.map(function(res) {
            return `
            <a href="./${res.pageID}.html" target="blank">
                <div class="modal_result-item">
                    <div class="modal_results-content-left">
                        <div class="modal-result-img" style="background-image: url(./assets/img/${res.folder}/${res.timeSrc});"></div>
                    </div>
                    <div class="modal_results-content-mid">
                        <div class="modal_result-title">${res.title}</div>
                        <div class="modal_result-middle">
                            <div class="modal_result-star">
                                ${_this.getStar(res.star).join('')}
                            </div>

                            <div class="modal_result-locate">
                                <i class="fa-solid fa-location-dot"></i>
                                ${res.address[0]}
                            </div>
                        </div>
                        <div class="modal_result-description">
                            ${res.description}
                        </div>
                    </div>
                    <div class="modal_results-content-right">
                        <div class="modal_result-point">
                            ${res.point}
                        </div>
                    </div>
                </div>
            </a>
            `
        })

        $('.modal_results-content').html(htmlRes.join(''))
    },


    renderItemSearchWeddingPlanner: function(listResult) {
        const _this = this;

        const htmlRes = listResult.map(function(res) {
            return `
            <a href="./${res.pageID}.html" target="blank">
                <div class="modal_result-item">
                    <div class="modal_results-content-left">
                        <div class="modal-result-img" style="background-image: url(./assets/img/${res.folder}/${res.timeSrc});"></div>
                    </div>
                    <div class="modal_results-content-mid">
                        <div class="modal_result-title">${res.title}</div>
                        <div class="modal_result-middle">
                            <div class="modal_result-star">
                                <span>${res.argeCost.toString().replace(/\B(?=(\d{3})+(?!\d))/g, ".")} VNĐ</span>
                            </div>

                            <div class="modal_result-locate" style="margin-top: 0.5rem">
                                <i class="fa-solid fa-location-dot"></i>
                                ${res.address}
                            </div>
                        </div>
                        <div class="modal_result-description">
                            ${res.description}
                        </div>
                    </div>
                    <div class="modal_results-content-right">
                        
                    </div>
                </div>
            </a>
            `
        })

        $('.modal_results-content').html(htmlRes.join(''))
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


    filterSearchWeddingPlanner: function(nameOrCity, typeArrange) {
      
        let arrayDone = []

        let valueFilter = dataWeddingPlanner.filter(function(it) {
            return (it.name.toLowerCase().includes(nameOrCity.toLowerCase()) || it.address.toLowerCase().includes(nameOrCity.toLowerCase()))
        })

        switch(typeArrange) {
            case "Thấp đến cao": 
                valueFilter.sort(function(a, b) {
                    return a.argeCost - b.argeCost;
                });
              break;
            case "Cao đến thấp": 
                valueFilter.sort(function(a, b) {
                    return b.argeCost - a.argeCost;
                });
            break;
        }


        return valueFilter;
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