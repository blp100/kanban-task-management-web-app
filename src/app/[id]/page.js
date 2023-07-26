"use client";

import { Box, Flex, Spacer, Text, useColorModeValue } from "@chakra-ui/react";
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
      overflow="scroll"
      p={6}
    >
      <Flex gap={6}>
        {columns.map((column) => (
          <TaskColumn
            key={column.name}
            name={column.name}
            tasksData={column.tasks}
          />
        ))}
        <Box
          display="flex"
          mt="39px"
          bgGradient={useColorModeValue(
            "linear-gradient(180deg, #E9EFFA 0%, rgba(233, 239, 250, 0.50) 100%)",
            "linear-gradient(180deg, rgba(43, 44, 55, 0.25) 0%, rgba(43, 44, 55, 0.13) 100%)"
          )}
          height="full"
          w="280px"
          minW="280px"
          borderRadius={6}
          justifyContent="center"
          alignItems="center"
          cursor="pointer"
        >
          <Text textStyle="headingXL" color="mediumGrey">
            + New Column
          </Text>
        </Box>

        <Box height="calc(100% + 50px)" mt="39px" width="30px" display="block">
          &nbsp;
        </Box>
      </Flex>
    </Box>
  );
};

export default Page;
