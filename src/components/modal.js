"use client";

import {
  Box,
  Button,
  Checkbox,
  Flex,
  HStack,
  Image,
  Menu,
  MenuButton,
  MenuItem,
  MenuList,
  Modal,
  ModalBody,
  ModalContent,
  ModalOverlay,
  Spacer,
  Text,
  Textarea,
  useColorModeValue,
  useDisclosure,
} from "@chakra-ui/react";
import { useState } from "react";
import InputText from "./InputText";
import { useData } from "@/app/dataProvider";
import { usePathname } from "next/navigation";

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

const TaskModal = ({
  title,
  subtasks,
  status,
  taskStatuses,
  description,
  isOpen,
  onClose,
  completedSubtasks,
  openEditTask,
  ...otherProps
}) => {
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
                <MenuItem onClick={openEditTask}>Edit Board</MenuItem>
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
                  <MenuItem name="status" key={item}>
                    {item}
                  </MenuItem>
                ))}
              </MenuList>
            </Menu>
          </Flex>
        </ModalBody>
      </ModalTemplate>
    </>
  );
};

const findTaskByUUID = (data, targetUUID) => {
  for (const board of data.boards) {
    for (const column of board.columns) {
      for (const task of column.tasks) {
        if (task.id === targetUUID) {
          return task;
        }
      }
    }
  }
  // Return null if task with the given UUID is not found
  return null;
};

const EditTaskModal = ({
  isOpen,
  onClose,
  title,
  subtasks,
  status,
  description,
  taskUUID,
  ...otherProps
}) => {
  const { dummyData, saveData, setDummyData } = useData();

  const initialTask = findTaskByUUID(dummyData, taskUUID);

  console.log(initialTask);

  const [task, setTask] = useState(initialTask);
  const [showError, setShowError] = useState(false);
  const [showSubtaskError, setShowSubtaskError] = useState(
    Array(subtasks.length).fill(false)
  );

  // Function to handle changes in the task data
  const handleChange = (e) => {
    console.log(e.target.value);
    const { name, value } = e.target;
    setTask((prevTask) => ({
      ...prevTask,
      [name]: value,
    }));
  };

  // Function to handle changes in the subtasks
  const handleSubtaskChange = (index, e) => {
    const { name, value } = e.target;
    setTask((prevTask) => {
      const updatedSubtasks = [...prevTask.subtasks];
      updatedSubtasks[index][name] = value;
      return {
        ...prevTask,
        subtasks: updatedSubtasks,
      };
    });
  };

  // Function to add a new subtask
  const handleAddSubtask = () => {
    setTask((prevTask) => ({
      ...prevTask,
      subtasks: [...prevTask.subtasks, { title: "", isCompleted: false }],
    }));
  };

  // Function to remove a subtask
  const handleRemoveSubtask = (index) => {
    setTask((prevTask) => {
      const updatedSubtasks = [...prevTask.subtasks];
      updatedSubtasks.splice(index, 1);
      return {
        ...prevTask,
        subtasks: updatedSubtasks,
      };
    });
  };

  const createNewTaskHandler = (e) => {
    e.preventDefault();
    const form = e.target;

    if (title.trim() === "") setShowError(true);
    const subtaskErrors = subtasks.map((subtask) => subtask.trim() === "");
    setShowSubtaskError(subtaskErrors);
    if (subtaskErrors.includes(true) || showError) {
      // Your form submission logic here...
      console.error("Empty data!");
      return;
    }

    const formData = {
      title: title,
      description: form.description.value,
      status: taskStatus,
      subtasks: subtasks.map((subtask) => ({
        title: subtask,
        isCompleted: false,
      })),
      // Add any other form fields as needed
    };

    // update
    const updatedData = { ...dummyData };

    const obj = updatedData.boards.find(
      (o) => o.name === decodeURI(pathname).slice(1)
    );
    const columnsObj = obj?.columns.find((o) => o.name === taskStatus);

    columnsObj.tasks.push(formData);
    setDummyData(updatedData);
    saveData(updatedData);
    onClose();
  };

  //test
  const taskStatus = "Todo";
  const columnsName = ["Todo", "Doing", "Done"];

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
            value={task.title}
            name="title"
            placeholder="e.g. Take coffee break"
            showError={showError}
            setShowError={setShowError}
            updateHandler={handleChange}
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
            name="description"
            value={task.description}
            onChange={handleChange}
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
              removeHandler={handleRemoveSubtask}
              value={subtask}
              updateHandler={handleSubtaskChange}
              error={showSubtaskError[index]}
              setShowError={setShowSubtaskError}
            />
          ))}
          <Button variant="secondary" onClick={handleAddSubtask}>
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
                {taskStatus ? taskStatus : "Todo"}
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
                <MenuItem key={name} name={name} onClick={handleChange}>
                  {name}
                </MenuItem>
              ))}
            </MenuList>
          </Menu>
          <Button variant="primaryS" type="submit">
            Save Change
          </Button>
        </Flex>
      </ModalBody>
    </ModalTemplate>
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
  // const [formData, setFormData] = useState({
  //   title: "",
  //   description: "",
  //   status: "",
  //   subtasks: {
  //     title: "",
  //     isCompleted: false,
  //   },
  // });

  const { dummyData, saveData, setDummyData } = useData();
  const pathname = usePathname();

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
    setShowSubtaskError((prevSubtaskErrors) => {
      const updatedSubtaskErrors = [...prevSubtaskErrors];
      updatedSubtaskErrors.splice(index, 1);
      return updatedSubtaskErrors;
    });
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

  const saveEditedTask = (e) => {
    e.preventDefault();
    const form = e.target;

    if (title.trim() === "") setShowError(true);
    const subtaskErrors = subtasks.map((subtask) => subtask.trim() === "");
    setShowSubtaskError(subtaskErrors);
    if (subtaskErrors.includes(true) || showError) {
      // Your form submission logic here...
      console.error("Empty data!");
      return;
    }

    const formData = {
      title: title,
      description: form.description.value,
      status: taskStatus,
      subtasks: subtasks.map((subtask) => ({
        title: subtask,
        isCompleted: false,
      })),
      // Add any other form fields as needed
    };

    // update
    const updatedData = { ...dummyData };

    const obj = updatedData.boards.find(
      (o) => o.name === decodeURI(pathname).slice(1)
    );
    const columnsObj = obj?.columns.find((o) => o.name === taskStatus);

    columnsObj.tasks.push(formData);
    setDummyData(updatedData);
    saveData(updatedData);
    onClose();
  };

  return (
    <ModalTemplate isOpen={isOpen} onClose={onClose}>
      <ModalBody
        p={0}
        gap={6}
        display="flex"
        flexDir="column"
        as="form"
        onSubmit={saveEditedTask}
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
            name="description"
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
