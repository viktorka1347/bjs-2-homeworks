class AlarmClock {
  constructor() {
      this.alarmCollection = [];
      this.timerId = null; 
  }
  addClock(time, callback, id) { 
      if (!id)
          throw new Error('Не указан id');
      if (this.alarmCollection.length === 0) {
          this.alarmCollection.push({time, callback, id});
          return;
      }
      const existId = this.alarmCollection.find(value => value.id == id);
      if (existId) {
          console.log("Ошибка, такой id уже есть", existId);
          return;
      }
      this.alarmCollection.push({time, callback, id})
  }
  removeClock(id) {
      const eraseId = this.alarmCollection.findIndex(value => {
          return value.id === id;
      });
      if (eraseId !== -1) {
          this.alarmCollection.splice(eraseId,1);
          return true;
      }
      else 
          return false;
  }
  getCurrentFormattedTime() {
      const time = new Date();
      let hours = time.getHours();
      let mins = time.getMinutes();
      if (+hours < 10)
          hours = "0" + hours;
      if (+mins < 10)
          mins = "0" + mins;
      return hours + ":" + mins
  }
  start() { 
      if (this.timerId === null)
          this.timerId = setInterval(() => {
              this.alarmCollection.forEach( (value) => this.checkClock(value) )
          }, 1000);
  }
  checkClock(alarm){
     
      if (this.getCurrentFormattedTime() == alarm.time) {
          alarm.callback();
          console.log(this.timerId);
      if (this.alarmCollection.length === 0)
          clearInterval(this.timerId);
      }
  }
  stop() {
      if (this.timerId !== null) {
          clearInterval(this.timerId);
          this.timerId = null;
      }
     
  }
  printAlarms() {
      
      console.log(`Печать будильников в количестве: ${this.alarmCollection.length}`);
      this.alarmCollection.forEach(alarm => {
          console.log(`Будильник №${alarm.id}, заведен на ${alarm.time}`)
      })
  }
  clearAlarms() {
      
      this.stop()
     
      this.alarmCollection = [];
  }
}
let phoneAlarm = new AlarmClock();
phoneAlarm.addClock("15:37",()=> console.log("пора вставать"),1);

phoneAlarm.addClock("09:01",()=> console.log("давай вставай уже!"),2); 
 phoneAlarm.addClock("09:03",()=> console.log("иди умываться"),4);
phoneAlarm.addClock("09:02",()=>{ console.log("вставай а то проспишь");

 phoneAlarm.printAlarms()},3);
 phoneAlarm.addClock("09:05",() => {console.log("вставай а то проспишь");
 phoneAlarm.printAlarms();
 phoneAlarm.stop();
 phoneAlarm.removeClock();
 phoneAlarm.start()},9);
 
  