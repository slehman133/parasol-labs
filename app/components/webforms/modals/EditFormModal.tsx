import React from "react";
import {
  Modal,
  ModalContent,
  ModalHeader,
  ModalBody,
  ModalFooter,
  Button,
  Input,
  Textarea,
  Tab,
  Divider,
} from "@nextui-org/react";

import { UseDisclosureReturn } from "@nextui-org/use-disclosure";

export default function EditFormModal({
  disclosure,
}: {
  disclosure: UseDisclosureReturn;
}) {
  const { isOpen, onOpen, onOpenChange, onClose } = disclosure;
  return (
    <>
      <Modal
        placement="center"
        isOpen={isOpen}
        onOpenChange={onOpenChange}
        isDismissable={false}
        classNames={{
            backdrop: "bg-gradient-to-t from-zinc-900 to-zinc-900/10 backdrop-opacity-20"
        }}
        backdrop="opaque"
      >
        <ModalContent>
          {(onClose) => (
            <>
              <ModalHeader></ModalHeader>
              <ModalBody></ModalBody>
            </>
          )}
        </ModalContent>
      </Modal>
    </>
  );
}
