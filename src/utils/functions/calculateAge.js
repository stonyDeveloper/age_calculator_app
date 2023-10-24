export function calculateAge(dateString) {
    const currentDate = new Date();
    const [day, month, year] = dateString.split("-").map(Number);
  
    // Calculate the difference in years
    const yearsDiff = currentDate.getFullYear() - year;
  
    // Calculate the difference in months
    let monthsDiff = currentDate.getMonth() + 1 - month;
    if (currentDate.getDate() < day) {
      monthsDiff--;
    }
    if (monthsDiff < 0) {
      monthsDiff += 12;
    }
  
    // Calculate the difference in days
    let daysDiff = currentDate.getDate() - day;
    if (daysDiff < 0) {
      const prevMonthDate = new Date(
        currentDate.getFullYear(),
        currentDate.getMonth(),
        0
      );
      daysDiff = prevMonthDate.getDate() - day + currentDate.getDate();
      monthsDiff--;
      if (monthsDiff < 0) {
        monthsDiff += 12;
      }
    }
  
    return { years: yearsDiff, months: monthsDiff, days: daysDiff };
  }
  