const Input = (props) => {
	const template = `
	<input 
	type="${props.type}" 
	id="${props.id}" 
	class="${props.class}"
	placeholder="${props.placeholder}">`;
	return template;
}

export default Input;