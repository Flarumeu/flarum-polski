app.translator.plural = function(count) {
  return count == 1 ? 'one' : 'other';
};

function processRelativeTime(number, withoutSuffix, key, isFuture) {
  var format = {
    'm': ['jedna minuta', 'jedną minutę'],
    'h': ['jedna godzina', 'jedną godzinę'],
    'd': ['jeden dzień', 'jeden dzień'],
    'dd': [number + ' dzień', number + ' dni'],
    'M': ['jeden miesiąc', 'jeden miesiąc'],
    'MM': [number + ' miesiąc', number + ' miesięcy'],
    'y': ['jeden rok', 'jeden rok'],
    'yy': [number + ' rok', number + ' lat']
  };
  return withoutSuffix ? format[key][0] : format[key][1];
};

moment.locale('de', {
  months : 'styczeń_luty_marzec_kwiecień_maj_czerwiec_lipiec_sierpień_wrzesień_październik_listopad_grudzień'.split('_'),
  monthsShort : 'STY._LUT._MAR_KWI._MAJ_CZE_LIP_SIE._WRZ._PAŹ._LIS._GRU.'.split('_'),
  weekdays : 'poniedziałek_wtorek_środa_czwartek_piątek_sobota_niedziela'.split('_'),
  weekdaysShort : 'pon._wt._śr._czw._pt._sob._niedz.'.split('_'),
  weekdaysMin : 'pn_wt_śr_cz_pt_sb_nd'.split('_'),
  longDateFormat : {
    LT: 'HH:mm',
    LTS: 'HH:mm:ss',
    L : 'DD.MM.YYYY',
    LL : 'D. MMMM YYYY',
    LLL : 'D. MMMM YYYY HH:mm',
    LLLL : 'dddd, D. MMMM YYYY HH:mm'
  },
  calendar : {
    sameDay: '[Dzisiaj o] LT',
    sameElse: 'L',
    nextDay: '[Jutro o] LT',
    nextWeek: 'dddd [o] LT',
    lastDay: '[Wczoraj o] LT',
    lastWeek: '[W ostatnim tygodniu] dddd [o] LT'
  },
  relativeTime : {
    future : 'w %s',
    past : '%s temu',
    s : 'kilka sekund',
    m : processRelativeTime,
    mm : '%d minut(y)',
    h : processRelativeTime,
    hh : '%d godzin(y)',
    d : processRelativeTime,
    dd : processRelativeTime,
    M : processRelativeTime,
    MM : processRelativeTime,
    y : processRelativeTime,
    yy : processRelativeTime
  },
  ordinalParse: /\d{1,2}\./,
  ordinal : '%d.',
  week : {
    dow : 1, // Monday is the first day of the week.
    doy : 4  // The week that contains Jan 4th is the first week of the year.
  }
});