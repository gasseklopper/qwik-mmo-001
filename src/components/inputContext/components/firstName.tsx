import {
	component$,
} from '@builder.io/qwik';


export const FirstName = component$(({firstName}) => {
	console.log("FirstName rerenders")
	return (
		<>
			<p>First name --&gt; {firstName}</p>
		</>
	)
})
