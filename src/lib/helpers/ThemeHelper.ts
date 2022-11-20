import { ThemeInfo } from "constants/Theme"

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
  return Promise.allSettled([
    injectCss('theming-icons', `/fundamentals-icons-${theme.family}.css`),
    injectCss('theming-base-content', `/theme/${theme.id}/css_variables.css`),
    injectCss('theming', `/theme/${theme.id}/${theme.id}.css`),
  ])
}
