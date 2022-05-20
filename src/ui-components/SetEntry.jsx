/***************************************************************************
 * The contents of this file were generated with Amplify Studio.           *
 * Please refrain from making any modifications to this file.              *
 * Any changes to this file will be overwritten when running amplify pull. *
 **************************************************************************/

/* eslint-disable */
import React from "react";
import {
  getOverrideProps,
  useDataStoreUpdateAction,
  useNavigateAction,
  useStateMutationAction,
} from "@aws-amplify/ui-react/internal";
import { EntriesPage } from "../models";
import { schema } from "../models/schema";
import { useEffect } from "react";
import {
  Button,
  Divider,
  Flex,
  Image,
  Text,
  TextField,
} from "@aws-amplify/ui-react";
export default function SetEntry(props) {
  const { ep, overrides, ...rest } = props;
  const [
    textFieldThreeOneFourThreeTwoEightTwoNineValue,
    setTextFieldThreeOneFourThreeTwoEightTwoNineValue,
  ] = useStateMutationAction("");
  const [
    textFieldThreeOneFourThreeTwoEightThreeZeroValue,
    setTextFieldThreeOneFourThreeTwoEightThreeZeroValue,
  ] = useStateMutationAction("");
  const buttonOnClick = useDataStoreUpdateAction({
    fields: {
      entryTitle: textFieldThreeOneFourThreeTwoEightTwoNineValue,
      entrySentence: textFieldThreeOneFourThreeTwoEightThreeZeroValue,
    },
    id: ep?.id,
    model: EntriesPage,
    schema: schema,
  });
  const buttonOnMouseUp = useNavigateAction({ type: "url", url: "/" });
  useEffect(() => {
    if (
      textFieldThreeOneFourThreeTwoEightTwoNineValue === "" &&
      ep !== undefined &&
      ep?.entryTitle !== undefined
    )
      setTextFieldThreeOneFourThreeTwoEightTwoNineValue(ep?.entryTitle);
  }, [ep]);
  useEffect(() => {
    if (
      textFieldThreeOneFourThreeTwoEightThreeZeroValue === "" &&
      ep !== undefined &&
      ep?.entrySentence !== undefined
    )
      setTextFieldThreeOneFourThreeTwoEightThreeZeroValue(ep?.entrySentence);
  }, [ep]);
  return (
    <Flex
      gap="16px"
      direction="column"
      width="640px"
      position="relative"
      padding="0px 0px 0px 0px"
      backgroundColor="rgba(255,240,240,1)"
      {...rest}
      {...getOverrideProps(overrides, "SetEntry")}
    >
      <Flex
        gap="24px"
        direction="column"
        shrink="0"
        alignSelf="stretch"
        objectFit="cover"
        position="relative"
        padding="24px 24px 24px 24px"
        {...getOverrideProps(overrides, "Content")}
      >
        <Flex
          gap="16px"
          direction="row"
          alignItems="center"
          shrink="0"
          alignSelf="stretch"
          objectFit="cover"
          position="relative"
          padding="0px 0px 0px 0px"
          {...getOverrideProps(overrides, "Edit Profile")}
        >
          <Text
            fontFamily="Inter"
            fontSize="16px"
            fontWeight="400"
            color="rgba(68,62,56,1)"
            lineHeight="20px"
            textAlign="left"
            display="flex"
            direction="column"
            justifyContent="flex-start"
            shrink="0"
            position="relative"
            padding="0px 0px 0px 0px"
            whiteSpace="pre-wrap"
            children={ep?.id}
            {...getOverrideProps(overrides, "Date")}
          ></Text>
        </Flex>
        <Divider
          height="1px"
          shrink="0"
          alignSelf="stretch"
          objectFit="cover"
          position="relative"
          padding="0px 0px 0px 0px"
          size="small"
          orientation="horizontal"
          {...getOverrideProps(overrides, "Divider31432825")}
        ></Divider>
        <Flex
          gap="16px"
          direction="row"
          width="96px"
          alignItems="center"
          shrink="0"
          position="relative"
          padding="0px 0px 0px 0px"
          {...getOverrideProps(overrides, "Profile")}
        >
          <Image
            width="96px"
            height="96px"
            shrink="0"
            position="relative"
            borderRadius="160px"
            padding="0px 0px 0px 0px"
            src={ep?.entryImageURL}
            {...getOverrideProps(overrides, "image")}
          ></Image>
        </Flex>
        <Flex
          gap="16px"
          direction="column"
          shrink="0"
          alignSelf="stretch"
          objectFit="cover"
          position="relative"
          padding="0px 0px 0px 0px"
          {...getOverrideProps(overrides, "Forms")}
        >
          <TextField
            display="flex"
            gap="8px"
            direction="column"
            justifyContent="center"
            shrink="0"
            alignSelf="stretch"
            objectFit="cover"
            position="relative"
            padding="0px 0px 0px 0px"
            placeholder="Set title here"
            label=""
            size="default"
            isDisabled={false}
            labelHidden={false}
            variation="default"
            value={textFieldThreeOneFourThreeTwoEightTwoNineValue}
            onChange={(event) => {
              setTextFieldThreeOneFourThreeTwoEightTwoNineValue(
                event.target.value
              );
            }}
            {...getOverrideProps(overrides, "TextField31432829")}
          ></TextField>
          <TextField
            display="flex"
            gap="8px"
            direction="column"
            justifyContent="center"
            shrink="0"
            alignSelf="stretch"
            objectFit="cover"
            position="relative"
            padding="0px 0px 0px 0px"
            label="Entry Content"
            placeholder="Set entry content"
            size="default"
            isDisabled={false}
            labelHidden={false}
            variation="default"
            value={textFieldThreeOneFourThreeTwoEightThreeZeroValue}
            onChange={(event) => {
              setTextFieldThreeOneFourThreeTwoEightThreeZeroValue(
                event.target.value
              );
            }}
            {...getOverrideProps(overrides, "TextField31432830")}
          ></TextField>
        </Flex>
        <Divider
          height="1px"
          shrink="0"
          alignSelf="stretch"
          objectFit="cover"
          position="relative"
          padding="0px 0px 0px 0px"
          size="small"
          orientation="horizontal"
          {...getOverrideProps(overrides, "Divider31432831")}
        ></Divider>
        <Button
          display="flex"
          gap="0"
          direction="row"
          width="fit-content"
          justifyContent="center"
          alignItems="center"
          shrink="0"
          position="relative"
          padding="8px 16px 8px 16px"
          backgroundColor="rgba(192,212,197,1)"
          size="default"
          isDisabled={false}
          variation="primary"
          children="Submit Edit"
          onClick={() => {
            buttonOnClick();
          }}
          onMouseUp={() => {
            buttonOnMouseUp();
          }}
          {...getOverrideProps(overrides, "Button")}
        ></Button>
      </Flex>
    </Flex>
  );
}
