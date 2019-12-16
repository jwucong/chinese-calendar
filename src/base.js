// 参考资料 GB/T 33661-2017

// 朔 newMoon
// 朔日 newMoonDay
// 望 fullMoon
// 朔望月 synodicMonth
// 回归年 tropicalYear
// 二十四节气 twentyFourSolarTerms
// 中气 midTerm
// 北京时间 BeijingStandardTime
// 农历 ChineseCalendar
// 农历日期 ChineseCalendarDate
// 农历年 ChineseCalendarYear
// 农历平年 ChineseCalendarCommonYear
// 农历闰年 ChineseCalendarLeapYear
// 农历月 ChineseCalendarMonth
// 农历闰月 ChineseCalendarLeapMonth
// 农历日 ChineseCalendarDay
// 正月 theFirstMonthOfChineseCalendar
// 天干 celestialStem
// 地支 terrestrialBranch
// 生肖 ChineseZodiac
// 六十干支周 sexagesimalCycle

// 十二生肖: 鼠、牛、虎、兔、龙、蛇、马、羊、猴、鸡、狗、猪
// 天干: 甲、乙、丙、丁、戊、己、庚、辛、壬、癸
// 地支: 子、丑、寅、卯、辰、巳、午、未、申、酉、戌、亥
// 二十四节气: 冬至、小寒、大寒、立春、雨水、惊蛰、春分、清明、谷雨、立夏、小满、芒种、夏至、小暑、大暑、立秋、处暑、白露、秋分、寒露、霜降、立冬、小雪、大雪
// 中气: 冬至、大寒、雨水、春分、谷雨、小满、夏至、大暑、处暑、秋分、霜降、小雪
// 月份名称: 正月、二月、三月、四月、五月、六月、七月、八月、九月、十月、十一月、十二月
// 闰月名称: 闰几月就在对应的月份前加"闰"字
// 纪日名: 初一 到 初十；十一 到 二十； 廿一 到 廿九；三十
// 六十干支周:


// 农历编排规则
// 1. 以北京时间为标准时间
// 2. 朔日为农历月的第一个农历日(问号脸："朔日"怎么确定？嗯？)
// 3. 包含节气"冬至"在内的农历月为农历十一月
// 4. 若从某个农历十一月开始到写一个农历十一月(不包含)之间有13个农历月，则需要置闰月
// 5. 置闰月规则: 取其中最先出现的第一个不包含中气的农历月为闰月(问号脸："其中"指的是哪几个月？嗯？)
// 6. 农历十一月之后第二个(不计闰月)农历月为农历年的起始月
// 7. 农历大月三十天，小月二十九天(那么问题来了，大小月怎么确定？嗯？)


// 获取六十干支周
function getSexagesimalCycle() {
  const celestialStem = '甲乙丙丁戊己庚辛壬癸'
  const terrestrialBranch = '子丑寅卯辰巳午未申酉戌亥'
  const s1 = celestialStem.length
  const s2 = terrestrialBranch.length
  let i = 0, j = 0, result = []
  while (result.length < 60) {
    const celestial = celestialStem[i++]
    const terrestrial = terrestrialBranch[j++]
    result.push(celestial + terrestrial)
    i = i < s1 ? i : 0
    j = j < s2 ? j : 0
  }
  return result
}

console.log(getSexagesimalCycle())
