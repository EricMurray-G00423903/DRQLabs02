// Content component display time and heading
const Content = () => {
    return(
        <div>
            <h1>Content Component</h1>
            <h2>It is {new Date().toLocaleTimeString()}.</h2>
        </div>
    );
}

export default Content;