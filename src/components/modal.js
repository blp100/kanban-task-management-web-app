"use client";

import {
  Checkbox,
  Flex,
  Image,
  Modal,
  ModalBody,
  ModalContent,
  ModalOverlay,
  Select,
  Spacer,
  Text,
  useColorModeValue,
} from "@chakra-ui/react";

const TaskModal = ({
  title,
  subtasks,
  status,
  taskStatuses,
  description,
  isOpen,
  onClose,
  completedSubtasks,
  ...otherProps
}) => {
  return (
    <Modal onClose={onClose} isOpen={isOpen} isCentered>
      <ModalOverlay />
      <ModalContent
        w="30rem"
        p={8}
        borderRadius={6}
        bg={useColorModeValue("white", "darkGrey")}
      >
        <ModalBody p={0} gap={6} display="flex" flexDir="column">
          <Flex alignItems="center">
            <Text
              textStyle="headingL"
              color={useColorModeValue("black", "white")}
            >
              {title}
            </Text>
            <Spacer />
            <Image
              src="/images/icon-vertical-ellipsis.svg"
              w="5px"
              h="20px"
              alt="vertical ellipsis"
            />
          </Flex>
          <Text textStyle="bodyL" color="mediumGrey">
            {description}
          </Text>
          <Flex flexDir="column" gap={2}>
            <Text textStyle="bodyM" color="mediumGrey" mb={2}>
              {completedSubtasks} of {subtasks.length} subtasks
            </Text>
            {subtasks.map((subtask) => (
              <Checkbox
                key={subtask.title}
                defaultChecked={subtask.isCompleted}
                variant="customCheckBox"
              >
                {subtask.title}
              </Checkbox>
            ))}
          </Flex>
          <Flex flexDir="column" gap={2}>
            <Text textStyle="bodyM" color="mediumGrey" mb={2}>
              Current Status
            </Text>
            <Select defaultValue={status}>
              {taskStatuses.map((item) => (
                <option key={item} value={item}>
                  {item}
                </option>
              ))}
            </Select>
          </Flex>
        </ModalBody>
      </ModalContent>
    </Modal>
  );
};

export { TaskModal };
