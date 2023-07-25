"use client";

import { Box, Flex } from "@chakra-ui/react";
import dummyData from "@/json/data.json";
import TaskColumn from "@/components/task-column";

const Page = ({ params }) => {
  const obj = dummyData.boards.find((o) => o.name === decodeURI(params.id));
  const columns = obj.columns;

  return (
    <Box
      display="flex"
      flexDir="column"
      height={"calc(100vh - 6rem)"}
      p={6}
      overflow="scroll"
    >
      <Flex gap={6}>
        {columns.map((column) => (
          <TaskColumn key={column.name} name={column.name} tasksData={column.tasks} />
        ))}
      </Flex>
    </Box>
  );
};

export default Page;
