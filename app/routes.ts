import { type RouteConfig, index, layout, route } from "@react-router/dev/routes";

export default [layout("routes/auth/layout.tsx",[
    route("/", "routes/root/home.tsx"),
    route("signin" , "routes/auth/sign-in.tsx"),
    route("signup" , "routes/auth/sign-up.tsx"),
    route("forgot" , "routes/auth/forgot-password.tsx"),
    route("verify" , "routes/auth/verify-email.tsx")
])] satisfies RouteConfig;
