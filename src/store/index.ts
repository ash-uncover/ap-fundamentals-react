import { configureStore } from '@reduxjs/toolkit'

import appSlice from '../store/app/app.slice'

export default configureStore({
  reducer: {
    app: appSlice.reducer,
  }
})
