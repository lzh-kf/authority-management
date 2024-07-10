function f(a){return function(){var t=arguments.length>0&&arguments[0]!==void 0?arguments[0]:{},e=t.width?String(t.width):a.defaultWidth,n=a.formats[e]||a.formats[a.defaultWidth];return n}}function m(a){return function(t,e){var n=e!=null&&e.context?String(e.context):"standalone",r;if(n==="formatting"&&a.formattingValues){var i=a.defaultFormattingWidth||a.defaultWidth,o=e!=null&&e.width?String(e.width):i;r=a.formattingValues[o]||a.formattingValues[i]}else{var u=a.defaultWidth,s=e!=null&&e.width?String(e.width):a.defaultWidth;r=a.values[s]||a.values[u]}var d=a.argumentCallback?a.argumentCallback(t):t;return r[d]}}function l(a){return function(t){var e=arguments.length>1&&arguments[1]!==void 0?arguments[1]:{},n=e.width,r=n&&a.matchPatterns[n]||a.matchPatterns[a.defaultMatchWidth],i=t.match(r);if(!i)return null;var o=i[0],u=n&&a.parsePatterns[n]||a.parsePatterns[a.defaultParseWidth],s=Array.isArray(u)?g(u,function(h){return h.test(o)}):v(u,function(h){return h.test(o)}),d;d=a.valueCallback?a.valueCallback(s):s,d=e.valueCallback?e.valueCallback(d):d;var c=t.slice(o.length);return{value:d,rest:c}}}function v(a,t){for(var e in a)if(a.hasOwnProperty(e)&&t(a[e]))return e}function g(a,t){for(var e=0;e<a.length;e++)if(t(a[e]))return e}function b(a){return function(t){var e=arguments.length>1&&arguments[1]!==void 0?arguments[1]:{},n=t.match(a.matchPattern);if(!n)return null;var r=n[0],i=t.match(a.parsePattern);if(!i)return null;var o=a.valueCallback?a.valueCallback(i[0]):i[0];o=e.valueCallback?e.valueCallback(o):o;var u=t.slice(r.length);return{value:o,rest:u}}}var y={lessThanXSeconds:{one:"less than a second",other:"less than {{count}} seconds"},xSeconds:{one:"1 second",other:"{{count}} seconds"},halfAMinute:"half a minute",lessThanXMinutes:{one:"less than a minute",other:"less than {{count}} minutes"},xMinutes:{one:"1 minute",other:"{{count}} minutes"},aboutXHours:{one:"about 1 hour",other:"about {{count}} hours"},xHours:{one:"1 hour",other:"{{count}} hours"},xDays:{one:"1 day",other:"{{count}} days"},aboutXWeeks:{one:"about 1 week",other:"about {{count}} weeks"},xWeeks:{one:"1 week",other:"{{count}} weeks"},aboutXMonths:{one:"about 1 month",other:"about {{count}} months"},xMonths:{one:"1 month",other:"{{count}} months"},aboutXYears:{one:"about 1 year",other:"about {{count}} years"},xYears:{one:"1 year",other:"{{count}} years"},overXYears:{one:"over 1 year",other:"over {{count}} years"},almostXYears:{one:"almost 1 year",other:"almost {{count}} years"}},w=function(t,e,n){var r,i=y[t];return typeof i=="string"?r=i:e===1?r=i.one:r=i.other.replace("{{count}}",e.toString()),n!=null&&n.addSuffix?n.comparison&&n.comparison>0?"in "+r:r+" ago":r},P={full:"EEEE, MMMM do, y",long:"MMMM do, y",medium:"MMM d, y",short:"MM/dd/yyyy"},p={full:"h:mm:ss a zzzz",long:"h:mm:ss a z",medium:"h:mm:ss a",short:"h:mm a"},M={full:"{{date}} 'at' {{time}}",long:"{{date}} 'at' {{time}}",medium:"{{date}}, {{time}}",short:"{{date}}, {{time}}"},W={date:f({formats:P,defaultWidth:"full"}),time:f({formats:p,defaultWidth:"full"}),dateTime:f({formats:M,defaultWidth:"full"})},k={lastWeek:"'last' eeee 'at' p",yesterday:"'yesterday at' p",today:"'today at' p",tomorrow:"'tomorrow at' p",nextWeek:"eeee 'at' p",other:"P"},S=function(t,e,n,r){return k[t]},C={narrow:["B","A"],abbreviated:["BC","AD"],wide:["Before Christ","Anno Domini"]},D={narrow:["1","2","3","4"],abbreviated:["Q1","Q2","Q3","Q4"],wide:["1st quarter","2nd quarter","3rd quarter","4th quarter"]},F={narrow:["J","F","M","A","M","J","J","A","S","O","N","D"],abbreviated:["Jan","Feb","Mar","Apr","May","Jun","Jul","Aug","Sep","Oct","Nov","Dec"],wide:["January","February","March","April","May","June","July","August","September","October","November","December"]},A={narrow:["S","M","T","W","T","F","S"],short:["Su","Mo","Tu","We","Th","Fr","Sa"],abbreviated:["Sun","Mon","Tue","Wed","Thu","Fri","Sat"],wide:["Sunday","Monday","Tuesday","Wednesday","Thursday","Friday","Saturday"]},x={narrow:{am:"a",pm:"p",midnight:"mi",noon:"n",morning:"morning",afternoon:"afternoon",evening:"evening",night:"night"},abbreviated:{am:"AM",pm:"PM",midnight:"midnight",noon:"noon",morning:"morning",afternoon:"afternoon",evening:"evening",night:"night"},wide:{am:"a.m.",pm:"p.m.",midnight:"midnight",noon:"noon",morning:"morning",afternoon:"afternoon",evening:"evening",night:"night"}},T={narrow:{am:"a",pm:"p",midnight:"mi",noon:"n",morning:"in the morning",afternoon:"in the afternoon",evening:"in the evening",night:"at night"},abbreviated:{am:"AM",pm:"PM",midnight:"midnight",noon:"noon",morning:"in the morning",afternoon:"in the afternoon",evening:"in the evening",night:"at night"},wide:{am:"a.m.",pm:"p.m.",midnight:"midnight",noon:"noon",morning:"in the morning",afternoon:"in the afternoon",evening:"in the evening",night:"at night"}},j=function(t,e){var n=Number(t),r=n%100;if(r>20||r<10)switch(r%10){case 1:return n+"st";case 2:return n+"nd";case 3:return n+"rd"}return n+"th"},V={ordinalNumber:j,era:m({values:C,defaultWidth:"wide"}),quarter:m({values:D,defaultWidth:"wide",argumentCallback:function(t){return t-1}}),month:m({values:F,defaultWidth:"wide"}),day:m({values:A,defaultWidth:"wide"}),dayPeriod:m({values:x,defaultWidth:"wide",formattingValues:T,defaultFormattingWidth:"wide"})},N=/^(\d+)(th|st|nd|rd)?/i,q=/\d+/i,J={narrow:/^(b|a)/i,abbreviated:/^(b\.?\s?c\.?|b\.?\s?c\.?\s?e\.?|a\.?\s?d\.?|c\.?\s?e\.?)/i,wide:/^(before christ|before common era|anno domini|common era)/i},z={any:[/^b/i,/^(a|c)/i]},X={narrow:/^[1234]/i,abbreviated:/^q[1234]/i,wide:/^[1234](th|st|nd|rd)? quarter/i},O={any:[/1/i,/2/i,/3/i,/4/i]},R={narrow:/^[jfmasond]/i,abbreviated:/^(jan|feb|mar|apr|may|jun|jul|aug|sep|oct|nov|dec)/i,wide:/^(january|february|march|april|may|june|july|august|september|october|november|december)/i},E={narrow:[/^j/i,/^f/i,/^m/i,/^a/i,/^m/i,/^j/i,/^j/i,/^a/i,/^s/i,/^o/i,/^n/i,/^d/i],any:[/^ja/i,/^f/i,/^mar/i,/^ap/i,/^may/i,/^jun/i,/^jul/i,/^au/i,/^s/i,/^o/i,/^n/i,/^d/i]},L={narrow:/^[smtwf]/i,short:/^(su|mo|tu|we|th|fr|sa)/i,abbreviated:/^(sun|mon|tue|wed|thu|fri|sat)/i,wide:/^(sunday|monday|tuesday|wednesday|thursday|friday|saturday)/i},Q={narrow:[/^s/i,/^m/i,/^t/i,/^w/i,/^t/i,/^f/i,/^s/i],any:[/^su/i,/^m/i,/^tu/i,/^w/i,/^th/i,/^f/i,/^sa/i]},Y={narrow:/^(a|p|mi|n|(in the|at) (morning|afternoon|evening|night))/i,any:/^([ap]\.?\s?m\.?|midnight|noon|(in the|at) (morning|afternoon|evening|night))/i},_={any:{am:/^a/i,pm:/^p/i,midnight:/^mi/i,noon:/^no/i,morning:/morning/i,afternoon:/afternoon/i,evening:/evening/i,night:/night/i}},B={ordinalNumber:b({matchPattern:N,parsePattern:q,valueCallback:function(t){return parseInt(t,10)}}),era:l({matchPatterns:J,defaultMatchWidth:"wide",parsePatterns:z,defaultParseWidth:"any"}),quarter:l({matchPatterns:X,defaultMatchWidth:"wide",parsePatterns:O,defaultParseWidth:"any",valueCallback:function(t){return t+1}}),month:l({matchPatterns:R,defaultMatchWidth:"wide",parsePatterns:E,defaultParseWidth:"any"}),day:l({matchPatterns:L,defaultMatchWidth:"wide",parsePatterns:Q,defaultParseWidth:"any"}),dayPeriod:l({matchPatterns:Y,defaultMatchWidth:"any",parsePatterns:_,defaultParseWidth:"any"})},H={code:"en-US",formatDistance:w,formatLong:W,formatRelative:S,localize:V,match:B,options:{weekStartsOn:0,firstWeekContainsDate:1}};export{H as l};