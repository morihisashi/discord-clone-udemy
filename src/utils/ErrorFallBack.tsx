import { FallbackProps } from "react-error-boundary";

export const ErrorFallBack = ({ error, resetErrorBoundary }: FallbackProps) => {
    //const { resetBoundary } = useErrorBoundary();
    return (
        <div role="alert">
            <p>Something went wrong:</p>
            <pre style={{ color: "red" }}>{error.message}</pre>
            <button onClick={resetErrorBoundary}>Try again</button>
        </div>
    );
}