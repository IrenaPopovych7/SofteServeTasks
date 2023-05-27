function greetUser(username) {
  const currentHour = new Date().getHours();
  let greeting;

  if (currentHour >= 0 && currentHour < 6) {
    greeting = `Доброї ночі, ${username}!`;
  } else if (currentHour >= 6 && currentHour < 12) {
    greeting = `Доброго ранку, ${username}!`;
  } else if (currentHour >= 12 && currentHour < 18) {
    greeting = `Доброго дня, ${username}!`;
  } else {
    greeting = `Доброго вечора, ${username}!`;
  }

  return greeting;
}
