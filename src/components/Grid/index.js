// Exporting the Container, Row, and Col components from this file

// This Container component allows us to use a bootstrap container without worrying about class names
export function Container({ children }) {
    return <div className="container">{children}</div>;
}

// This Row component lets us use a bootstrap row without having to think about class names
export function Row({ id, classes, children }) {
    let custom = classes? classes : "";
    return <div className={`row ${custom}`}
        id={id ? id : ""}>{children}</div>;
}

// This Col component lets us size bootstrap columns with less syntax
// e.g. <Col size="md-12"> instead of <div className="col-md-12">
export function Col({ id, classes, size, children}) {
    let custom = classes? classes : "";
    return (
        <div
            className={`${size
                .split(" ")
                .map(size => "col " + size)
                .join(" ")} ${custom}`}

            id={id ? id : ""}
        >
            {children}
        </div>
    );
}
