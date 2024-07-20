import { component$, useStore, useVisibleTask$, useContextProvider, createContextId, useContext, JSXChildren } from '@builder.io/qwik';

// Define the state interface
interface AppState {
  mode: string;
  direction: string;
  layout: string;
  overlay: string;
  switcherDir: string;
  stopScrollTop: boolean;
}

// Initial state
const initialState: AppState = {
  mode: "",
  direction: "",
  layout: "",
  overlay: "",
  switcherDir: "right",
  stopScrollTop: false,
};


// Create context identifier
export const AppContext = createContextId<AppState>('app.context');

// Provider component
export const AppContextProvider = component$((props: { children?: any  }) => {
  const state = useStore<AppState>(initialState);

  useContextProvider(AppContext, state);
// eslint-disable-next-line qwik/no-use-visible-task
//   useVisibleTask$(({ track }) => {
//     track(() => state.mode);
//     if (typeof window !== "undefined") {
//       const body = document.querySelector("body");
//       if (state.mode === "light") {
//         body?.classList.add("light");
//       } else {
//         body?.classList.remove("light");
//       }
//     }
//   });
// eslint-disable-next-line qwik/no-use-visible-task
//   useVisibleTask$(({ track }) => {
//     track(() => state.direction);
//     if (typeof window !== "undefined") {
//       const body = document.querySelector("body");
//       if (state.direction === "rtl") {
//         body?.classList.add("dir-rtl");
//       } else {
//         body?.classList.remove("dir-rtl");
//       }
//     }
//   });
// eslint-disable-next-line qwik/no-use-visible-task
//   useVisibleTask$(({ track }) => {
//     track(() => state.layout);
//     if (typeof window !== "undefined") {
//       const smoothContent = document.getElementById("smooth-content");
//       if (state.layout === "box") {
//         smoothContent?.classList.add("box-layout");
//       } else {
//         smoothContent?.classList.remove("box-layout");
//       }
//     }
//   });
// eslint-disable-next-line qwik/no-use-visible-task
//   useVisibleTask$(({ track }) => {
//     track(() => state.overlay);
//     if (typeof window !== "undefined") {
//       const overlayContainer = document.getElementById("overlay-container");
//       if (state.overlay === "yes") {
//         overlayContainer?.classList.add("body-overlay");
//       } else {
//         overlayContainer?.classList.remove("body-overlay");
//       }
//     }
//   });

  return <>{props.children}</>;
});

// Child component example
// const ChildComponent = component$(() => {
//   const state = useContext(AppContext);

//   return (
//     <div>
//       <div>Mode: {state.mode}</div>
//       <div>Direction: {state.direction}</div>
//       <div>Layout: {state.layout}</div>
//       <div>Overlay: {state.overlay}</div>
//       <div>Switcher Direction: {state.switcherDir}</div>
//       <div>Stop Scroll Top: {state.stopScrollTop.toString()}</div>
//     </div>
//   );
// });

// export default component$(() => {
//   return (
//     <AppContextProvider>
//       <ChildComponent />
//       <div>hello</div>
//     </AppContextProvider>
//   );
// });
