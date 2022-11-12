import { SearchIcon } from "@chakra-ui/icons";
import { Input, Button } from "@chakra-ui/react";

export default function Search() {
  return (
    <div>
      <Input
        bgColor="white"
        htmlSize={50}
        width="auto"
        placeholder="Search"
        text={<SearchIcon />}

        // onChange={searchBooks}
      />
    </div>
  );
}
