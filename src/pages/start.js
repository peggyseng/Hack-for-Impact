import React, { useState } from "react";
import { Button } from "antd";
import Stage2 from "./stages/stage2";
import Stage3 from "./stages/stage3";
import Stage4 from "./stages/stage4";

const Start = ({}) => {
  const [stage, setActiveStage] = useState(3);
  const [ingredients, setIngredients] = useState([]);
  const [leftovers, setLeftovers] = useState([]);

  return (
    <div
      style={{
        maxWidth: "500px",
        background: "white",
        height: "100vh",
        margin: "100px auto",
        padding: "20px",
        borderRadius: "20px"
      }}
    >
      <h1>What do you want to do?</h1>
      <Button onClick={() => setActiveStage(2)}>I have leftovers</Button>
      <Button onClick={() => setActiveStage(2)}>I want to plan my meals</Button>

      {/* Stage 2 - Depending on the previous answer what do you have left over? */}
      {stage === 2 && (
        <Stage2
          previousMeal={0}
          onSubmit={leftoversArray => console.log(leftoversArray)}
        />
      )}

      {/* Stage 3 - Do you also have this ingredient? */}
      {stage === 3 && (
        <Stage3
          leftovers={leftovers}
          onSubmit={choseningredients => setIngredients(choseningredients)}
        />
      )}

      {/* Stage 4 - We suggest you make this meal */}
      {stage === 4 && <Stage4 ingredients={[...ingredients, ...leftovers]} />}
    </div>
  );
};

export default Start;
