import { ModalProps } from '@helpers/types'
import Modal from 'react-modal'

const ReactModal: React.FC<ModalProps> = ({ book, isOpen, onClose, onDelete }) => {
    return (
        <Modal
            isOpen={isOpen}
            onRequestClose={onClose}
            className="bg-white w-full max-w-md mx-auto rounded-lg shadow-lg p-6"
            overlayClassName="fixed inset-0 bg-gray-900 bg-opacity-75 flex items-center justify-center"
            ariaHideApp={false}
        >
            <h2 className="text-3xl font-bold text-gray-800 mb-4 text-center">Delete Book</h2>
            <p className="text-lg text-gray-700 text-center mb-6">
                Are you sure you want to delete <span className="font-semibold">{`"${book.title}"`}</span>?
            </p>
            <div className="flex justify-center gap-4">
                <button
                    type="button"
                    onClick={onClose}
                    className="bg-gray-300 hover:bg-gray-400 hover:text-white text-gray-700 font-medium px-4 py-2 rounded-md transition-all"
                >
                    Cancel
                </button>
                <button
                    type="button"
                    onClick={onDelete}
                    className="bg-red-500 hover:bg-red-700 text-white font-medium px-4 py-2 rounded-md transition-all"
                >
                    Delete
                </button>
            </div>
        </Modal>
    )
}

export default ReactModal
