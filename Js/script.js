const max_Seat = 4
var selectedSeats = []
const seatButtons = document.querySelectorAll('.seat-container .btn');

seatButtons.forEach((i) => {
    i.addEventListener('click', () => {
        seatSelectionHandler(i.id);
        updateBtnStateOnMaxSelection();
        updateSeatInfoState()
    })

})
function updateSeatInfoState() {

    //available seat update
    const num_of_avail_seat = document.getElementById('num-of-available-seat')
    const final_available = 40 - selectedSeats.length
    num_of_avail_seat.innerText = final_available

    //num of seat update
    const num_of_seat = document.getElementById('num-of-seat')
    num_of_seat.innerText = selectedSeats.length

    //coupon-box showed if selectec seat = 4
    if (selectedSeats.length === 4) {
        const couponBox = document.getElementById('coupon-box')
        couponBox.classList.remove('hidden')
    } else {
        const couponBox = document.getElementById('coupon-box')
        couponBox.classList.add('hidden')
    }
    //total price update
    const t_price = document.getElementById('total-price')
    const g_price = document.getElementById('grand-price')
    const price = selectedSeats.length * 550
    t_price.innerText = price
    g_price.innerText = price

    //update seatInfo,class,price after clicking each button
    addingSeatClassPrice(selectedSeats, 'Economy', 550)

}

//forCoupon button 
document.getElementById('coupon-btn').addEventListener('click', () => {
    const coupon1 = 'new15'
    const coupon2 = 'couple20'
    const inputBox = document.getElementById('coupon-input')
    const inputVal = inputBox.value
    const price_4person = 550*4
    const g_price = document.getElementById('grand-price')
    if(inputVal.toLowerCase() === coupon1 ){
        g_price.innerText = (price_4person - (price_4person*0.15))
        const couponBox = document.getElementById('coupon-box')
        couponBox.classList.add('hidden')
    }else if (inputVal.toLowerCase() === coupon2){
        g_price.innerText = (price_4person - (price_4person*0.2))
        const couponBox = document.getElementById('coupon-box')
        couponBox.classList.add('hidden')
    }
    else{
        alert("Coupon Code Is Not Valid.Try Again")
    }
    inputBox.value = ''
    
})
