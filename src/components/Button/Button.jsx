import { Button } from "./Button.styled"

export function Btn ({children = null, onClick}){
    return <Button onClick={onClick}>{children}</Button>
}