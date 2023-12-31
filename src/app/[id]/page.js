"use client";

import {
  Box,
  Button,
  Flex,
  Text,
  useColorModeValue,
} from "@chakra-ui/react";
import TaskColumn from "@/components/task-column";
import { useData } from "../dataProvider";
import { v4 as uuidv4 } from "uuid";

const Page = ({ params }) => {
  const { dummyData, saveData, setDummyData } = useData();

  const obj = dummyData.boards.find((o) => o.name === decodeURI(params.id));

  const columns = obj?.columns;
  const columnsName = columns?.map((board) => board.name);
  const defaultColumnsName = ["Todo", "Doing", "Done"];

  const addColumnHandler = () => {
    const updatedData = { ...dummyData };
    const updatedColumns = dummyData.boards.find(
      (o) => o.name === decodeURI(params.id)
    ).columns;

    const newID = uuidv4();
    const newColumn = {
      id: newID,
      name:
        columnsName.length <= 2
          ? defaultColumnsName[columnsName.length]
          : "Unnamed",
      tasks: [],
    };
    updatedColumns.push(newColumn);
    setDummyData(updatedData);
    saveData(updatedData);
  };

  if (!obj) {
    return <Box>Loading</Box>;
  }

  if (columnsName?.length <= 0) {
    return (
      <Box
        display="flex"
        flexDir="column"
        justifyContent="center"
        alignContent="center"
        height={"calc(100vh - 6rem)"}
        gap={8}
      >
        <Text textStyle="headingL" textAlign="center" color={"mediumGrey"}>
          This board is empty. Create a new column to get started.
        </Text>
        <Button mx="auto" variant="primaryL" p={6} onClick={addColumnHandler}>
          + Add New Column
        </Button>
      </Box>
    );
  }

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
            key={column.id}
            name={column.name}
            tasksData={column.tasks}
            taskStatuses={columnsName}
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
          onClick={addColumnHandler}
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
