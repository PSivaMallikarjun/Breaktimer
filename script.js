const startBtn = document.getElementById('startBtn');
const countdown = document.getElementById('countdown');
const timeLeft = document.getElementById('time-left');
const message = document.getElementById('message');

let timerInterval;

startBtn.addEventListener('click', () => {
  const minutes = parseInt(document.getElementById('minutes').value);

  if (isNaN(minutes) || minutes <= 0) {
    alert('Please enter a valid number of minutes.');
    return;
  }

  const endTime = new Date().getTime() + minutes * 60000; // Calculate end time in ms

  if (timerInterval) {
    clearInterval(timerInterval); // Clear any existing timer
  }

  timerInterval = setInterval(() => {
    const now = new Date().getTime();
    const timeRemaining = endTime - now;

    if (timeRemaining <= 0) {
      clearInterval(timerInterval);
      timeLeft.textContent = '00:00';
      message.textContent = 'Break time is over! 🎉';
      return;
    }

    const minutesLeft = Math.floor(timeRemaining / 60000);
    const secondsLeft = Math.floor((timeRemaining % 60000) / 1000);

    timeLeft.textContent = `${String(minutesLeft).padStart(2, '0')}:${String(secondsLeft).padStart(2, '0')}`;
  }, 1000);

  message.textContent = '';
});
