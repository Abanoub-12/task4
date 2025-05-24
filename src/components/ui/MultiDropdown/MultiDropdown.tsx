import { cc } from 'utils/combineClasses'
import styles from './styles.module.scss'

interface Props {
  className?: string
}

const MultiDropdown = ({ className }: Props) => {
  return <div className={cc(styles.multiDropdownRoot, className)}>MultiDropdown component</div>
}


export default MultiDropdown
