import React from 'react'
import type { Route } from './+types/layout';


export function meta({}: Route.MetaArgs) {
  return [
    { title: "TierUp | SignUp" },
    { name: "Rise Together", content: "Welcome to TierUp , Now without further due lets create an account." },
  ];
}
const SignUp = () => {
  return (
    <div>SignUp</div>
  )
}

export default SignUp