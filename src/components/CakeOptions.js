import "./CakeOptions.css";
import IngredientOption from "./IngredientOption"
import { useState } from "react";

const CakeOptions = (props) => {





    let allIngredients = [

        // {
        //     id:"cake",
        //     name: "Cake",
        //     options: ["Vanilla","Chocolate", "Lemon"],
        //     color: false,
        //     required : true,
        //     key: 1,
        // },
        // {
        //     id:"fill",
        //     name: "Cake Filling",
        //     options: ["Vanilla","Chocolate", "Lemon"],
        //     color: false,
        //     required : true,
        //     key: 2,
        // },
        {
          id:"topfrost",
          name: "Top Accent Frosting",
          color: "#FFFFFF",
          optionsColor: "#FFFFFF",
          key: 3,
          
      },
        {
            id:"top",
            name: "Top Frosting",
            color: "#FFFFFF",
            optionsColor: "#FFFFFF",
            key: 4,
            
        },
        {
            id: "side",
            name: "Side Frosting",
            color: "#FFFFFF",
            optionsColor: "#FFFFFF",
            key: 5,
        },
        // {
        //     id: "bott",
        //     name: "Cake Bottom Design",
        //     color: "#FFFFFF",
        //     options: ["None", "Frosting", "Sprinkles", "Let Angela Decide"],
        //     optionsColor: "#FFFFFF",

        // },
        {
          id: "botfrost",
          name: "Bottom Accent Frosting",
          color: "#FFFFFF",
          optionsColor: "#FFFFFF",
          key: 6,

        },
        {
          id: "topping1",
          name: "Toppings",
          subtitle: "(Choose Multiple)",
          options: ["Chocolate-Drip", 
                     "Sprinkles-Top", "Sprinkles-Side",],
          key: 7,
          

        },
        {
          id: "topping2",
          name: "Add-Ons",
          subtitle: "(Choose One)",
          options: ["None", "Blueberries", 
                    "Rose-Petals", "Strawberries",],
          key: 8,
          

        },
];



    const cakeDataHandler_CakeOptions = (enteredCakeData) => {
      const cakeData = enteredCakeData
      //console.log(cakePieceId.cakePieceId)
      //console.log(enteredCakeData)
      props.cakeDataCallback_App(cakeData);
      //console.log(cakeData);
    };

    const checkHandler_CakeOptions = (enteredCheckData) => {
      const checkData = enteredCheckData
      //console.log(checkData)
      //console.log(checkData.id)
      //console.log(checkData.checked)
      props.checkCallback_App(checkData);
    };

  return(
    <div className='cakeOptions'>

        {allIngredients.map(ingredient => (
           <IngredientOption 
              name={ingredient.name} 
              ingredientsList={allIngredients} 
              id={ingredient.id} 
              color={ingredient.color} 
              required={ingredient.required} 
              cakeDataCallback_CakeOptions={cakeDataHandler_CakeOptions}
              checkCallback_CakeOptions={checkHandler_CakeOptions}
              matchFrostTop = {props.matchFrostTop}
              matchCakeColor = {props.matchCakeColor}
              toppings = {ingredient.options}
              cakeData_topF = {props.cakeData_topF}
              key={ingredient.key}
            />
      ))} 

    
    </div>
  );
}

export default CakeOptions;