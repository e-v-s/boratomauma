const Input = (props) => {
	const template = `
	<input 
	type="${props.type}" 
	id="${props.id}" 
	class="${props.class}"
	placeholder="${props.placeholder}"
	name="${props.name}">`;
	return template;
}

export default Input;