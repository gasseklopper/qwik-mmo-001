import {
	component$,
} from '@builder.io/qwik';


export const FirstName = component$((props: { firstName: string }) => {
	console.log("FirstName rerenders")
	return (
		<>
			<p>First name --&gt; {props.firstName}</p>
		</>
	)
})
