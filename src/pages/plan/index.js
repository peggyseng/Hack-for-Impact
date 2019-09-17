import React, { useState } from "react";
import { Button } from "antd";
import StageWrapper from "../../components/stageWrapper";
import Stage2 from "./stages/stage2";
import Stage3 from "./stages/stage3";
import recepies from "../../data/recipes.json";
import RecipeCard from "../../components/RecipeCard";
import styled from "styled-components";

const HeaderContainer = styled.div`
  display: flex;
  flex-direction: column;
  justify-content: center;
  align-items: center;
`;

const Plan = ({}) => {
  const [stages, setActiveStages] = useState([0]);
  // const [ingredients, setIngredients] = useState([]);
  const [selectedItems, setSelectedItems] = useState([]);
  const [chosenRecipe, setChosenRecipe] = useState();

  const setActiveStage = stage => {
    setActiveStages([...stages, stage]);
  };

  return (
    <div
      style={{
        maxWidth: "500px",
        background: "white",
        minHeight: "100vh",
        margin: "20px auto",
        padding: "20px",
        borderRadius: "20px"
      }}
    >
      <StageWrapper>
        <h1>What do you want to eat?</h1>
        <HeaderContainer>
          {recepies.map(r => (
            <div onClick={() => setChosenRecipe(r)}>
              <RecipeCard recipe={r}></RecipeCard>
            </div>
          ))}
        </HeaderContainer>
        {chosenRecipe && (
          <Button onClick={() => setActiveStage(2)} block>
            Continue
          </Button>
        )}
      </StageWrapper>

      {stages.includes(2) && (
        <StageWrapper>
          <Stage2
            chosenRecipe={chosenRecipe}
            onSubmit={selectedItems => setSelectedItems(selectedItems)}
          />
        </StageWrapper>
      )}

      {/* {stages.includes(3) && (
        <StageWrapper>
          <Stage3
          selectedItems={}
          />
        </StageWrapper>
      )} */}
    </div>
  );
};

export default Plan;