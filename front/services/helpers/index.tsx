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
    [60, 'secondes', 1], // 60
    [120, 'One minute ago', 'One minute ago'], // 60*2
    [3600, 'minutes ago', 60], // 60*60, 60
    [7200, 'One hour ago', 'One hour ago'], // 60*60*2
    [86400, 'hours ago', 3600], // 60*60*24, 60*60
    [172800, 'Yesterday', 'Demain'], // 60*60*24*2
    [604800, 'days ago', 86400], // 60*60*24*7, 60*60*24
    [1209600, 'Last week', 'Next week'], // 60*60*24*7*4*2
    [2419200, 'weeks ago', 604800], // 60*60*24*7*4, 60*60*24*7
    [4838400, 'Last month', 'Next month'], // 60*60*24*7*4*2
    [29030400, 'month ago', 2419200], // 60*60*24*7*4*12, 60*60*24*7*4
    [58060800, "Last year", 'Next year'], // 60*60*24*7*4*12*2
    [2903040000, 'years ago', 29030400], // 60*60*24*7*4*12*100, 60*60*24*7*4*12
  ];

  var seconds = (+new Date() - time) / 1000,
      list_choice = 1;

  if (seconds === 0) {
    return 'Juste maintenant'
  }

  if (seconds < 0) {
    seconds = Math.abs(seconds);
    list_choice = 2;
  }

  if (seconds < 172800) {
    return moment(date).format('h:mm a');
  }

  var i = 0,
      format;

  while (format = time_formats[i++]) // eslint-disable-line no-cond-assign
      if (seconds < format[0]) {
          if (typeof format[2] == 'string')
              return format[list_choice];
          else
              return Math.floor(seconds / format[2]) + ' ' + format[1];
      }

  return time;
};