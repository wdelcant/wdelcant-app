export function Alert({ type, children }) {
    return (
        <div className={`alert alert-${type}`} role="alert">
        {children}
        </div>
    );
    }
    