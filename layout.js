$(document).ready(function () {
    console.log("網頁已載入並準備就緒！");

    renderRestaurantData(restaurants);
});

function renderRestaurantData(restaurantData) {
    if (typeof restaurantData !== 'undefined' && restaurantData.length > 0) {
        let container = $('#myRestaurants');
        container.empty(); // 清空現有內容

        restaurantData.forEach(function (restaurant) {
            let restaurantHTML = `
                            <div class="row" style="margin-top: 5px;margin-bottom: 45px;">
                                <!-- 左側圖片 -->
                                <div class="col-12 col-md-6 d-flex align-items-center justify-content-center mb-3 mb-md-0">
                                    <img src=${restaurant.image} class="img-fluid rounded shadow" alt="餐廳圖片">
                                </div>
                                <!-- 右側文字 -->
                                <div class="col-12 col-md-6 d-flex align-items-center">
                                    <div>
                                        <h2>${restaurant.name}</h2>
                                        <p>${restaurant.description}</p>
                                        <p><strong>地址:</strong> ${restaurant.address}</p>
                                        <a href="${restaurant.website}" class="btn btn-primary me-2" target="_blank">造訪網站</a>
                                        <a href="${restaurant.bookingLink}" class="btn btn-success" target="_blank">線上訂位</a>
                                    </div>
                                </div>
                            </div>
                        `;
            container.append(restaurantHTML);
        });
    } else {
        console.log("沒有餐廳資料可顯示。");
    }
}