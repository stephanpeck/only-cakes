import "./IngredientOption.css"
import { useState } from "react";

import 'bootstrap/dist/css/bootstrap.min.css';
import Button from 'react-bootstrap/Button';


const IngredientOption = (props) => {
    

    const [colorOption, setColorOption] = useState(props.color);
    const [cakeId, setCakeId] = useState(props.cakeId);
    
    //uses state and the colorhandler3 function to update the state and rerender the component, 
    //but you want to send the event.target.value up to the parent component because sending
    //colorOption will be a step behind
    const ColorHandler3 = (event) => {


        setColorOption(event.target.value);

        props.cakeDataCallback_CakeOptions(event.target);

        

        //will display the color right before the state change because the state change happens after the function is called
        //console.log(colorOption);

        //will display updated value
        //console.log(event.target.id);
    }
    
    //handles displaying the color option
    const [checked, setChecked] = useState("none"); 
    
    const CheckHandler = (event) => {

        
        props.checkCallback_CakeOptions(event.target);
        setChecked(!checked); 


        if (event.target.checked && props.color){

            setChecked("block");
        }
        else{

            setChecked("none");
        }
         
    
    };
    
    //I just use onChange, so this was purely educational to make
    // const submitHandler = (event) => {
    //     event.preventDefault();

    //     const selectedCakeOptions = {
    //         color: colorOption,

    //     }
     

    // };
 
      
    return( 
        //Changes the border color of the ingredient component depending on the type
        <div className={`${props.id}IngredientOption`} 
            style={{border: (props.id==="topping1" 
                            || props.id==="topping2" 
                            || props.id==="topping3") 
                                ? "10px solid #6C757D" : (checked === "block" || props.id==="cake" || props.id==="fill" ? "10px solid #00C851" : "10px solid #CC0000")}}>

        


            <div className="form-check" >
                <label  htmlFor={`${props.id}Checkbox`} className="form-check-label"  />
                <input
                    
                    type="checkbox"
                   
                    id={`${props.id}Checkbox`}
                    onChange={CheckHandler}
                    //forces Cake Flavor and Cake Filling to be checked
                    {...props.required===true ? {checked: true} : null}
                    //forces remaining to default to unchecked
                    unchecked='true'
                    //hides checkbox for Toppings and Add ons, it was redundant
                    style={{display: props.id === "topping1" || props.id === "topping2" || props.id==="topping3" ? "none" : null }}
                />

            </div>
                <div style={{textAlign: 'center', fontWeight: 'bold', bottom:20, zIndex:-1, position:"relative" }}>{props.name}</div>


                 {/*Ratio Selection for Topping Design */}
                 {/* Anything with an option will be displayed here */}
                  {props.toppings? props.toppings.map(option => (
                    <> 
                    <label >
                            <div style={{marginLeft: 15, marginBottom: 5, position:"absolute"}}>
                                {option}
                            </div>

                            {/* Determines if component will be a radio or checkbox */}
                            <input
                                type={props.id === "topping2" 
                                        || props.id==="topping3" 
                                            ? 'radio' : 'checkbox'}
                                
                                id={`${props.id}Radio`}
                                onChange={CheckHandler}
                                //forces Cake Flavor and Cake Filling to be checked
                                style={{display: props.id === "topping1" 
                                                || props.id=== "topping2" 
                                                || props.id==="topping3" 
                                                    ? "block" : "none"}}
                                value={option}
                                name={`${props.id}Radio`}
                                
                            />


                            
                            
                        </label>
                    </>
                
                )) : null}  



            
                <form id={`${props.id}ColorForm`} style={{display: checked}} >
                    <label>Choose the color below:
                        <input 
                            onChange={ColorHandler3} 
                            type="color" id={`${props.id}ColorOption`} 
                            defaultValue="#FFFFFF" 
                            style={{display: checked, margin:'0px', width:'100%', height:'2rem', borderRadius: '0px', padding:'0px', border: 'none' }}
                            
                             />
                    </label>
                    {/* <button className='btn btn primary' type='submit' style={{padding:'10px', backgroundColor: '#0275d8'}} >Submit</button> */}
                </form>
                {/* Adds Match frosting button onClick uses a callback function in App.js that uses the top frosting color to set the bottom on, toyed with chaning the color form value using {props.cakeData_topF} */}
                <Button variant='success' id='tFrostMatchButton' onClick={ props.matchFrostTop } style={{display:  checked === "none" ? "none" : (props.id === "topfrost" ? "block" : "none"), fontSize:'75%'}}>Match Accent Frosting</Button>
                <Button variant='success' id='tCakeMatchButton' onClick={ props.matchCakeColor } style={{display: checked === "none" ? "none" : (props.id === "top" ? "block" : "none"), fontSize:'75%'}}>Match Side Frosting</Button>

                

        </div>
    );
  }
  
  export default IngredientOption;