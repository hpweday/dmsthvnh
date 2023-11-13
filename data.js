

let listRestaurantData = [
    {
        'idCity': 1,
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