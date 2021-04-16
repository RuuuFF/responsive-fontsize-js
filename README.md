# ⚙️ Project

I created this project, using **JavaScript**, to solve a need of mine, to adjust the font size depending on the size of the user's viewport, in a **more responsive** and **intuitive** way than mediaqueries, from CSS.

# ✈️ Technologies

- HTML
- CSS
- JavaScript

# 💻 Result

> COMING SOON...

# 🤷‍♂️ How to use?

In the <a href="#">Fonts.js</a> folder have an object called **_Options_** and an array called **_Fonts_**.

Starting with **_Options_**:

```js
const Options = {
  minWidth: 420,
  maxWidth: 1365,
  measure: "rem",
};
```

In the object **_Options_**, i'm passing the minimum (minWidth) amount and the maximum (maxWidth) of the viewport, so that it scales the font size while between these two values, with them, the measure that I will use (important for the next part).

Now in the array **_Fonts_**:

```js
const Fonts = [
  {
    selector: "h1",
    minFontsize: 2.2,
    maxFontsize: 3,
    minLineheight: 2.8,
    maxLineheight: 3.6,
  },

  {
    selector: "p",
    minFontsize: 1.6,
    maxFontsize: 2.4,
    minLineheight: 2.2,
    maxLineheight: 3,
  },
];
```

In the array **_Fonts_** i add objects, inside each object I pass the _selector_, the minimum and maximum font size and line height value (_minFontsize_, _maxFontsize_, _minLineheight_, _maxLineheight_) I want.

So, while the screen is between _420px_ e _1365px_, font-size of element **p** will scale from 1.6rem (16px) to 2.4rem (24px). Being the same with **h1** and yours line height values.

# ⚖ License

The MIT License

Copyright (c) 2021 Carlos Daniel

Permission is hereby granted, free of charge, to any person obtaining a copy
of this software and associated documentation files (the "Software"), to deal
in the Software without restriction, including without limitation the rights
to use, copy, modify, merge, publish, distribute, sublicense, and/or sell
copies of the Software, and to permit persons to whom the Software is
furnished to do so, subject to the following conditions:

The above copyright notice and this permission notice shall be included in all
copies or substantial portions of the Software.

THE SOFTWARE IS PROVIDED "AS IS", WITHOUT WARRANTY OF ANY KIND, EXPRESS OR
IMPLIED, INCLUDING BUT NOT LIMITED TO THE WARRANTIES OF MERCHANTABILITY,
FITNESS FOR A PARTICULAR PURPOSE AND NONINFRINGEMENT. IN NO EVENT SHALL THE
AUTHORS OR COPYRIGHT HOLDERS BE LIABLE FOR ANY CLAIM, DAMAGES OR OTHER
LIABILITY, WHETHER IN AN ACTION OF CONTRACT, TORT OR OTHERWISE, ARISING FROM,
OUT OF OR IN CONNECTION WITH THE SOFTWARE OR THE USE OR OTHER DEALINGS IN THE
SOFTWARE.
