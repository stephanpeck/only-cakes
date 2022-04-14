import "./CakePiece.css";




const CakePiece = (props) => {



  return( 
    

    <>
        {/* Chaning Color on PNGs https://stackoverflow.com/a/32736304   -- info from second comment by "Salix" (shown on line below) */}
        {/* for icon with alpha, can replace <feComposite in="SourceGraphic" in2="flood" operator="arithmetic" k1="1" k2="0" k3="0" k4="0" /> with <feComposite in="flood" in2="SourceAlpha" operator="atop"/> (works on white, color and black) */}
        <svg
          xmlns="http://www.w3.org/2000/svg"
          version="1.1"
          width="60%"
          height="90%"
          style={{ position:'absolute', zIndex:0, }}
        >
          <defs>
            <filter id={`${props.id}colorMask1`}>
              {/* <feFlood floodColor={props.id==props.cakePieceId? props.allColorData : null} result="flood" /> */}
              <feFlood floodColor={props.data} result="flood" />
              <feComposite
                in="SourceGraphic"
                in2="flood"
                operator="arithmetic"
                k1="1"
                k2="0"
                k3="0"
                k4="0"
              />
              {/* <feComposite
                in="flood"
                in2="SourceAlpha"
                operator="atop"
              /> */}
            </filter>
          </defs>
          {/* <img src={props.cakeBody} alt="cake" /> */}
          <image width="80%" height="80%" xlinkHref={props.cakePieceImg} filter={`url(#${props.id}colorMask1)`} />

        </svg>
    </> 
    
  );
}

export default CakePiece;
