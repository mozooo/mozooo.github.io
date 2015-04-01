/*
 * Icons for COFOG taxonomy
 *
 */
var Taxes = Taxes || {};

Taxes.baseKoujo = 330000; // 住民税基礎控除
Taxes.huyoKoujo = 330000; // 一人分の扶養控除
Taxes.taxRate = 0.06; // 住民税率

var OpenSpending = OpenSpending || {};

OpenSpending.identifier = 'kanagawaken_kawasakishi_2015yosan';
OpenSpending.year = '2015';

OpenSpending.Styles = OpenSpending.Styles || {};

OpenSpending.Styles.Cofog = {
  /* kawasaki cofog */
  '1': { icon: 'icons/helping-others.svg', color: '#C75746', bcolor: '#935B3B' },
  '1-1': { icon: 'icons/helping-others.svg', color: '#C75746', bcolor: '#935B3B' },
  '2': { icon: 'icons/schools.svg', color: '#C75746', bcolor: '#0AB971' },
  '2-2': { icon: 'icons/pre-school.svg', color: '#C75746', bcolor: '#0AB971' },
  '2-3': { icon: 'icons/education.svg', color: '#C75746', bcolor: '#0AB971' },
  '2-4': { icon: 'icons/pre-school.svg', color: '#C75746', bcolor: '#0AB971' },
  '2-5': { icon: 'icons/education.svg', color: '#C75746', bcolor: '#0AB971' },
  '2-6': { icon: 'icons/pre-school.svg', color: '#C75746', bcolor: '#0AB971' },
  '2-7': { icon: 'icons/education.svg', color: '#C75746', bcolor: '#0AB971' },
  '2-8': { icon: 'icons/pre-school.svg', color: '#C75746', bcolor: '#0AB971' },
  '2-9': { icon: 'icons/education.svg', color: '#C75746', bcolor: '#0AB971' },
  '2-10': { icon: 'icons/pre-school.svg', color: '#C75746', bcolor: '#0AB971' },
  '3': { icon: 'icons/economy-tourism.svg', color: '#C75746', bcolor: '#4E6D00' },
  '3-11': { icon: 'icons/dollar.svg', color: '#C75746', bcolor: '#4E6D00' },
  '4': { icon: 'icons/our-streets.svg', color: '#C75746', bcolor: '#D33673' },
  '4-12': { icon: 'icons/harbor.svg', color: '#C75746', bcolor: '#4E6D00' },
  '4-13': { icon: 'icons/culture.svg', color: '#C75746', bcolor: '#4E6D00' },
  '5': { icon: 'icons/environment.svg', color: '#C75746', bcolor: '#2A3A03' },
  '5-14': { icon: 'icons/tree.svg', color: '#C75746', bcolor: '#2A3A03'  },
  '5-15': { icon: 'icons/wind.svg', color: '#C75746', bcolor: '#2A3A03'  },
  '5-16': { icon: 'icons/farms.svg', color: '#C75746', bcolor: '#D33673' },
  '5-17': { icon: 'icons/street-lights.svg', color: '#C75746', bcolor: '#D33673' },
  '5-18': { icon: 'icons/housing.svg', color: '#C75746', bcolor: '#D33673' },
  '5-19': { icon: 'icons/farms.svg', color: '#C75746', bcolor: '#D33673' },
  '5-20': { icon: 'icons/street-lights.svg', color: '#C75746', bcolor: '#D33673' },
  '5-21': { icon: 'icons/housing.svg', color: '#C75746', bcolor: '#D33673' },
  '5-22': { icon: 'icons/farms.svg', color: '#C75746', bcolor: '#D33673' },
  '5-23': { icon: 'icons/street-lights.svg', color: '#C75746', bcolor: '#D33673' },
  '5-24': { icon: 'icons/housing.svg', color: '#C75746', bcolor: '#D33673' },
  '5-25': { icon: 'icons/farms.svg', color: '#C75746', bcolor: '#D33673' },
  '5-26': { icon: 'icons/street-lights.svg', color: '#C75746', bcolor: '#D33673' },
  '6': { icon: 'icons/civilian-action.svg', color: '#C75746', bcolor: '#EC2406' },
  '6-27': { icon: 'icons/civilian-action.svg', color: '#C75746', bcolor: '#EC2406' },
  '6-28': { icon: 'icons/civilian-action.svg', color: '#C75746', bcolor: '#EC2406' },
  '6-29': { icon: 'icons/civilian-action.svg', color: '#C75746', bcolor: '#EC2406' },
  '6-30': { icon: 'icons/civilian-action.svg', color: '#C75746', bcolor: '#EC2406' },
  '6-31': { icon: 'icons/civilian-action.svg', color: '#C75746', bcolor: '#EC2406' },
  '7': { icon: 'icons/traffic-watersup.svg', color: '#C75746', bcolor: '#938626' },
  '7-32': { icon: 'icons/traffic-watersup.svg', color: '#C75746', bcolor: '#938626' },
  '7-33': { icon: 'icons/traffic-watersup.svg', color: '#C75746', bcolor: '#938626' },
  '7-34': { icon: 'icons/traffic-watersup.svg', color: '#C75746', bcolor: '#938626' },
  '7-35': { icon: 'icons/traffic-watersup.svg', color: '#C75746', bcolor: '#938626' },
  '7-36': { icon: 'icons/traffic-watersup.svg', color: '#C75746', bcolor: '#938626' },
  '8': { icon: 'icons/government.svg', color: '#C75746', bcolor: '#C75746' },
  '8-37': { icon: 'icons/publicaffairs.svg', color: '#C75746', bcolor: '#C75746' },
  '8-38': { icon: 'icons/government.svg', color: '#C75746', bcolor: '#C75746' },
  '8-39': { icon: 'icons/government.svg', color: '#C75746', bcolor: '#C75746' },
  '8-40': { icon: 'icons/government.svg', color: '#C75746', bcolor: '#C75746' },
  '8-41': { icon: 'icons/government.svg', color: '#C75746', bcolor: '#C75746' },
  '8-42': { icon: 'icons/government.svg', color: '#C75746', bcolor: '#C75746' },
  '8-43': { icon: 'icons/government.svg', color: '#C75746', bcolor: '#C75746' },
  '8-44': { icon: 'icons/government.svg', color: '#C75746', bcolor: '#C75746' },
  '9': { icon: 'icons/garbage.svg', color: '#C75746', bcolor: '#D33673' },
  '9-45': { icon: 'icons/garbage.svg', color: '#C75746', bcolor: '#D33673' },
  '9-46': { icon: 'icons/garbage.svg', color: '#C75746', bcolor: '#D33673' },
  '10': { icon: 'icons/order-safety.svg', color: '#C75746', bcolor: '#790586' },
  '10-47': { icon: 'icons/order-safety.svg', color: '#C75746', bcolor: '#790586' },
  '10-48': { icon: 'icons/order-safety.svg', color: '#C75746', bcolor: '#790586' },
  '10-49': { icon: 'icons/order-safety.svg', color: '#C75746', bcolor: '#790586' },
  '10-50': { icon: 'icons/order-safety.svg', color: '#C75746', bcolor: '#790586' },
  '10-51': { icon: 'icons/order-safety.svg', color: '#C75746', bcolor: '#790586' },
  '11': { icon: 'icons/order-safety.svg', color: '#C75746', bcolor: '#790586' },
  '11-52': { icon: 'icons/order-safety.svg', color: '#C75746', bcolor: '#790586' },
  '11-53': { icon: 'icons/order-safety.svg', color: '#C75746', bcolor: '#790586' },
  '12': { icon: 'icons/order-safety.svg', color: '#C75746', bcolor: '#790586' },
  '12-54': { icon: 'icons/order-safety.svg', color: '#C75746', bcolor: '#790586' },
  '13': { icon: 'icons/order-safety.svg', color: '#C75746', bcolor: '#790586' },
  '13-55': { icon: 'icons/order-safety.svg', color: '#C75746', bcolor: '#790586' },
  '13-56': { icon: 'icons/order-safety.svg', color: '#C75746', bcolor: '#790586' },
  '13-57': { icon: 'icons/order-safety.svg', color: '#C75746', bcolor: '#790586' },
  '13-58': { icon: 'icons/order-safety.svg', color: '#C75746', bcolor: '#790586' },
  '13-59': { icon: 'icons/order-safety.svg', color: '#C75746', bcolor: '#790586' },
  '13-60': { icon: 'icons/order-safety.svg', color: '#C75746', bcolor: '#790586' },
  '13-61': { icon: 'icons/order-safety.svg', color: '#C75746', bcolor: '#790586' },
  '13-62': { icon: 'icons/order-safety.svg', color: '#C75746', bcolor: '#790586' },
  '14': { icon: 'icons/order-safety.svg', color: '#C75746', bcolor: '#790586' },
  '14-63': { icon: 'icons/order-safety.svg', color: '#C75746', bcolor: '#790586' },
  '15': { icon: 'icons/order-safety.svg', color: '#C75746', bcolor: '#790586' },
  '15-64': { icon: 'icons/order-safety.svg', color: '#C75746', bcolor: '#790586' },
  '16': { icon: 'icons/order-safety.svg', color: '#C75746', bcolor: '#790586' },
  '16-65': { icon: 'icons/order-safety.svg', color: '#C75746', bcolor: '#790586' }
};


