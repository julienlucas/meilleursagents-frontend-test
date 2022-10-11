export const getFomatedDate = (time: any): string => {
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
    [120, 'Il y a 1 minute', '1 minute à partir de maintenant'], // 60*2
    [3600, 'minutes', 60], // 60*60, 60
    [7200, 'Il y a 1 heure', '1 heure à partir de maintenant'], // 60*60*2
    [86400, 'heures', 3600], // 60*60*24, 60*60
    [172800, 'Hier', 'Demain'], // 60*60*24*2
    [604800, 'jours', 86400], // 60*60*24*7, 60*60*24
    [1209600, 'La semaine dernière', 'La semaine prochaine'], // 60*60*24*7*4*2
    [2419200, 'semaines', 604800], // 60*60*24*7*4, 60*60*24*7
    [4838400, 'Le mois dernier', 'Next month'], // 60*60*24*7*4*2
    [29030400, 'mois', 2419200], // 60*60*24*7*4*12, 60*60*24*7*4
    [58060800, "L'année dernière", 'Next year'], // 60*60*24*7*4*12*2
    [2903040000, 'années', 29030400], // 60*60*24*7*4*12*100, 60*60*24*7*4*12
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