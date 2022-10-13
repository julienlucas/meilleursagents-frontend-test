import moment from 'moment';

export const getFomatedDate = (time: any): string => {
  const date = time;
  switch (typeof time) {
    case 'number':
      break;
    case 'string':
      time = +new Date(time);
      break;
    case 'object':
      if (time.constructor === Date) time = time.getTime();
      break;
    default:
      time = +new Date();
  }

  var time_formats = [
    [172800, 'Hier', 'Demain'], // 60*60*24*2
    [604800, 'jours', 86400], // 60*60*24*7, 60*60*24
    [1209600, 'Semaine dernière', 'Semaine prochaine'], // 60*60*24*7*4*2
    [2419200, 'semaines', 604800], // 60*60*24*7*4, 60*60*24*7
    [4838400, 'Mois dernier', 'Mois prochain'], // 60*60*24*7*4*2
    [29030400, 'mois', 2419200], // 60*60*24*7*4*12, 60*60*24*7*4
    [58060800, 'Année dernière', 'Année prochaine'], // 60*60*24*7*4*12*2
    [2903040000, 'années', 29030400], // 60*60*24*7*4*12*100, 60*60*24*7*4*12
  ];

  var seconds = (+new Date() - time) / 1000,
    list_choice = 1;

  function isToday(date) {
    const today = new Date();

    if (today.toDateString() === date.toDateString()) {
      return true;
    }

    return false;
  }

  if (seconds < 86400 && !isToday) {
    return moment(date).format('h:mm a');
  }

  if (seconds > 172800) {
    return moment(date).format('D/M/YY');
  }

  var i = 0,
    format;

  while ((format = time_formats[i++]))
    // eslint-disable-line no-cond-assign
    if (seconds < format[0]) {
      if (typeof format[2] == 'string') return format[list_choice];
      else return Math.floor(seconds / format[2]) + ' ' + format[1];
    }

  return time;
};
