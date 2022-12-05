import { SearchIcon } from "@chakra-ui/icons";
import { Input } from "@chakra-ui/react";

export default function Search() {
  const showBooks = (e) => {};
  return (
    <div>
      <Input
        bgColor="white"
        color="black"
        htmlSize={60}
        width="auto"
        placeholder="Search"
        text={<SearchIcon />}
        onChange={showBooks}
      />
    </div>
  );
}
