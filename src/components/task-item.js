"use client";

import { Flex, Text, VStack, useColorModeValue } from "@chakra-ui/react";

const TaskItem = ({ children, title, subtasks, ...otherProps }) => {
  let completedSubtasks = 0;
  subtasks.map((item) => {
    if (item.isCompleted) completedSubtasks++;
  });

  return (
    <Flex
      flexDir="column"
      bg={useColorModeValue("white", "darkGrey")}
      gap={2}
      py={6}
      px={4}
      borderRadius={8}
      boxShadow="0px 4px 6px 0px rgba(54, 78, 126, 0.10)"
    >
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
