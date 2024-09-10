import { Avatar, Box, Button, Flex } from "@chakra-ui/react";

const PostHeader = ({ userName, avatar }) => {
  return (
    <div>
      <Flex
        justifyContent={"space-between"}
        alignItems={"center"}
        w={"full"}
        my={2}
      >
        <Flex alignItems={"center"} gap={2}>
          <Avatar src={avatar} alt="user profile" size={"sm"} />
          <Flex fontSize={12} fontWeight={"bold"} gap={"2"}>
            {userName}
            <Box color={"gray.500"}>* 1w</Box>
          </Flex>
        </Flex>
        <Box cursor={"pointer"}>
          <Button
            size={"xs"}
            bg={"transparent"}
            fontSize={12}
            color={"blue.500"}
            fontWeight={"bold"}
            _hover={{
              color: "white",
            }}
            transition={"0.2s ease-in-out"}
          >
            Unfollow
          </Button>
        </Box>
      </Flex>
    </div>
  );
};

export default PostHeader;
