"use client";

import {
  Box,
  Checkbox,
  Flex,
  Image,
  Modal,
  ModalBody,
  ModalContent,
  ModalHeader,
  ModalOverlay,
  Select,
  Spacer,
  Text,
  VStack,
  useColorModeValue,
  useDisclosure,
} from "@chakra-ui/react";

const TaskItem = ({
  children,
  title,
  subtasks,
  description,
  status,
  taskStatuses,
  ...otherProps
}) => {
  const { isOpen, onOpen, onClose } = useDisclosure();

  let completedSubtasks = 0;

  for (const item of subtasks) {
    if (item.isCompleted) completedSubtasks++;
  }

  return (
    <>
      <Flex
        flexDir="column"
        bg={useColorModeValue("white", "darkGrey")}
        gap={2}
        py={6}
        px={4}
        borderRadius={8}
        boxShadow="0px 4px 6px 0px rgba(54, 78, 126, 0.10)"
        cursor="pointer"
        onClick={onOpen}
      >
        <Text textStyle="headingM" color={useColorModeValue("black", "white")}>
          {title}
        </Text>
        <Text textStyle="bodyM" color="mediumGrey">
          {completedSubtasks} of {subtasks.length} subtasks
        </Text>
      </Flex>

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
    </>
  );
};

export default TaskItem;
