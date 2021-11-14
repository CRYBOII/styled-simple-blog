import { ThemeProvider } from "styled-components"
import Header from "../components/Header"
import Sidebar from "../components/Sidebar"
import GlobalStyles from "../components/styles/Global"

const theme = {
  colors: {
    header: "#ebfbff",
    body: "#fff",
    footer: "#003333",
  },
  mobile: "768px",
}

export default function App({ Component, pageProps }) {
  return (
    <>
      <ThemeProvider theme={theme}>
        <GlobalStyles />

        <Header />
        <Sidebar />
        <Component {...pageProps} />
      </ThemeProvider>
    </>
  )
}
