import { ThemeInfo } from '../constants/Theme'

export const injectCss = (id: string, href: string) => {
  return new Promise<void>((resolve, reject) => {
    const current = document.getElementById(id)
    if (current) {
      current.setAttribute('id', `${id}-old`)
    }

    const styleSheet = document.createElement('link')
    styleSheet.setAttribute('id', id)
    styleSheet.setAttribute('rel', 'stylesheet')
    styleSheet.setAttribute('href', href)
    styleSheet.addEventListener('load', () => {
      if (current && current.parentNode){
        current.parentNode.removeChild(current)
      }
      resolve()
    })
    styleSheet.addEventListener('error', () => {
      if (current && current.parentNode) {
        current.parentNode.removeChild(current)
      }
      reject()
    })

    document.head.appendChild(styleSheet)
  })
}

export const injectThemeCss = (theme: ThemeInfo) => {
  let root = ''
  if (window.location.href.indexOf('ap-fundamentals-react') !== -1) {
    root = '/ap-fundamentals-react'
  }
  return Promise.allSettled([
    injectCss('theming-icons', `${root}/${theme.family}_fonts.css`),
    injectCss('theming-base-content', `${root}/${theme.id}_variables.css`),
    injectCss('theming', `${root}/${theme.id}.css`),
  ])
}
