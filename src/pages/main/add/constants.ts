/** @format */

export const germType = (() =>
  [
    '野生资源',
    '半野生资源',
    '地方品种',
    '选育品种',
    '栽培品种',
    '品系',
    '遗传材料',
    '引进材料',
    '其他（说明）',
    '待鉴定',
  ].map(item => ({value: item, text: item})))();

export const collectingMaterial = (() =>
  [
    '种子',
    '果实',
    '芽',
    '芽条',
    '花粉',
    '组培材料',
    '苗木',
    '植株',
    '种茎',
    '吸芽',
    '种苗',
  ].map(item => ({
    value: item,
    text: item,
  })))();

export const soilType = (() =>
  ['砖红壤', '赤红壤', '红壤', '黄壤', '黄棕壤', '棕壤', '其他'].map(item => ({
    value: item,
    text: item,
  })))();

export const ecosystemType = (() =>
  [
    '海洋生态系统',
    '淡水生态系统',
    '冻原生态系统',
    '荒漠生态系统',
    '草原生态系统',
    '森林生态系统',
    '农田生态系统',
    '城市生态系统',
  ].map(item => ({
    value: item,
    text: item,
  })))();
