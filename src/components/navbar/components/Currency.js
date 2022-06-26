import React, { useState } from "react";

export default function SelectLang() {
   const options = ["EUR", "USD", "AED", "UZS"];
   const [active, setActive] = useState(false);
   const [selected, setSelected] = useState(options[0]);

   return (
      <div
         className="ui floating dropdown labeled search icon"
         onClick={() => setActive((prev) => !prev)}
         // style={{ width: "" }}
      >
         <span>{selected}</span>
         <div className="menu" style={{ display: `${active ? "block" : ""}` }}>
            {options.map((val, key) => {
               return (
                  <div
                     className="item"
                     key={key}
                     onClick={() => {
                        setSelected(val);
                     }}
                  >
                     <div>{val}</div>
                  </div>
               );
            })}
         </div>
      </div>
   );
}
