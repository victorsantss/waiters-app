import { Modal, TouchableOpacity, Platform } from 'react-native';
import { Button } from '../Button';
import { Close } from '../Icons/Close';

import { Text } from '../Text';

import { Form, ModalBody, OverLay, Header, Input } from './styles';
import { useState } from 'react';

interface TableModalProps {
  visisble: boolean;
  onClose: () => void;
  onSave: (table: string) => void;
}

export function TableModal({ visisble, onClose, onSave }: TableModalProps) {
  const [table, setTable] = useState<string>('');

  function handleSave() {
    setTable('');
    onSave(table);
    onClose();
  }

  return (
    <Modal
      visible={visisble}
      transparent
      animationType="fade"
    >
      <OverLay behavior={Platform.OS === 'android' ? 'height' : 'padding'}>
        <ModalBody>
          <Header>
            <Text weight="600">Informe a mesa</Text>

            <TouchableOpacity onPress={onClose}>
              <Close color="#666" />
            </TouchableOpacity>
          </Header>

          <Form>
            <Input
              placeholder="Número da mesa"
              placeholderTextColor="#666"
              keyboardType="number-pad"
              onChangeText={setTable}
            />

            <Button onPress={handleSave} disabled={table.length === 0}>
              Salvar
            </Button>
          </Form>
        </ModalBody>
      </OverLay>
    </Modal>
  );
}
