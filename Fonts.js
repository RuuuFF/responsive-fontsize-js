const Options = {
  minWidth: 420,
  maxWidth: 1365,
  measure: "rem"
}

const Fonts = [
  {
    selector: "h1",
    minFontsize: 2.2,
    maxFontsize: 3,
    minLineheight: 2.8,
    maxLineheight: 3.6
  },

  {
    selector: "p",
    minFontsize: 1.6,
    maxFontsize: 2.4,
    minLineheight: 2.2,
    maxLineheight: 3
  },
]

export { Fonts, Options }