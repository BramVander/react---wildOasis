import { useState } from "react";
import CabinTable from "../features/cabins/CabinTable";
import CreateCabinForm from "../features/cabins/CreateCabinForm";
import Heading from "../ui/Heading";
import Button from "../ui/Button";
import Row from "../ui/Row";

function Cabins() {
  const [showForm, setShowForm] = useState(false);

  return (
    <>
      <Row type="horizontal">
        <Heading as="h1">All cabins</Heading>
        <p>Filter / Sort</p>
      </Row>

      <Row>
        <CabinTable />

        <Button onClick={() => setShowForm((show) => !show)}>
          {!showForm ? "Add new cabin" : "Hide form"}
        </Button>
        {showForm && <CreateCabinForm></CreateCabinForm>}
      </Row>
    </>
  );
}

export default Cabins;
