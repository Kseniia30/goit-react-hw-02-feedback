import { StyledTitle } from "./Section.styled"

export const Section = ({title, children}) => {
    return (
        <>
            <StyledTitle>{title}</StyledTitle>
            {children}
        </>
    )
}