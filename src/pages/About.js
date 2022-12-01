import "../styles.css";
import pic from "./pic.png"

const About = () => {
    return (
    <div className="intro">
      <div>
        <h3>
          <img src={pic} alt="pic"/>
        </h3>
      </div>
      <h3>
          姓名：葉凱晴 Mia
      </h3>
      <h3>
          學號：R11142006
      </h3>
      <h3>
          Email: ykcmia@gmail.com
      </h3>
    </div>
    );
  }
  
  export default About;