import CakeOptions from "./components/CakeOptions"
import CakePiece from "./components/CakePiece"
import "./App.css"
import cakeFrostingTopImg from "./img/top-f-s.png";
import cakeTopImg from "./img/top-texture.png";
import cakeSideImg from "./img/side-texture.png";
import cakeFrostingBottomImg from "./img/bottom-f-s.png";
import cakePlateImg from "./img/plate.png";
import nakedTopImg from "./img/naked-top.png";
import nakedSideImg from "./img/naked-side.png";
import blankImg from "./img/blank.png";

//Toppings Import
import chocolateDripImg from "./img/toppings/chocolate-drip.png";
import sprinklesSideImg from "./img/toppings/sprinkles-side.png";
import sprinklesTopImg from "./img/toppings/sprinkles-top.png";

//Add-Ons Import
import blueberryImg from "./img/add-ons/blueberry.png";
import rosePetalsImg from "./img/add-ons/rose-petal.png";
import strawberryImg from "./img/add-ons/strawberry.png";



import {useState} from 'react';

import 'bootstrap/dist/css/bootstrap.min.css';
import { Grid, Row, Col } from 'react-bootstrap';





const App = () => {

    
    const [cakeData_topF, setCakeData_topF] = useState("#709BE1");
    const [cakeData_top, setCakeData_top] = useState("#FFFFFF");
    const [cakeData_side, setCakeData_side] = useState("#FFFFFF");
    //const [cakeData_bottom, setCakeData_bottom] = useState("");
    const [cakeData_bottomF, setCakeData_bottomF] = useState("#709BE1");





    const [cakeId_topF, setCakeId_topF] = useState("");
    const [cakeId_top, setCakeId_top] = useState("");
    const [cakeId_side, setCakeId_side] = useState("");
    //const [cakeId_bottom, setCakeId_bottom] = useState("");
    const [cakeId_bottomF, setCakeId_bottomF] = useState("");

    


    const cakeDataHandler_App = (enteredCakeData) => {
        
        const cake = enteredCakeData
        //console.log(enteredCakeData)
        //this.cakeData = enteredCakeData;

        //console.log(cakeData.id);
        //setAllColorData(cakeData);
        //setcakeId(allColorData.cakeId);
        // setCakeData(cake.value);
        // setcakeId(cake.id);
        //console.log(cake.id)
        
        if(cake.id === "topfrostColorOption"){
            setCakeData_topF(cake.value);
            setCakeId_topF(cake.id);
        };
        if(cake.id === "topColorOption"){
            setCakeData_top(cake.value);
            setCakeId_top(cake.id);
        };
        if(cake.id === "sideColorOption"){
            setCakeData_side(cake.value);
            setCakeId_side(cake.id);
        };
        // if(cake.id === "bottomColorOption"){
        //     setCakeData_bottom(cake.value);
        //     setCakeId_bottom(cake.id);
        // }
        if(cake.id === "botfrostColorOption"){
            setCakeData_bottomF(cake.value);
            setCakeId_bottomF(cake.id);
        };
    };


    // let cakeTop = cakeTopImg;
    // let cakeSide = cakeSideImg;
    // let frostingBottom = cakeFrostingBottomImg;
    // let frostingTop = cakeFrostingTopImg;


    
 //////////////check state
    const [check, setCheck] = useState(false);

    //top Frosting Image
    const [frostingTop, setTopFrost] = useState(blankImg);

    //cakeSide
    const [cakeSide, setCakeSide] = useState(nakedSideImg);

    //cakeTop
    const [cakeTop, setCakeTop] = useState(nakedTopImg);

    //bottom Frosting Image
    const [frostingBottom, setBottomFrost] = useState(blankImg);

    const [topping1, setTopping1] = useState(blankImg);
    const [topping2, setTopping2] = useState(blankImg);
    const [topping3, setTopping3] = useState(blankImg);

   const[addOns, setAddOns] = useState(blankImg);


    const checkHandler_App = (checkDataParam) => {
        const checkData = checkDataParam;
        
        setCheck(checkData.checked);
        // console.log(checkData)
        // console.log(checkData.id)
        // console.log(checkData.checked)
        // console.log(checkData.value)

        if(checkData.id.includes("Checkbox")){
            //console.log("checkbox check")
            //console.log(checkData)
            //console.log(checkData.id)
            //console.log(checkData.checked)
            //console.log(checkData.value)
        
            if(checkData.id === "topfrostCheckbox" && checkData.checked === true){
                setTopFrost(cakeFrostingTopImg);
            }
            else if(checkData.id === "topfrostCheckbox" && checkData.checked === false){
                setTopFrost(blankImg);
            }
            if(checkData.id === "botfrostCheckbox" && checkData.checked === true){
                setBottomFrost(cakeFrostingBottomImg);
            }
            else if(checkData.id === "botfrostCheckbox" && checkData.checked === false){
                setBottomFrost(blankImg);
            }
            if(checkData.id === "sideCheckbox" && checkData.checked === true){
                setCakeSide(cakeSideImg);
                
            }
            else if(checkData.id === "sideCheckbox" && checkData.checked === false){
                setCakeData_side("#FFFFFF");
                setCakeSide(nakedSideImg);
            }
            if(checkData.id === "topCheckbox" && checkData.checked === true){
                setCakeTop(cakeTopImg);
            }
            else if(checkData.id === "topCheckbox" && checkData.checked === false){
                setCakeData_top("#FFFFFF");
                setCakeTop(nakedTopImg);
            }
        }
        else if (checkData.id=== "topping1Radio"){
            // console.log(checkData)
            // console.log(checkData.id)
            // console.log(checkData.checked)
            // console.log(checkData.value)

            if(checkData.value === "Chocolate-Drip" && checkData.checked === true){
                setTopping1(blankImg);
                setTopping1(chocolateDripImg);
            }
            else if(checkData.value === "Chocolate-Drip" && checkData.checked === false){
                setTopping1(blankImg);
                
            }
            if(checkData.value === "Sprinkles-Top" && checkData.checked === true){
                setTopping2(blankImg);
                setTopping2(sprinklesTopImg);
            }
            else if(checkData.value === "Sprinkles-Top" && checkData.checked === false){
                setTopping2(blankImg);
                
            }
            if(checkData.value === "Sprinkles-Side" && checkData.checked === true){
                setTopping3(blankImg);
                setTopping3(sprinklesSideImg);
            }
            else if(checkData.value === "Sprinkles-Side" && checkData.checked === false){
                setTopping3(blankImg);
                
            }
        
        }
        else if (checkData.id=== "topping2Radio"){
            if(checkData.value === "None" && checkData.checked === true){
                setAddOns(blankImg);
                
            }
            if(checkData.value === "Blueberries" && checkData.checked === true){
                setAddOns(blankImg);
                setAddOns(blueberryImg);
            }
            if(checkData.value === "Rose-Petals" && checkData.checked === true){
                setAddOns(blankImg);
                setAddOns(rosePetalsImg);
            }
            if(checkData.value === "Strawberries" && checkData.checked === true){
                setAddOns(blankImg);
                setAddOns(strawberryImg);
            }


        }


        
    };

      
        // console.log(cakeData_topF)
        // console.log(cakeId_topF)

    const matchFrostingTop = () => {
        setCakeData_bottomF(cakeData_topF);
    };
    const matchCakeColor = () => {
        setCakeData_side("#FFFFFF");
        setCakeData_side(cakeData_top);
    };

    

    return(
        
        
        
        // <>
        // <div className="section section-basic">
            
        //         <div style={{postion: "relative"}}>
        //             <CakePiece  cakePieceImg={cakePlateImg} id='plate' data="#D0D3D8" dataId={"none"} key={10}/>
        //             <CakePiece  cakePieceImg={cakeSide} id='sideColorOption' data={cakeData_side} dataId={cakeId_side} key={11}/>
        //             <CakePiece  cakePieceImg={cakeTop} id='topColorOption' data={cakeData_top} dataId={cakeId_top} key={12}/>
        //             <CakePiece  cakePieceImg={topping3} id='SprinklesSide' data={'#FFFFFF'} key={13}/>
        //             <CakePiece  cakePieceImg={topping1} id='chocolateDrip' data={'#FFFFFF'} key={14}/>
        //             <CakePiece  cakePieceImg={topping2} id='SprinklesTop' data={'#FFFFFF'} key={15}/>
        //             <CakePiece  cakePieceImg={frostingTop} id='topfrostColorOption' data={cakeData_topF} dataId={cakeId_topF} key={16}/>
        //             <CakePiece  cakePieceImg={addOns} id='AddOns' data={'#FFFFFF'} key={17}/>
        //             <CakePiece  cakePieceImg={frostingBottom} id='botfrostColorOption' data={cakeData_bottomF} dataId={cakeId_bottomF} key={18}/>
        //         </div>
            
        // </div>
        
        // <div className="section section-basic" style={{postion: "relative"}}>
        //     <div>
        //     <CakeOptions 
        //                 cakeDataCallback_App={cakeDataHandler_App} 
        //                 matchFrostTop = {matchFrostingTop}
        //                 matchCakeColor = {matchCakeColor}
        //                 checkCallback_App={checkHandler_App}
        //                 cakeData_topF={cakeData_topF}
        //             />
        //     </div>
        // </div>
    
                
        // </>
         



        // <div >

        //     <div className="row">
        //         <div className="col-md-6">
        //             <div className="row">
                        
        //                 <CakeOptions className="col-md-4"
        //                     cakeDataCallback_App={cakeDataHandler_App} 
        //                     matchFrostTop = {matchFrostingTop}
        //                     matchCakeColor = {matchCakeColor}
        //                     checkCallback_App={checkHandler_App}
        //                     cakeData_topF={cakeData_topF}
        //                 />
                        
        //             </div>
        //         </div>
        //         <div className="col-md-6">
        //             <CakePiece cakePieceImg={cakePlateImg} id='plate' data="#D0D3D8" dataId={"none"} key={10}/>
        //             <CakePiece cakePieceImg={cakeSide} id='sideColorOption' data={cakeData_side} dataId={cakeId_side} key={11}/>
        //             <CakePiece cakePieceImg={cakeTop} id='topColorOption' data={cakeData_top} dataId={cakeId_top} key={12}/>
        //             <CakePiece cakePieceImg={topping3} id='SprinklesSide' data={'#FFFFFF'} key={13}/>
        //             <CakePiece cakePieceImg={topping1} id='chocolateDrip' data={'#FFFFFF'} key={14}/>
        //             <CakePiece cakePieceImg={topping2} id='SprinklesTop' data={'#FFFFFF'} key={15}/>
        //             <CakePiece cakePieceImg={frostingTop} id='topfrostColorOption' data={cakeData_topF} dataId={cakeId_topF} key={16}/>
        //             <CakePiece cakePieceImg={addOns} id='AddOns' data={'#FFFFFF'} key={17}/>
        //             <CakePiece cakePieceImg={frostingBottom} id='botfrostColorOption' data={cakeData_bottomF} dataId={cakeId_bottomF} key={18}/>
        //         </div>
        //     </div>
        // </div>


        <>
            <div className="cakePic">
                
                    
                        <CakePiece  cakePieceImg={cakePlateImg} id='plate' data="#D0D3D8" dataId={"none"} key={10}/>
                        <CakePiece  cakePieceImg={cakeSide} id='sideColorOption' data={cakeData_side} dataId={cakeId_side} key={11}/>
                        <CakePiece  cakePieceImg={cakeTop} id='topColorOption' data={cakeData_top} dataId={cakeId_top} key={12}/>
                        <CakePiece  cakePieceImg={topping3} id='SprinklesSide' data={'#FFFFFF'} key={13}/>
                        <CakePiece  cakePieceImg={topping1} id='chocolateDrip' data={'#FFFFFF'} key={14}/>
                        <CakePiece  cakePieceImg={topping2} id='SprinklesTop' data={'#FFFFFF'} key={15}/>
                        <CakePiece  cakePieceImg={frostingTop} id='topfrostColorOption' data={cakeData_topF} dataId={cakeId_topF} key={16}/>
                        <CakePiece  cakePieceImg={addOns} id='AddOns' data={'#FFFFFF'} key={17}/>
                        <CakePiece  cakePieceImg={frostingBottom} id='botfrostColorOption' data={cakeData_bottomF} dataId={cakeId_bottomF} key={18}/>
                    
                
            </div>
        <div className="splitRight">
           
                
                <CakeOptions className="grid-item"
                            cakeDataCallback_App={cakeDataHandler_App} 
                            matchFrostTop = {matchFrostingTop}
                            matchCakeColor = {matchCakeColor}
                            checkCallback_App={checkHandler_App}
                            cakeData_topF={cakeData_topF}
                        />
                
            
        </div>
    
                
        </>



        
    )
}

export default App;