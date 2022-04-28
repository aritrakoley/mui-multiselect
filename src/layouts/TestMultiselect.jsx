import { useState } from "react";
import { Button, Container, Stack, TextField } from "@mui/material";
import Multiselect from "../components/Multiselect/Multiselect";

const TestMultiselect = () => {
  const defaultOptions = [
    { label: "Apple", value: "apple", type: "seeded", color: "red" },
    { label: "Orange", value: "orange", type: "seeded", color: "orange" },
    { label: "Banana", value: "banana", type: "seedless", color: "yellow" },
    { label: "Grapes", value: "grapes", type: "seedless", color: "green" },
    { label: "Pineapple",value: "pineapple",type: "seedless",color: "yellow" }
  ];

  const [selected, setSelected] = useState([]);
  const [textValue, setTextValue] = useState(JSON.stringify(defaultOptions));
  const [options, setOptions] = useState([]);

  // dummy props
  const sxStyles = { width: "300px" };
  const id = "fruits-select";
  const label = "Fruits";
  const limitTags = 2;
 

  const handleChange = (event, value) => {
    console.log("handle Change", value);
    setSelected(value);
  };

  return (
    <Container>
      <Stack m={3} direction="row" spacing={3}>
        <Stack direction="column" spacing={3}>
          <TextField
          sx={{width: "500px"}}
            id="outlined-multiline-static"
            label="JSON Options"
            multiline
            rows={10}
            value={textValue}
            onChange={(e) => setTextValue(e.target.value)}
          />
          <Button
            variant="contained"
            onClick={(e) => setOptions(JSON.parse(textValue))}
          >Set Options</Button>
        </Stack>

        <Multiselect
          sx={sxStyles}
          id={id}
          label={label}
          limitTags={limitTags}
          options={options}
          onChange={handleChange}
          value={selected}
        />
        <div
          style={{ height: "100px", width: "2px", background: "black" }}
        ></div>
        <p style={{ width: "500px" }}>
          {selected.length
            ? selected
                .map((e) => `<${e.label} - ${e.type} - ${e.color} >`)
                .join(", ")
            : "none"}
        </p>
      </Stack>
    </Container>
  );
};

export default TestMultiselect;

// const TestMultiselect = () => {
//   const [selected, setSelected] = useState([]);

//   // dummy props
//   const sxStyles = { width: "250px" };
//   const id = "fruits-select";
//   const label = "Fruits";
//   const limitTags = 2;
//   const options = ["Apple", "Orange", "Banana", "Grapes", "Pineapple"];
//   const handleChange = (event, value) => {
//     console.log("handle Change", value);
//     setSelected(value);
//   };

//   return (
//     <Container>
//       <Stack m={3} direction="row" spacing={3}>
//         <Multiselect
//           sx={sxStyles}
//           id={id}
//           label={label}
//           limitTags={limitTags}
//           options={options}
//           onChange={handleChange}
//           value={selected}
//         />
//         <div
//           style={{ height: "100px", width: "2px", background: "black" }}
//         ></div>
//         <p>{selected.length ? selected.join(", ") : "none"}</p>
//       </Stack>
//     </Container>
//   );
// };
