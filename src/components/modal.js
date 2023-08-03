"use client";

import {
  Box,
  Button,
  Checkbox,
  Flex,
  HStack,
  Image,
  Input,
  InputGroup,
  InputRightElement,
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
import { useState } from "react";

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
        {children}
      </ModalContent>
    </Modal>
  );
};

const InputText = ({
  index,
  name,
  placeholder,
  value,
  showError,
  setShowError,
  updateHandler,
}) => {
  const onFocusHandler = (e) => {
    if (name === "title") {
      setShowError(false);
    } else if (name === "subtask") {
      setShowError((prevSubtaskErrors) => {
        const newSubtaskErrors = [...prevSubtaskErrors];
        newSubtaskErrors[index] = false;
        return newSubtaskErrors;
      });
    }
  };

  return (
    <InputGroup>
      <Input
        variant="modal"
        placeholder={placeholder}
        name={name}
        value={value}
        onFocus={onFocusHandler}
        onChange={(e) => updateHandler(() => e.target.value)}
        isInvalid={showError}
      />
      {showError && (
        <InputRightElement
          textStyle="bodyL"
          fontSize="13px"
          w="fit-content"
          mr={4}
        >
          Can’t be empty
        </InputRightElement>
      )}
    </InputGroup>
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
        <ModalBody p={0} gap={6} display="flex" flexDir="column">
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
                  <MenuItem name="status" as="input" key={item}>
                    {item}
                  </MenuItem>
                ))}
              </MenuList>
            </Menu>
          </Flex>
        </ModalBody>
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

const SubTaskInput = ({
  index,
  placeholder,
  value,
  removeHandler,
  updateHandler,
  error,
  setShowError,
}) => {
  return (
    <HStack gap={4}>
      <InputText
        placeholder={placeholder}
        name="subtask"
        value={value}
        updateHandler={updateHandler}
        showError={error}
        setShowError={setShowError}
        index={index}
      />
      <Image
        src="/images/icon-cross.svg"
        w="15px"
        h="15px"
        alt="Remove Subtask"
        onClick={() => removeHandler(index)}
        cursor="pointer"
      />
    </HStack>
  );
};

const NewTaskModal = ({ isOpen, onClose, columnsName, ...otherProps }) => {
  const [formData, setFormData] = useState({
    title: "",
    description: "",
    status: "",
    subtasks: {
      title: "",
      isCompleted: false,
    },
  });

  const [title, setTitle] = useState("");
  const [subtasks, setSubtasks] = useState(["", ""]);
  const [taskStatus, setTaskStatus] = useState("Todo");

  const [showError, setShowError] = useState(false);
  const [showSubtaskError, setShowSubtaskError] = useState(
    Array(subtasks.length).fill(false)
  );

  const defaultTexts = [
    "e.g. Take coffee break",
    "e.g. Drink coffee & smile",
    "e.g. You gonna make it!",
  ];

  const removeSubtaskHandler = (index) => {
    setSubtasks((prevSubtasks) => {
      const updatedSubtasks = [...prevSubtasks];
      updatedSubtasks.splice(index, 1);
      return updatedSubtasks;
    });
    console.log(subtasks);
  };

  const addSubtaskHandler = () => {
    setSubtasks((prevSubtasks) => {
      const updatedSubtask = prevSubtasks.concat("");
      return updatedSubtask;
    });
  };

  const updateSubtasksHanlder = (index, value) => {
    setSubtasks((prevSubtasks) => {
      const updatedSubtasks = [...prevSubtasks];
      updatedSubtasks[index] = value;
      return updatedSubtasks;
    });
  };

  const updateTaskStatusHandler = (e) => {
    setTaskStatus(() => e.target.innerHTML);
  };

  const createNewTaskHandler = (e) => {
    e.preventDefault();
    const form = e.target;
    const formData = new FormData(form);

    if (title.trim() === "") setShowError(true);
    const subtaskErrors = subtasks.map((subtask) => subtask.trim() === "");
    setShowSubtaskError(subtaskErrors);
    if (!subtaskErrors.includes(true)) {
      // Your form submission logic here...
      return;
    }
  };

  return (
    <ModalTemplate isOpen={isOpen} onClose={onClose}>
      <ModalBody
        p={0}
        gap={6}
        display="flex"
        flexDir="column"
        as="form"
        onSubmit={createNewTaskHandler}
      >
        <Text textStyle="headingL" color={useColorModeValue("black", "white")}>
          Add New Task
        </Text>
        <Flex flexDir="column" gap={2}>
          <Text textStyle="bodyL" color={useColorModeValue("black", "white")}>
            Title
          </Text>
          <InputText
            value={title}
            name="title"
            placeholder="e.g. Take coffee break"
            showError={showError}
            setShowError={setShowError}
            updateHandler={setTitle}
          />
        </Flex>
        <Flex flexDir="column" gap={2}>
          <Text textStyle="bodyL" color={useColorModeValue("black", "white")}>
            Description
          </Text>
          <Textarea
            variant="modal"
            rows={4}
            placeholder="e.g. It’s always good to take a break. This 15 minute break will 
recharge the batteries a little."
            name="Description"
          />
        </Flex>
        <Flex flexDir="column" gap={3}>
          <Text
            mb={-1}
            textStyle="bodyL"
            color={useColorModeValue("black", "white")}
          >
            Subtasks
          </Text>
          {subtasks.map((subtask, index) => (
            <SubTaskInput
              key={index}
              index={index}
              placeholder={defaultTexts[index]}
              removeHandler={removeSubtaskHandler}
              value={subtask}
              updateHandler={updateSubtasksHanlder}
              error={showSubtaskError[index]}
              setShowError={setShowSubtaskError}
            />
          ))}
          <Button variant="secondary" onClick={addSubtaskHandler}>
            + Add New Subtask
          </Button>
        </Flex>
        <Flex flexDir="column" gap={3}>
          <Text
            mb={-1}
            textStyle="bodyL"
            color={useColorModeValue("black", "white")}
          >
            Current Status
          </Text>
          <Menu variant="task">
            <MenuButton
              display="flex"
              flexDir="row"
              alignItems="center"
              type="button"
            >
              <Flex alignItems="center">
                {taskStatus}
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
                <MenuItem key={name} onClick={updateTaskStatusHandler}>
                  {name}
                </MenuItem>
              ))}
            </MenuList>
          </Menu>
          <Button variant="primaryS" type="submit">
            Create Task
          </Button>
        </Flex>
      </ModalBody>
    </ModalTemplate>
  );
};

export { TaskModal, EditTaskModal, NewTaskModal };
