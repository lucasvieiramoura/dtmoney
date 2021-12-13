import {Container} from './styles'
import Modal from 'react-modal';
import closeImg from '../../assets/close.svg';

interface NewTransactionModalProps {
    isOpen: boolean;
    onRequestClose: () => void;
}

export function NewTransactionModal({isOpen, onRequestClose} :NewTransactionModalProps) {
    return (
        <Modal 
            isOpen={isOpen} 
            onRequestClose={onRequestClose}
            overlayClassName="react-modal-orverlay"
            className="react-modal-content"
        >
            <button type="button" onClick={onRequestClose} className="react-modal-close">
                <img src={closeImg} alt="Fechar" />
            </button> 
            <Container>

                <h2>Cadastrar Transação</h2>
                <input placeholder="Título"></input>
                <input type="number" placeholder="Valor"></input>
                <input placeholder="Categoria"></input>
                <button type="submit"> Cadastrar </button>

            </Container>
      </Modal>
    );
}