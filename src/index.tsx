import React from 'react'
import ReactDOM from 'react-dom/client'
import './index.sass'
import App from './App'
import reportWebVitals from './reportWebVitals'
import { Provider } from 'react-redux'
import store from './store'
import { ToastContainer } from 'react-toastify'
import 'react-toastify/dist/ReactToastify.css'
import { ConfigProvider } from 'antd'
import ruRU from 'antd/locale/ru_RU'
import { attachLogger } from 'effector-logger'

export const unLogger = attachLogger()

const root = ReactDOM.createRoot(
  document.getElementById('root') as HTMLElement
)
root.render(
  <>
    <ConfigProvider locale={ruRU} theme={{
      token: {
        colorPrimary: '#3c7405'
      }
    }}>
      <Provider store={store}>
        <App/>
      </Provider>
      <ToastContainer position={'bottom-right'}/>
    </ConfigProvider>
  </>
)

// If you want to start measuring performance in your app, pass a function
// to log results (for example: reportWebVitals(console.log))
// or send to an analytics endpoint. Learn more: https://bit.ly/CRA-vitals
reportWebVitals()
