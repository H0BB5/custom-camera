import e from"react";import{Button as t}from"@aws-amplify/ui-react";import{IconClose as r}from"@aws-amplify/ui-react/internal";import{useLivenessActor as a}from"../hooks/useLivenessActor.mjs";import"@xstate/react";import"../providers/FaceLivenessDetectorProvider.mjs";import"@aws-amplify/ui";import{LivenessClassNames as i}from"../types/classNames.mjs";const o=({ariaLabel:o})=>{const[s,m]=a();return s.done?null:e.createElement(t,{autoFocus:!0,variation:"link",onClick:()=>{m({type:"CANCEL"})},size:"large",className:i.CancelButton,"aria-label":o},e.createElement(r,{"aria-hidden":"true","data-testid":"close-icon"}))};export{o as CancelButton};
