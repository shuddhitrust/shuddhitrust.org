export const parseDateTime = (dateTime: string): string => {
  if (dateTime === null) {
    return 'Never';
  }
  const months = [
    'Jan',
    'Feb',
    'Mar',
    'Apr',
    'May',
    'Jun',
    'Jul',
    'Aug',
    'Sep',
    'Oct',
    'Nov',
    'Dec',
  ];
  const newDate = new Date(dateTime);
  const m = newDate.getMonth();
  const d = newDate.getDate();
  const y = newDate.getFullYear();
  const h = newDate.getHours();
  const min = newDate.getMinutes();
  let adjustedmin = min.toString();
  if (min < 10) {
    adjustedmin = `0${min}`;
  }

  // we get the text name of the month by using the value of m to find the corresponding month name
  const mlong = months[m];

  //   const fullDate = `${d} ${mlong} ${y}, ${h}:${adjustedmin} Hrs`;
  const fullDate = `${d} ${mlong} ${y}`;
  return fullDate;
};
