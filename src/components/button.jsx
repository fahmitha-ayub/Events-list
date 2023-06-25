export default function Button({ children, onClick, style }) {
    return (
        <>
            <button onClick={onClick} style={style}>{children}</button>
        </>
    );
}
