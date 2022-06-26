import React, { useState } from "react";

export default function SelectLang() {
   const options = ["gb uk", "ae", "uz"];
   const [active, setActive] = useState(false);
   const [selected, setSelected] = useState(options[0]);

   return (
      <div
         className="ui floating dropdown labeled search icon"
         onClick={() => setActive((prev) => !prev)}
      >
         <i className={`${selected} flag`}></i>
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
                     <i className={`${val} flag`}></i>
                  </div>
               );
            })}
         </div>
      </div>
   );
}
