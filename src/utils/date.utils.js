export const formatDateAsMonthYear = (date) => {
  const parsedDate = new Date(date);
  const months = [
    'January',
    'February',
    'March',
    'April',
    'May',
    'June',
    'July',
    'August',
    'September',
    'October',
    'November',
    'December',
  ];
  const month = months[parsedDate.getMonth()];
  const year = parsedDate.getFullYear();

  return `${month} ${year}`;
};

export const formatDateAsLong = (dateString) => {
  const [year, month, day] = dateString.split('-');

  const months = [
    'January',
    'February',
    'March',
    'April',
    'May',
    'June',
    'July',
    'August',
    'September',
    'October',
    'November',
    'December',
  ];

  return `${months[parseInt(month, 10) - 1]} ${parseInt(day, 10)}, ${year}`;
};
