import Row from "../Row";


const FirstRow = ({ style, children }) => (
    <Row style={`first ${style}`}>
        {children}
    </Row>
);


export default FirstRow;