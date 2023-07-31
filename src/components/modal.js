"use client";

import {
  Box,
  Button,
  Checkbox,
  Flex,
  Image,
  Input,
  Menu,
  MenuButton,
  MenuItem,
  MenuList,
  Modal,
  ModalBody,
  ModalContent,
  ModalOverlay,
  Select,
  Spacer,
  Text,
  Textarea,
  useColorModeValue,
  useDisclosure,
} from "@chakra-ui/react";

const ModalTemplate = ({ isOpen, onClose, children }) => {
  return (
    <Modal onClose={onClose} isOpen={isOpen} isCentered>
      <ModalOverlay />
      <ModalContent
        w="30rem"
        maxW="30rem"
        p={8}
        borderRadius={6}
        bg={useColorModeValue("white", "darkGrey")}
      >
        <ModalBody p={0} gap={6} display="flex" flexDir="column">
          {children}
        </ModalBody>
      </ModalContent>
    </Modal>
  );
};

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
  const {
    isOpen: isOpenEditTask,
    onOpen: onOpenEditTask,
    onClose: onCloseEditTask,
  } = useDisclosure();
  return (
    <>
      <ModalTemplate isOpen={isOpen} onClose={onClose}>
        <Flex alignItems="center">
          <Text
            textStyle="headingL"
            color={useColorModeValue("black", "white")}
          >
            {title}
          </Text>
          <Spacer />
          <Menu variant="option">
            <MenuButton>
              <Image
                src="/images/icon-vertical-ellipsis.svg"
                w="5px"
                h="20px"
                minW="5px"
                alt="vertical ellipsis"
              />
            </MenuButton>
            <MenuList>
              <MenuItem onClick={onOpenEditTask}>Edit Board</MenuItem>
              <MenuItem textColor="red">Delete Board</MenuItem>
            </MenuList>
          </Menu>
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
          <Menu variant="task">
            <MenuButton display="flex" flexDir="row" alignItems="center">
              <Box display="flex" flexDir="row" alignItems="center">
                {status}
                <Spacer />
                <Image
                  src="/images/icon-chevron-down.svg"
                  w="10px"
                  h="7px"
                  alt="vertical ellipsis"
                />
              </Box>
            </MenuButton>
            <MenuList>
              {taskStatuses.map((item) => (
                <MenuItem key={item}>{item}</MenuItem>
              ))}
            </MenuList>
          </Menu>
        </Flex>
      </ModalTemplate>
      <EditTaskModal onClose={onCloseEditTask} isOpen={isOpenEditTask} />
    </>
  );
};

const EditTaskModal = ({ isOpen, onClose, ...otherProps }) => {
  return (
    <Modal onClose={onClose} isOpen={isOpen} isCentered>
      <ModalOverlay />
      <ModalContent
        w="30rem"
        maxW="30rem"
        p={8}
        borderRadius={6}
        bg={useColorModeValue("white", "darkGrey")}
      >
        <ModalBody p={0} gap={6} display="flex" flexDir="column">
          {/*<Flex alignItems="center">
            <Text
              textStyle="headingL"
              color={useColorModeValue("black", "white")}
            >
              {title}
            </Text>
            <Menu variant="option">
              <MenuButton>
                <Image
                  src="/images/icon-vertical-ellipsis.svg"
                  w="5px"
                  h="20px"
                  minW="5px"
                  alt="vertical ellipsis"
                />
              </MenuButton>
              <MenuList>
                <MenuItem>Edit Board</MenuItem>
                <MenuItem textColor="red">Delete Board</MenuItem>
              </MenuList>
            </Menu>
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
            <Menu variant="task">
              <MenuButton display="flex" flexDir="row" alignItems="center">
                <Box display="flex" flexDir="row" alignItems="center">
                  {status}
                  <Spacer />
                  <Image
                    src="/images/icon-chevron-down.svg"
                    w="10px"
                    h="7px"
                    alt="vertical ellipsis"
                  />
                </Box>
              </MenuButton>
              <MenuList>
                {taskStatuses.map((item) => (
                  <MenuItem key={item}>{item}</MenuItem>
                ))}
              </MenuList>
            </Menu>

          </Flex> */}
        </ModalBody>
      </ModalContent>
    </Modal>
  );
};

const NewTaskModal = ({ isOpen, onClose, columnsName, ...otherProps }) => {
  return (
    <ModalTemplate isOpen={isOpen} onClose={onClose}>
      <Text textStyle="headingL" color={useColorModeValue("black", "white")}>
        Add New Task
      </Text>
      <Flex flexDir="column" gap={2}>
        <Text textStyle="bodyL" color={useColorModeValue("black", "white")}>
          Title
        </Text>
        <Input variant="modal" placeholder="e.g. Take coffee break" />
      </Flex>
      <Flex flexDir="column" gap={2}>
        <Text textStyle="bodyL" color={useColorModeValue("black", "white")}>
          Description
        </Text>
        <Textarea
          variant="modal"
          placeholder="e.g. It’s always good to take a break. This 15 minute break will 
recharge the batteries a little."
        />
      </Flex>
      <Flex flexDir="column" gap={3}>
        <Text mb={-1} textStyle="bodyL" color={useColorModeValue("black", "white")}>
          Subtasks
        </Text>
        <Input variant="modal" placeholder="e.g. Make coffee" />
        <Input variant="modal" placeholder="e.g. Drink coffee & smile" />
        <Button variant="secondary">+ Add New Subtask</Button>
      </Flex>
      <Flex flexDir="column" gap={3}>
        <Text mb={-1} textStyle="bodyL" color={useColorModeValue("black", "white")}>
          Current Status
        </Text>
        <Menu variant="task">
          <MenuButton display="flex" flexDir="row" alignItems="center">
            <Flex alignItems="center">
              Todo
              <Spacer />
              <Image
                src="/images/icon-chevron-down.svg"
                w="10px"
                h="7px"
                alt="vertical ellipsis"
              />
            </Flex>
          </MenuButton>
          <MenuList>
            {columnsName.map((name) => (
              <MenuItem key={name}>{name}</MenuItem>
            ))}
          </MenuList>
        </Menu>
        <Button variant="primaryS">Create Task</Button>
      </Flex>
    </ModalTemplate>
  );
};

export { TaskModal, EditTaskModal, NewTaskModal };
