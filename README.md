Format text when printing to the terminal!

```js
/*
 *  Examples
 */
const { logln } = require("format-txt");

logln("Text with no formatting");
logln("<red>Red text</red>");
logln("<red;ul>Underlined red text</red;ul>");
logln("<blue;ul>Underlined blue text</blue> Underlined text</ul>");
logln("--\\> <yellow>Yellow text</yellow> \\<--");
```

Every `>` or `<` which isn't being used for formatting must be prefixed with `\\`

<b><u>Functions:</b></u><br>
- `formatTxt(txt)`<br>
Formats then returns the supplied text.
- `log(txt)`<br>
Formats then logs the supplied text.
- `logln(txt)`<br>
Formats then logs the supplied text with a newline.

<b><u>Available formats</u></b>:<br><br>
<i>Text Formats:</i>
- `bold`
- `dim`
- `italic`
- `underline` / `ul`
- `flashing` / `flash`
- `strikethrough` / `st`

<i>Text Colours:</i>
- `black`
- `red`
- `green`
- `yellow`
- `blue`
- `purple`
- `cyan`
- `white`

<i>Hight Intensity Text Colours:</i>
- `blackH`
- `redH`
- `greenH`
- `yellowH`
- `blueH`
- `purpleH`
- `cyanH`
- `whiteH`

<i>Background colours:</i>
- `blackB`
- `redB`
- `greenB`
- `yellowB`
- `blueB`
- `purpleB`
- `cyanB`
- `whiteB`

<i>High Intensity Background Colours:</i>
- `blackHB`
- `redHB`
- `greenHB`
- `yellowHB`
- `blueHB`
- `purpleHB`
- `cyanHB`
- `whiteHB`
