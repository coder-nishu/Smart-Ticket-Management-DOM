function selectedBtnColor(event){
   const selectedbtn = document.getElementById(event);
   selectedbtn.style.backgroundColor = '#1DD100';
}
function deselectBtnColor(event){
    const selectedbtn = document.getElementById(event);
    selectedbtn.style.backgroundColor = '#F7F8F8';
 }
 function seatSelectionHandler(seatid){
    if(selectedSeats.includes(seatid))
    {
        //deselect the button
        deselectBtnColor(seatid)
        // removing specific itrm using filter method 
        selectedSeats = selectedSeats.filter(item => item !== seatid)
        console.log(selectedSeats)
    }else{
        selectedSeats.push(seatid)
        selectedBtnColor(seatid)
        console.log(selectedSeats)
    }
}

function updateBtnStateOnMaxSelection(){
    if(selectedSeats.length >= max_Seat)
    {
        seatButtons.forEach(btn => {
            if(selectedSeats.includes(btn.id)){
                btn.disabled = false;
                btn.classList.remove('opacity-50', 'cursor-not-allowed');
            }else{
                btn.disabled = true
                btn.classList.add('opacity-50', 'cursor-not-allowed');
            }
        })
        
    }
    else{
        seatButtons.forEach(btn => {
                btn.disabled = false;
                btn.classList.remove('opacity-50', 'cursor-not-allowed');
        })
    }
}
function addingSeatClassPrice(selectedSeats, seatClass, price) {
    const seat_info_price = document.getElementById('seat-info-price-container')
    seat_info_price.innerHTML = ``
    selectedSeats.forEach(element => {
        const newDiv = document.createElement('div')
        newDiv.classList.add('flex', 'justify-between', 'items-center', 'p-4')
        newDiv.innerHTML =
            `
            <h1>${element}</h1>
            <h1>${seatClass}</h1>
            <h1>${price}</h1>
            `;
        seat_info_price.appendChild(newDiv);

    });

}