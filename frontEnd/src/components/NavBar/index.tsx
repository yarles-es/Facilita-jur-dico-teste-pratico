import styles from "./Navbar.module.css";

type Props = {
  modal: boolean;
  setModal: (modal: boolean) => void;
};

const Navbar: React.FC<Props> = ({ modal, setModal }) => {
  return (
    <div className={styles.navbar}>
      <span onClick={() => setModal(!modal)} className={styles.navLink}>
        Criar Novo Cliente
      </span>
      <span onClick={() => setModal(!modal)} className={styles.navLink}>
        Visualizar melhor rota
      </span>
    </div>
  );
};

export default Navbar;
