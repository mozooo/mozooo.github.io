// ========================================================
//
// 設定制御JS
//   _dataの情報を読み込む。
//   画面の設定変更により表示を制御する。
//
// ========================================================

var Setter = function() {
  apiUrl: '',
  rootNodeLabel: '',
  taxes: {
    baseKoujo: 0, // 住民税基礎控除
    huyoKoujo: 0, // 一人分の扶養控除
    taxRate: 0    // 住民税率
  },
  configs: [],

  init: function() {
    var categoryType = jsyaml.load("_data/categorytype.yml");
console.log(categoryType);
/*
    config: {
      apiUrl: 'http://openspending.org/api',
      dataset: '',
      drilldowns: [],
      cuts: ['year:' + ''],
      rootNodeLabel: 'Total',
      breakdown: '',
      Styles: {Config: {}}
    }
*/
  },

  setDailybread: function(db, categoryType, fiscalYear) {
    new OpenSpending.Aggregator({
      apiUrl: this.apiUrl,
      //localApiCache: 'aggregate.json',
      dataset: this.configs[categoryType].dataset,
      drilldowns: this.configs[categoryType].drilldowns,
      cuts: ['year:' + fiscalYear],
      rootNodeLabel: 'Total',
      breakdown: this.configs[categoryType].breakdown,
      callback: function(data) {
        db.children('#content-wrap').show();
        db.children('#preloader').remove();

        db.setDataFromAggregator(data, ['unknown']);
        db.setIconLookup(function(name) {
          var style = this.configs[categoryType].Styles.Cofog[name];
          if (style != undefined) {
            return style['icon'];
          }
          return 'icons/unknown.svg';
        });
        db.draw();
      }
    });
  }
}

Setter.init();
