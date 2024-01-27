import{S as t}from"./q-73c53bab.js";const r="theme-preference",n=()=>{const e=`
        document.firstElementChild
            .setAttribute('data-theme',
                localStorage.getItem('${r}') ??
                (window.matchMedia('(prefers-color-scheme: dark)').matches ? 'dark' : 'lights2')
            )`;return t("script",{dangerouslySetInnerHTML:e},null,null,3,"Ia_0")};window.__STORYBOOK_COMPONENT_DOC__??(window.__STORYBOOK_COMPONENT_DOC__=new Map);export{n as T,r as t};
