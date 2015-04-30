// ========================================================
//
// 設定制御JS
//   _dataの情報を読み込む。
//   画面の設定変更により表示を制御する。
//
// ========================================================

var DataManager = {
  ymlCommonPath: '/_data/kwsk/common.yml',
  ymlFiscalYearsPath: '/_data/kwsk/fiscalyears.yml',
  ymlCategorytypesPath: '/_data/kwsk/categorytypes.yml',

  taxes: {
    baseKoujo: 0, // 住民税基礎控除
    huyoKoujo: 0, // 一人分の扶養控除
    taxRate: 0    // 住民税率
  },
  configs: {},
  styles: {},

  init: function() {
    var common = _readYaml(this.ymlCommonPath);
    var fiscalYears = _readYaml(this.ymlFiscalYearsPath);
    var categorytypes = _readYaml(this.ymlCategorytypesPath);

    this.taxes = common.taxes;

    for (type of categorytypes) {
      this.configs[type.id] = {
        apiUrl: common.apiUrl,
        dataset: type.id,
        drilldowns: type.drilldowns,
        breakdown: type.breakdown,
        rootNodeLabel: common.rootNodeLabel,
      }
      this.styles[type.id] = type.config;
    }
  },

  setConfig: function(categoryType, fiscalYear, cb) {
    this.configs[categoryTyps][cuts] = ['year:' + fiscalYear];
    this.configs[categoryTyps][callback] = cb;
    new OpenSpending.Aggregator(this.configs[categoryTyps]);
  },

  _readYaml: function(path) {
    var YAML = window.YAML;
    var httpObj;
    if (window.XMLHttpRequest){
      httpObj = new XMLHttpRequest();
    }else{
      if (window.ActiveXObject){
        httpObj = new ActiveXObject("Microsoft.XMLHTTP");
      }else{
        httpObj = null;
      }
    }

    httpObj.open("GET", path, true);
    httpObj.onreadystatechange = function() {
      if (httpObj.readyState == 4 && httpObj.status == 200){
        var data = YAML.parse(httpObj.responseText);
        return eval(JSON.stringify(data));
      }
    }
    httpObj.send(null);
  }
};

DataManager.init();
