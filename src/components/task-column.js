"use client";

import { Box, Flex, Text, VStack } from "@chakra-ui/react";
import TaskItem from "./task-item";

const TaskColumn = ({ name, tasksData, ...otherProps }) => {

  return (
    <Flex flexDir="column" gap={5} w="280px" minW="280px">
      <Flex gap={3}>
        <Box bg="#49C4E5" w="15px" h="15px" borderRadius="full" />
        <Text>{name}</Text>
      </Flex>
      {tasksData.map((task) => (
        <TaskItem
          key={task.title}
          title={task.title}
          subtasks={task.subtasks}
        />
      ))}
    </Flex>
  );
};

export default TaskColumn;
