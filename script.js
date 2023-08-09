// select elements from DOM
const secondsHand = document.querySelector('.secondsHand')

// Create fxn called setDate
const setDate = () => {
    const now = new Date();
   const seconds = now.getSeconds();
   console.log(seconds)
   const secondsDegreees = ((seconds / 60) * 360) + 90; // Match seconds to degrees so seconds hand is circles 380 degrees at 60 seconds
   secondsHand.style.transform = `rotate(${secondsDegreees}deg)`;
   
}

setInterval(setDate,1000) // 1000 is milliseconds that make 1 minute