import { Fonts, Options } from './Fonts.js'

const Font = {
  scale(num, in_min, in_max, out_min, out_max) {
    let value = (num - in_min) * (out_max - out_min) / (in_max - in_min) + out_min
    
    value <= out_min ? value = out_min : value
    value >= out_max ? value = out_max : value
    
    return value
  },

  scaler(min, max) {
    const screenWidth = Number(window.innerWidth)

    return Font.scale(screenWidth, Number(Options.minWidth), Number(Options.maxWidth), min, max)
  },

  fontAdjust() {
    Fonts.forEach(obj => {
      const { selector, minFontsize, maxFontsize, minLineheight, maxLineheight } = obj

      document.querySelectorAll(selector).forEach(el => {
        const fontSize = Font.scaler(minFontsize, maxFontsize)
        const lineHeight = Font.scaler(minLineheight, maxLineheight)

        el.style.fontSize = String(fontSize + Options.measure)
        el.style.lineHeight = String(lineHeight + Options.measure)
      })
    })
  },
}

window.addEventListener('resize', Font.fontAdjust)
Font.fontAdjust()