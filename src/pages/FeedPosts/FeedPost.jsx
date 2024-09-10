import { Box, Image } from "@chakra-ui/react";
import PostHeader from "./PostHeader";
import PostFooter from "./PostFooter";

const FeedPost = ({ img, userName, avatar }) => {
  return (
    <div>
      <PostHeader userName={userName} avatar={avatar} />
      <Box my={2} borderRadius={4} overflow={"hidden"}>
        <Image src={img} alt="use profile pic" />
      </Box>
      <PostFooter userName={userName} />
    </div>
  );
};

export default FeedPost;
