import { StyledBTN, StyledBtnItem } from "./FeedbackOptions.styled"

export const FeedbackOptions = ({options, onLeaveFeedback}) => {
    return options.map(option => (
            <StyledBtnItem>
                <StyledBTN
                    key={option}
                    type="button"
                    onClick={() => onLeaveFeedback(option)}>{option}
                </StyledBTN>
            </StyledBtnItem>
            
    ))
}