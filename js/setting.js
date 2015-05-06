var ApiUrl = 'http://openspending.org/api';
var RootNodeLabel = 'Total';

var Taxes = Taxes || {};

Taxes.baseKoujo = 330000; // 住民税基礎控除
Taxes.huyoKoujo = 330000; // 一人分の扶養控除
Taxes.taxRate = 0.06; // 住民税率

var OpenSpending = OpenSpending || {};

OpenSpending.identifier = 'kanagawaken_kawasakishi_budget';
OpenSpending.year = '2015';

OpenSpending.Styles = OpenSpending.Styles || {};

OpenSpending.Styles.Cofog = {
  /* kawasaki cofog */
  '1': { icon: 'icons/admin.svg', color: '#C75746', bcolor: '#935B3B' },
  '1-1': { icon: 'icons/admin.svg', color: '#C75746', bcolor: '#935B3B' },
  '2': { icon: 'icons/publicaffairs.svg', color: '#C75746', bcolor: '#0AB971' },
  '2-2': { icon: 'icons/publicaffairs.svg', color: '#C75746', bcolor: '#0AB971' },
  '2-3': { icon: 'icons/publicaffairs.svg', color: '#C75746', bcolor: '#0AB971' },
  '2-4': { icon: 'icons/publicaffairs.svg', color: '#C75746', bcolor: '#0AB971' },
  '2-5': { icon: 'icons/publicaffairs.svg', color: '#C75746', bcolor: '#0AB971' },
  '2-6': { icon: 'icons/publicaffairs.svg', color: '#C75746', bcolor: '#0AB971' },
  '2-7': { icon: 'icons/publicaffairs.svg', color: '#C75746', bcolor: '#0AB971' },
  '2-8': { icon: 'icons/research.svg', color: '#C75746', bcolor: '#0AB971' },
  '2-9': { icon: 'icons/publicaffairs.svg', color: '#C75746', bcolor: '#0AB971' },
  '2-10': { icon: 'icons/publicaffairs.svg', color: '#C75746', bcolor: '#0AB971' },
  '3': { icon: 'icons/civilian-action.svg', color: '#C75746', bcolor: '#4E6D00' },
  '3-11': { icon: 'icons/civilian-action.svg', color: '#C75746', bcolor: '#4E6D00' },
  '4': { icon: 'icons/schools.svg', color: '#C75746', bcolor: '#D33673' },
  '4-12': { icon: 'icons/pre-school.svg', color: '#C75746', bcolor: '#4E6D00' },
  '4-13': { icon: 'icons/schools.svg', color: '#C75746', bcolor: '#4E6D00' },
  '5': { icon: 'icons/social-systems.svg', color: '#C75746', bcolor: '#2A3A03' },
  '5-14': { icon: 'icons/social-systems.svg', color: '#C75746', bcolor: '#2A3A03'  },
  '5-15': { icon: 'icons/social-systems.svg', color: '#C75746', bcolor: '#2A3A03'  },
  '5-16': { icon: 'icons/social-systems.svg', color: '#C75746', bcolor: '#D33673' },
  '5-17': { icon: 'icons/social-systems.svg', color: '#C75746', bcolor: '#D33673' },
  '5-18': { icon: 'icons/social-systems.svg', color: '#C75746', bcolor: '#D33673' },
  '5-19': { icon: 'icons/social-systems.svg', color: '#C75746', bcolor: '#D33673' },
  '5-20': { icon: 'icons/social-systems.svg', color: '#C75746', bcolor: '#D33673' },
  '5-21': { icon: 'icons/social-systems.svg', color: '#C75746', bcolor: '#D33673' },
  '5-22': { icon: 'icons/social-systems.svg', color: '#C75746', bcolor: '#D33673' },
  '5-23': { icon: 'icons/social-systems.svg', color: '#C75746', bcolor: '#D33673' },
  '5-24': { icon: 'icons/social-systems.svg', color: '#C75746', bcolor: '#D33673' },
  '5-25': { icon: 'icons/social-systems.svg', color: '#C75746', bcolor: '#D33673' },
  '5-26': { icon: 'icons/social-systems.svg', color: '#C75746', bcolor: '#D33673' },
  '6': { icon: 'icons/environment.svg', color: '#C75746', bcolor: '#EC2406' },
  '6-27': { icon: 'icons/environment.svg', color: '#C75746', bcolor: '#EC2406' },
  '6-28': { icon: 'icons/environment.svg', color: '#C75746', bcolor: '#EC2406' },
  '6-29': { icon: 'icons/environment.svg', color: '#C75746', bcolor: '#EC2406' },
  '6-30': { icon: 'icons/environment.svg', color: '#C75746', bcolor: '#EC2406' },
  '6-31': { icon: 'icons/environment.svg', color: '#C75746', bcolor: '#EC2406' },
  '7': { icon: 'icons/economic-aid.svg', color: '#C75746', bcolor: '#938626' },
  '7-32': { icon: 'icons/economic-aid.svg', color: '#C75746', bcolor: '#938626' },
  '7-33': { icon: 'icons/economic-aid.svg', color: '#C75746', bcolor: '#938626' },
  '7-34': { icon: 'icons/economic-aid.svg', color: '#C75746', bcolor: '#938626' },
  '7-35': { icon: 'icons/economic-aid.svg', color: '#C75746', bcolor: '#938626' },
  '7-36': { icon: 'icons/economic-aid.svg', color: '#C75746', bcolor: '#938626' },
  '8': { icon: 'icons/transport.svg', color: '#C75746', bcolor: '#C75746' },
  '8-37': { icon: 'icons/transport.svg', color: '#C75746', bcolor: '#C75746' },
  '8-38': { icon: 'icons/transport.svg', color: '#C75746', bcolor: '#C75746' },
  '8-39': { icon: 'icons/transport.svg', color: '#C75746', bcolor: '#C75746' },
  '8-40': { icon: 'icons/transport.svg', color: '#C75746', bcolor: '#C75746' },
  '8-41': { icon: 'icons/transport.svg', color: '#C75746', bcolor: '#C75746' },
  '8-42': { icon: 'icons/transport.svg', color: '#C75746', bcolor: '#C75746' },
  '8-43': { icon: 'icons/transport.svg', color: '#C75746', bcolor: '#C75746' },
  '8-44': { icon: 'icons/transport.svg', color: '#C75746', bcolor: '#C75746' },
  '9': { icon: 'icons/anchor.svg', color: '#C75746', bcolor: '#D33673' },
  '9-45': { icon: 'icons/anchor.svg', color: '#C75746', bcolor: '#D33673' },
  '9-46': { icon: 'icons/anchor.svg', color: '#C75746', bcolor: '#D33673' },
  '10': { icon: 'icons/housing.svg', color: '#C75746', bcolor: '#790586' },
  '10-47': { icon: 'icons/housing.svg', color: '#C75746', bcolor: '#790586' },
  '10-48': { icon: 'icons/housing.svg', color: '#C75746', bcolor: '#790586' },
  '10-49': { icon: 'icons/housing.svg', color: '#C75746', bcolor: '#790586' },
  '10-50': { icon: 'icons/housing.svg', color: '#C75746', bcolor: '#790586' },
  '10-51': { icon: 'icons/housing.svg', color: '#C75746', bcolor: '#790586' },
  '11': { icon: 'icons/admin.svg', color: '#C75746', bcolor: '#790586' },
  '11-52': { icon: 'icons/admin.svg', color: '#C75746', bcolor: '#790586' },
  '11-53': { icon: 'icons/admin.svg', color: '#C75746', bcolor: '#790586' },
  '12': { icon: 'icons/fire-brigade.svg', color: '#C75746', bcolor: '#790586' },
  '12-54': { icon: 'icons/fire-brigade.svg', color: '#C75746', bcolor: '#790586' },
  '13': { icon: 'icons/education.svg', color: '#C75746', bcolor: '#790586' },
  '13-55': { icon: 'icons/education.svg', color: '#C75746', bcolor: '#790586' },
  '13-56': { icon: 'icons/education.svg', color: '#C75746', bcolor: '#790586' },
  '13-57': { icon: 'icons/education.svg', color: '#C75746', bcolor: '#790586' },
  '13-58': { icon: 'icons/education.svg', color: '#C75746', bcolor: '#790586' },
  '13-59': { icon: 'icons/education.svg', color: '#C75746', bcolor: '#790586' },
  '13-60': { icon: 'icons/education.svg', color: '#C75746', bcolor: '#790586' },
  '13-61': { icon: 'icons/education.svg', color: '#C75746', bcolor: '#790586' },
  '13-62': { icon: 'icons/education.svg', color: '#C75746', bcolor: '#790586' },
  '14': { icon: 'icons/money.svg', color: '#C75746', bcolor: '#790586' },
  '14-63': { icon: 'icons/money.svg', color: '#C75746', bcolor: '#790586' },
  '15': { icon: 'icons/EC.svg', color: '#C75746', bcolor: '#790586' },
  '15-64': { icon: 'icons/EC.svg', color: '#C75746', bcolor: '#790586' },
  '16': { icon: 'icons/unknown.svg', color: '#C75746', bcolor: '#790586' },
  '16-65': { icon: 'icons/unknown.svg', color: '#C75746', bcolor: '#790586' }
};

var DataManager = {
  configs: {},
  styles: {},

  init: function(categorytypes) {
    for (var type in categorytypes) {
      console.log(type.id);
      this.configs[type.id] = {
        apiUrl: ApiUrl,
        dataset: type.id,
        drilldowns: type.drilldowns,
        breakdown: type.breakdown,
        rootNodeLabel: RootNodeLabel,
      }
      this.styles[type.id] = type.config;
    }
  },

  setConfig: function(categoryType, fiscalYear, cb) {
    this.configs[categoryType]['cuts'] = ['year:' + fiscalYear];
    this.configs[categoryType]['callback'] = cb;
    new OpenSpending.Aggregator(this.configs[categoryType]);
  }
};


