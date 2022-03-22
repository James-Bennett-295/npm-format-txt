"use strict";

function formatTxt(txt) {
    let out = "";
    let prevC = -1;
    let activeFormats = [];
    let fStartChar = null, endChar = null;
    for (let i = 0; i < txt.length; i++) {
        if (txt.charAt(i) === '<' && (i === 0 || txt.charAt(i - 1) !== '\\')) {
            out += txt.substr(prevC + 1, (i - prevC) - 1);
            fStartChar = i + 1;
        } else if (txt.charAt(i) === '>' && (i === 0 || txt.charAt(i - 1) !== '\\')) {
            prevC = i;
            endChar = i - 1;
        } else if (i === txt.length - 1) {
            out += txt.substr(prevC + 1, (i - prevC));
        };
        if (fStartChar !== null && endChar !== null) {
            let formats = txt.substr(fStartChar, (endChar - fStartChar) + 1);
            let isReset = formats.charAt(0) === '/';
            if (isReset) {
                let charArr = formats.split('');
                charArr.shift();
                formats = charArr.join('');
            };
            let formatsArr = formats.split(';');
            fStartChar = null, endChar = null;
            let ansiFormats = [];
            for (let i = 0; i < formatsArr.length; i++) {
                switch (formatsArr[i]) {
                    case "bold":
                        ansiFormats.push("1"); break;
                    case "dim":
                        ansiFormats.push("2"); break;
                    case "italic":
                        ansiFormats.push("3"); break;
                    case "underline":
                    case "ul":
                        ansiFormats.push("4"); break;
                    case "flashing":
                    case "flash":
                        ansiFormats.push("5"); break;
                    case "strikethrough":
                    case "st":
                        ansiFormats.push("9"); break;
                    case "black":
                        ansiFormats.push("30"); break;
                    case "red":
                        ansiFormats.push("31"); break;
                    case "green":
                        ansiFormats.push("32"); break;
                    case "yellow":
                        ansiFormats.push("33"); break;
                    case "blue":
                        ansiFormats.push("34"); break;
                    case "purple":
                        ansiFormats.push("35"); break;
                    case "cyan":
                        ansiFormats.push("36"); break;
                    case "white":
                        ansiFormats.push("37"); break;
                    case "blackB":
                        ansiFormats.push("40"); break;
                    case "redB":
                        ansiFormats.push("41"); break;
                    case "greenB":
                        ansiFormats.push("42"); break;
                    case "yellowB":
                        ansiFormats.push("43"); break;
                    case "blueB":
                        ansiFormats.push("44"); break;
                    case "purpleB":
                        ansiFormats.push("45"); break;
                    case "cyanB":
                        ansiFormats.push("46"); break;
                    case "whiteB":
                        ansiFormats.push("47"); break;
                    case "blackH":
                        ansiFormats.push("90"); break;
                    case "redH":
                        ansiFormats.push("91"); break;
                    case "greenH":
                        ansiFormats.push("92"); break;
                    case "yellowH":
                        ansiFormats.push("93"); break;
                    case "blueH":
                        ansiFormats.push("94"); break;
                    case "purpleH":
                        ansiFormats.push("95"); break;
                    case "cyanH":
                        ansiFormats.push("96"); break;
                    case "whiteH":
                        ansiFormats.push("97"); break;
                    case "blackHB":
                        ansiFormats.push("100"); break;
                    case "redHB":
                        ansiFormats.push("101"); break;
                    case "greenHB":
                        ansiFormats.push("102"); break;
                    case "yellowHB":
                        ansiFormats.push("103"); break;
                    case "blueHB":
                        ansiFormats.push("104"); break;
                    case "purpleHB":
                        ansiFormats.push("105"); break;
                    case "cyanHB":
                        ansiFormats.push("106"); break;
                    case "whiteHB":
                        ansiFormats.push("107"); break;
                };
            };
            if (isReset) {
                activeFormats = activeFormats.filter((item) => {
                    return !ansiFormats.includes(item);
                });
                out += "\x1b[0m";
            } else {
                activeFormats = activeFormats.concat(ansiFormats);
            };
            if (activeFormats.length > 0) out += "\x1b[" + activeFormats.join(';') + "m";
        };
    };
    out = out.replaceAll("\\<", '<').replaceAll("\\>", '>');
    return out;
};

function log(txt) {
    process.stdout.write(formatTxt(txt));
};

function logln(txt) {
    process.stdout.write(formatTxt(txt) + '\n');
};

module.exports = { formatTxt, log, logln };
