import { Modal } from "@/shared/ui/Modal";
import { Button } from "@/shared/ui/Button";

interface ConfirmModalProps {
  title: string;
  message: string;
  confirmText?: string;
  cancelText?: string;
  onConfirm: () => void;
  onClose: () => void;
}

export function ConfirmModal({
  title,
  message,
  confirmText = "확인",
  cancelText,
  onConfirm,
  onClose,
}: ConfirmModalProps) {
  return (
    <Modal.Content size="sm">
      <Modal.Header>
        <Modal.Title>{title}</Modal.Title>
      </Modal.Header>

      <div className="p-6">
        <p className="text-sm text-gray-600">{message}</p>
      </div>

      <Modal.Footer>
        {cancelText && (
          <Button variant="tertiary" onClick={onClose}>
            {cancelText}
          </Button>
        )}
        <Button
          variant="secondary"
          onClick={() => {
            onConfirm();
            onClose();
          }}
        >
          {confirmText}
        </Button>
      </Modal.Footer>
    </Modal.Content>
  );
}
