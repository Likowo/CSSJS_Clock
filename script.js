// select elements from DOM
const secondsHand = document.querySelector('.secondsHand')
const minutesHand = document.querySelector('.minutesHand')
const hourHand = document.querySelector('.hourHand')

// Create fxn called setDate
const setDate = () => {
    const date = new Date();

   const seconds = date.getSeconds();
//    console.log(seconds)
   const secondsDegrees = ((seconds / 60) * 360) + 90; // Match seconds to degrees so seconds hand circles 360 degrees at 60 seconds
   secondsHand.style.transform = `rotate(${secondsDegrees}deg)`;

   const minutes = date.getMinutes();
//    console.log(minutes)
   const minutesDegrees = ((minutes / 60) * 360) + 90; // Match minutes to degrees so minutes hand  moves to next number at 60 seconds
   minutesHand.style.transform = `rotate(${minutesDegrees}deg)`;

   const hour = date.getMinutes(); //Set function as getMinutes, as 60 minutes make an hour
//    console.log(hour)
   const hourDegrees = ((minutes / 12) * 360) + 90; // Match hour  to degrees so hour hand  circles 360 degrees at 60 minutes
   hourHand.style.transform = `rotate(${hourDegrees}deg)`;
  }

setInterval(setDate,1000); //  Use setInverval method to Enables clock hands to run every second. 1000 is milliseconds that makes 1 minute