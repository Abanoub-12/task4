import styles from './styles.module.scss'
import MainLayout from 'components/layouts/MainLayout'

const Main = () => {
  return (
    <MainLayout>
    <div className= { styles.mainRoot } >
    <h1>Welcome to the Application </h1>
      < p > This is the main page content.</p>
        </div>
        </MainLayout>
  )
}

export default Main
