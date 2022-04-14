import "./CakeOptions.css";
import IngredientOption from "./IngredientOption"

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
          options: [ 
                     "Sprinkles-Top", "Sprinkles-Side",],
          key: 7,
          

        },
        {
          id: "topping3",
          name: "Drips",
          subtitle: "(Choose One)",
          options: ["None", "Chocolate-Drip", 
                     "White-Chocolate-Drip", "Strawberry-Drip", "Blueberry-Drip", "Raspberry-Drip",],
          key: 9,
          

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


//callbacks to send to parent component
    const cakeDataHandler_CakeOptions = (enteredCakeData) => {
      const cakeData = enteredCakeData
      props.cakeDataCallback_App(cakeData);

    };

    const checkHandler_CakeOptions = (enteredCheckData) => {
      const checkData = enteredCheckData
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