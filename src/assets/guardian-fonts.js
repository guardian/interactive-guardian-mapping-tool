
// ================================================
// import guardian fonts
// ================================================

var guFontsCss = "\r\t<style type='text/css' media='screen,print'>\r";
guFontsCss += "@font-face{font-family:'Guardian Text Egyptian Web';src:url('https://interactive.guim.co.uk/fonts/guss-webfonts/GuardianTextEgyptianWeb/GuardianTextEgyptianWeb-Regular.eot');src:url('https://interactive.guim.co.uk/fonts/guss-webfonts/GuardianTextEgyptianWeb/GuardianTextEgyptianWeb-Regular.eot?#iefix') format('embedded-opentype'),url('https://interactive.guim.co.uk/fonts/guss-webfonts/GuardianTextEgyptianWeb/GuardianTextEgyptianWeb-Regular.woff2') format('woff2'),url('https://interactive.guim.co.uk/fonts/guss-webfonts/GuardianTextEgyptianWeb/GuardianTextEgyptianWeb-Regular.woff') format('woff'),url('https://interactive.guim.co.uk/fonts/guss-webfonts/GuardianTextEgyptianWeb/GuardianTextEgyptianWeb-Regular.ttf') format('truetype'),url('https://interactive.guim.co.uk/fonts/guss-webfonts/GuardianTextEgyptianWeb/GuardianTextEgyptianWeb-Regular.svg#GuardianTextEgyptianWeb-Regular') format('svg');font-weight:400;font-style:normal;font-stretch:normal}@font-face{font-family:'Guardian Text Egyptian Web';src:url('https://interactive.guim.co.uk/fonts/guss-webfonts/GuardianTextEgyptianWeb/GuardianTextEgyptianWeb-RegularItalic.eot');src:url('https://interactive.guim.co.uk/fonts/guss-webfonts/GuardianTextEgyptianWeb/GuardianTextEgyptianWeb-RegularItalic.eot?#iefix') format('embedded-opentype'),url('https://interactive.guim.co.uk/fonts/guss-webfonts/GuardianTextEgyptianWeb/GuardianTextEgyptianWeb-RegularItalic.woff2') format('woff2'),url('https://interactive.guim.co.uk/fonts/guss-webfonts/GuardianTextEgyptianWeb/GuardianTextEgyptianWeb-RegularItalic.woff') format('woff'),url('https://interactive.guim.co.uk/fonts/guss-webfonts/GuardianTextEgyptianWeb/GuardianTextEgyptianWeb-RegularItalic.ttf') format('truetype'),url('https://interactive.guim.co.uk/fonts/guss-webfonts/GuardianTextEgyptianWeb/GuardianTextEgyptianWeb-RegularItalic.svg#GuardianTextEgyptianWeb-RegularItalic') format('svg');font-weight:400;font-style:italic;font-stretch:normal}@font-face{font-family:'Guardian Text Egyptian Web';src:url('https://interactive.guim.co.uk/fonts/guss-webfonts/GuardianTextEgyptianWeb/GuardianTextEgyptianWeb-Medium.eot');src:url('https://interactive.guim.co.uk/fonts/guss-webfonts/GuardianTextEgyptianWeb/GuardianTextEgyptianWeb-Medium.eot?#iefix') format('embedded-opentype'),url('https://interactive.guim.co.uk/fonts/guss-webfonts/GuardianTextEgyptianWeb/GuardianTextEgyptianWeb-Medium.woff2') format('woff2'),url('https://interactive.guim.co.uk/fonts/guss-webfonts/GuardianTextEgyptianWeb/GuardianTextEgyptianWeb-Medium.woff') format('woff'),url('https://interactive.guim.co.uk/fonts/guss-webfonts/GuardianTextEgyptianWeb/GuardianTextEgyptianWeb-Medium.ttf') format('truetype'),url('https://interactive.guim.co.uk/fonts/guss-webfonts/GuardianTextEgyptianWeb/GuardianTextEgyptianWeb-Medium.svg#GuardianTextEgyptianWeb-Medium') format('svg');font-weight:700;font-style:normal;font-stretch:normal}@font-face{font-family:'Guardian Egyptian Web';src:url('https://interactive.guim.co.uk/fonts/guss-webfonts/GuardianEgyptianWeb/GuardianEgyptianWeb-Light.eot');src:url('https://interactive.guim.co.uk/fonts/guss-webfonts/GuardianEgyptianWeb/GuardianEgyptianWeb-Light.eot?#iefix') format('embedded-opentype'),url('https://interactive.guim.co.uk/fonts/guss-webfonts/GuardianEgyptianWeb/GuardianEgyptianWeb-Light.woff2') format('woff2'),url('https://interactive.guim.co.uk/fonts/guss-webfonts/GuardianEgyptianWeb/GuardianEgyptianWeb-Light.woff') format('woff'),url('https://interactive.guim.co.uk/fonts/guss-webfonts/GuardianEgyptianWeb/GuardianEgyptianWeb-Light.ttf') format('truetype'),url('https://interactive.guim.co.uk/fonts/guss-webfonts/GuardianEgyptianWeb/GuardianEgyptianWeb-Light.svg#GuardianEgyptianWeb-Light') format('svg');font-weight:200;font-style:normal;font-stretch:normal}@font-face{font-family:'Guardian Egyptian Web';src:url('https://interactive.guim.co.uk/fonts/guss-webfonts/GuardianEgyptianWeb/GuardianEgyptianWeb-Regular.eot');src:url('https://interactive.guim.co.uk/fonts/guss-webfonts/GuardianEgyptianWeb/GuardianEgyptianWeb-Regular.eot?#iefix') format('embedded-opentype'),url('https://interactive.guim.co.uk/fonts/guss-webfonts/GuardianEgyptianWeb/GuardianEgyptianWeb-Regular.woff2') format('woff2'),url('https://interactive.guim.co.uk/fonts/guss-webfonts/GuardianEgyptianWeb/GuardianEgyptianWeb-Regular.woff') format('woff'),url('https://interactive.guim.co.uk/fonts/guss-webfonts/GuardianEgyptianWeb/GuardianEgyptianWeb-Regular.ttf') format('truetype'),url('https://interactive.guim.co.uk/fonts/guss-webfonts/GuardianEgyptianWeb/GuardianEgyptianWeb-Regular.svg#GuardianEgyptianWeb-Regular') format('svg');font-weight:400;font-style:normal;font-stretch:normal}@font-face{font-family:'Guardian Egyptian Web';src:url('https://interactive.guim.co.uk/fonts/guss-webfonts/GuardianEgyptianWeb/GuardianEgyptianWeb-Medium.eot');src:url('https://interactive.guim.co.uk/fonts/guss-webfonts/GuardianEgyptianWeb/GuardianEgyptianWeb-Medium.eot?#iefix') format('embedded-opentype'),url('https://interactive.guim.co.uk/fonts/guss-webfonts/GuardianEgyptianWeb/GuardianEgyptianWeb-Medium.woff2') format('woff2'),url('https://interactive.guim.co.uk/fonts/guss-webfonts/GuardianEgyptianWeb/GuardianEgyptianWeb-Medium.woff') format('woff'),url('https://interactive.guim.co.uk/fonts/guss-webfonts/GuardianEgyptianWeb/GuardianEgyptianWeb-Medium.ttf') format('truetype'),url('https://interactive.guim.co.uk/fonts/guss-webfonts/GuardianEgyptianWeb/GuardianEgyptianWeb-Medium.svg#GuardianEgyptianWeb-Medium') format('svg');font-weight:500;font-style:normal;font-stretch:normal}@font-face{font-family:'Guardian Egyptian Web';src:url('https://interactive.guim.co.uk/fonts/guss-webfonts/GuardianEgyptianWeb/GuardianEgyptianWeb-Semibold.eot');src:url('https://interactive.guim.co.uk/fonts/guss-webfonts/GuardianEgyptianWeb/GuardianEgyptianWeb-Semibold.eot?#iefix') format('embedded-opentype'),url('https://interactive.guim.co.uk/fonts/guss-webfonts/GuardianEgyptianWeb/GuardianEgyptianWeb-Semibold.woff2') format('woff2'),url('https://interactive.guim.co.uk/fonts/guss-webfonts/GuardianEgyptianWeb/GuardianEgyptianWeb-Semibold.woff') format('woff'),url('https://interactive.guim.co.uk/fonts/guss-webfonts/GuardianEgyptianWeb/GuardianEgyptianWeb-Semibold.ttf') format('truetype'),url('https://interactive.guim.co.uk/fonts/guss-webfonts/GuardianEgyptianWeb/GuardianEgyptianWeb-Semibold.svg#GuardianEgyptianWeb-Semibold') format('svg');font-weight:900;font-style:normal;font-stretch:normal}@font-face{font-family:'Guardian Text Sans Web';src:url('https://interactive.guim.co.uk/fonts/guss-webfonts/GuardianTextSansWeb/GuardianTextSansWeb-Regular.eot');src:url('https://interactive.guim.co.uk/fonts/guss-webfonts/GuardianTextSansWeb/GuardianTextSansWeb-Regular.eot?#iefix') format('embedded-opentype'),url('https://interactive.guim.co.uk/fonts/guss-webfonts/GuardianTextSansWeb/GuardianTextSansWeb-Regular.woff2') format('woff2'),url('https://interactive.guim.co.uk/fonts/guss-webfonts/GuardianTextSansWeb/GuardianTextSansWeb-Regular.woff') format('woff'),url('https://interactive.guim.co.uk/fonts/guss-webfonts/GuardianTextSansWeb/GuardianTextSansWeb-Regular.ttf') format('truetype'),url('https://interactive.guim.co.uk/fonts/guss-webfonts/GuardianTextSansWeb/GuardianTextSansWeb-Regular.svg#GuardianTextSansWeb-Regular') format('svg');font-weight:400;font-style:normal;font-stretch:normal}@font-face{font-family:'Guardian Text Sans Web';src:url('https://interactive.guim.co.uk/fonts/guss-webfonts/GuardianTextSansWeb/GuardianTextSansWeb-RegularItalic.eot');src:url('https://interactive.guim.co.uk/fonts/guss-webfonts/GuardianTextSansWeb/GuardianTextSansWeb-RegularItalic.eot?#iefix') format('embedded-opentype'),url('https://interactive.guim.co.uk/fonts/guss-webfonts/GuardianTextSansWeb/GuardianTextSansWeb-RegularItalic.woff2') format('woff2'),url('https://interactive.guim.co.uk/fonts/guss-webfonts/GuardianTextSansWeb/GuardianTextSansWeb-RegularItalic.woff') format('woff'),url('https://interactive.guim.co.uk/fonts/guss-webfonts/GuardianTextSansWeb/GuardianTextSansWeb-RegularItalic.ttf') format('truetype'),url('https://interactive.guim.co.uk/fonts/guss-webfonts/GuardianTextSansWeb/GuardianTextSansWeb-RegularItalic.svg#GuardianTextSansWeb-RegularItalic') format('svg');font-weight:400;font-style:italic;font-stretch:normal}@font-face{font-family:'Guardian Text Sans Web';src:url('https://interactive.guim.co.uk/fonts/guss-webfonts/GuardianTextSansWeb/GuardianTextSansWeb-Medium.eot');src:url('https://interactive.guim.co.uk/fonts/guss-webfonts/GuardianTextSansWeb/GuardianTextSansWeb-Medium.eot?#iefix') format('embedded-opentype'),url('https://interactive.guim.co.uk/fonts/guss-webfonts/GuardianTextSansWeb/GuardianTextSansWeb-Medium.woff2') format('woff2'),url('https://interactive.guim.co.uk/fonts/guss-webfonts/GuardianTextSansWeb/GuardianTextSansWeb-Medium.woff') format('woff'),url('https://interactive.guim.co.uk/fonts/guss-webfonts/GuardianTextSansWeb/GuardianTextSansWeb-Medium.ttf') format('truetype'),url('https://interactive.guim.co.uk/fonts/guss-webfonts/GuardianTextSansWeb/GuardianTextSansWeb-Medium.svg#GuardianTextSansWeb-Medium') format('svg');font-weight:700;font-style:normal;font-stretch:normal}@font-face{font-family:'Guardian Sans Web';src:url('https://interactive.guim.co.uk/fonts/guss-webfonts/GuardianSansWeb/GuardianSansWeb-Regular.eot');src:url('https://interactive.guim.co.uk/fonts/guss-webfonts/GuardianSansWeb/GuardianSansWeb-Regular.eot?#iefix') format('embedded-opentype'),url('https://interactive.guim.co.uk/fonts/guss-webfonts/GuardianSansWeb/GuardianSansWeb-Regular.woff2') format('woff2'),url('https://interactive.guim.co.uk/fonts/guss-webfonts/GuardianSansWeb/GuardianSansWeb-Regular.woff') format('woff'),url('https://interactive.guim.co.uk/fonts/guss-webfonts/GuardianSansWeb/GuardianSansWeb-Regular.ttf') format('truetype'),url('https://interactive.guim.co.uk/fonts/guss-webfonts/GuardianSansWeb/GuardianSansWeb-Regular.svg#GuardianSansWeb-Regular') format('svg');font-weight:400;font-style:normal;font-stretch:normal} @font-face{font-family:'Guardian Agate Sans';src:url('https://interactive.guim.co.uk/fonts/guss-webfonts/GuardianAgateSans1Web/GuardianAgateSans1Web-Regular.eot');src:url('https://interactive.guim.co.uk/fonts/guss-webfonts/GuardianAgateSans1Web/GuardianAgateSans1Web-Regular.eot?#iefix') format('embedded-opentype'),url('https://interactive.guim.co.uk/fonts/guss-webfonts/GuardianAgateSans1Web/GuardianAgateSans1Web-Regular.woff2') format('woff2'),url('https://interactive.guim.co.uk/fonts/guss-webfonts/GuardianAgateSans1Web/GuardianAgateSans1Web-Regular.woff') format('woff'),url('https://interactive.guim.co.uk/fonts/guss-webfonts/GuardianAgateSans1Web/GuardianAgateSans1Web-Regular.ttf') format('truetype'),url('https://interactive.guim.co.uk/fonts/guss-webfonts/GuardianAgateSans1Web/GuardianAgateSans1Web-Regular.svg#Guardian-Text-Egyp-Web-Reg') format('svg');font-weight:normal;font-style:normal;font-stretch:normal;}@font-face{font-family:'Guardian Agate Sans';src:url('https://interactive.guim.co.uk/fonts/guss-webfonts/GuardianAgateSans1Web/GuardianAgateSans1Web-RegularItalic.eot');src:url('https://interactive.guim.co.uk/fonts/guss-webfonts/GuardianAgateSans1Web/GuardianAgateSans1Web-RegularItalic.eot?#iefix') format('embedded-opentype'),url('https://interactive.guim.co.uk/fonts/guss-webfonts/GuardianAgateSans1Web/GuardianAgateSans1Web-RegularItalic.woff2') format('woff2'),url('https://interactive.guim.co.uk/fonts/guss-webfonts/GuardianAgateSans1Web/GuardianAgateSans1Web-RegularItalic.woff') format('woff'),url('https://interactive.guim.co.uk/fonts/guss-webfonts/GuardianAgateSans1Web/GuardianAgateSans1Web-RegularItalic.ttf') format('truetype'),url('https://interactive.guim.co.uk/fonts/guss-webfonts/GuardianAgateSans1Web/GuardianAgateSans1Web-RegularItalic.svg#Guardian-Text-Egyp-Web-Reg-It') format('svg');font-weight:normal;font-style:italic;font-stretch:normal;}@font-face{font-family:'Guardian Agate Sans';src:url('https://interactive.guim.co.uk/fonts/guss-webfonts/GuardianAgateSans1Web/GuardianAgateSans1Web-Bold.eot');src:url('https://interactive.guim.co.uk/fonts/guss-webfonts/GuardianAgateSans1Web/GuardianAgateSans1Web-Bold.eot?#iefix') format('embedded-opentype'),url('https://interactive.guim.co.uk/fonts/guss-webfonts/GuardianAgateSans1Web/GuardianAgateSans1Web-Bold.woff2') format('woff2'),url('https://interactive.guim.co.uk/fonts/guss-webfonts/GuardianAgateSans1Web/GuardianAgateSans1Web-Bold.woff') format('woff'),url('https://interactive.guim.co.uk/fonts/guss-webfonts/GuardianAgateSans1Web/GuardianAgateSans1Web-Bold.ttf') format('truetype'),url('https://interactive.guim.co.uk/fonts/guss-webfonts/GuardianAgateSans1Web/GuardianAgateSans1Web-Bold.svg#Guardian-Text-Egyp-Web-Medium') format('svg');font-weight:bold;font-style:normal;font-stretch:normal;}@font-face{font-family:'Guardian Agate Sans';src:url('https://interactive.guim.co.uk/fonts/guss-webfonts/GuardianAgateSans1Web/GuardianAgateSans1Web-BoldItalic.eot');src:url('https://interactive.guim.co.uk/fonts/guss-webfonts/GuardianAgateSans1Web/GuardianAgateSans1Web-BoldItalic.eot?#iefix') format('embedded-opentype'),url('https://interactive.guim.co.uk/fonts/guss-webfonts/GuardianAgateSans1Web/GuardianAgateSans1Web-BoldItalic.woff2') format('woff2'),url('https://interactive.guim.co.uk/fonts/guss-webfonts/GuardianAgateSans1Web/GuardianAgateSans1Web-BoldItalic.woff') format('woff'),url('https://interactive.guim.co.uk/fonts/guss-webfonts/GuardianAgateSans1Web/GuardianAgateSans1Web-BoldItalic.ttf') format('truetype'),url('https://interactive.guim.co.uk/fonts/guss-webfonts/GuardianAgateSans1Web/GuardianAgateSans1Web-BoldItalic.svg#Guardian-Text-Egyp-Web-Med-It') format('svg');font-weight:bold;font-style:italic;font-stretch:normal;}";
guFontsCss += "</style>\r";

var fonts = [
  {
    "aifont": "DE2DisplayEgyptianLight",
    "family": "'Guardian Egyptian Web', Georgia, serif",
    "weight": "300",
    "style": ""
  }, {
    "aifont": "DE3DisplayEgyptian",
    "family": "'Guardian Egyptian Web', Georgia, serif",
    "weight": "400",
    "style": ""
  }, {
    "aifont": "DE4DisplayEgyptianMedium",
    "family": "'Guardian Egyptian Web', Georgia, serif",
    "weight": "500",
    "style": ""
  }, {
    "aifont": "DE5DisplayEgyptianSemiBold",
    "family": "'Guardian Egyptian Web', Georgia, serif",
    "weight": "600",
    "style": ""
  }, {
    "aifont": "DE6DisplayEgyptianBold",
    "family": "'Guardian Egyptian Web', Georgia, serif",
    "weight": "800",
    "style": ""
  }, {
    "aifont": "DS6DisplaySansBold",
    "family": "'Guardian Text Sans Web', Arial, sans-serif",
    "weight": "800",
    "style": ""
  }, {
    "aifont": "DS5DisplaySansSemibold",
    "family": "'Guardian Text Sans Web', Arial, sans-serif",
    "weight": "600",
    "style": ""
  }, {
    "aifont": "DE1DisplayEgyptianThin",
    "family": "'Guardian Egyptian Web', Georgia, serif",
    "weight": "200",
    "style": ""
  }, {
    "aifont": "DS2DisplaySansLight",
    "family": "'Guardian Text Sans Web', Arial, sans-serif",
    "weight": "300",
    "style": ""
  }, {
    "aifont": "DS3DisplaySans-Italic",
    "family": "'Guardian Text Sans Web', Arial, sans-serif",
    "weight": "",
    "style": "italic"
  }, {
    "aifont": "DS3DisplaySans",
    "family": "'Guardian Text Sans Web', Arial, sans-serif",
    "weight": "400",
    "style": ""
  }, {
    "aifont": "AS31AgateSans",
    "family": "'Guardian Agate Sans', Arial, sans-serif",
    "weight": "500",
    "style": ""
  }, {
    "aifont": "AS31AgateSans-Bold",
    "family": "'Guardian Agate Sans', Arial, sans-serif",
    "weight": "800",
    "style": ""
  }, {
    "aifont": "AS32AgateSans",
    "family": "'Guardian Agate Sans', Arial, sans-serif",
    "weight": "500",
    "style": ""
  }, {
    "aifont": "AS32AgateSans-Bold",
    "family": "'Guardian Agate Sans', Arial, sans-serif",
    "weight": "800",
    "style": ""
  }, {
    "aifont": "TS4TextSansMedium",
    "family": "'Guardian Sans Web', Arial, sans-serif",
    "weight": "500",
    "style": ""
  }, {
    "aifont": "TS4TextSansMedium-Bold",
    "family": "'Guardian Sans Web', Arial, sans-serif",
    "weight": "800",
    "style": ""
  }, {
    "aifont": "TS3TextSans",
    "family": "'Guardian Sans Web', Arial, sans-serif",
    "weight": "400",
    "style": ""
  }
];


// Add extra Guardian character codes

var guardianCharacterCodes = [
  ["\x22", "&quot;"],
  ["\xA0", "&nbsp;"],
  ["\xA1", "&iexcl;"],
  ["\xA2", "&cent;"],
  ["\xA3", "&pound;"],
  ["\xA4", "&curren;"],
  ["\xA5", "&yen;"],
  ["\xA6", "&brvbar;"],
  ["\xA7", "&sect;"],
  ["\xA8", "&uml;"],
  ["\xA9", "&copy;"],
  ["\xAA", "&ordf;"],
  ["\xAB", "&laquo;"],
  ["\xAC", "&not;"],
  ["\xAD", "&shy;"],
  ["\xAE", "&reg;"],
  ["\xAF", "&macr;"],
  ["\xB0", "&deg;"],
  ["\xB1", "&plusmn;"],
  ["\xB2", "&sup2;"],
  ["\xB3", "&sup3;"],
  ["\xB4", "&acute;"],
  ["\xB5", "&micro;"],
  ["\xB6", "&para;"],
  ["\xB7", "&middot;"],
  ["\xB8", "&cedil;"],
  ["\xB9", "&sup1;"],
  ["\xBA", "&ordm;"],
  ["\xBB", "&raquo;"],
  ["\xBC", "&frac14;"],
  ["\xBD", "&frac12;"],
  ["\xBE", "&frac34;"],
  ["\xBF", "&iquest;"],
  ["\xC0", "&Agrave;"],
  ["\xC1", "&Aacute;"],
  ["\xC2", "&Acirc;"],
  ["\xC3", "&Atilde;"],
  ["\xC4", "&Auml;"],
  ["\xC5", "&Aring;"],
  ["\xC6", "&AElig;"],
  ["\xC7", "&Ccedil;"],
  ["\xC8", "&Egrave;"],
  ["\xC9", "&Eacute;"],
  ["\xCA", "&Ecirc;"],
  ["\xCB", "&Euml;"],
  ["\xCC", "&Igrave;"],
  ["\xCD", "&Iacute;"],
  ["\xCE", "&Icirc;"],
  ["\xCF", "&Iuml;"],
  ["\xD0", "&ETH;"],
  ["\xD1", "&Ntilde;"],
  ["\xD2", "&Ograve;"],
  ["\xD3", "&Oacute;"],
  ["\xD4", "&Ocirc;"],
  ["\xD5", "&Otilde;"],
  ["\xD6", "&Ouml;"],
  ["\xD7", "&times;"],
  ["\xD8", "&Oslash;"],
  ["\xD9", "&Ugrave;"],
  ["\xDA", "&Uacute;"],
  ["\xDB", "&Ucirc;"],
  ["\xDC", "&Uuml;"],
  ["\xDD", "&Yacute;"],
  ["\xDE", "&THORN;"],
  ["\xDF", "&szlig;"],
  ["\xE0", "&agrave;"],
  ["\xE1", "&aacute;"],
  ["\xE2", "&acirc;"],
  ["\xE3", "&atilde;"],
  ["\xE4", "&auml;"],
  ["\xE5", "&aring;"],
  ["\xE6", "&aelig;"],
  ["\xE7", "&ccedil;"],
  ["\xE8", "&egrave;"],
  ["\xE9", "&eacute;"],
  ["\xEA", "&ecirc;"],
  ["\xEB", "&euml;"],
  ["\xEC", "&igrave;"],
  ["\xED", "&iacute;"],
  ["\xEE", "&icirc;"],
  ["\xEF", "&iuml;"],
  ["\xF0", "&eth;"],
  ["\xF1", "&ntilde;"],
  ["\xF2", "&ograve;"],
  ["\xF3", "&oacute;"],
  ["\xF4", "&ocirc;"],
  ["\xF5", "&otilde;"],
  ["\xF6", "&ouml;"],
  ["\xF7", "&divide;"],
  ["\xF8", "&oslash;"],
  ["\xF9", "&ugrave;"],
  ["\xFA", "&uacute;"],
  ["\xFB", "&ucirc;"],
  ["\xFC", "&uuml;"],
  ["\xFD", "&yacute;"],
  ["\xFE", "&thorn;"],
  ["\xFF", "&yuml;"],
  ["\xA0", "&nbsp;"],
  ["\u011f", "&#x11f;"],
  ["\xe7", "&ccedil;"],
  ["\xe2", "&acirc;"],
  ["\u0131", "&#305;"]
];
