import CakeOptions from "./CakeOptions"
import "./IngredientOption.css"
import CardContainer from "./CardContainer";
import { useState } from "react";

import 'bootstrap/dist/css/bootstrap.min.css';
import Button from 'react-bootstrap/Button';


const IngredientOption = (props) => {
    


    const [colorOption, setColorOption] = useState(props.color);
    const [cakeId, setCakeId] = useState(props.cakeId);
    
    //uses state and the colorhandler3 function to update the state and rerender the component, but you want to send the event.target.value up to the parent component because sending
    //colorOption will be a step behind
    const ColorHandler3 = (event) => {
        //setColorOption(document.getElementById(`${props.id}ColorOption`).value);

        setColorOption(event.target.value);
        //setCakeId(event.target.id);
        
        // props.allColorData({colorOption: colorOption, cakeId: cakeId});
        props.cakeDataCallback_CakeOptions(event.target);


        //will display the color right before the state change because the state change happens after the function is called
        //console.log(colorOption);

        //will display updated value
        //console.log(event.target.id);
    }
    
    //handles displaying the color option
    const [checked, setChecked] = useState("none"); 
    
    const CheckHandler = (event) => {

        // console.log(event.target)
        props.checkCallback_CakeOptions(event.target);
        setChecked(!checked); 

        //console.log(event.target.checked)
        if (event.target.checked && props.color){
            //document.getElementById(`${props.id}ColorOption`).style.display='block'
            //document.getElementById(`${props.id}ColorForm`).style.display='block'
            setChecked("block");
        }
        else{
            //document.getElementById(`${props.id}ColorOption`).style.display='none'
            //document.getElementById(`${props.id}ColorForm`).style.display='none'
            setChecked("none");
        }
         
    
    };
    
    //I just use onChange, so this was purely educational to make
    const submitHandler = (event) => {
        event.preventDefault();

        const selectedCakeOptions = {
            color: colorOption,

        }
        //console.log(colorOption)

    };
    //console.log(props.cakeData_topF)
    //backgroundColor: `${props.id}Checkbox`.checked ? "green" : "none"
      //console.log(props.toppings)
      //border: 40px solid #6e2222
    return( 
        
        <div className={`${props.id}IngredientOption`} style={{border: (props.id==="topping1" || props.id==="topping2") ? "10px solid #6C757D" : (checked === "block" || props.id==="cake" || props.id=="fill" ? "10px solid #00C851" : "10px solid #CC0000")}}>

        


            <div className="form-check" >
                <label  htmlFor={`${props.id}Checkbox`} className="form-check-label"  />
                <input
                    
                    type="checkbox"
                   
                    id={`${props.id}Checkbox`}
                    onChange={CheckHandler}
                    //forces Cake Flavor and Cake Filling to be checked
                    {...props.required==true ? {checked: true} : null}
                    //forces remaining to default to unchecked
                    unchecked='true'
                    //hides checkbox for Toppings and Add ons, it was redundant
                    style={{display: props.id === "topping1" || props.id === "topping2" ? "none" : null }}
                />

            </div>
                <div style={{textAlign: 'center', fontWeight: 'bold'}}>{props.name}</div>

                 {/*Ratio Selection for Topping Design */}

                  {props.toppings? props.toppings.map(option => (

                    <>
                        <input
                            type={props.id === "topping2" ? 'radio' : 'checkbox'}
                            
                            id={`${props.id}Radio`}
                            onChange={CheckHandler}
                            //forces Cake Flavor and Cake Filling to be checked
                            style={{display: props.id === "topping1" || props.id=== "topping2" ? "block" : "none"}}
                            value={option}
                            name='cakeOptionsRadios'
                            {...option === "None" ? 'checked' : null}
                        />
                        <label 
                            htmlFor={`${props.id}Radio`} 
                            style={{border:'20px'}}>{option}
                        </label>
                    </>
                
                )) : null}  



            
                <form id={`${props.id}ColorForm`} style={{display: checked}} >
                    <label>Choose the color below:
                        <input 
                            onChange={ColorHandler3} 
                            type="color" id={`${props.id}ColorOption`} 
                            defaultValue="#FFFFFF" 
                            style={{display: checked, margin:'0px', width:'100%', height:'4rem', borderRadius: '0px', padding:'0px', border: 'none' }}
                            
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