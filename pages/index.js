import Link from "next/link"
import Button, {greeting} from "./../components/Button"
const HomePage = () => {
    return <div>
      Welcome to Next.js! Go to {" "}
      <Link href="/hello"><a>HelloPage</a></Link>
      <Button color="red" onClick={() =>{console.log("ahoj")}}>Tohle je tlačítko.</Button>
      <Button />
      
      
    </div>
  }
  
  
  
  export default HomePage;

