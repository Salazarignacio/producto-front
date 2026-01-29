import TicketPage from "../pages/TicketPage";

export default function TicketComponent({ prods }) {
    /* Pasar prods por context */
  let total = 0;
  let items = 0;
  prods.forEach((element) => {
    total += element.precio * element.cantidad;
    items += element.cantidad;
  });
  
  
  return (
    <>
      <TicketPage prods={prods} total={total} items={items}></TicketPage>
    </>
  );
}
