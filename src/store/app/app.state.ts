import { ThemeInfo } from "../../lib"

type AppSliceState = {
  busy: boolean
  busyMessage: string
  theme: ThemeInfo
}

export default AppSliceState