"use client";

import { Flex, Text, VStack, useColorModeValue } from "@chakra-ui/react";

const TaskItem = ({ children, title, subtasks, ...otherProps }) => {
  console.log(subtasks);
  let completedSubtasks = 0;
  subtasks.map((item) => {
    if (item.isCompleted) completedSubtasks++;
  });

  return (
    <Flex flexDir="column" bg={useColorModeValue("white", "darkGrey")} gap={2} py={6} px={4}>
      <Text textStyle="headingM" color={useColorModeValue("black", "white")}>
        {title}
      </Text>
      <Text textStyle="bodyM">
        {completedSubtasks} of {subtasks.length} subtasks
      </Text>
    </Flex>
  );
};

export default TaskItem;
