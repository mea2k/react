

const Row = ({ style = 'heap__row', children }) => (
    <div className={`row text_black_yes widgets__row ${style ? style : ''}`}>
        {children}
    </div>
)

export default Row;