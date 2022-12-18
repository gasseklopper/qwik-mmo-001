import { component$, useStore, useContext } from '@builder.io/qwik';
// import type { DocumentHead } from '@builder.io/qwik-city';
import { UserContext } from "~/components/inputContext/context";
import './style.css';
// import { UserIcon, EnvelopeIcon, LockIcon, PeopleIcon, ManIcon } from '~/integrations/react/mui';
// import { Man } from '@mui/icons-material';

interface TextfieldProps {
    name: String;
    reference: any;
}

export default component$((props: TextfieldProps) => {
	const user = useContext(UserContext)

    const state = useStore({
        value: '',
        isValid: true
    });

	if (props.name === 'Username') {
		user.username = state.value
	}

	if (props.name === 'First Name') {
		user.first = state.value
	}

	if (props.name === 'Last Name') {
		user.last = state.value
	}

	if (props.name === 'Email') {
		user.email = state.value
	}

	if (props.name === 'Password') {
		user.password = state.value
	}

	// min 4 chars number or chars
    const standradReg = /[0-9a-zA-Z]{4,}/;

    const passwordReg = /^(?=.*\d)(?=.*[a-z])(?=.*[A-Z]).{8,20}$/;
    // eslint-disable-next-line no-control-regex
    const emailReg = /(?:[a-z0-9!#$%&'*+/=?^_`{|}~-]+(?:\.[a-z0-9!#$%&'*+/=?^_`{|}~-]+)*|"(?:[\x01-\x08\x0b\x0c\x0e-\x1f\x21\x23-\x5b\x5d-\x7f]|\\[\x01-\x09\x0b\x0c\x0e-\x7f])*")@(?:(?:[a-z0-9](?:[a-z0-9-]*[a-z0-9])?\.)+[a-z0-9](?:[a-z0-9-]*[a-z0-9])?|\[(?:(?:25[0-5]|2[0-4][0-9]|[01]?[0-9][0-9]?)\.){3}(?:25[0-5]|2[0-4][0-9]|[01]?[0-9][0-9]?|[a-z0-9-]*[a-z0-9]:(?:[\x01-\x08\x0b\x0c\x0e-\x1f\x21-\x5a\x53-\x7f]|\\[\x01-\x09\x0b\x0c\x0e-\x7f])+)\])/;

	return (
		<>
			{props.name === 'Password' || props.name === 'Email' || props.name === 'Confirm Password' ?
				<>
					<div className='textfield' id='textfield'>
						<input
								ref={props.reference}
								onInput$={()=> {
								// eslint-disable-next-line qwik/valid-lexical-scope
									state.value = props.reference.current?.value;
								}}
								className={
									props.name === 'Email' ? (state.value.length > 0 ? (state.value.match(emailReg) ? 'valid' : 'invalid') : '') : (state.value.length > 0 ? (state.value.match(passwordReg) ? 'valid' : 'invalid') : (''))
								}
						/>
						<span className={'icon'}>
							{ props.name === 'Password' || props.name === 'Confirm Password' ? (<></>) :
							(<></>)}
						</span>
						<label for='textfield'>{`${props.name}`}</label>
						<div className='underline'></div>
					</div>

				</>:
				null
			}
			{props.name === 'Username' || props.name === 'First Name' || props.name === 'Last Name' ?
				<>
					<div className='textfield' id='textfield'>
						<input
								ref={props.reference}
								onInput$={()=> {
								// eslint-disable-next-line qwik/valid-lexical-scope
									state.value = props.reference.current?.value;
								}}
								className={
									state.value.length === 0 ? ('') : (state.value.match(standradReg) ? 'valid' : 'invalid')
								}
						/>
						<span className={'icon'}>
							{props.name === 'Username' ? (<></>) : (props.name === 'First Name' ? (<></>) :
							(props.name === 'Last Name' ? (<></>) : (<></>)))}
						</span>
						<label for='textfield'>{`${props.name}`}</label>
						<div className='underline'></div>
					</div>

				</>:
				null
			}
		</>
	);
});
