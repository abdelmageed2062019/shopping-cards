import { ListContextProvider } from "./ListContext";
import { ItemContextProvider } from "./ItemContext";

const AppContext = ({ children }) => {
  return (
    <ListContextProvider>
      <ItemContextProvider>{children}</ItemContextProvider>
    </ListContextProvider>
  );
};

export default AppContext;
