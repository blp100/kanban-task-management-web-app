"use client";

import { Input, InputGroup, InputRightElement } from "@chakra-ui/react";

const InputText = (props) => {
    
  const {
    index,
    name,
    placeholder,
    value,
    showError,
    setShowError,
    updateHandler,
  } = props;

  const onFocusHandler = (e) => {
    if (name === "title") {
      setShowError(false);
    } else if (name === "subtask") {
      setShowError((prevSubtaskErrors) => {
        const newSubtaskErrors = [...prevSubtaskErrors];
        newSubtaskErrors[index] = false;
        return newSubtaskErrors;
      });
    }
  };

  const onChangeHandler = (e) => {
    if (name === "title") {
      updateHandler(e);
    } else if (name === "subtask") {
      updateHandler(index, e.target.value);
    }
  };

  return (
    <InputGroup>
      <Input
        variant="modal"
        placeholder={placeholder}
        name={name}
        value={value}
        onFocus={onFocusHandler}
        onChange={onChangeHandler}
        isInvalid={showError}
      />
      {showError && (
        <InputRightElement
          textStyle="bodyL"
          fontSize="13px"
          w="fit-content"
          mr={4}
        >
          Can’t be empty
        </InputRightElement>
      )}
    </InputGroup>
  );
};

export default InputText;
