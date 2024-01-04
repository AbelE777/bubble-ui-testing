import "./childComponent.css";
import image from '../assets/image.png'

const ChildComponent = ({ data }) => {
    // Convierte el color de fondo del div padre a un formato numérico
    const color = data.substring(1); // Elimina el carácter '#' al principio
    const r = parseInt(color.substring(0, 2), 16); // Componente rojo
    const g = parseInt(color.substring(2, 4), 16); // Componente verde
    const b = parseInt(color.substring(4, 6), 16); // Componente azul
  
    // Calcula un color más oscuro para el div interno (20% más oscuro)
    const darkerR = Math.floor(r * 0.8);
    const darkerG = Math.floor(g * 0.8);
    const darkerB = Math.floor(b * 0.8);
  
    // Convierte los componentes más oscuros de vuelta a un formato hexadecimal
    const innerBackgroundColor = `#${darkerR.toString(16).padStart(2, '0')}${darkerG.toString(16).padStart(2, '0')}${darkerB.toString(16).padStart(2, '0')}`;
  

  // Establecer el estilo en línea para el div interno
  const innerStyle = {
    backgroundColor: innerBackgroundColor,
    padding: "15px",
    borderRadius: "50%",
    // height: "70px",
    display: "flex",
    alignItems:"center"
  };

  return (
    <div className="childComponent" style={{ backgroundColor: data }}>
      <div style={innerStyle}> 
      {/* <img src={image} alt="" width={70} /> */}
      </div>
    </div>
  );
};

export default ChildComponent;
