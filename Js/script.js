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
    if(selectedSeats.length === 4){
        const couponBox = document.getElementById('coupon-box') 
        couponBox.classList.remove('hidden')
    }else{
        const couponBox = document.getElementById('coupon-box') 
        couponBox.classList.add('hidden')
    }
}
