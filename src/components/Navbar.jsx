import { Box, Image } from "@chakra-ui/react";
import { Link } from "react-router-dom";
import Search from "../Routes/Search";
function Navbar() {
  return (
    <Box
      bg="darkblue"
      w="100%"
      p={4}
      color="white"
      display="flex"
      alignItems="center"
      justifyContent="space-between"
      gap="20px"
    >
      <Image
        boxSize="50px"
        // borderRadius="full"
        w="100px"
        h="60px"
        // src="https://document-export.canva.com/w_pN0/DAFRkmw_pN0/12/thumbnail/0001.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Credential=AKIAQYCGKMUHWDTJW6UD%2F20221110%2Fus-east-1%2Fs3%2Faws4_request&X-Amz-Date=20221110T054142Z&X-Amz-Expires=53720&X-Amz-Signature=58c3e60e4c1119aaa47dd7f77378ba43f102db04f89785c86786c3efdd740427&X-Amz-SignedHeaders=host&response-expires=Thu%2C%2010%20Nov%202022%2020%3A37%3A02%20GMT"
        src="https://d2g9wbak88g7ch.cloudfront.net/staticimages/logo-new.png"
        // src={myImage}
        alt="Hobbit hall"
        // mixBlendMode="multiply"
      />
      <Box>
        <Search />
      </Box>
      <Box
        paddingLeft="20px"
        display="flex"
        gap="20px"
        pRight="20px"
        marginRight="50px"
      >
        <Link to="/">Home</Link>
        <Link to="/About">About</Link>
        <Link to="/Signin">Sign in</Link>
        {/* <Link to="/Signup">Sign up</Link> */}
        <Link to="/Cart">Cart</Link>
      </Box>
    </Box>
  );
}
export default Navbar;
