import clsx from 'clsx';
import styles from './Footer.module.scss';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import {
  faFacebook,
  faGooglePlusG,
  faPinterestP,
} from '@fortawesome/free-brands-svg-icons';

const Footer = ({className}: {className?: string}) => (
  <div className={clsx(className, styles.root)}>
    <div className={clsx('container', styles.container)}>
      <FontAwesomeIcon icon={faPinterestP} />
      <FontAwesomeIcon icon={faFacebook} />
      <FontAwesomeIcon icon={faGooglePlusG} />
    </div>
  </div>
);

export default Footer;
