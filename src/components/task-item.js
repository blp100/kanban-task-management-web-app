"use client";

import { Flex, Text, useColorModeValue, useDisclosure } from "@chakra-ui/react";
import { DeleteTaskModal, EditTaskModal, TaskModal } from "./modal";

const TaskItem = ({
  children,
  title,
  subtasks,
  description,
  status,
  taskStatuses,
  taskUUID,
  ...otherProps
}) => {
  const { isOpen, onOpen, onClose } = useDisclosure();
  const {
    isOpen: isOpenEditTask,
    onOpen: onOpenEditTask,
    onClose: onCloseEditTask,
  } = useDisclosure();
  const {
    isOpen: isOpenDeleteTask,
    onOpen: onOpenDeleteTask,
    onClose: onCloseDeleteTask,
  } = useDisclosure();

  const completedSubtasks = subtasks.filter(
    (subtask) => subtask.isCompleted
  ).length;

  const openEditTask = () => {
    onClose();
    onOpenEditTask();
  };

  const openDeleteTask = () => {
    onClose();
    onOpenDeleteTask();
  };

  const closeEditTask = () =>{
    onCloseEditTask();
    onOpen();
  }

  const closeDeleteTask = () =>{
    onCloseDeleteTask();
    onOpen();
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
      <TaskModal
        onClose={onClose}
        isOpen={isOpen}
        taskStatuses={taskStatuses}
        status={status}
        title={title}
        subtasks={subtasks}
        description={description}
        completedSubtasks={completedSubtasks}
        taskUUID={taskUUID}
        openEditTask={openEditTask}
        openDeleteTask={openDeleteTask}
      />
      <EditTaskModal
        onClose={closeEditTask}
        isOpen={isOpenEditTask}
        taskStatuses={taskStatuses}
        status={status}
        title={title}
        subtasks={subtasks}
        description={description}
        taskUUID={taskUUID}
      />
      <DeleteTaskModal
        isOpen={isOpenDeleteTask}
        onClose={closeDeleteTask}
        title={title}
        taskUUID={taskUUID}
      />
    </>
  );
};

export default TaskItem;
