class CountdownTimer {
  constructor({
    selector,
    targetDate
  }) {
    this.targetDate = new Date(targetDate);
    this.daysSpan = document.querySelector(`${selector} .value[data-value="days"]`);
    this.hoursSpan = document.querySelector(`${selector} .value[data-value="hours"]`);
    this.minutesSpan = document.querySelector(`${selector} .value[data-value="mins"]`);
    this.secondsSpan = document.querySelector(`${selector} .value[data-value="secs"]`);
  }
  
  pad(value) {
    return value < 10 ? `0${value}` : value;
  }
  countDowm() {
    const currentTime = new Date();
    this.createValue(currentTime);
  }

  showTime() {
    setInterval(() => this.countDowm(), 1000);
  }

  createValue(currentTime) {
    const time = this.targetDate - currentTime;
    const days = Math.floor(time / (1000 * 60 * 60 * 24));
    const hours = Math.floor((time % (1000 * 60 * 60 * 24)) / (1000 * 60 * 60));
    const mins = Math.floor((time % (1000 * 60 * 60)) / (1000 * 60));
    const secs = Math.floor((time % (1000 * 60)) / 1000);
    this.daysSpan.textContent = this.pad(days);
    this.hoursSpan.textContent = this.pad(hours);
    this.minutesSpan.textContent = this.pad(mins);
    this.secondsSpan.textContent = this.pad(secs);

  }
}
const timer = new CountdownTimer({
  selector: '#timer-1',
  targetDate: new Date('Dec 31, 2021'),
});

const startBtn = document.querySelector("button[data-action-start]");
 startBtn.addEventListener("click", startTimer);

 function startTimer() {
   startBtn.setAttribute('disabled', '')
   timer.showTime();
 }