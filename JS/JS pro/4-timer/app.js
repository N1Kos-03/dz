function updateCountdown() {
    const now = new Date();
    const currentYear = now.getFullYear();
    const nextYear = currentYear + 1;
    const newYearDate = new Date(`January 1, ${nextYear} 00:00:00`);
  
    const diff = newYearDate - now;
  
    const seconds = Math.floor(diff / 1000) % 60;
    const minutes = Math.floor(diff / 1000 / 60) % 60;
    const hours = Math.floor(diff / 1000 / 60 / 60) % 24;
    const daysTotal = Math.floor(diff / 1000 / 60 / 60 / 24);
  
    const months = Math.floor(daysTotal / 30); 
    const days = daysTotal % 30;
  
    const formatted = `${months} месяцев ${days} дней ${hours} часов ${minutes} минут ${seconds} секунд`;
  
    document.getElementById("countdown").textContent = formatted;
  }
  
  setInterval(updateCountdown, 1000);
  updateCountdown(); 
  
