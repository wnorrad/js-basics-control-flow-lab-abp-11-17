function scuberGreetingForFeet(ride) {
  if (ride <= 400) {
    return 'This one is on me!';
  } else if (ride > 400 && ride < 2501) {
    return 'I will gladly take your thirty bucks.';
  } else if (ride > 2500) {
    return 'No can do.';
  }
}

function ternaryCheckCity(city) {
  if (city == 'NYC') {
  return 'Ok, sounds good.';
  } else if (city !== 'NYC') {
  return 'No go.';
 }
}

function switchOnCharmFromTip(tip) {
  switch(tip) {
    case "generous":
      return 'Thank you so much.';
  
    case "not as generous":
      return 'Thank you.';
      
    default:
      return 'Bye.';
  
  }
}
