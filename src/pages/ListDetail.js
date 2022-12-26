import { useEffect, useContext } from "react";
import styled from "styled-components";
import { useNavigate, useParams } from "react-router-dom";
import Navbar from "../components/Navbar/Navbar";
import ListItem from "../components/ListItem/ListItem";
import ItemContext from "../context/ItemContext";
import ListContext from "../context/ListContext";

const ListItemWrapper = styled.div`
  display: flex;
  justify-content: space-between;
  flex-direction: column;
  margin: 2% 5%;
`;

function ListDetail() {
  let navigate = useNavigate();
  const { listId } = useParams();

  const { loading, error, items, fetchItems } = useContext(ItemContext);
  const { list, fetchList } = useContext(ListContext);

  useEffect(() => {
    listId && !items.length && fetchItems(listId);
  }, [fetchItems, items, listId]);

  useEffect(() => {
    listId && fetchList(listId);
  }, [fetchList, listId]);

  return (
    <>
      {navigate && (
        <Navbar
          goBack={() => navigate(-1)}
          openForm={() => navigate(`/list/${listId}/new`)}
          title={list && list.title}
          B
        />
      )}
      <ListItemWrapper>
        {loading || error ? (
          <span>{error || "Loading..."}</span>
        ) : (
          items.map((item) => <ListItem key={item.id} data={item} />)
        )}
      </ListItemWrapper>
    </>
  );
}

export default ListDetail;
