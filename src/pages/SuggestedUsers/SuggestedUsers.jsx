import useGetSuggestedUsers from "../../hooks/useGetSuggestedUsers";
import SuggestedHeader from "./SuggestedHeader";
import SuggestedUser from "./SuggestedUser";
import { Flex, VStack, Text, Box } from "@chakra-ui/react";
const SuggestedUsers = () => {
  const { isLoading, suggestedUsers } = useGetSuggestedUsers();
  return (
    <VStack py={8} px={6} gap={4}>
      <SuggestedHeader />
      {suggestedUsers.length !== 0 && (
        <Flex justifyContent={"space-between"} alignItems={"center"} w={"full"}>
          <Text fontSize={12} fontWeight={"bold"} color={"gray.500"}>
            Suggested for you
          </Text>
          <Text
            fontSize={12}
            fontWeight={"bold"}
            _hover={{ color: "gray.400" }}
            cursor={"pointer"}
          >
            See All
          </Text>
        </Flex>
      )}
      {suggestedUsers.map((user) => {
        <SuggestedUser user={user} key={user.id} />;
      })}
      <Box fontSize={12} color={"gray.500"} mt={5} alignSelf={"start"}>
        ©️ 2023 Build By Mukul Dhiman
      </Box>
    </VStack>
  );
};

export default SuggestedUsers;
