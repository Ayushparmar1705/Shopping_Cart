let mainTotal = 0;
$("button").click(function () {


    let cartArr = [];

    let qty = parseInt($(this).siblings('.qty').val());
    let name = $(this).siblings(".name").text();



    let price = parseInt($(this).siblings(".price").text());
    let img = $(this).siblings(".img").attr("src");


    
    if (qty === 0) {
        alert("Please enter valid quntity...");
    }
    else {
        total = price * qty;
        let cartObj = {
            "name": name,
            "price": price,
            "quntity": qty,
            "img": img,
            "total": total,
        }

        cartArr.push(cartObj);

        cartArr.map((data) => {
            $("#table").append(`
            <tr>
                <td>${data.name}</td>
                <td>${data.price}</td>
                <td>${data.quntity}</td>
                <td><img src=${data.img}></td>
                <td>${data.total}</td>   
                
            </tr>
        ${mainTotal = mainTotal + data.total}
        `);

        })
        $("#maintotal").text('Your total ' + mainTotal)

    }
})