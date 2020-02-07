import React, { useState } from "react";
import { Listbox, ListboxGroup, ListboxOption } from "@reach/listbox";
import "@reach/listbox/styles.css";

let name = "Grouped";

function Example() {
  let [value, setValue] = useState("default");
  let taco = <span aria-hidden>🌮</span>;
  return (
    <Listbox value={value} onChange={value => setValue(value)}>
      <ListboxOption value="default">{taco} Choose a taco</ListboxOption>
      <hr />
      <ListboxGroup label={<span style={{ color: "crimson" }}>Meat</span>}>
        <ListboxOption value="asada" label="Carne Asada">
          {taco} Carne Asada
        </ListboxOption>
        <ListboxOption value="pollo" label="Pollo">
          {taco} Pollo
        </ListboxOption>
        <ListboxOption value="pastor" label="Pastor">
          {taco} Pastor
        </ListboxOption>
        <ListboxOption value="lengua" label="Lengua">
          {taco} Lengua
        </ListboxOption>
      </ListboxGroup>
      <ListboxGroup label="Veggie">
        <ListboxOption value="hibiscus" label="Hibiscus">
          {taco} Hibiscus
        </ListboxOption>
        <ListboxOption value="portobello" label="Portobello">
          {taco} Portobello
        </ListboxOption>
        <ListboxOption value="fajita" label="Fajita">
          {taco} Fajita
        </ListboxOption>
      </ListboxGroup>
    </Listbox>
  );
}

Example.story = { name };
export const Comp = Example;
export default { title: "Listbox" };
