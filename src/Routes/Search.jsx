import { SearchIcon } from "@chakra-ui/icons";
import { Input, Button } from "@chakra-ui/react";

export default function Search() {
  return (
    <div>
      <Input
        bgColor="white"
        color="black"
        htmlSize={60}
        width="auto"
        placeholder="Search"
        text={<SearchIcon />}

        // onChange={searchBooks}
      />
    </div>
  );
}
