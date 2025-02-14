import { ErrorCardWrapper, ErrorText } from "./styles";

interface ErrorCardProps {
    error: any | { message: string; };
}

function ErrorCard({ error }: ErrorCardProps) {
    return (
        <ErrorCardWrapper>
            <ErrorText>{error.message || "Unknown error occurred"}</ErrorText>
        </ErrorCardWrapper>
    );
}

export default ErrorCard;