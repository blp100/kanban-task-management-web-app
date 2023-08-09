"use client";

import { Box, Flex, Text, VStack } from "@chakra-ui/react";
import TaskItem from "./task-item";

const TaskColumn = ({ name, tasksData, taskStatuses, ...otherProps }) => {
  const tasksStatusColors = {
    todo: "#49C4E5",
    doing: "#8471F2",
    done: "#67E2AE",
    others: "#FF934F",
  };

  const isfindName = Object.hasOwn(tasksStatusColors, name.toLowerCase());

  return (
    <Flex flexDir="column" gap={5} w="280px" minW="280px">
      <Flex gap={3} mb={1} alignItems="center">
        <Box
          bg={
            isfindName
              ? tasksStatusColors[name.toLowerCase()]
              : tasksStatusColors["others"]
          }
          w="15px"
          h="15px"
          borderRadius="full"
        />
        <Text textStyle="headingS" color="mediumGrey">
          {name.toUpperCase()}&nbsp;({tasksData.length})
        </Text>
      </Flex>
      {tasksData.map((task) => (
        <TaskItem
          key={task.title}
          title={task.title}
          subtasks={task.subtasks}
          description={task.description}
          status={task.status}
          taskStatuses={taskStatuses}
          taskUUID={task.id}
        />
      ))}
    </Flex>
  );
};

export default TaskColumn;
