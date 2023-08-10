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
import { useEffect, useState } from "react";
import InputText from "./InputText";
import { useData } from "@/app/dataProvider";
import { usePathname, useRouter } from "next/navigation";
import { v4 as uuidv4 } from "uuid";

const ModalTemplate = ({ isOpen, onClose, children }) => {
  return (
    <Modal onClose={onClose} isOpen={isOpen} isCentered>
      <ModalOverlay />
      <ModalContent
        w={{ base: "343px", md: "30rem" }}
        maxW="30rem"
        p={{ base: 6, md: 8 }}
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
  taskUUID,
  openEditTask,
  openDeleteTask,
  ...otherProps
}) => {
  const { dummyData, saveData, setDummyData } = useData();
  const initialTask = findTaskByUUID(dummyData, taskUUID);
  const pathname = usePathname();

  const [task, setTask] = useState(initialTask);
  const completedSubtasks = task.subtasks.filter(
    (subtask) => subtask.isCompleted
  ).length;

  const handleChange = (e) => {
    const { name, value } = e.target;
    setTask((prevTask) => ({
      ...prevTask,
      [name]: value,
    }));
  };

  const handleSubtaskChange = (index, e) => {
    const { checked } = e.target;

    setTask((prevTask) => {
      const updatedSubtasks = [...prevTask.subtasks];
      updatedSubtasks[index].isCompleted = checked;
      return {
        ...prevTask,
        subtasks: updatedSubtasks,
      };
    });
  };

  const saveTask = () => {
    // update
    const updatedData = { ...dummyData };
    const prevTask = findTaskByUUID(updatedData, taskUUID);

    if (prevTask.status === task.status) {
      Object.assign(prevTask, task);
    } else {
      // Remove original task and move to new place
      removeTaskByUUID(updatedData, taskUUID);

      const column = updatedData.boards
        .find((board) => board.name === decodeURI(pathname).slice(1))
        .columns.find((column) => column.name === task.status);
      column.tasks.push(task);
    }

    setDummyData(() => updatedData);
    saveData(updatedData);
    onClose();
  };

  return (
    <>
      <ModalTemplate isOpen={isOpen} onClose={saveTask}>
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
                <MenuItem onClick={openEditTask}>Edit Task</MenuItem>
                <MenuItem textColor="red" onClick={openDeleteTask}>
                  Delete Task
                </MenuItem>
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
            {subtasks.map((subtask, index) => (
              <Checkbox
                key={subtask.title}
                defaultChecked={subtask.isCompleted}
                onChange={(e) => handleSubtaskChange(index, e)}
                variant="customCheckBox"
              >
                {subtask.title}
              </Checkbox>
            ))}
          </Flex>
          <Flex flexDir="column" gap={2}>
            <Text textStyle="bodyM" color="mediumGrey">
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
                  {task.status !== "" ? task.status : "Unset"}
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
                {taskStatuses.map((status) => (
                  <MenuItem
                    key={status}
                    name="status"
                    value={status}
                    onClick={handleChange}
                  >
                    {status}
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

const removeTaskByUUID = (data, targetUUID) => {
  for (const board of data.boards) {
    for (const column of board.columns) {
      const tasks = column.tasks;
      for (let i = 0; i < tasks.length; i++) {
        if (tasks[i].id === targetUUID) {
          // Task found, remove it from the tasks array
          tasks.splice(i, 1);
          return;
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
  subtasks,
  status,
  description,
  taskUUID,
  taskStatuses,
  ...otherProps
}) => {
  const { dummyData, saveData, setDummyData } = useData();

  const initialTask = findTaskByUUID(dummyData, taskUUID);
  const pathname = usePathname();

  const [task, setTask] = useState(initialTask);
  const [showError, setShowError] = useState(false);
  const [showSubtaskError, setShowSubtaskError] = useState(
    Array(subtasks.length).fill(false)
  );

  // Function to handle changes in the task data
  const handleChange = (e) => {
    const { name, value } = e.target;
    setTask((prevTask) => ({
      ...prevTask,
      [name]: value,
    }));
  };

  // Function to handle changes in the subtasks
  const handleSubtaskChange = (index, e) => {
    const { value } = e.target;
    setTask((prevTask) => {
      const updatedSubtasks = [...prevTask.subtasks];
      updatedSubtasks[index].title = value;
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
      subtasks: [
        ...prevTask.subtasks,
        { id: uuidv4(), title: "", isCompleted: false },
      ],
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

  const saveEditedTask = (e) => {
    e.preventDefault();

    if (task.title.trim() === "") setShowError(true);
    const subtaskErrors = task.subtasks.map(
      (subtask) => subtask.title.trim() === ""
    );
    setShowSubtaskError(subtaskErrors);
    if (subtaskErrors.includes(true) || showError) {
      // Your form submission logic here...
      console.error("Empty data!");
      return;
    }

    // update
    const updatedData = { ...dummyData };
    const prevTask = findTaskByUUID(updatedData, taskUUID);
    if (prevTask.status === task.status) {
      Object.assign(prevTask, task);
    } else {
      // Remove original task and move to new place
      removeTaskByUUID(updatedData, taskUUID);

      const column = updatedData.boards
        .find((board) => board.name === decodeURI(pathname).slice(1))
        .columns.find((column) => column.name === task.status);
      column.tasks.push(task);
    }

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
          Edit Task
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
          {task.subtasks.map((subtask, index) => (
            <SubTaskInput
              key={index}
              index={index}
              removeHandler={handleRemoveSubtask}
              value={subtask.title}
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
                {task.status}
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
              {taskStatuses.map((status) => (
                <MenuItem
                  key={status}
                  name="status"
                  value={status}
                  onClick={handleChange}
                >
                  {status}
                </MenuItem>
              ))}
            </MenuList>
          </Menu>
        </Flex>
        <Button variant="primaryS" type="submit">
          Save Changes
        </Button>
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
  const { dummyData, saveData, setDummyData } = useData();

  const initialTask = {
    id: uuidv4(),
    title: "",
    description: "",
    status: "Todo",
    subtasks: [
      { id: uuidv4(), title: "", isCompleted: false },
      { id: uuidv4(), title: "", isCompleted: false },
    ],
  };
  const pathname = usePathname();

  const [task, setTask] = useState(initialTask);
  const [showError, setShowError] = useState(false);
  const [showSubtaskError, setShowSubtaskError] = useState(
    Array(task.subtasks.length).fill(false)
  );

  const defaultTexts = [
    "e.g. Take coffee break",
    "e.g. Drink coffee & smile",
    "e.g. You gonna make it!",
  ];

  // Function to handle changes in the task data
  const handleChange = (e) => {
    const { name, value } = e.target;
    setTask((prevTask) => ({
      ...prevTask,
      [name]: value,
    }));
  };

  // Function to handle changes in the subtasks
  const handleSubtaskChange = (index, e) => {
    const { value } = e.target;
    setTask((prevTask) => {
      const updatedSubtasks = [...prevTask.subtasks];
      updatedSubtasks[index].title = value;
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
      subtasks: [
        ...prevTask.subtasks,
        { id: uuidv4(), title: "", isCompleted: false },
      ],
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

  const saveNewTaskHandler = (e) => {
    e.preventDefault();
    const form = e.target;

    if (task.title.trim() === "") setShowError(true);
    const subtaskErrors = task.subtasks.map(
      (subtask) => subtask.title.trim() === ""
    );
    setShowSubtaskError(subtaskErrors);
    if (subtaskErrors.includes(true) || showError) {
      // Your form submission logic here...
      console.error("Empty data!");
      return;
    }

    // update
    const updatedData = { ...dummyData };

    const column = updatedData.boards
      .find((board) => board.name === decodeURI(pathname).slice(1))
      .columns.find((column) => column.name === task.status);
    column.tasks.push(task);

    setDummyData(updatedData);
    saveData(updatedData);
    setTask(() => initialTask);
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
        onSubmit={saveNewTaskHandler}
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
          {task.subtasks.map((subtask, index) => (
            <SubTaskInput
              key={index}
              index={index}
              placeholder={defaultTexts[index]}
              removeHandler={handleRemoveSubtask}
              value={subtask.title}
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
                {task.status}
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
              {columnsName.map((status) => (
                <MenuItem
                  key={status}
                  name="status"
                  value={status}
                  onClick={handleChange}
                >
                  {status}
                </MenuItem>
              ))}
            </MenuList>
          </Menu>
        </Flex>
        <Button variant="primaryS" type="submit">
          Create Task
        </Button>
      </ModalBody>
    </ModalTemplate>
  );
};

const DeleteTaskModal = ({ isOpen, onClose, title, taskUUID }) => {
  const { dummyData, saveData, setDummyData } = useData();

  const saveDeletedTaskHandler = (e) => {
    e.preventDefault();

    // update
    const updatedData = { ...dummyData };

    removeTaskByUUID(updatedData, taskUUID);

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
        onSubmit={saveDeletedTaskHandler}
      >
        <Text textStyle="headingL" color="red">
          Delete this task?
        </Text>
        <Text textStyle="bodyL" color="mediumGrey">
          Are you sure you want to delete the ‘{title}’ task and its subtasks?
          This action cannot be reversed.
        </Text>
        <Flex flexDir={{ base: "column", md: "row" }} gap={4}>
          <Button variant="destructive" width="full" type="submit">
            Delete
          </Button>
          <Button variant="secondary" width="full" onClick={onClose}>
            Cancel
          </Button>
        </Flex>
      </ModalBody>
    </ModalTemplate>
  );
};

const NewBoardModal = ({ isOpen, onClose }) => {
  const { dummyData, saveData, setDummyData } = useData();
  const router = useRouter();

  const initialBoard = {
    id: uuidv4(),
    name: "",
    columns: [
      {
        id: uuidv4(),
        name: "Todo",
        tasks: [],
      },
      {
        id: uuidv4(),
        name: "Doing",
        tasks: [],
      },
    ],
  };

  const [board, setBoard] = useState(initialBoard);
  const [showError, setShowError] = useState(false);
  const [showColumnError, setShowColumnError] = useState(
    Array(board.columns.length).fill(false)
  );

  const defaultTexts = ["TODO", "DOING", "DONE"];

  const handleChange = (e) => {
    const { name, value } = e.target;
    setBoard((prevBoard) => ({
      ...prevBoard,
      [name]: value,
    }));
  };

  // Function to handle changes in the column
  const handleColumnChange = (index, e) => {
    const { value } = e.target;
    setBoard((prevBoard) => {
      const updatedColumns = [...prevBoard.columns];
      updatedColumns[index].name = value;
      return {
        ...prevBoard,
        columns: updatedColumns,
      };
    });
  };

  // Function to add a new subtask
  const handleAddColumn = () => {
    setBoard((prevBoard) => ({
      ...prevBoard,
      columns: [...prevBoard.columns, { id: uuidv4(), name: "", tasks: [] }],
    }));
  };

  // Function to remove a subtask
  const handleRemoveColumn = (index) => {
    setBoard((prevBoard) => {
      const updatedColumns = [...prevBoard.columns];
      updatedColumns.splice(index, 1);
      return {
        ...prevBoard,
        columns: updatedColumns,
      };
    });
  };

  const saveEditedBoardHandler = (e) => {
    e.preventDefault();

    if (board.name.trim() === "") setShowError(true);
    const columnErrors = board.columns.map(
      (column) => column.name.trim() === ""
    );
    setShowColumnError(columnErrors);
    if (columnErrors.includes(true) || showError) {
      // Your form submission logic here...
      console.error("Empty data!");
      return;
    }

    // update
    const updatedData = { ...dummyData };

    updatedData.boards.push(board);

    router.push(board.name);

    setDummyData(() => updatedData);
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
        onSubmit={saveEditedBoardHandler}
      >
        <Text textStyle="headingL">Add New Board</Text>
        <Flex flexDir="column" gap={2}>
          <Text textStyle="bodyL" color={useColorModeValue("black", "white")}>
            Board Name
          </Text>
          <InputText
            value={board.name}
            name="name"
            placeholder="e.g. Web Design"
            showError={showError}
            setShowError={setShowError}
            updateHandler={handleChange}
          />
        </Flex>
        <Flex flexDir="column" gap={3}>
          <Text
            mb={-1}
            textStyle="bodyL"
            color={useColorModeValue("black", "white")}
          >
            Board Columns
          </Text>
          {board.columns.map((column, index) => (
            <SubTaskInput
              key={column.id}
              index={index}
              placeholder={defaultTexts[index]}
              value={column.name}
              removeHandler={handleRemoveColumn}
              updateHandler={handleColumnChange}
              error={showColumnError[index]}
              setShowError={setShowColumnError}
            />
          ))}
          <Button variant="secondary" onClick={handleAddColumn}>
            + Add New Column
          </Button>
        </Flex>
        <Button variant="primaryS" type="submit">
          Save Changes
        </Button>
      </ModalBody>
    </ModalTemplate>
  );
};
const EditBoardModal = ({ isOpen, onClose, boardUUID }) => {
  const { dummyData, saveData, setDummyData } = useData();

  const router = useRouter();
  const [board, setBoard] = useState(
    dummyData.boards.find((o) => o.id === boardUUID)
  );
  const [showError, setShowError] = useState(false);
  const [showColumnError, setShowColumnError] = useState(
    Array(board.columns.length).fill(false)
  );

  useEffect(() => {
    setBoard(() => dummyData.boards.find((o) => o.id === boardUUID));
    setShowColumnError(() => Array(board.columns.length).fill(false));
  }, [boardUUID]);

  const defaultTexts = ["TODO", "DOING", "DONE"];

  const handleChange = (e) => {
    const { name, value } = e.target;
    setBoard((prevBoard) => ({
      ...prevBoard,
      [name]: value,
    }));
  };

  // Function to handle changes in the column
  const handleColumnChange = (index, e) => {
    const { value } = e.target;
    setBoard((prevBoard) => {
      const updatedColumns = [...prevBoard.columns];
      updatedColumns[index].name = value;
      return {
        ...prevBoard,
        columns: updatedColumns,
      };
    });
  };

  // Function to add a new subtask
  const handleAddColumn = () => {
    setBoard((prevBoard) => ({
      ...prevBoard,
      columns: [...prevBoard.columns, { id: uuidv4(), name: "", tasks: [] }],
    }));
  };

  // Function to remove a subtask
  const handleRemoveColumn = (index) => {
    setBoard((prevBoard) => {
      const updatedColumns = [...prevBoard.columns];
      updatedColumns.splice(index, 1);
      return {
        ...prevBoard,
        columns: updatedColumns,
      };
    });
  };

  const saveEditedBoardHandler = (e) => {
    e.preventDefault();

    if (board.name.trim() === "") setShowError(true);
    const columnErrors = board.columns.map(
      (column) => column.name.trim() === ""
    );
    setShowColumnError(columnErrors);
    if (columnErrors.includes(true) || showError) {
      // Your form submission logic here...
      console.error("Empty data!");
      return;
    }

    // update
    const updatedData = { ...dummyData };
    const prevBoard = updatedData.boards.find((o) => o.id === boardUUID);

    Object.assign(prevBoard, board);

    router.push(board.name);

    setDummyData(() => updatedData);
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
        onSubmit={saveEditedBoardHandler}
      >
        <Text textStyle="headingL">Edit Board</Text>
        <Flex flexDir="column" gap={2}>
          <Text textStyle="bodyL" color={useColorModeValue("black", "white")}>
            Board Name
          </Text>
          <InputText
            value={board.name}
            name="name"
            placeholder="e.g. Take coffee break"
            showError={showError}
            setShowError={setShowError}
            updateHandler={handleChange}
          />
        </Flex>
        <Flex flexDir="column" gap={3}>
          <Text
            mb={-1}
            textStyle="bodyL"
            color={useColorModeValue("black", "white")}
          >
            Board Columns
          </Text>
          {board.columns.map((column, index) => (
            <SubTaskInput
              key={column.id}
              index={index}
              placeholder={defaultTexts[index]}
              value={column.name}
              removeHandler={handleRemoveColumn}
              updateHandler={handleColumnChange}
              error={showColumnError[index]}
              setShowError={setShowColumnError}
            />
          ))}
          <Button variant="secondary" onClick={handleAddColumn}>
            + Add New Column
          </Button>
        </Flex>

        <Button variant="primaryS" type="submit">
          Save Changes
        </Button>
      </ModalBody>
    </ModalTemplate>
  );
};

const DeleteBoardModal = ({ isOpen, onClose, title, boardUUID }) => {
  const { dummyData, saveData, setDummyData } = useData();
  const router = useRouter();

  const saveDeletedTaskHandler = (e) => {
    e.preventDefault();

    // update
    const updatedData = { ...dummyData };

    updatedData.boards.splice(
      updatedData.boards.findIndex((o) => o.id === boardUUID),
      1
    );

    setDummyData(() => updatedData);
    saveData(updatedData);
    router.push("/");
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
        onSubmit={saveDeletedTaskHandler}
      >
        <Text textStyle="headingL" color="red">
          Delete this board?
        </Text>
        <Text textStyle="bodyL" color="mediumGrey">
          Are you sure you want to delete the ‘{title}’ board? This action will
          remove all columns and tasks and cannot be reversed.
        </Text>
        <Flex flexDir={{ base: "column", md: "row" }} gap={4}>
          <Button variant="destructive" width="full" type="submit">
            Delete
          </Button>
          <Button variant="secondary" width="full" onClick={onClose}>
            Cancel
          </Button>
        </Flex>
      </ModalBody>
    </ModalTemplate>
  );
};

export {
  TaskModal,
  EditTaskModal,
  NewTaskModal,
  DeleteTaskModal,
  NewBoardModal,
  EditBoardModal,
  DeleteBoardModal,
};
