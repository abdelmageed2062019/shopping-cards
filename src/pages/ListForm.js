import { useState, useContext } from "react";
import styled from "styled-components";
import { useNavigate, useParams } from "react-router-dom";
import Navbar from "../components/Navbar/Navbar";
import FormItem from "../components/FormItem/FormItem";
import Button from "../components/Button/Button";
import ItemContext from "../context/ItemContext";

const FormWrapper = styled.div`
  display: flex;
  justify-content: space-between;
  flex-direction: column;
  margin: 2% 5%;
`;

const SubmitButton = styled(Button)`
  background: blue;
  margin: 2% 0;
`;

function ListForm() {
  let navigate = useNavigate();
  const { listId } = useParams();

  const { addItem } = useContext(ItemContext);

  const [title, setTitle] = useState("");
  const [quantity, setQuantity] = useState("");
  const [price, setPrice] = useState("");

  function onSubmit(e) {
    e.preventDefault();

    if (title && quantity && price) {
      addItem({
        title,
        quantity,
        price,
        listId,
      });
    }
    navigate(`/list/${listId}`);
  }

  return (
    <>
      {navigate && <Navbar goBack={() => navigate(-1)} title={`Add Item`} />}
      <FormWrapper>
        <form onSubmit={onSubmit}>
          <FormItem
            id="title"
            label="Title"
            placeholder="Insert title"
            value={title}
            handleOnChange={(e) => {
              setTitle(e.target.value);
            }}
          />
          <FormItem
            id="quantity"
            label="Quantity"
            type="number"
            placeholder="0"
            value={quantity}
            handleOnChange={(e) => {
              setQuantity(e.target.value);
            }}
          />
          <FormItem
            id="price"
            label="Price"
            type="number"
            placeholder="0.00"
            value={price}
            handleOnChange={(e) => {
              setPrice(e.target.value);
            }}
          />
          <SubmitButton>Add Item</SubmitButton>
        </form>
      </FormWrapper>
    </>
  );
}

export default ListForm;
