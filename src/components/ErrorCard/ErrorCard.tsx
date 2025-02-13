import { ErrorCardWrapper, ErrorText, ErrorTitle } from "./styles";

interface ErrorCardProps {
    errorMessage: string;
}

function ErrorCard({ errorMessage }: ErrorCardProps) {
    return (
        <ErrorCardWrapper>
            <ErrorTitle>Error
            </ErrorTitle>
            <ErrorText>{errorMessage}</ErrorText>
        </ErrorCardWrapper>
    );
}

export default ErrorCard;