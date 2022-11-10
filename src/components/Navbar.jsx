import { Box, Image } from "@chakra-ui/react";
import { Link } from "react-router-dom";

function Navbar() {
  return (
    <Box
      bg="blue"
      w="100%"
      p={4}
      color="white"
      display="flex"
      alignItems="center"
      justifyContent="space-between"
      gap="20px"
    >
      <Image
        boxSize="80px"
        borderRadius="full"
        // w="50px"
        // h="50px"
        objectFit="cover"
        src="https://document-export.canva.com/zfUYU/DAFRX1zfUYU/5/thumbnail/0001.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Credential=AKIAQYCGKMUHWDTJW6UD%2F20221109%2Fus-east-1%2Fs3%2Faws4_request&X-Amz-Date=20221109T070251Z&X-Amz-Expires=17981&X-Amz-Signature=9b562201abf2b509ec13dd4a39dd9149e6add5b51a340a2cbc23b2156702198b&X-Amz-SignedHeaders=host&response-expires=Wed%2C%2009%20Nov%202022%2012%3A02%3A32%20GMT"
        alt="Hobbit hall"
        // mixBlendMode="multiply"
      />
      <Box
        paddingLeft="20px"
        display="flex"
        gap="20px"
        pRight="20px"
        marginRight="50px"
      >
        <Link to="/Home">Home</Link>
        <Link to="/About">About</Link>
        <Link to="/Signin">Sign in</Link>
        <Link to="/Signup">Sign up</Link>
      </Box>
    </Box>
  );
}
export default Navbar;
