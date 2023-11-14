

let listRestaurantData = [
    {
        'idCity': 1,
        'pageID': 10,
        'name': "Trống Đồng Palace",
        'folder': 'trongdong',
        'title': 'Trống Đồng Palace',
        'description': "Menu đa dạng, cơ sở vật chất sang trọng",
        'imgSrcs': ["IMG_4277.PNG", "IMG_4276.JPG", "IMG_4275.PNG", "IMG_4279.JPG", "IMG_4280.JPG", "IMG_4278.JPG"],
        'timeSrc': "IMG_4278.JPG",
        'address': ["Trần Đăng Ninh, Hà Nội", "Quán Sứ, Hà Nội", "Hàng Cót, Hà Nội", "Hà Đông, Hà Nội", "Hoàng Quốc Việt, Hà Nội"],
        'EmptyDay': [18, 19, 20, 22, 23, 28, 30],
        'addressShort': 'Trần Đăng Ninh, Hà Nội',
        "phone": "0966719222",
        "star": 4,
        "MaxPeople": 1000,
        "costMin": 20000000,
        "costMax": 40000000,
        "costPerManMin": 250000,
        "costPerManMax": 400000,
        "point": 7.8,
        
    },
    {
        'idCity': 1,
        'pageID': 12,
        'name': "Sheraton",
        'folder': 'sheraton',
        'title': 'Sheraton - Hà Nội',
        'description': "Cơ sở vật chất hiện đại, sang trọng, menu độc đáo mang đậm chất Á - Âu",
        'imgSrcs': ["IMG_4290.JPG", "IMG_4289.JPG", "IMG_4292.JPG", "IMG_4288.JPG", "IMG_4291.JPG", "IMG_4287.JPG"],
        'timeSrc': "IMG_4290.JPG",
        'address': ["K5 Nghi Tàm, số 11 Xuân Diệu, Tây Hồ, Hà Nội."],
        'EmptyDay': [13, 14, 15, 20, 21, 29, 30],
        'addressShort': 'Tây Hồ, Hà Nội',
        "phone": "0243199000",
        "star": 5,
        "MaxPeople": 1000,
        "costMin": 30000000,
        "costMax": 70000000,
        "costPerManMin": 675000,
        "costPerManMax": 2000000,
        "point": 8.9,

        
    },
    {
        'idCity': 1,
        'pageID': 14,
        'name': "Melia",
        'folder': 'melia',
        'title': 'Melia - Hà Nội',
        'description': "Cơ sở vật chất hiện đại, tiện nghi, menu 5 sao vô cùng cao cấp",
        'imgSrcs': ["IMG_4284.JPG", "IMG_4285.JPG", "IMG_4286.JPG", "IMG_4282.JPG", "IMG_4283.JPG", "IMG_4281.JPG"],
        'timeSrc': "IMG_4282.JPG",
        'address': ["Số 44B, Lý Thường Kiệt, Quận Hoàng Kiếm, Hà Nội."],
        'EmptyDay': [27, 28, 29, 30],
        'addressShort': 'Quận Hoàng Kiếm, Hà Nội',
        "phone": "02439343343",
        "star": 5,
        "MaxPeople": 1200,
        "costMin": 30000000,
        "costMax": 70000000,
        "costPerManMin": 675000,
        "costPerManMax": 2000000,
        "point": 8.6,
        
    },
    {
        'idCity': 2,
        'pageID': 16,
        'name': "Golden Phoenix Palace",
        'folder': "goldenPhoenix",
        'title': 'Golden Phoenix Palace - Đà Nẵng',
        'description': "Đây là Trung tâm Hội nghị - Tiệc cưới hàng đầu tại Miền Trung, không gian lớn và sang trọng, menu đa dạng",
        'EmptyDay': [13, 14, 17, 27, 28, 29, 30],
        'imgSrcs': ["IMG_4321.JPG", "IMG_4325.JPG", "IMG_4322.JPG", "IMG_4324.JPG", "IMG_4323.JPG", "IMG_4320.JPG"],
        'timeSrc': "IMG_4320.JPG",
        'address': ["A8.2 Lô 1,2 Khu công viên Bắc Tượng Đài, đường 2/9, Hải Châu, Đà Nẵng."],
        'addressShort': 'Hải Châu, Đà Nẵng',
        "phone": "0236.366.8888",
        "star": 4,
        "MaxPeople": 900,
        "costMin": 20000000,
        "costMax": 50000000,
        "costPerManMin": 300000,
        "costPerManMax": 1000000,
        "point": 8.3,
        
    },
    {
        'idCity': 2,
        'pageID': 18,
        'name': "Mikado Palace",
        'folder': "mikado",
        'title': 'Mikado Palace - Đà Nẵng',
        'description': "Không gian lãng mạn, sang trọng, thực đơn phong phú, phù hợp với khẩu vị người Việt Nam.",
        'EmptyDay': [13, 18, 20, 24, 25, 29, 30],
        'imgSrcs': ["IMG_4333.JPG", "IMG_4337.JPG", "IMG_4336.JPG", "IMG_4334.JPG", "IMG_4335.JPG", "IMG_4332.JPG"],
        'timeSrc': "IMG_4335.JPG",
        'address': ["487 Nguyễn Tất Thành, Thanh Khê, Đà Nẵng."],
        'addressShort': 'Thanh Khê, Đà Nẵng',
        "phone": "0905 742 368",
        "star": 3,
        "MaxPeople": 700,
        "costMin": 20000000,
        "costMax": 30000000,
        "costPerManMin": 200000,
        "costPerManMax": 700000,
        "point": 7.3,
        
    },
    {
        'idCity': 2,
        'pageID': 20,
        'name': "White Swan",
        'folder': "whiteSwan",
        'title': 'White Swan - Đà Nẵng',
        'description': "Không gian hiện đại, mang đậm màu sắc phương Tây. Ẩm thực độc đáo, đội ngũ nhân viên chuyên nghiệp.",
        'EmptyDay': [11, 14, 26, 28, 29, 30],
        'imgSrcs': ["IMG_4330.JPG", "IMG_4331.JPG", "IMG_4328.JPG", "IMG_4329.JPG", "IMG_4327.JPG", "IMG_4326.JPG"],
        'timeSrc': "IMG_4327.JPG",
        'address': ["B35-36-37 Phạm Văn Đồng, Sơn Trà, Đà Nẵng."],
        'addressShort': 'Sơn Trà, Đà Nẵng',
        "phone": "0905 067 514",
        "star": 4,
        "MaxPeople": 850,
        "costMin": 20000000,
        "costMax": 40000000,
        "costPerManMin": 300000,
        "costPerManMax": 1000000,
        "point": 7.8,
        
    },
    {
        'idCity': 3,
        'pageID': 22,
        'folder': "landmark",
        'name': "Vinpearl Luxury Landmark 81",
        'title': 'Vinpearl Luxury Landmark 81 - Hồ Chí Minh',
        'description': "Không gian hiện đại ngắm trọn thành phố. Menu sang trọng mang đậm chất Á - Âu.",
        'EmptyDay': [13, 30],
        'imgSrcs': ["IMG_4304.JPG", "IMG_4305.JPG", "IMG_4307.JPG", "IMG_4308.JPG", "IMG_4306.JPG", "IMG_4303.JPG"],
        'timeSrc': "IMG_4306.JPG",
        'address': ["208 Nguyễn Hữu Cảnh, P.22, Quận Bình Thạnh, Tp. Hồ Chí Minh."],
        'addressShort': 'Quận Bình Thạnh, Tp. Hồ Chí Minh',
        "phone": "1900 23 23 89",
        "star": 5,
        "MaxPeople": 1000,
        "costMin": 70000000,
        "costMax": 100000000,
        "costPerManMin": 1000000,
        "costPerManMax": 2000000,
        "point": 9.5,
        
    },
    {
        'idCity': 3,
        'pageID': 24,
        'name': "Gem Center",
        'folder': 'gemCenter',
        'title': 'Gem Center - Hồ Chí Minh',
        'description': "Được xem là nhà hàng tiệc cưới đẹp và có không gian lớn nhất quận 1. Không gian sang trọng và quyến rũ. Menu độc đáo kết hợp hai nền ẩm thực Á - Âu",
        'imgSrcs': ["IMG_4311.JPG", "IMG_4312.JPG", "IMG_4313.JPG", "IMG_4310.JPG", "IMG_4315.JPG", "IMG_4314.JPG", "IMG_4309.JPG"],
        'EmptyDay': [13, 14, 16, 20, 30],
        'timeSrc': "IMG_4309.JPG",
        'address': ["8 Nguyễn Bỉnh Khiêm, Đa Kao, Quận 1, Tp. Hồ Chí Minh."],
        'addressShort': 'Quận 1, Tp. Hồ Chí Minh',
        "phone": "1900 998 890",
        "star": 4,
        "MaxPeople": 900,
        "costMin": 30000000,
        "costMax": 60000000,
        "costPerManMin": 500000,
        "costPerManMax": 2000000,
        "point": 8.0,
        
    },
    {
        'idCity': 3,
        'pageID': 26,
        'name': "Gala Royale",
        'folder': 'galaRoyal',
        'title': 'Gala Royale - Hồ Chí Minh',
        'description': "Nổi bật với kiến trúc hiện đại những vẫn giữ nét cổ điển đặc trưng phương Tây. Menu đa dạng.",
        'imgSrcs': ["IMG_4318.WEBP", "IMG_4315.JPG", "IMG_4317.WEBP", "IMG_4319.WEBP", "IMG_4316.WEBP", "IMG_4314.JPG"],
        'timeSrc': "IMG_4316.WEBP",
        'address': ["63 Mạc Đĩnh Chi, phường Đakao, Quận 1, Tp. Hồ Chí Minh."],
        'EmptyDay': [13, 17, 21, 27, 30],

        'addressShort': 'Quận 1, Tp. Hồ Chí Minh',
        "phone": "028 3825 6048",
        "star": 4,
        "MaxPeople": 700,
        "costMin": 20000000,
        "costMax": 40000000,
        "costPerManMin": 200000,
        "costPerManMax": 1000000,
        "point": 7.5,
        
    }
]



function getStar(star) {
    let starHtml = [];
    for(var i = 1; i <= star; i++) {
        starHtml.push(`<i class="fa-solid fa-star"></i>`)
    }

    return starHtml;
}



let dataWeddingPlanner = [
    {
        'idCity': 1,
        'pageID': 28,
        'name': "Hajime",
        'folder': "hajime",
        'title': 'Hajime',
        'address': 'Hà Nội',
        'description': "Hajime (Wedding & Event) tự hào là một trong những công ty dẫn đầu trong việc tư vấn và thiết kế tổ chức tiệc cưới, sự kiện ở Hà Nội. Hajime cung cấp các dịch vụ: Thiết kế, trang trí đám cưới, trang trí tư gia…",

        'concepts': {
            'truyenthong': {
                'name': 'Concept Truyền Thống',
                'cost': {
                    'max': 40000000,
                    'min': 30000000,
                },
                'imgSrc': ["A.jpg", "TT_1.jpg", "TT.jpg"]
            },
            'hiendai': {
                'name': 'Concept Hiện Đại',
                'cost': {
                    'max': 50000000,
                    'min': 40000000,
                },
                'imgSrc': ["1.jpg", "2.jpg", "3.jpg"]
            },
            'vuonhoa': {
                'name': 'Concept Vườn Hoa',
                'cost': {
                    'max': 60000000,
                    'min': 50000000,
                },
                'imgSrc': ["flowe_2.jpg", "flower 3.jpg", "Flower_1.jpg"]
            }
        },
        
        'timeSrc': "truyenthong/A.jpg",
        "phone": "098 667 95 23",
        "argeCost": 42000000,
        
    },
    {
        'idCity': 1,
        'pageID': 30,
        'name': "Thuyền Giấy",
        'folder': "thuyengiay",
        'title': 'Thuyền Giấy',
        'address': 'Hà Nội',
        'description': "Qua hình ảnh tinh tế và màu sắc nhã nhặn, các sản phẩm của Thuyền Giấy thể hiện được sự đầu tư chất xám và nét đặc sắc riêng.",

        'concepts': {
            'blackWhite': {
                'name': 'Concept Black And White',
                'cost': {
                    'max': 70000000,
                    'min': 60000000,
                },
                'imgSrc': ["Wedding-Tran-Hoang0053_websize-768x510.jpg", "Wedding-Tran-Hoang0159_websize-768x513.jpg", "Wedding-Tran-Hoang0166_websize-768x513.jpg"]
            },
            'parisian': {
                'name': 'Concept Parisian',
                'cost': {
                    'max': 60000000,
                    'min': 50000000,
                },
                'imgSrc': ["7-1-768x511.jpg", "41-768x511.jpg", "71-300x450.jpg"]
            },
            'senTayHo': {
                'name': 'Concept Sen Tây Hồ',
                'cost': {
                    'max': 50000000,
                    'min': 40000000,
                },
                'imgSrc': ["ban-1024x683.jpg", "untitled-9-1024x683.jpg", "untitled-10-1-768x473.jpg"]
            }
        },
        
        'timeSrc': "blackWhite/Wedding-Tran-Hoang0166_websize-768x513.jpg",
        "phone": "0972193457",
        "argeCost": 55000000,
        
    },
    {
        'idCity': 1,
        'pageID': 32,
        'name': "Voan",
        'folder': "voan",
        'title': 'Voan',
        'address': 'Hà Nội',
        'description': "VOAN Wedding & Event Consultant là thương hiệu Wedding Planner tiên phong & tổ chức trang trí sự kiện chuyên nghiệp tại Việt Nam. Lựa chọn VOAN để đổi lấy sự yên tâm trong quá trình chuẩn bị cũng như sự thảnh thơi hoàn toàn để tận hưởng và tự hào về ngày vui của mình.",

        'concepts': {
            'EternalGarden': {
                'name': 'Concept Eternal Garden',
                'cost': {
                    'max': 50000000,
                    'min': 40000000,
                },
                'imgSrc': ["10.jpg", "12.jpg", "13.jpg"]
            },
            'Fairytale': {
                'name': 'Concept Fairytale',
                'cost': {
                    'max': 40000000,
                    'min': 30000000,
                },
                'imgSrc': ["6.jpg", "33.jpg", "44.jpg"]
            },
            'Glamour': {
                'name': 'Concept Glamour',
                'cost': {
                    'max': 50000000,
                    'min': 40000000,
                },
                'imgSrc': ["74.png", "75.png", "76.png"]
            }
        },
        
        'timeSrc': "Fairytale/6.jpg",
        "phone": "0912163457",
        "argeCost": 45000000,
        
    },
    {
        'idCity': 2,
        'pageID': 34,
        'name': "THO’S Wedding Planner",
        'folder': "thos",
        'title': 'THO’S Wedding Planner',
        'address': 'Đà Nẵng',
        'description': "THO'S WEDDING PLANNER & DECORATION là đơn vị hàng đầu về lĩnh vực trang trí - tổ chức tiệc cưới trọn gói uy tín, chuyên nghiệp tại Đà Nẵng. Nơi đây quy tụ đội ngũ những nhà thiết kế ý tưởng, cung cấp thiết bị, lập kế hoạch, những điều phối viên sáng tạo, giàu kinh nghiệm và chuyên nghiệp, luôn mong muốn thực hiện những đám cưới đẹp, độc đáo và đáng nhớ cho mọi cặp đôi.",

        'concepts': {
            'whiteGarden': {
                'name': 'Concept White Garden',
                'cost': {
                    'max': 60000000,
                    'min': 40000000,
                },
                'imgSrc': ["LOG_6020-1-1024x681.jpg", "LOG_6023-1aaa-1024x681.jpg", "LOG_6047-1-1022x1536.jpg"]
            },
            'forever': {
                'name': 'Concept Forever',
                'cost': {
                    'max': 60000000,
                    'min': 50000000,
                },
                'imgSrc': ["11-1024x632.jpg", "IMG_6972-1024x673.jpg", "IMG_6995-1024x612.jpg"]
            },
            'justTwo': {
                'name': 'Concept Just The Two Of Us',
                'cost': {
                    'max': 50000000,
                    'min': 40000000,
                },
                'imgSrc': ["336879293_216231630957247_6805236710379032927_n-1024x751.jpg", "337142261_180471748110797_3064073033382712868_n-1024x980.jpg", "341708556_758889832288621_6352053193434793677_n.jpg"]
            }
        },
        
        'timeSrc': "forever/11-1024x632.jpg",
        "phone": "0905 223 049",
        "argeCost": 47000000,
    },
    {
        'idCity': 2,
        'pageID': 36,
        'name': "The Planners Danang",
        'folder': "PlannersDN",
        'title': 'The Planners Danang',
        'address': 'Đà Nẵng',
        'description': "The Planners là công ty tư vấn và tổ chức đám cưới chuyên nghiệp với mục đích tạo nên những lễ cưới đẹp, độc đáo và đáng nhớ cho mọi khách hàng. Là một trong những tên tuổi đầu tiên và nổi tiếng nhất trong lĩnh vực này tại Việt Nam, The Planners phục vụ những khách hàng trong nước và quốc tế, những người đánh giá cao các dịch vụ chuyên nghiệp trong việc lên kế hoạch cưới tại những địa điểm khác nhau tại Việt Nam cũng như ở nước ngoài.",

        'concepts': {
            'vibrant': {
                'name': 'Concept Vibrant',
                'cost': {
                    'max': 60000000,
                    'min': 50000000,
                },
                'imgSrc': ["DC54.jpg", "DC70.jpg", "DC96.jpg"]
            },
            'floral': {
                'name': 'Concept Floral Wedding',
                'cost': {
                    'max': 70000000,
                    'min': 60000000,
                },
                'imgSrc': ["LIN05806.jpg", "LIN05825.jpg", "LIN06004.jpg"]
            },
            'ballroom': {
                'name': 'Concept Ballroom',
                'cost': {
                    'max': 60000000,
                    'min': 50000000,
                },
                'imgSrc': ["Decoration-117.jpg", "SneakpeekHD-57.jpg", "SneakpeekHD-173.jpg"]
            }
        },
        
        'timeSrc': "floral/LIN05806.jpg",
        "phone": "0967 884 766",
        "argeCost": 58000000,
    },
    {
        'idCity': 2,
        'pageID': 38,
        'name': "DNX Wedding",
        'folder': "dnxWedding",
        'title': 'DNX Wedding',
        'address': 'Đà Nẵng',
        'description': "DNX Wedding là đơn vị tư vấn, cung cấp dịch vụ lên kế hoạch tổ chức tiệc cưới chuyên nghiệp và uy tín tại thành phố Đà Nẵng với hơn 12 năm kinh nghiệm trong nghề và hơn 300 cặp đôi trong và ngoài nước đã lựa chọn. DNX Wedding mong muốn tạo ra một đám cưới độc đáo, nơi mọi ý tưởng và cách trang trí đều nói lên câu chuyện tình yêu lãng mạn của cô dâu và chú rể.",

        'concepts': {
            'beach': {
                'name': 'Concept Beach',
                'cost': {
                    'max': 50000000,
                    'min': 40000000,
                },
                'imgSrc': ["TTD_8482.jpg", "TTD_8504.jpg", "TTD_8531.jpg"]
            },
            'flower': {
                'name': 'Concept Flower',
                'cost': {
                    'max': 60000000,
                    'min': 50000000,
                },
                'imgSrc': ["PANA5457.jpg", "PANA5575.jpg", "PANA5650.jpg"]
            },
            'lover': {
                'name': 'Concept Lover',
                'cost': {
                    'max': 60000000,
                    'min': 50000000,
                },
                'imgSrc': ["MEO04452.jpg", "P1040591-1.jpg", "uu.jpg"]
            }
        },
        
        'timeSrc': "flower/PANA5575.jpg",
        "phone": "0783 788 789",
        "argeCost": 44000000,
    },
    {
        'idCity': 3,
        'pageID': 40,
        'name': "Lynh Thuy",
        'folder': "lynhThuy",
        'title': 'Lynh Thuy',
        'address': 'Hồ Chí Minh',
        'description': "Lynh Thùy Wedding Planner với niềm đam mê, khả năng sáng tạo có thể tư vấn và cung cấp những thứ liên quan đến đám cưới để các cô dâu chú rể có được một đám cưới trọn vẹn. Cùng những kinh nghiệm và thành tựu đã đạt được trong lĩnh vực sự kiện chuyên nghiệp. Lynh Thùy Wedding sẽ mang đến dịch vụ tốt nhất tới quý khách hàng.",

        'concepts': {
            'fairyland': {
                'name': 'Concept Fairyland',
                'cost': {
                    'max': 60000000,
                    'min': 50000000,
                },
                'imgSrc': ["t_v-decor-74_53076999818_o.jpg", "t_v-decor-122_53076906575_o.jpg", "t_v-decor-123_53076906525_o.jpg"]
            },
            'sera': {
                'name': 'Concept QUE SERA SERA',
                'cost': {
                    'max': 40000000,
                    'min': 20000000,
                },
                'imgSrc': ["knn05420_52924397445_o.jpg", "qss08179_52924398310_o.jpg", "qss08501_52924166009_o.jpg"]
            },
            'takeMoon': {
                'name': 'Take Me To The Moon',
                'cost': {
                    'max': 50000000,
                    'min': 40000000,
                },
                'imgSrc': ["DSC1351-683x1024.jpg", "TIM06779.jpg", "TIM06893-1024x683.jpg"]
            }
        },
        
        'timeSrc': "takeMoon/TIM06893-1024x683.jpg",
        "phone": "093 773 1504",
        "argeCost": 38000000,
    },
    {
        'idCity': 3,
        'pageID': 42,
        'name': "Bliss VN",
        'folder': "bliss",
        'title': 'Bliss VN',
        'address': 'Hồ Chí Minh',
        'description': "Bliss Wedding & Event Planner Việt Nam là đơn vị wedding planner hàng đầu chuyên cung cấp các dịch vụ tư vấn, lên kế hoạch, tổ chức, trang trí tiệc cưới cao cấp.",

        'concepts': {
            'mekong': {
                'name': 'Concept Mekong Delta',
                'cost': {
                    'max': 60000000,
                    'min': 50000000,
                },
                'imgSrc': ["img_0621a.png", "img_0918a.png", "tiec-cuoi-mien-tay2.png"]
            },
            'purely': {
                'name': 'Concept Purely Paradise',
                'cost': {
                    'max': 60000000,
                    'min': 50000000,
                },
                'imgSrc': ["img_0304.jpg", "trang-tri-tiec-cuoi-ngoai-troi5.jpg", "trang-tri-tiec-cuoi-ngoai-troi11.jpg"]
            },
            'wedding': {
                'name': 'Concept Wedding O’clock',
                'cost': {
                    'max': 50000000,
                    'min': 40000000,
                },
                'imgSrc': ["17124180404_e7cebd1eed_o.jpg", "17558928478_c16c0c556c_o.jpg", "wedding-oclock1.jpg"]
            }
        },
        
        'timeSrc': "purely/trang-tri-tiec-cuoi-ngoai-troi5.jpg",
        "phone": "+84 901 332 552",
        "argeCost": 50000000,
    },
    {
        'idCity': 3,
        'pageID': 44,
        'name': "By Kiet Honey",
        'folder': "byKiet",
        'title': 'By Kiet Honey',
        'address': 'Hồ Chí Minh',
        'description': "BY KIET HONEY WEDDING PLANNER tự hào là một trong những đơn vị tiên phong và có kinh nghiệm nhiều năm trong việc lên kế hoạch và trang trí tiệc cưới. Nhiệm vụ của chúng tôi là cung cấp các dịch vụ cưới, thiết kế – trang trí tiệc – sự kiện từ quá trình lên kế hoạch, làm ý tưởng & tạo ra sản phẩm để biến ngày cưới của bạn trở nên đặc biệt hơn.",

        'concepts': {
            'Lum': {
                'name': 'Concept The Luminous Garden',
                'cost': {
                    'max': 60000000,
                    'min': 50000000,
                },
                'imgSrc': ["lee-31-6137.jpg", "lee-50-3267.jpg", "lee-463-3170.jpg"]
            },
            'giveMe': {
                'name': 'Concept Give Me Your Forever',
                'cost': {
                    'max': 60000000,
                    'min': 40000000,
                },
                'imgSrc': ["decor1000-3449.jpg", "decor1020-4955.jpg", "decor1041-6253.jpg"]
            },
            'capture': {
                'name': 'Concept Capture Every Moment',
                'cost': {
                    'max': 40000000,
                    'min': 30000000,
                },
                'imgSrc': ["bykiet-59-5963.jpg", "bykiet-154-1474.jpg", "bykiet-269-9667.jpg"]
            }
        },
        
        'timeSrc': "capture/bykiet-269-9667.jpg",
        "phone": "0906 757 246",
        "argeCost": 47000000,
    },
]