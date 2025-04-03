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
    if(selectedSeats.lengthn >= max_Seat){
        alert("Maximum seat exceed")
        console.log("Maximum seat exceed")
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
