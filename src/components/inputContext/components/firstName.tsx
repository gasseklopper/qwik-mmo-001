import {
	component$,
} from '@builder.io/qwik';


export const FirstName = component$(({firstName}:string) => {
	console.log("FirstName rerenders")
	return (
		<>
			<p>First name --&gt; {firstName}</p>
		</>
	)
})
