import { useState } from "react";

function ChoosingStateStructure() {
  // const [firstName, setFirstName] = useState("");
  // const [lastName, setLastName] = useState("");
  const [person, setPerson] = useState({
    firstName: "Name",
    lastName: "Surname",
    contact:{
        adress: {
            city: "",
            country: ""
        }
    }
  });

  const [isLoading, setIsLoading] = useState(false);

  return (
    <div>
      {person.firstName} {person.lastName}
    </div>
  );
}

export default ChoosingStateStructure;
