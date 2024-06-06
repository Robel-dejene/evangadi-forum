import { useState } from "react";

function Toogle() {
	const [toggle, setToggle] = useState(true);
	function handleToggle(e) {
		e.preventDefault();
		setToggle(!toggle);
	}
    handleToggle();
	return <div></div>;
}

export default Toogle;
