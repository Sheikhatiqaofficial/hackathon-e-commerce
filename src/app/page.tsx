import Ceramic from "./components/Ceramic";

import Feature from "./components/Feature";

import Herosection from "./components/Herosection";
import Popular from "./components/Popular";
import Promotion from "./components/Promotion";
import Signup from "./components/Signup";


export default function Home() {
  return (
<div>

<Herosection/>
<Feature/>
<Ceramic/>
<Popular/>
<Signup/>
<Promotion/>

</div>
  );
}