import { component$, useRef } from '@builder.io/qwik'
import type { DocumentHead } from '@builder.io/qwik-city'
import InputContext from '~/components/inputContext/inputContext'
import QwikTextField from '~/components/QwikTextField/index'
// import './style.css';

export default component$(() => {
	return (
		<>
			<Login />
			<InputContext />
		</>
	)
})

export const head: DocumentHead = {
	title: 'Clock',
}

export const Login = component$(() => {

  const username = useRef();
  const password = useRef();

  return (
    <div className='container'>
      <div className='input'>
        <QwikTextField name='Username' reference={username}/>
      </div>
      <div className='input'>
        <QwikTextField name='Password' reference={password}/>
      </div>
    </div>
  );
});
