/**
 * ============================================================
 *  导航数据配置  ——  改这一个文件就够了
 *  数据来源：scbs.vip（四川办税）现有分组与网址，已按官方域名校正
 * ============================================================
 *
 * 结构说明：
 *   SITE     页面标题、副标题
 *   ENGINES  搜索框默认使用的搜索引擎（下拉可切换）
 *   GROUPS   分组列表，每组一个卡片
 *       name    分组名称
 *       icon    分组图标（emoji，随便换）
 *       items   站点列表
 *           name  显示名称
 *           url   链接（必须带 https://）
 *           desc  一句话描述（可留空 ""）
 *           icon  图标：可以填 emoji，也可以填图片 URL；
 *                 什么都不填会自动抓取网站 favicon
 *
 * 增删站点：照抄一行改一下就行，注意逗号别丢。
 * ============================================================
 */

const SITE = {
  title: '四川办税导航',
  subtitle: '电子税务局 · 财税网址 · 行政办事 一站直达',
};

const ENGINES = [
  { name: '百度',   url: 'https://www.baidu.com/s?wd=' },
  { name: 'Google', url: 'https://www.google.com/search?q=' },
  { name: '必应',   url: 'https://cn.bing.com/search?q=' },
  { name: '税务政策', url: 'https://www.chinatax.gov.cn/searchIndex.html?keyword=' },
];

const GROUPS = [
  {
    name: '全国电子税务局',
    icon: '🏛️',
    items: [
      { name: '四川电子税务局', url: 'https://etax.sichuan.chinatax.gov.cn/',        desc: '本省常用', icon: '' },
      { name: '北京电子税务局', url: 'https://etax.beijing.chinatax.gov.cn:8443/',     desc: '北京', icon: '' },
      { name: '天津电子税务局', url: 'https://etax.tianjin.chinatax.gov.cn:8443/',     desc: '天津', icon: '' },
      { name: '河北电子税务局', url: 'https://etax.hebei.chinatax.gov.cn:8443/',       desc: '河北', icon: '' },
      { name: '山西电子税务局', url: 'https://etax.shanxi.chinatax.gov.cn:8443/',      desc: '山西', icon: '' },
      { name: '内蒙古电子税务局', url: 'https://etax.neimenggu.chinatax.gov.cn:8443/', desc: '内蒙古', icon: '' },
      { name: '辽宁电子税务局', url: 'https://etax.liaoning.chinatax.gov.cn:8443/',    desc: '辽宁', icon: '' },
      { name: '吉林电子税务局', url: 'https://etax.jilin.chinatax.gov.cn:8443/',       desc: '吉林', icon: '' },
      { name: '黑龙江电子税务局', url: 'https://etax.heilongjiang.chinatax.gov.cn:8443/', desc: '黑龙江', icon: '' },
      { name: '上海电子税务局', url: 'https://etax.shanghai.chinatax.gov.cn:8443/',    desc: '上海', icon: '' },
      { name: '江苏电子税务局', url: 'https://etax.jiangsu.chinatax.gov.cn:8443/',     desc: '江苏', icon: '' },
      { name: '浙江电子税务局', url: 'https://etax.zhejiang.chinatax.gov.cn:8443/',    desc: '浙江', icon: '' },
      { name: '安徽电子税务局', url: 'https://etax.anhui.chinatax.gov.cn:8443/',       desc: '安徽', icon: '' },
      { name: '福建电子税务局', url: 'https://etax.fujian.chinatax.gov.cn:8443/',      desc: '福建', icon: '' },
      { name: '江西电子税务局', url: 'https://etax.jiangxi.chinatax.gov.cn:8443/',     desc: '江西', icon: '' },
      { name: '山东电子税务局', url: 'https://etax.shandong.chinatax.gov.cn:8443/',    desc: '山东', icon: '' },
      { name: '河南电子税务局', url: 'https://etax.henan.chinatax.gov.cn:8443/',       desc: '河南', icon: '' },
      { name: '湖北电子税务局', url: 'https://etax.hubei.chinatax.gov.cn:8443/',       desc: '湖北', icon: '' },
      { name: '湖南电子税务局', url: 'https://etax.hunan.chinatax.gov.cn:8443/',       desc: '湖南', icon: '' },
      { name: '广东电子税务局', url: 'https://etax.guangdong.chinatax.gov.cn:8443/',   desc: '广东', icon: '' },
      { name: '广西电子税务局', url: 'https://etax.guangxi.chinatax.gov.cn:8443/',     desc: '广西', icon: '' },
      { name: '海南电子税务局', url: 'https://etax.hainan.chinatax.gov.cn:8443/',      desc: '海南', icon: '' },
      { name: '重庆电子税务局', url: 'https://etax.chongqing.chinatax.gov.cn:8443/',   desc: '重庆', icon: '' },
      { name: '贵州电子税务局', url: 'https://etax.guizhou.chinatax.gov.cn:8443/',     desc: '贵州', icon: '' },
      { name: '云南电子税务局', url: 'https://etax.yunnan.chinatax.gov.cn/',           desc: '云南', icon: '' },
      { name: '西藏电子税务局', url: 'https://etax.xizang.chinatax.gov.cn:5100/',      desc: '西藏', icon: '' },
      { name: '陕西电子税务局', url: 'https://etax.shaanxi.chinatax.gov.cn/',          desc: '陕西', icon: '' },
      { name: '甘肃电子税务局', url: 'https://etax.gansu.chinatax.gov.cn:8443/',       desc: '甘肃', icon: '' },
      { name: '青海电子税务局', url: 'https://etax.qinghai.chinatax.gov.cn:8443/',     desc: '青海', icon: '' },
      { name: '宁夏电子税务局', url: 'https://etax.ningxia.chinatax.gov.cn:8443/',     desc: '宁夏', icon: '' },
      { name: '新疆电子税务局', url: 'https://etax.xinjiang.chinatax.gov.cn:8443/',    desc: '新疆', icon: '' },
    ],
  },
  {
    name: '财税网址',
    icon: '🧾',
    items: [
      { name: '自然人电子税务局', url: 'https://etax.chinatax.gov.cn/',     desc: '个税申报入口', icon: '' },
      { name: '国家税务总局',     url: 'http://www.chinatax.gov.cn/',       desc: '政策法规发布', icon: '' },
      { name: '全国发票查验平台', url: 'https://inv-veri.chinatax.gov.cn/', desc: '发票真伪查验', icon: '' },
      { name: '四川省税务局官网', url: 'https://sichuan.chinatax.gov.cn/',  desc: '本地政策公告', icon: '' },
    ],
  },
  {
    name: '行政办事',
    icon: '📋',
    items: [
      { name: '四川政务服务网',             url: 'http://www.sczwfw.gov.cn/',                           desc: '一网通办', icon: '' },
      { name: '四川省市场监管网上办事大厅', url: 'https://sscjgj.sczwfw.gov.cn:8889/bsdt/',           desc: '工商登记变更', icon: '' },
      { name: '四川人社在线公共服务平台',   url: 'https://www.schrss.org.cn/scggfw/system/toIndex.do', desc: '社保人社', icon: '' },
      { name: '四川医保公共服务平台',       url: 'https://ggfw.scyb.org.cn/',                         desc: '医保业务', icon: '' },
      { name: '企业信用公示网',             url: 'http://www.gsxt.gov.cn/',                           desc: '企业信息查询', icon: '' },
    ],
  },
  {
    name: '证书考试',
    icon: '📝',
    items: [
      { name: '注册会计考试',   url: 'http://www.cicpa.org.cn/', desc: '中注协 CPA', icon: '' },
      { name: '会计职称考试',   url: 'http://kzp.mof.gov.cn/',   desc: '初级 / 中级 / 高级', icon: '' },
      { name: '税务师考试报名', url: 'https://ksbm.ecctaa.cn/',  desc: '中税协报名系统', icon: '' },
    ],
  },
  {
    name: '会计相关',
    icon: '📚',
    items: [
      { name: '全国会计人员统一服务管理平台', url: 'https://ausm.mof.gov.cn/index/', desc: '信息采集与调转', icon: '' },
      { name: '会计继续教育查询', url: 'http://kj.scsczt.cn/toPage?toPage=cms/isreal', desc: '继续教育记录', icon: '' },
      { name: '四川会计服务',     url: 'http://kj.scsczt.cn/',                         desc: '信息采集、继续教育、职称报名', icon: '' },
    ],
  },
  {
    name: '软件下载',
    icon: '⬇️',
    items: [
      { name: '社保申报软件下载', url: 'https://file.sichuan.chinatax.gov.cn/softdownload/202205/%E7%A4%BE%E4%BF%9D%E8%B4%B9%E7%AE%A1%E7%90%86%E5%AE%A2%E6%88%B7%E7%AB%AFV1.0.029.001.zip', desc: '社保费管理客户端 V1.0.029', icon: '💾' },
      { name: '个税申报软件下载', url: 'https://file.etax.chinatax.gov.cn/bbxzdownload/kjkhd/ETax.exe', desc: '自然人电子税务局扣缴端', icon: '💾' },
    ],
  },
  {
    name: '财税工具',
    icon: '🔧',
    items: [
      { name: '一般纳税人查询', url: 'https://etax.sichuan.chinatax.gov.cn/yhs-web/cxzx/index.html?code=1111&id=190822219#/ybnsrzgcx', desc: '四川一般纳税人资格查询', icon: '' },
    ],
  },
  {
    name: '其他',
    icon: '📌',
    items: [
      { name: 'ETC发票开具', url: 'https://www.txffp.com/', desc: '通行费电子发票', icon: '' },
    ],
  },
];

/**
 * 相对 scbs.vip 原站的校正说明：
 * 1. 「福建电子税务局」原站缺少链接（href 写成了文字「电子税务局」），已补 https://etax.fujian.chinatax.gov.cn:8443/
 * 2. 「山西电子税务局」原站误指向陕西域名（etax.shaanxi），已改为 https://etax.shanxi.chinatax.gov.cn:8443/
 * 3. 原站未收录河南、广东两个省级电子税务局，本版补齐
 * 4. 电子税务局分组按「四川置顶 + 华北/东北/华东/中南/西南/西北」重排，便于查找
 */
