import*as e from"react";import{Flex as t}from"@aws-amplify/ui-react";import{useThemeBreakpoint as r,AlertIcon as o}from"@aws-amplify/ui-react/internal";import{LivenessClassNames as n}from"../types/classNames.mjs";const a=({children:a})=>{const s=r(),[c,m]=e.useState(!1),i=e.useRef(null),l="base"===s;return e.useEffect((()=>{function e(e){c&&i.current&&!i.current.contains(e.target)&&m(!1)}return document.addEventListener("mousedown",e),()=>{document.removeEventListener("mousedown",e)}}),[i,c]),e.createElement(t,{className:n.Popover,onClick:()=>m(!c),ref:i,testId:"popover-icon"},e.createElement(o,{ariaHidden:!0,variation:"info"}),c&&e.createElement(e.Fragment,null,e.createElement(t,{className:n.PopoverAnchor}),e.createElement(t,{className:n.PopoverAnchorSecondary}),e.createElement(t,{className:n.PopoverContainer,left:l?-190:-108,"data-testid":"popover-text"},a)))};a.displayName="LivenessIconWithPopover";export{a as LivenessIconWithPopover};